"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[5198],{4954:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=n(5893),c=n(1151);const s={},t="Docker Proxy",d={id:"Environment/docker/Docker-proxy",title:"Docker Proxy",description:"Docker \u5e76\u4e0d\u4f1a\u63a5\u53d7\u6765\u81ea\u73af\u5883\u53d8\u91cf\u7684\u7f51\u7edc\u4ee3\u7406\u53c2\u6570\uff0c\u5982\uff1a",source:"@site/docs/Environment/docker/Docker-proxy.md",sourceDirName:"Environment/docker",slug:"/Environment/docker/Docker-proxy",permalink:"/Treasure/docs/Environment/docker/Docker-proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Environment/docker/Docker-proxy.md",tags:[],version:"current",frontMatter:{},sidebar:"Environment_Sidebar",previous:{title:"Docker Remote API",permalink:"/Treasure/docs/Environment/docker/Docker-Remote-API"}},i={},l=[{value:"Docker \u5ba2\u6237\u7aef\u4ee3\u7406",id:"docker-\u5ba2\u6237\u7aef\u4ee3\u7406",level:2},{value:"Docker \u5b88\u62a4\u8fdb\u7a0b\u4ee3\u7406",id:"docker-\u5b88\u62a4\u8fdb\u7a0b\u4ee3\u7406",level:2},{value:"Reference",id:"reference",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"docker-proxy",children:"Docker Proxy"}),"\n",(0,o.jsxs)(r.admonition,{title:"\u5173\u4e8e Docker \u4f7f\u7528\u4ee3\u7406",type:"info",children:[(0,o.jsx)(r.p,{children:"Docker \u5e76\u4e0d\u4f1a\u63a5\u53d7\u6765\u81ea\u73af\u5883\u53d8\u91cf\u7684\u7f51\u7edc\u4ee3\u7406\u53c2\u6570\uff0c\u5982\uff1a"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"https_proxy=http://proxy.example.com:3129\nHTTPS_PROXY=http://proxy.example.com:3129\nhttp_proxy=http://proxy.example.com:3128\nHTTP_PROXY=http://proxy.example.com:3128\n"})}),(0,o.jsx)(r.p,{children:"\u4e5f\u4e0d\u4f1a\u63a5\u53d7\u6765\u81ea dll \u6ce8\u5165\u6240\u5f15\u5165\u7684\u4ee3\u7406\u8bbe\u7f6e\uff0c\u5982\uff1a"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"proxychains docker -H=***** version\n"})}),(0,o.jsx)(r.p,{children:"\u6240\u4ee5\u5fc5\u987b\u624b\u52a8\u6839\u636e\u9700\u6c42\uff0c\u5728\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7f51\u7edc\u4ee3\u7406"})]}),"\n",(0,o.jsx)(r.p,{children:"Docker \u6838\u5fc3\u5177\u6709\u4e24\u5957\u7f51\u7edc\u4ee3\u7406\u673a\u5236\uff0c\u5206\u522b\u662f\uff1a"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Docker \u5ba2\u6237\u7aef\u4ee3\u7406\uff08Docker CLient Proxy\uff09"}),"\n",(0,o.jsx)(r.li,{children:"Docker \u5b88\u62a4\u8fdb\u7a0b\u4ee3\u7406\uff08Docker Daemon Proxy\uff09"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"\u8fd9\u4e24\u5957\u4ee3\u7406\u5206\u522b\u63a7\u5236\u4e0d\u540c\u7684 Docker \u884c\u4e3a\uff0c\u5982\uff1a"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Docker \u5ba2\u6237\u7aef\u4ee3\u7406\uff0c\u5c06\u4f1a\u5f71\u54cd Docker \u6784\u5efa\u4ee3\u7406\u671f\u95f4\u7684\u884c\u4e3a\uff0c\u5982\uff1a","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"Docker build"})}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"docker-compose up"})," \u65f6\uff0c\u4f7f\u7528\u4e86 ",(0,o.jsx)(r.code,{children:"build : ***"})," \u53c2\u6570"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.li,{children:"Docker \u5b88\u62a4\u8fdb\u7a0b\u4ee3\u7406\uff0c\u5c06\u4f1a\u5f71\u54cd Docker \u62c9\u53d6\u955c\u50cf\u7b49\u884c\u4e3a"}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"docker-\u5ba2\u6237\u7aef\u4ee3\u7406",children:"Docker \u5ba2\u6237\u7aef\u4ee3\u7406"}),"\n",(0,o.jsxs)(r.p,{children:["\u5728\u5f53\u524d\u7528\u6237\u7684 ",(0,o.jsx)(r.code,{children:"~/.docker/config.json"})," \u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-json",children:'{\n "proxies":\n {\n   "default":\n   {\n     "httpProxy": "http://proxy.server:port",\n     "httpsProxy": "http://proxy.server:port",\n     "noProxy": "localhost,127.0.0.1"\n   }\n }\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"\u5373\u53ef\u5728\u8fdb\u884c\u955c\u50cf\u6784\u5efa\u7684\u65f6\u5019\uff0c\u901a\u8fc7\u7f51\u7edc\u4ee3\u7406\u8fdb\u884c\u955c\u50cf\u7684\u6784\u5efa"}),"\n",(0,o.jsx)(r.p,{children:"\u6d89\u53ca\u7684\u53ef\u80fd\u7684\u7f51\u7edc\u884c\u4e3a\u53ef\u80fd\u4f1a\u7531\u4ee5\u4e0b\u547d\u4ee4\u5f62\u6210\uff1a"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"RUN apt-get update"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"RUN apt-get install -y python3"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"RUN wget http://example.com/example"})}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"docker-\u5b88\u62a4\u8fdb\u7a0b\u4ee3\u7406",children:"Docker \u5b88\u62a4\u8fdb\u7a0b\u4ee3\u7406"}),"\n",(0,o.jsxs)(r.p,{children:["Docker \u5b88\u62a4\u8fdb\u7a0b\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 Docker \u7684\u670d\u52a1\u914d\u7f6e\u6587\u4ef6\u6765\u63a7\u5236\uff0cDocker \u7684\u670d\u52a1\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e\uff1a",(0,o.jsx)(r.code,{children:"/etc/systemd/system/docker.service.d"})]}),"\n",(0,o.jsxs)(r.p,{children:["\u4e3a\u4e86\u7ed9 Docker Daemon \u914d\u7f6e\u7f51\u7edc\u4ee3\u7406\uff0c\u53ef\u4ee5\u5728 ",(0,o.jsx)(r.code,{children:"/etc/systemd/system/docker.service.d"})," \u76ee\u5f55\u4e2d\u6dfb\u52a0\u6587\u4ef6 ",(0,o.jsx)(r.code,{children:"http-proxy.conf"}),"\uff0c\u5e76\u5728\u5176\u4e2d\u5199\u5165\uff1a"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-conf",children:'[Service]\nEnvironment="HTTP_PROXY=http://proxy.server:port"\nEnvironment="HTTPS_PROXY=http://proxy.server:port"\nEnvironment="NO_PROXY=localhost,127.0.0.1"\n'})}),"\n",(0,o.jsx)(r.p,{children:"\u914d\u7f6e\u540e\uff0c\u4e3a\u4e86\u8ba9\u53c2\u6570\u751f\u6548\uff0c\u53ef\u4ee5\u9009\u62e9\u91cd\u542f\u7cfb\u7edf\uff0c\u6216\u8005\u5c06 Docker \u670d\u52a1\u8fdb\u884c\u91cd\u542f"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"sudo systemctl daemon-reload\nsudo systemctl restart docker\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u5373\u53ef\u4e3a Docker Daemon \u914d\u7f6e\u7f51\u7edc\u4ee3\u7406\uff0c\u540e\u7eed\u6267\u884c\u62c9\u53d6\u955c\u50cf\u7b49\u64cd\u4f5c\uff0c\u4fbf\u4f1a\u901a\u8fc7\u7f51\u7edc\u4ee3\u7406\u6765\u8fdb\u884c"}),"\n",(0,o.jsx)(r.admonition,{type:"tip",children:(0,o.jsx)(r.p,{children:"\u5bf9\u4e8e\u76ee\u524d DockerHub \u7684\u670d\u52a1\u5728\u5927\u9646\u4e0d\u7a33\u5b9a\u7684\u60c5\u51b5\uff0c\u914d\u7f6e\u963f\u91cc\u4e91\u7b49\u670d\u52a1\u63d0\u4f9b\u5546\u7684\u955c\u50cf\u52a0\u901f\u670d\u52a1\u53cd\u800c\u676f\u6c34\u8f66\u85aa\uff0c\u8fd9\u4e2a\u65f6\u5019\u4e3a Docker Daemon \u914d\u7f6e\u4ee3\u7406\uff0c\u53cd\u800c\u662f\u7a33\u5b9a\u6027\u6700\u597d\u7684\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,o.jsx)(r.h2,{id:"reference",children:"Reference"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://airman604.medium.com/getting-docker-to-work-with-a-proxy-server-fadec841194e",children:"Getting Docker to work with a proxy server"})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://docs.docker.com/network/proxy/",children:"Configure Docker to use a proxy server - Docker docs"})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://note.qidong.name/2020/05/docker-proxy/",children:"Docker \u7684\u4e09\u79cd\u7f51\u7edc\u4ee3\u7406\u914d\u7f6e By \u533f\u87d2"})})]})}function p(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>t});var o=n(7294);const c={},s=o.createContext(c);function t(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);