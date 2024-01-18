"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[9277],{8081:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=r(5893),t=r(1151);const s={sidebar_position:0,sidebar_label:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5",sidebar_class_name:"green"},c="\u4e0b\u8f7d\u4e0e\u5b89\u88c5",i={id:"Environment/docker/Installation",title:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5",description:"\u8fd9\u91cc\u5e76\u4e0d\u4f1a\u53d9\u8ff0\u5982\u4f55\u5b89\u88c5 Docker Desktop \u684c\u9762\u7aef\uff0c\u800c\u4ec5\u8bb2\u8ff0\u5982\u4f55\u914d\u7f6e Docker Engine",source:"@site/docs/Environment/docker/Installation.md",sourceDirName:"Environment/docker",slug:"/Environment/docker/Installation",permalink:"/Treasure/docs/Environment/docker/Installation",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Environment/docker/Installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5",sidebar_class_name:"green"},sidebar:"Environment_Sidebar",previous:{title:"Docker",permalink:"/Treasure/docs/Environment/docker/"},next:{title:"Dockerfile \u6307\u5357",permalink:"/Treasure/docs/Environment/docker/Dockerfile-guide"}},a={},d=[];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5",children:"\u4e0b\u8f7d\u4e0e\u5b89\u88c5"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u8fd9\u91cc\u5e76\u4e0d\u4f1a\u53d9\u8ff0\u5982\u4f55\u5b89\u88c5 Docker Desktop \u684c\u9762\u7aef\uff0c\u800c\u4ec5\u8bb2\u8ff0\u5982\u4f55\u914d\u7f6e Docker Engine"}),"\n",(0,o.jsx)(n.p,{children:"Docker Desktop \u6309\u7167\u8f6f\u4ef6\u63d0\u793a\u5b89\u88c5\u5373\u53ef"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Docker \u5b98\u65b9\u63a8\u8350\u4f7f\u7528\u4ee5\u4e0b\u4e00\u952e\u811a\u672c\u8fdb\u884c\u5b89\u88c5\u64cd\u4f5c\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"https://get.docker.com/\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"\ud83d\udca1 \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u867d\u7136 Kali \u96b6\u5c5e\u4e8e Debian \u4e0b\u6e38\u5206\u652f\uff0c\u4f46\u662f\u7531\u4e8e uname \u8bc6\u522b\u51fa\u6765\u7684\u7ed3\u679c\u662f Kali\uff0c\u5e76\u4e14 Docker \u5b98\u65b9\u5e76\u6ca1\u6709\u9488\u5bf9 Kali \u8fdb\u884c\u9002\u914d\u4e0e\u6d4b\u8bd5\uff0c\u6240\u4ee5\u5e76\u4e0d\u5efa\u8bae\u57fa\u4e8e Kali \u73af\u5883\u914d\u7f6e Docker"})}),"\n",(0,o.jsxs)(n.p,{children:["\u540c\u65f6\uff0c\u6b64\u811a\u672c\u672c\u8eab\u7531\u4e8e\u5c5e\u4e8e ",(0,o.jsx)(n.code,{children:"docker.com"})," \u57df\u5185\uff0c\u6240\u4ee5\u5927\u9646\u7f51\u7edc\u73af\u5883\u76f4\u63a5 ",(0,o.jsx)(n.code,{children:"curl"})," \u83b7\u53d6\u811a\u672c\u53ef\u80fd\u4f1a\u5b58\u5728\u6027\u80fd\u4f4e\u4e0b\u7684\u95ee\u9898\uff0c\u5efa\u8bae\u76f4\u63a5\u5728\u5408\u9002\u7684\u7f51\u7edc\u73af\u5883\u4e0b\u4e0b\u8f7d\u597d\u811a\u672c\uff0c\u7136\u540e\u6267\u884c\u5b89\u88c5\u64cd\u4f5c\u3002\u5927\u9646\u7f51\u7edc\u73af\u5883\u4e0b\u5efa\u8bae\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u6765\u83b7\u53d6\u811a\u672c\u5e76\u6267\u884c\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://get.docker.com -o install-docker.sh\nsudo sh install-docker.sh --mirror https://mirror.azure.cn/docker-ce\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u52a0 sudo \u4e5f\u53ef\u4ee5\uff0c\u811a\u672c\u80fd\u591f\u6b63\u786e\u5904\u7406\u73af\u5883\u7684\u6743\u9650\u6001\u95ee\u9898\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u5b89\u88c5 Docker \u4e8e rootless \u6a21\u5f0f\uff0c\u4f46\u662f\u9700\u8981\u811a\u672c\u6267\u884c\u5b89\u88c5\u64cd\u4f5c\u7ed3\u675f\u4e4b\u540e\uff0c\u7531\u7528\u6237\u8fdb\u884c\u8fdb\u4e00\u6b65\u64cd\u4f5c\uff0c\u8ddf\u968f\u547d\u4ee4\u884c\u4fe1\u606f\u64cd\u4f5c\u5373\u53ef\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"\u5b98\u65b9\u6587\u6863 - Install Docker Engine"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var o=r(7294);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);