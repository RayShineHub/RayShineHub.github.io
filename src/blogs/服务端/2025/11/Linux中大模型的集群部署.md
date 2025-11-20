---
title: '知识篇 -- 【Linux】大模型部署'
date: 2025-11-02
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
meta:
  - name: description
    content: 基于Linux大模型部署命令
  - name: keywords
    content: linux llm 大模型集群 linux命令 cuda cuDNN TensorFlow Kubernetes
tags:
 - 'Linux'
 - '大模型'
categories: 
 - '服务端'

#置顶顺序
#sticky: 1
---



<Boxx/>


大模型在Linux集群中的命令手册

<!-- more -->

## 1. 前期准备：集群节点初始化
### 1.1 设置主机名
``` bash
# 节点1（主节点）
hostnamectl set-hostname llm-master-01
# 节点2（从节点）
hostnamectl set-hostname llm-worker-01
# 生效（无需重启）
bash
```

### 1.2 配置SSH免密登录
生成密钥对（主节点执行）：
```bash
ssh-keygen -t rsa -b 4096 -C "llm-cluster"
# 按回车键默认保存到~/.ssh/id_rsa
```
复制密钥到所有节点：
```bash
# 复制到主节点自身
ssh-copy-id llm-master-01
# 复制到从节点（需输入密码）
ssh-copy-id llm-worker-01
```
验证免密登录：
```bash
ssh llm-worker-01
# 无需密码即可登录表示成功
```
### 1.3 时间同步（chrony）
安装 `chrony`：
```bash
yum install -y chrony
```

配置时间服务器（所有节点）： 编辑`/etc/chrony.conf` ，添加阿里云时间服务器：
```bash
server ntp.aliyun.com  iburst
```

启动并设置开机自启：
```bash
systemctl enable chronyd --now
# 验证时间同步状态
chronyc sources
```

### 1.4 关闭防火墙与SELinux
关闭firewalld：
```bash
systemctl stop firewalld
systemctl disable firewalld
```
临时关闭SELinux：
```bash
setenforce 0
```
永久关闭SELinux（需重启）： 编辑/etc/selinux/config，将SELINUX=enforcing改为：
```bash
SELINUX=permissive
```
## 2. 环境搭建：GPU与框架配置
### 2.1 安装NVIDIA GPU驱动
#### 方式1：yum安装（推荐）：
```bash
# 添加NVIDIA yum源
curl -s -L https://nvidia.github.io/nvidia-driver-rpm/centos7/x86_64/nvidia-driver.repo  | sudo tee /etc/yum.repos.d/nvidia-driver.repo 
# 安装最新驱动
yum install -y nvidia-driver-latest-dkms
# 重启生效
reboot
```
#### 方式2：run文件安装（手动指定版本）：
```bash
# 下载驱动（示例：535.113.01）
wget https://us.download.nvidia.com/XFree86/Linux-x86_64/535.113.01/NVIDIA-Linux-x86_64-535.113.01.run 
# 关闭图形界面（避免冲突）
init 3
# 安装（--silent表示静默安装）
sh NVIDIA-Linux-x86_64-535.113.01.run  --silent --no-nouveau-check
# 重启
reboot
```
验证驱动：
```bash
nvidia-smi
# 输出GPU信息表示成功
```
### 2.2 安装CUDA与cuDNN
#### 安装CUDA 11.8（示例）：
```bash
# 下载CUDA安装包
wget https://developer.download.nvidia.com/compute/cuda/11.8.0/local_installers/cuda_11.8.0_520.61.05_linux.run 
# 安装（仅安装工具包，不覆盖驱动）
sh cuda_11.8.0_520.61.05_linux.run  --silent --toolkit --override
# 配置环境变量（~/.bashrc）
echo 'export PATH=/usr/local/cuda-11.8/bin:$PATH' >> ~/.bashrc
echo 'export LD_LIBRARY_PATH=/usr/local/cuda-11.8/lib64:$LD_LIBRARY_PATH' >> ~/.bashrc
# 生效
source ~/.bashrc
```
#### 安装cuDNN 8.9.2（示例）：
```bash
# 下载cuDNN（需NVIDIA账号）
wget https://developer.download.nvidia.com/compute/cudnn/v8.9.2/local_installers/cudnn-linux-x86_64-8.9.2.26_cuda11-archive.tar.xz 
# 解压
tar -xvf cudnn-linux-x86_64-8.9.2.26_cuda11-archive.tar.xz 
# 复制文件到CUDA目录
sudo cp cudnn-linux-x86_64-8.9.2.26_cuda11-archive/include/cudnn*.h /usr/local/cuda-11.8/include
sudo cp cudnn-linux-x86_64-8.9.2.26_cuda11-archive/lib/libcudnn* /usr/local/cuda-11.8/lib64
# 设置权限
sudo chmod a+r /usr/local/cuda-11.8/include/cudnn*.h /usr/local/cuda-11.8/lib64/libcudnn*
```
验证CUDA：
```bash
nvcc -V
# 输出CUDA版本表示成功
```
### 2.3 配置Python环境
#### 安装Anaconda：
```bash
# 下载Anaconda（Python 3.10版本）
wget https://repo.anaconda.com/archive/Anaconda3-2023.09-0-Linux-x86_64.sh 
# 安装（默认路径~/.anaconda3）
sh Anaconda3-2023.09-0-Linux-x86_64.sh  -b
# 配置环境变量（~/.bashrc）
echo 'export PATH=~/.anaconda3/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```
#### 创建虚拟环境：
```bash
conda create -n llm-env python=3.10 -y
conda activate llm-env
```
#### 安装大模型框架：
```bash
# PyTorch（支持CUDA 11.8）
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118 
# TensorFlow（支持CUDA 11.8）
pip install tensorflow[and-cuda]
# 其他依赖
pip install transformers datasets accelerate vllm deepspeed
```
## 3. 模型部署：集群训练与推理
### 3.1 PyTorch Distributed 分布式训练
命令格式：

```bash
torchrun \
  --nproc_per_node=4 \  # 每个节点的GPU数
  --nnodes=2 \           # 集群节点总数
  --node_rank=0 \        # 当前节点排名（主节点为0）
  --master_addr="192.168.1.100" \  # 主节点IP
  --master_port=29500 \  # 主节点端口（需开放）
  train.py  \             # 训练脚本
  --batch_size=32 \      # 自定义参数
  --lr=1e-5
```
示例（2节点×4 GPU）：

主节点（node_rank=0）：
`torchrun --nproc_per_node=4 --nnodes=2 --node_rank=0 --master_addr="192.168.1.100" --master_port=29500 train.py`
从节点（node_rank=1）：
`torchrun --nproc_per_node=4 --nnodes=2 --node_rank=1 --master_addr="192.168.1.100" --master_port=29500 train.py`

### 3.2 vLLM 推理部署（支持张量并行）

命令格式：
```bash
vllm serve \
  --model meta-llama/Llama-2-7b-chat-hf \  # 模型名称（Hugging Face）
  --tensor-parallel-size 4 \               # 张量并行的GPU数
  --gpu-memory-utilization 0.9 \           # GPU内存使用率（建议0.8-0.9）
  --port 8000 \                            # 推理服务端口
  --served-model-name llama-2-7b-chat      # 服务名称（可选）
```
示例（4 GPU张量并行）：
```bash
vllm serve --model meta-llama/Llama-2-7b-chat-hf --tensor-parallel-size 4 --gpu-memory-utilization 0.9 --port 8000
```

验证推理：
```bash
curl -X POST http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-2-7b-chat",
    "messages": [{"role": "user", "content": "解释什么是大模型？"}]
  }'
```
### 3.3 Kubernetes 容器化部署
编写部署文件（llm-deployment.yaml ）：
```bash
apiVersion: apps/v1
kind: Deployment
metadata:
  name: llm-vllm-deployment
spec:
  replicas: 2  # 副本数（从节点数量）
  template:
    metadata:
      labels:
        app: llm-vllm
    spec:
      containers:
      - name: vllm-container
        image: llm-vllm:latest  # 自定义镜像（包含vLLM和模型）
        resources:
          limits:
            nvidia.com/gpu:  1  # 每个Pod占用1块GPU
        ports:
        - containerPort: 8000
      nodeSelector:
        node-role.kubernetes.io/worker:  "true"  # 调度到从节点
---
apiVersion: v1
kind: Service
metadata:
  name: llm-vllm-service
spec:
  type: NodePort
  ports:
  - port: 8000
    targetPort: 8000
    nodePort: 30000  # 集群外部访问端口
  selector:
    app: llm-vllm
```
部署到Kubernetes集群：
```bash
# 应用部署文件
kubectl apply -f llm-deployment.yaml 
# 查看Pod状态
kubectl get pods -l app=llm-vllm
# 查看Service状态（获取外部访问地址）
kubectl get service llm-vllm-service
```
## 4. 集群管理：监控与运维
### 4.1 Kubernetes 集群管理
查看节点状态：
```bash
kubectl get nodes
# 输出节点列表及状态（Ready表示正常）
```
查看Pod日志：
```bash
# 查看指定Pod的日志（实时更新）
kubectl logs -f llm-vllm-deployment-xxxx-xxxx
# 查看Pod的资源使用情况
kubectl top pod llm-vllm-deployment-xxxx-xxxx
```
扩容/缩容：
```bash
# 扩容到3个副本（3个从节点）
kubectl scale deployment llm-vllm-deployment --replicas=3
# 缩容到1个副本
kubectl scale deployment llm-vllm-deployment --replicas=1
```
### 4.2 监控：Prometheus + Grafana
安装Prometheus：
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts 
helm repo update
helm install prometheus prometheus-community/prometheus
```
安装Grafana：
```bash
helm repo add grafana https://grafana.github.io/helm-charts 
helm install grafana grafana/grafana
```
访问Dashboard：
```bash
# 端口转发（Prometheus）
kubectl port-forward service/prometheus-server 9090:80
# 端口转发（Grafana）
kubectl port-forward service/grafana 3000:80
Prometheus：http://localhost:9090
Grafana：http://localhost:3000（默认账号：admin，密码：kubectl get secret grafana -o jsonpath="{.data.admin-password}"  | base64 --decode）
```
导入大模型监控仪表盘：

Grafana官网搜索`LLM Monitoring`或`vLLM`，导入对应的仪表盘ID（如1860 for Prometheus）。

### 4.3 日志管理：ELK Stack
安装Elasticsearch：
```bash
helm repo add elastic https://helm.elastic.co 
helm install elasticsearch elastic/elasticsearch --version 8.11.1
```
安装Kibana：
```bash
helm install kibana elastic/kibana --version 8.11.1
```
收集Pod日志（Fluentd）：
```bash
helm install fluentd bitnami/fluentd --set elasticsearch.hosts[0]()=elasticsearch-master:9200 
```
访问Kibana：
```bash
kubectl port-forward service/kibana 5601:5601
Kibana：http://localhost:5601（默认账号：elastic，密码：kubectl get secret elasticsearch-master-credentials -o jsonpath="{.data.elastic}"  | base64 --decode）
```
## 5. 性能优化：提升集群效率
### 5.1 混合精度训练（PyTorch）
代码中的命令：
```bash
import torch
from torch.cuda.amp  import autocast, GradScaler

# 初始化混合精度
scaler = GradScaler()

# 训练循环
for batch in dataloader:
    inputs, targets = batch
    inputs = inputs.cuda() 
    targets = targets.cuda() 
    
    # 自动混合精度（FP16）
    with autocast():
        outputs = model(inputs)
        loss = criterion(outputs, targets)
    
    # 反向传播（缩放梯度）
    scaler.scale(loss).backward() 
    scaler.step(optimizer) 
    scaler.update() 
    optimizer.zero_grad() 
```
### 5.2 分布式优化器（FusedAdam）
命令格式：
```bash
from torch.optim  import AdamW

# 使用FusedAdam优化器（需CUDA支持）
optimizer = AdamW(
    model.parameters(), 
    lr=1e-5,
    fused=True  # 开启融合操作（提升速度）
)
```
### 5.3 张量并行（PyTorch TensorParallel）
命令格式：
```bash
from torch.nn.parallel  import TensorParallel

# 加载模型
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-chat-hf") 
# 张量并行（分配到4块GPU）
model = TensorParallel(model, device_ids=[0,1,2,3])
# 移动到GPU
model = model.cuda() 
```
## 6. 故障排查：常见问题解决
### 6.1 GPU故障
查看GPU状态：
```bash
nvidia-smi -l 1  # 实时监控GPU使用率
```
查看驱动日志：
```bash
dmesg | grep nvidia  # 查找NVIDIA驱动错误
```
重启GPU驱动：
```bash
sudo rmmod nvidia  # 卸载驱动模块
sudo modprobe nvidia  # 重新加载驱动模块
```
### 6.2 网络故障（分布式训练失败）
验证节点连通性：
```bash
ping llm-worker-01  # 主节点ping从节点
```
查看端口开放情况：
```bash
netstat -tuln | grep 29500  # 检查主节点端口是否开放
```
抓包分析网络流量：
```bash
tcpdump -i eth0 port 29500 -n  # 捕获端口29500的流量
```
### 6.3 进程与日志排查
查看Python进程：
```bash
ps -ef | grep python  # 查找大模型训练进程
```
终止异常进程：
```bash
kill -9 <pid>  # <pid>为进程ID（从ps命令输出中获取）
```
查看训练日志：
```bash
tail -f logs/train.log   # 实时查看日志最后10行
grep "Error" logs/train.log   # 查找日志中的错误信息
```
## 7. 最佳实践：安全与效率
### 7.1 容器化最佳实践
编写Dockerfile（包含vLLM与模型）：
```bash
FROM nvidia/cuda:11.8.0-cudnn8-runtime-ubuntu22.04
ENV DEBIAN_FRONTEND=noninteractive

# 安装依赖
RUN apt-get update && apt-get install -y python3-pip python3-dev git

# 安装vLLM
RUN pip3 install vllm transformers

# 下载模型（示例：Llama-2-7b-chat）
RUN git clone https://huggingface.co/meta-llama/Llama-2-7b-chat-hf  /models/llama-2-7b-chat-hf
RUN echo "MODEL_PATH=/models/llama-2-7b-chat-hf" >> /etc/environment

# 暴露端口
EXPOSE 8000

# 启动vLLM服务
CMD ["vllm", "serve", "--model", "/models/llama-2-7b-chat-hf", "--tensor-parallel-size", "4"]
```
构建镜像：
```bash
docker build -t llm-vllm:latest .
```
### 7.2 安全性配置
限制SSH登录权限： 编辑`/etc/ssh/sshd_config`：
```bash
PermitRootLogin no  # 禁止root用户登录
AllowUsers llm-user  # 允许指定用户登录
```
重启SSH服务：
```bash
systemctl restart sshd
```
配置SSL证书（HTTPS）： 使用Certbot获取免费SSL证书（Let's Encrypt）：
```bash
yum install -y certbot python3-certbot-nginx
certbot --nginx -d llm-cluster.example.com 
```
### 7.3 资源调度优化（Kubernetes）
设置QoS等级（Guaranteed）：
```bash
spec:
  containers:
  - name: llm-container
    image: llm-vllm:latest
    resources:
      limits:
        cpu: "8"
        memory: "64Gi"
        nvidia.com/gpu:  1
      requests:
        cpu: "8"
        memory: "64Gi"
        nvidia.com/gpu:  1
  qosClass: Guaranteed  # 保证资源分配（优先调度）
```
## 附录：常用命令速查
功能	命令示例
查看GPU状态	
```bash
nvidia-smi
```
查看集群节点状态	
```bash
kubectl get nodes
```
查看Pod日志	
```bash
kubectl logs -f <pod-name>
```
实时监控GPU使用率	
```bash
nvidia-smi -l 1
```
检查CUDA版本	
```bash
nvcc -V
```
启动vLLM推理服务	
```bash
vllm serve --model meta-llama/Llama-2-7b-chat-hf --tensor-parallel-size 4
```
分布式训练（PyTorch）	
```bash
torchrun --nproc_per_node=4 --nnodes=2 --node_rank=0 --master_addr="192.168.1.100" --master_port=29500 train.py
```
备注：手册中的命令需根据集群环境（如节点数量、GPU数量、模型名称）调整参数。建议在测试环境中验证后再部署到生产集群。