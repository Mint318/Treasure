"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[6802],{8499:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var c=r(5893),s=r(1151);const o={},d="Docker Remote API",t={id:"Environment/docker/Docker-Remote-API",title:"Docker Remote API",description:"Docker Remote API \u662f\u4e00\u4e2a\u53d6\u4ee3\u8fdc\u7a0b\u547d\u4ee4\u884c\u754c\u9762\uff08rcli\uff09\u7684REST API\uff0c\u5176\u9ed8\u8ba4\u7ed1\u5b9a2375\u7aef\u53e3",source:"@site/docs/Environment/docker/Docker-Remote-API.md",sourceDirName:"Environment/docker",slug:"/Environment/docker/Docker-Remote-API",permalink:"/docs/Environment/docker/Docker-Remote-API",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Environment/docker/Docker-Remote-API.md",tags:[],version:"current",frontMatter:{},sidebar:"Environment_Sidebar",previous:{title:"Docker \u7279\u6743\u6a21\u5f0f",permalink:"/docs/Environment/docker/Docker-Privileged"},next:{title:"Docker Proxy",permalink:"/docs/Environment/docker/Docker-proxy"}},i={},l=[{value:"Docker Remote API \u5f00\u542f",id:"docker-remote-api-\u5f00\u542f",level:2},{value:"Docker \u5ba2\u6237\u7aef\u4f7f\u7528 Docker Remote API",id:"docker-\u5ba2\u6237\u7aef\u4f7f\u7528-docker-remote-api",level:2},{value:"HTTP \u534f\u8bae\u4f7f\u7528 Docker Remote API",id:"http-\u534f\u8bae\u4f7f\u7528-docker-remote-api",level:2},{value:"Reference",id:"reference",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"docker-remote-api",children:"Docker Remote API"}),"\n",(0,c.jsx)(n.p,{children:"Docker Remote API \u662f\u4e00\u4e2a\u53d6\u4ee3\u8fdc\u7a0b\u547d\u4ee4\u884c\u754c\u9762\uff08rcli\uff09\u7684REST API\uff0c\u5176\u9ed8\u8ba4\u7ed1\u5b9a2375\u7aef\u53e3"}),"\n",(0,c.jsx)(n.p,{children:"Docker Remote API \u5e38\u89c1\u7aef\u53e3\uff1a"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u7aef\u53e3"}),(0,c.jsx)(n.th,{children:"\u4f5c\u7528"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"2375"}),(0,c.jsx)(n.td,{children:"\u672a\u52a0\u5bc6\u7684 docker socket, \u8fdc\u7a0b root \u65e0\u5bc6\u7801\u8bbf\u95ee\u4e3b\u673a"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"2376"}),(0,c.jsx)(n.td,{children:"tls \u52a0\u5bc6\u5957\u63a5\u5b57, \u5f88\u53ef\u80fd\u8fd9\u662f\u60a8\u7684 CI \u670d\u52a1\u5668 4243 \u7aef\u53e3\u4f5c\u4e3a https 443 \u7aef\u53e3\u7684\u4fee\u6539"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"2377"}),(0,c.jsx)(n.td,{children:"\u7fa4\u96c6\u6a21\u5f0f\u5957\u63a5\u5b57, \u9002\u7528\u4e8e\u7fa4\u96c6\u7ba1\u7406\u5668, \u4e0d\u9002\u7528\u4e8e docker \u5ba2\u6237\u7aef"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"5000"}),(0,c.jsx)(n.td,{children:"docker \u6ce8\u518c\u670d\u52a1"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"4789/7946"}),(0,c.jsx)(n.td,{children:"\u8986\u76d6\u7f51\u7edc"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"docker-remote-api-\u5f00\u542f",children:"Docker Remote API \u5f00\u542f"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u201c",(0,c.jsx)(n.code,{children:"unix:///var/run/docker.sock"}),"\u201d\uff1a",(0,c.jsx)(n.code,{children:"unix socket"}),"\uff0c\u672c\u5730\u5ba2\u6237\u7aef\u5c06\u901a\u8fc7\u8fd9\u4e2a\u6765\u8fde\u63a5 Docker Daemon"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u201c",(0,c.jsx)(n.code,{children:"tcp://0.0.0.0:2375"}),"\u201d\uff1a",(0,c.jsx)(n.code,{children:"tcp socket"}),"\uff0c\u8868\u793a\u5141\u8bb8\u4efb\u4f55\u8fdc\u7a0b\u5ba2\u6237\u7aef\u901a\u8fc7 2375 \u7aef\u53e3\u8fde\u63a5 Docker Daemon"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"/usr/lib/systemd/system/docker.service"}),"\uff0c\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee\uff1a",(0,c.jsx)(n.code,{children:"-H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"service \u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"# \u4e3b\u8981\u662f\u5728 [Service] \u8fd9\u4e2a\u90e8\u5206\n[Service]\nType=notify\n# the default is not to use systemd for cgroups because the delegate issues still\n# exists and systemd currently does not support the cgroup feature set required\n# for containers run by docker\nExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock --containerd=/run/containerd/containerd.sock\nExecReload=/bin/kill -s HUP $MAINPID\nTimeoutSec=0\nRestartSec=2\nRestart=always\n\n# \u91cd\u542f\nsystemctl daemon-reload\nsystemctl restart docker\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539 / etc/docker/daemon.json \u7684\u914d\u7f6e:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "hosts": ["tcp://0.0.0.0:2375","unix:///var/run/docker.sock"]\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\uff0c\u9700\u8981\u53bb\u6389 / usr/lib/systemd/system/docker.service \u4e2d\u5173\u4e8e -H \u7684\u9009\u9879\uff0c\u5426\u5219\u4f1a\u62a5\u9519"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"ExecStart=/usr/bin/dockerd --containerd=/run/containerd/containerd.sock\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5f00\u542f Docker remote API \u4e4b\u540e\uff0c\u67e5\u770b\u5f00\u542f\u540e\u7684\u7aef\u53e3\u76d1\u542c\u72b6\u6001"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"ss -tunlp | grep docker\n"})}),"\n",(0,c.jsx)(n.h2,{id:"docker-\u5ba2\u6237\u7aef\u4f7f\u7528-docker-remote-api",children:"Docker \u5ba2\u6237\u7aef\u4f7f\u7528 Docker Remote API"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 Docker Cli \u4e2d\uff0c",(0,c.jsx)(n.code,{children:"-H"})," \u4e3a\u8fde\u63a5\u76ee\u6807\u4e3b\u673a docker \u670d\u52a1"]}),"\n",(0,c.jsx)(n.p,{children:"\u67e5\u770b docker \u7248\u672c\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"docker -H tcp://<Server-IP>:2375 version\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u67e5\u770b\u955c\u50cf\u4fe1\u606f\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"docker -H tcp://<Server-IP>:2375 image ls\n"})}),"\n",(0,c.jsx)(n.h2,{id:"http-\u534f\u8bae\u4f7f\u7528-docker-remote-api",children:"HTTP \u534f\u8bae\u4f7f\u7528 Docker Remote API"}),"\n",(0,c.jsxs)(n.p,{children:["\u5b98\u65b9\u63d0\u4f9b Docker Engine API \u6587\u6863\uff1a",(0,c.jsx)(n.a,{href:"https://docs.docker.com/engine/api/",children:"Develop with Docker Engine API"})]}),"\n",(0,c.jsx)(n.p,{children:"Docker Remote API \u662f\u4e00\u4e2a\u53d6\u4ee3\u8fdc\u7a0b\u547d\u4ee4\u884c\u754c\u9762\uff08rcli\uff09\u7684 REST API\u3002\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177 cURL \u6765\u5904\u7406 url \u76f8\u5173\u64cd\u4f5c\u3002cURL \u53ef\u4ee5\u53d1\u9001\u8bf7\u6c42\u3001\u83b7\u53d6\u4ee5\u53ca\u53d1\u9001\u6570\u636e\u3001\u68c0\u7d22\u4fe1\u606f"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5bb9\u5668\u5217\u8868, \u83b7\u53d6\u6240\u6709\u5bb9\u5668\u7684\u6e05\u5355\uff1a",(0,c.jsx)(n.code,{children:"GET /containers/json"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u521b\u5efa\u65b0\u5bb9\u5668, \u547d\u4ee4\u5982\u4e0b\uff1a",(0,c.jsx)(n.code,{children:"POST /containers/create"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u76d1\u63a7\u5bb9\u5668, \u4f7f\u7528\u5bb9\u5668 id \u83b7\u53d6\u8be5\u5bb9\u5668\u5e95\u5c42\u4fe1\u606f\uff1a",(0,c.jsx)(n.code,{children:"GET /containers/(id)/json"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u8fdb\u7a0b\u5217\u8868, \u83b7\u53d6\u5bb9\u5668\u5185\u8fdb\u7a0b\u7684\u6e05\u5355\uff1a",(0,c.jsx)(n.code,{children:"GET /containers/(id)/top"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u5bb9\u5668\u65e5\u5fd7, \u83b7\u53d6\u5bb9\u5668\u7684\u6807\u51c6\u8f93\u51fa\u548c\u9519\u8bef\u65e5\u5fd7\uff1a",(0,c.jsx)(n.code,{children:"GET /containers/(id)/logs"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u5bfc\u51fa\u5bb9\u5668, \u5bfc\u51fa\u5bb9\u5668\u5185\u5bb9\uff1a",(0,c.jsx)(n.code,{children:"GET /containers/(id)/export"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u542f\u52a8\u5bb9\u5668, \u5982\u4e0b\uff1a",(0,c.jsx)(n.code,{children:"POST /containers/(id)/start"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u505c\u6b62\u5bb9\u5668, \u547d\u4ee4\u5982\u4e0b\uff1a",(0,c.jsx)(n.code,{children:"POST /containers/(id)/stop"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u91cd\u542f\u5bb9\u5668, \u5982\u4e0b\uff1a",(0,c.jsx)(n.code,{children:"POST /containers/(id)/restart"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u7ec8\u6b62\u5bb9\u5668\uff1a",(0,c.jsx)(n.code,{children:"POST /containers/(id)/kill"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4f8b\u5982\u83b7\u53d6\u5bb9\u5668\u4fe1\u606f\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"curl <Server-IP>:2375/containers/json\n"})}),"\n",(0,c.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://blog.csdn.net/qq_41586875/article/details/130182132",children:"Docker Remote API \u914d\u7f6e\u4e0e\u4f7f\u7528 By \u65fa\u4ed4_\u725b\u5976"})})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>d});var c=r(7294);const s={},o=c.createContext(s);function d(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);