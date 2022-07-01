(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{639:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("记录一些Mysql函数")])]),s._v(" "),a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),a("p",[s._v("MySQL 有很多内置的函数，以下列出了这些函数的说明。")]),s._v(" "),a("h2",{attrs:{id:"mark一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mark一下"}},[s._v("#")]),s._v(" Mark一下")]),s._v(" "),a("ul",[a("li",[s._v("ASCII(s)")])]),s._v(" "),a("p",[s._v("返回字符串 s 的第一个字符的 ASCII 码")]),s._v(" "),a("ul",[a("li",[s._v("CHAR_LENGTH(s) 和 CHARACTER_LENGTH(s)")])]),s._v(" "),a("p",[s._v("返回字符串 s 的字符数")]),s._v(" "),a("p",[s._v("一般用于中文等")]),s._v(" "),a("ul",[a("li",[s._v("CONCAT(s1,s2...sn) 和 CONCAT_WS(x, s1,s2...sn)")])]),s._v(" "),a("p",[s._v("字符串 s1,s2 等多个字符串合并为一个字符串")]),s._v(" "),a("p",[s._v("第二种同 CONCAT(s1,s2,...) 函数，但是每个字符串之间要加上 x，x 可以是分隔符")]),s._v(" "),a("p",[s._v("比如连接手机号转换显示*号")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" CONCAT_WS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'****'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("SUBSTR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("phone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("SUBSTR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("phone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" pphone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("TIMESTAMPDIFF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("YEAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("birth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" CURDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ege"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" test_zyj_prac p\n")])])]),a("ul",[a("li",[s._v("FORMAT(x,n)")])]),s._v(" "),a("p",[s._v('函数可以将数字 x 进行格式化 "#,###.##", 将 x 保留到小数点后 n 位，最后一位四舍五入。')]),s._v(" "),a("p",[s._v("eg：FORMAT(a.money,2)")]),s._v(" "),a("ul",[a("li",[s._v("INSERT(s1,x,len,s2)")])]),s._v(" "),a("p",[s._v("字符串 s2 替换 s1 的 x 位置开始长度为 len 的字符串")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"google.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runoob"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 输出：runoob.com")]),s._v("\n")])])]),a("ul",[a("li",[s._v("LOCATE(s1,s)")])]),s._v(" "),a("p",[s._v("从字符串 s 中获取 s1 的开始位置")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" LOCATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'st'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myteststring'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 5")]),s._v("\n")])])]),a("ul",[a("li",[s._v("LCASE(s) 和 LOWER(s)")])]),s._v(" "),a("p",[s._v("将字符串 s 的所有字母变成小写字母")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("LCASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'RUNOOB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- runoob")]),s._v("\n")])])]),a("ul",[a("li",[s._v("UCASE(s) 和 UCASE(s)")])]),s._v(" "),a("p",[s._v("将字符串转换为大写")]),s._v(" "),a("ul",[a("li",[s._v("LEFT(s,n) 和 RIGHT(s,n)")])]),s._v(" "),a("p",[s._v("返回字符串 s 的前 n 个字符")]),s._v(" "),a("p",[s._v("返回字符串 s 的后 n 个字符")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'runoob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- ru")]),s._v("\n")])])]),a("ul",[a("li",[s._v("LPAD(s1,len,s2) 和 RPAD(s1,len,s2)")])]),s._v(" "),a("p",[s._v("在字符串 s1 的开始处填充字符串 s2，使字符串长度达到 len")]),s._v(" "),a("p",[s._v("在字符串 s1 的结尾处添加字符串 s2，使字符串长度达到 len")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" LPAD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- xxabc")]),s._v("\n")])])]),a("ul",[a("li",[s._v("LTRIM(s) 和 RTRIM(s) 和 TRIM(s)")])]),s._v(" "),a("p",[s._v("去掉字符串 s 开始处的空格")]),s._v(" "),a("p",[s._v("去掉字符串 s 结尾处的空格")]),s._v(" "),a("p",[s._v("TRIM(s) -- 去掉字符串 s 开始和结尾处的空格")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" LTRIM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"    RUNOOB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" LeftTrimmedString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- RUNOOB")]),s._v("\n")])])]),a("ul",[a("li",[s._v("REPEAT(s,n)")])]),s._v(" "),a("p",[s._v("将字符串 s 重复 n 次")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPEAT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'runoob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- runoobrunoobrunoob")]),s._v("\n")])])]),a("ul",[a("li",[s._v("REPLACE(s,s1,s2)")])]),s._v(" "),a("p",[s._v("将字符串 s2 替代字符串 s 中的字符串 s1")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- xbc")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 去除富文本标签用replace")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regexp_replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("content "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<.+?>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&nbsp;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" content\n")])])]),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/JohnnyChu/article/details/111184962",target:"_blank",rel:"noopener noreferrer"}},[s._v("REGEXP_REPLACE用法"),a("OutboundLink")],1)]),s._v(" "),a("ul",[a("li",[s._v("REVERSE(s)")])]),s._v(" "),a("p",[s._v("将字符串s的顺序反过来")]),s._v(" "),a("ul",[a("li",[s._v("SUBSTR(s, start, length) 和 SUBSTRING(s, start, length)")])]),s._v(" "),a("p",[s._v("从字符串 s 的 start 位置截取长度为 length 的子字符串")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" SUBSTR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RUNOOB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" ExtractString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- UNO")]),s._v("\n")])])]),a("h2",{attrs:{id:"来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来源"}},[s._v("#")]),s._v(" 来源")]),s._v(" "),a("p",[s._v("直接点击"),a("a",{attrs:{href:"https://www.runoob.com/mysql/mysql-functions.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mysql函数 | 菜鸟教程"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);