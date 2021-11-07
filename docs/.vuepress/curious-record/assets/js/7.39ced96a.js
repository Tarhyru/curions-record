(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{424:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("好记性不如烂笔头.")])]),s._v(" "),t("p",[s._v("往往一些基础但没有那么常用的操作，如果有一段时间没用到，就会想不起来...")]),s._v(" "),t("h2",{attrs:{id:"推送拉取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送拉取"}},[s._v("#")]),s._v(" 推送拉取")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取指定分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" origin/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("baseBranch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制更新")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --force origin master\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用远程覆盖本地")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --all\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard origin/master\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到某次提交")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard XXXXX   \n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" --mixed"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" --hard "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n--mixed 保留源码 回退状态\n--soft 保留源码 但不涉及 index 回退\n--hard 不保留源码\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h2",{attrs:{id:"查看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[s._v("#")]),s._v(" 查看")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看reflog（用来保存被远端覆盖的已经提交的记录，或者查看分支的创建信息）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog show "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("childBranch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 某次提交的详情信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commitHash"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --stat\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[s._v("#")]),s._v(" 更新")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将指定hash值的提交合并到当前分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commitHash"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并多个提交")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick A B \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并一系列提交 A需要早于B")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick A…B \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"工作区暂存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作区暂存"}},[s._v("#")]),s._v(" 工作区暂存")]),s._v(" "),t("p",[s._v("通常应用于改了一半，需要切换分支，但又不想提交的情况。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作区暂存")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash  save "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -u 带上未跟踪的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -a 带上所有文件")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看暂存的修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用并删除第一个修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用但不删除第一个修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply stash@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除第一个修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash drop stash@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"commit-type-参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit-type-参考"}},[s._v("#")]),s._v(" commit type 参考")]),s._v(" "),t("ul",[t("li",[s._v("feat 新功能")]),s._v(" "),t("li",[s._v("fix Bug 修复")]),s._v(" "),t("li",[s._v("docs 文档更新")]),s._v(" "),t("li",[s._v("style 代码的格式，标点符号的更新")]),s._v(" "),t("li",[s._v("refactor 代码重构")]),s._v(" "),t("li",[s._v("perf 性能优化")]),s._v(" "),t("li",[s._v("test 测试更新")]),s._v(" "),t("li",[s._v("build 构建系统或者包依赖更新")]),s._v(" "),t("li",[s._v("ci CI 配置，脚本文件等更新")]),s._v(" "),t("li",[s._v("chore 非 src,构建流程，依赖等")]),s._v(" "),t("li",[s._v("revert commit 回退")])])])}),[],!1,null,null,null);a.default=e.exports}}]);