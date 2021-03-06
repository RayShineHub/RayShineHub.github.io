---
title: "知识篇 -- Mysql函数"
date: 2021-11-11
isFull: true
isShowComment: true
isAbstract: true
tags:
- "Mysql"
categories:
- "后端"
---

::: tip

记录一些Mysql函数

:::

<!-- more -->

## 函数

MySQL 有很多内置的函数，以下列出了这些函数的说明。

## Mark一下

* ASCII(s)

返回字符串 s 的第一个字符的 ASCII 码

* CHAR_LENGTH(s) 和 CHARACTER_LENGTH(s)	

返回字符串 s 的字符数

一般用于中文等

* CONCAT(s1,s2...sn) 和 CONCAT_WS(x, s1,s2...sn)

字符串 s1,s2 等多个字符串合并为一个字符串

第二种同 CONCAT(s1,s2,...) 函数，但是每个字符串之间要加上 x，x 可以是分隔符

比如连接手机号转换显示*号

```sql
SELECT CONCAT_WS('****',SUBSTR(p.phone,1,3),SUBSTR(p.phone,8,4)) pphone,TIMESTAMPDIFF(YEAR, p.birth, CURDATE()) ege,p.* FROM test_zyj_prac p
```

* FORMAT(x,n)

函数可以将数字 x 进行格式化 "#,###.##", 将 x 保留到小数点后 n 位，最后一位四舍五入。

eg：FORMAT(a.money,2)

* INSERT(s1,x,len,s2)

字符串 s2 替换 s1 的 x 位置开始长度为 len 的字符串

```sql
SELECT INSERT("google.com", 1, 6, "runoob");  
-- 输出：runoob.com
```

* LOCATE(s1,s)

从字符串 s 中获取 s1 的开始位置

```sql
SELECT LOCATE('st','myteststring');  
-- 5
```

* LCASE(s) 和 LOWER(s)

将字符串 s 的所有字母变成小写字母	

```sql
SELECT LCASE('RUNOOB') 
-- runoob
```

* UCASE(s) 和 UCASE(s)

 将字符串转换为大写

* LEFT(s,n) 和 RIGHT(s,n)

返回字符串 s 的前 n 个字符

返回字符串 s 的后 n 个字符

```sql
SELECT LEFT('runoob',2) 
-- ru
```

* LPAD(s1,len,s2) 和 RPAD(s1,len,s2)	

在字符串 s1 的开始处填充字符串 s2，使字符串长度达到 len

在字符串 s1 的结尾处添加字符串 s2，使字符串长度达到 len

```sql
SELECT LPAD('abc',5,'xx') 
-- xxabc
```

* LTRIM(s) 和 RTRIM(s) 和 TRIM(s)

去掉字符串 s 开始处的空格

去掉字符串 s 结尾处的空格

TRIM(s) -- 去掉字符串 s 开始和结尾处的空格

```sql
SELECT LTRIM("    RUNOOB") AS LeftTrimmedString;
-- RUNOOB
```

* REPEAT(s,n)

将字符串 s 重复 n 次

```sql
SELECT REPEAT('runoob',3) 
-- runoobrunoobrunoob
```

* REPLACE(s,s1,s2)

将字符串 s2 替代字符串 s 中的字符串 s1

```sql
SELECT REPLACE('abc','a','x') 
-- xbc

-- 去除富文本标签用replace
replace(regexp_replace(a.content ,'<.+?>',''),'&nbsp;','') as content
```

[REGEXP_REPLACE用法](https://blog.csdn.net/JohnnyChu/article/details/111184962)

* REVERSE(s)

将字符串s的顺序反过来

* SUBSTR(s, start, length) 和 SUBSTRING(s, start, length)

从字符串 s 的 start 位置截取长度为 length 的子字符串

```sql
SELECT SUBSTR("RUNOOB", 2, 3) AS ExtractString; 
-- UNO
```

## 来源

直接点击[Mysql函数 | 菜鸟教程](https://www.runoob.com/mysql/mysql-functions.html)