(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{564:function(s,n,t){"use strict";t.r(n);var a=t(4),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("Boxx"),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("记录 "),t("code",[s._v("CentOS")]),s._v(" "),t("code",[s._v("Linux")]),s._v(" "),t("code",[s._v("SSHD")]),s._v(" 查询、启动、重启及设置开机自启动命令")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("CentOS 7")]),s._v(" 以下：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd status\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd start\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd restart\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd stop\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机自启动 (–level 指定系统在2345运行级别时)。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" --level "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2345")]),s._v(" sshd on\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("CentOS 7")]),s._v("及以上")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\nsystemctl status sshd.service\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\nsystemctl start sshd.service\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\nsystemctl restart sshd.service\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭服务")]),s._v("\nsystemctl stop sshd.service\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机自启动")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" sshd.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])],1)}),[],!1,null,null,null);n.default=e.exports}}]);