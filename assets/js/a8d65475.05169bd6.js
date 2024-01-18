"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[1472],{9666:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var c=n(5893),o=n(1151);const d={},i="Docker \u672a\u6388\u6743",s={id:"Penetration/Unauthorized/Docker",title:"Docker \u672a\u6388\u6743",description:"Docker \u5171\u6709\u4e24\u4e2a API \u7cfb\u7edf\uff0c\u4e00\u4e2a\u662f\u672c\u5730 daemon \u7684 API \u7cfb\u7edf\uff0c\u5e38\u89c1\u4e8e Portainer \u7b49 Docker \u5bb9\u5668\uff0c\u901a\u8fc7\u4e0e Docker daemon API \u4ea4\u4e92\u6765\u8fbe\u5230\u63a7\u5236 Docker \u7684\u76ee\u7684\uff1b\u4e00\u4e2a\u662f Docker remote API\uff0c\u5e38\u89c1\u4e8e\u8fdc\u7a0b Docker \u670d\u52a1\u7ba1\u7406\uff0c\u5982\u8fdc\u7a0b\u7cfb\u7edf\uff08\u5982 CTFd\uff09\u8fdc\u7a0b\u63a7\u5236\u9776\u673a\u670d\u52a1\u5668\u4e0a\u7684 Docker \u542f\u52a8\u9898\u76ee\u9776\u673a",source:"@site/docs/Penetration/Unauthorized/Docker.md",sourceDirName:"Penetration/Unauthorized",slug:"/Penetration/Unauthorized/Docker",permalink:"/Treasure/docs/Penetration/Unauthorized/Docker",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Penetration/Unauthorized/Docker.md",tags:[],version:"current",frontMatter:{},sidebar:"Penetration_Sidebar",previous:{title:"CouchDB \u672a\u6388\u6743",permalink:"/Treasure/docs/Penetration/Unauthorized/CouchDB"},next:{title:"Druid\u672a\u6388\u6743",permalink:"/Treasure/docs/Penetration/Unauthorized/Druid"}},t={},l=[{value:"Docker Daemon API \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e",id:"docker-daemon-api-\u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e",level:2},{value:"Docker Remote API \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e",id:"docker-remote-api-\u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e",level:2},{value:"Docker \u672a\u6388\u6743\u6f0f\u6d1e\u5229\u7528\u65b9\u5f0f",id:"docker-\u672a\u6388\u6743\u6f0f\u6d1e\u5229\u7528\u65b9\u5f0f",level:2},{value:"\u521b\u5efa\u6076\u610f\u6620\u5c04",id:"\u521b\u5efa\u6076\u610f\u6620\u5c04",level:3},{value:"\u521b\u5efa\u7279\u6743\u5bb9\u5668 - Privileged Container",id:"\u521b\u5efa\u7279\u6743\u5bb9\u5668---privileged-container",level:3},{value:"Inside Default Container",id:"inside-default-container",level:4},{value:"Inside Privileged Container",id:"inside-privileged-container",level:4},{value:"\u4f7f\u7528 Metasploit \u8fdb\u884c\u81ea\u52a8\u5316\u653b\u51fb",id:"\u4f7f\u7528-metasploit-\u8fdb\u884c\u81ea\u52a8\u5316\u653b\u51fb",level:3},{value:"Reference",id:"reference",level:2}];function h(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.h1,{id:"docker-\u672a\u6388\u6743",children:"Docker \u672a\u6388\u6743"}),"\n",(0,c.jsxs)(r.p,{children:["Docker \u5171\u6709\u4e24\u4e2a API \u7cfb\u7edf\uff0c\u4e00\u4e2a\u662f\u672c\u5730 ",(0,c.jsx)(r.code,{children:"daemon"})," \u7684 API \u7cfb\u7edf\uff0c\u5e38\u89c1\u4e8e Portainer \u7b49 Docker \u5bb9\u5668\uff0c\u901a\u8fc7\u4e0e ",(0,c.jsx)(r.code,{children:"Docker daemon API"})," \u4ea4\u4e92\u6765\u8fbe\u5230\u63a7\u5236 Docker \u7684\u76ee\u7684\uff1b\u4e00\u4e2a\u662f ",(0,c.jsx)(r.code,{children:"Docker remote API"}),"\uff0c\u5e38\u89c1\u4e8e\u8fdc\u7a0b Docker \u670d\u52a1\u7ba1\u7406\uff0c\u5982\u8fdc\u7a0b\u7cfb\u7edf\uff08\u5982 CTFd\uff09\u8fdc\u7a0b\u63a7\u5236\u9776\u673a\u670d\u52a1\u5668\u4e0a\u7684 Docker \u542f\u52a8\u9898\u76ee\u9776\u673a"]}),"\n",(0,c.jsxs)(r.p,{children:["\u7531\u4e8e Docker \u81ea\u8eab\u670d\u52a1\u7684\u7279\u6b8a\u6027\u8d28\uff0c\u9700\u8981\u4f7f\u7528\u5982 ",(0,c.jsx)(r.code,{children:"cgroup"})," \u7b49 Linux \u5b89\u5168\u7279\u6027\uff0c\u6240\u4ee5 Docker \u670d\u52a1\u9700\u8981\u57fa\u4e8e root \u6743\u9650\u8fdb\u884c\u8fd0\u884c\u3002"]}),"\n",(0,c.jsxs)(r.h2,{id:"docker-daemon-api-\u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e",children:[(0,c.jsx)(r.a,{href:"/docs/Environment/docker/Docker-Daemon-API",children:"Docker Daemon API"})," \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e"]}),"\n",(0,c.jsxs)(r.p,{children:["\u524d\u7f6e\u6750\u6599\uff1a",(0,c.jsx)(r.a,{href:"/docs/Environment/docker/Docker-Daemon-API",children:"Docker Daemon API"})]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Docker Daemon API"})," \u672a\u6388\u6743\u6f0f\u6d1e, \u5e38\u89c1\u4e8e\u5c06 ",(0,c.jsx)(r.code,{children:"Docker Daemon API"})," \u6620\u5c04\u8fdb Docker \u5bb9\u5668\u4e2d\uff0c\u7136\u540e\u5728 Docker \u5bb9\u5668\u5185\u4f7f\u7528\u5176\u4ed6\u670d\u52a1\u6765\u63a7\u5236\u5bbf\u4e3b\u673a\u4e2d\u7684 Docker \u670d\u52a1\uff0c\u4f8b\u5982 Portainer \u8fd9\u7c7b Docker \u63a7\u5236\u9762\u677f\u3002"]}),"\n",(0,c.jsxs)(r.p,{children:["\u5982\u679c Docker \u5bb9\u5668\u5185\u7684\u670d\u52a1\u5b58\u5728\u6f0f\u6d1e\uff0c\u4f8b\u5982 Portainer \u5b58\u5728 CVE \u5bfc\u81f4\u653b\u51fb\u8005\u80fd\u76f4\u63a5\u5f97\u5230 Docker \u5bb9\u5668\u5185\u7684\u6700\u9ad8\u6743\u9650\uff0c\u90a3\u4e48\u653b\u51fb\u8005\u4fbf\u80fd\u8fdb\u4e00\u6b65\u5f97\u5230\u5bbf\u4e3b\u673a\u7684 ",(0,c.jsx)(r.code,{children:"Docker Daemon API"})," \u63a7\u5236\u6743\u9650\uff0c\u8fdb\u800c\u5b8c\u5168\u63a7\u5236 Docker \u670d\u52a1\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5229\u7528 ",(0,c.jsx)(r.code,{children:"Docker Daemon API"})," \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e"]}),"\n",(0,c.jsxs)(r.p,{children:["\u6216\u8005\u5c06 ",(0,c.jsx)(r.code,{children:"Docker Daemon API"})," \u901a\u8fc7\u670d\u52a1\u8f6c\u53d1\u7684\u65b9\u5f0f\uff0c\u8f6c\u53d1\u5230\u5916\u90e8\u7f51\u7edc\u73af\u5883 / \u653b\u51fb\u8005\u7684 vps\uff0c\u4fbf\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 Docker \u5ba2\u6237\u7aef\uff0c\u53d6\u5f97\u5bbf\u4e3b\u673a\u4e0a Docker \u670d\u52a1\u7684\u5b8c\u5168\u63a7\u5236\u6743\u9650\uff0c\u8fdb\u800c\u901a\u8fc7\u5b9a\u65f6\u4efb\u52a1 / \u5173\u952e\u7a0b\u5e8f\u6295\u6bd2\u7684\u65b9\u5f0f\uff0c\u53d6\u5f97\u5bbf\u4e3b\u673a\u7684\u63a7\u5236\u6743\u9650"]}),"\n",(0,c.jsxs)(r.h2,{id:"docker-remote-api-\u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e",children:[(0,c.jsx)(r.a,{href:"/docs/Environment/docker/Docker-Remote-API",children:"Docker Remote API"})," \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e"]}),"\n",(0,c.jsxs)(r.p,{children:["\u524d\u7f6e\u6750\u6599\uff1a",(0,c.jsx)(r.a,{href:"/docs/Environment/docker/Docker-Remote-API",children:"Docker Remote API"})]}),"\n",(0,c.jsx)(r.p,{children:"\u5982\u679c\u662f\u7531\u4ee5\u4e0b\u6307\u4ee4\u542f\u52a8\u7684 Docker Deamon"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",children:"dockerd -H=0.0.0.0:2375 -H unix:///var/run/docker.sock\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u90a3\u4e48\u542f\u52a8\u7684 ",(0,c.jsx)(r.code,{children:"Docker Remote API"})," \u4e0d\u9700\u8981\u7ecf\u8fc7\u8d26\u6237\u9a8c\u8bc1\u5c31\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\uff0c\u4e5f\u5c31\u4f1a\u51fa\u73b0\u672a\u6388\u6743\u6f0f\u6d1e\uff0c",(0,c.jsx)(r.code,{children:"Docker Remote API"})," \u5c06\u4f1a\u5b8c\u5168\u65e0\u4fdd\u62a4\u7684\u72b6\u6001\u66b4\u9732\u5728\u672c\u5730\u7684 2375 \u7aef\u53e3\uff0c\u9020\u6210\u6781\u5927\u7684\u5371\u9669\u6027\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5 2375 \u7aef\u53e3\u76f4\u63a5\u63a7\u5236 Docker \u670d\u52a1\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5229\u7528 ",(0,c.jsx)(r.code,{children:"Docker Remote API"})," \u672a\u6388\u6743\u8bbf\u95ee\u6f0f\u6d1e"]}),"\n",(0,c.jsx)(r.admonition,{title:"\u5173\u4e8e\u591a\u5c42\u5185\u7f51\u7684 Docker Remote API",type:"tip",children:(0,c.jsxs)(r.p,{children:["Docker \u5ba2\u6237\u7aef\u5e76\u4e0d\u63a5\u53d7\u73af\u5883\u53d8\u91cf\u4f20\u5165\u7684\u7f51\u7edc\u4ee3\u7406\u53c2\u6570\uff0c\u4e5f\u4e0d\u63a5\u53d7\u5982 ",(0,c.jsx)(r.code,{children:"proxychains"})," \u7b49 dll \u6ce8\u5165\u5f62\u5f0f\u7684\u7f51\u7edc\u4ee3\u7406\uff0c\u6240\u4ee5\u5982\u679c\u5728\u591a\u5c42\u5185\u7f51\u4e2d\u53d1\u73b0\u5b58\u5728 ",(0,c.jsx)(r.code,{children:"Docker Remote API"})," \u672a\u6388\u6743\u6f0f\u6d1e\uff0c\u5e76\u4e0d\u80fd\u7b80\u5355\u7684\u901a\u8fc7\u7f51\u7edc\u4ee3\u7406\u5bf9 ",(0,c.jsx)(r.code,{children:"Docker Remote API"})," \u8fdb\u884c\u8bbf\u95ee\uff0c\u800c\u662f\u9700\u8981\u914d\u7f6e\u7aef\u53e3\u8f6c\u53d1\u7b49\u5f62\u5f0f\uff0c\u5c06 ",(0,c.jsx)(r.code,{children:"Docker Remote API"})," \u8f6c\u53d1\u5230\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u7684\u5730\u5740\uff0c\u518d\u4f7f\u7528 Docker \u5ba2\u6237\u7aef \u8fdb\u884c\u8fde\u63a5"]})}),"\n",(0,c.jsx)(r.h2,{id:"docker-\u672a\u6388\u6743\u6f0f\u6d1e\u5229\u7528\u65b9\u5f0f",children:"Docker \u672a\u6388\u6743\u6f0f\u6d1e\u5229\u7528\u65b9\u5f0f"}),"\n",(0,c.jsx)(r.h3,{id:"\u521b\u5efa\u6076\u610f\u6620\u5c04",children:"\u521b\u5efa\u6076\u610f\u6620\u5c04"}),"\n",(0,c.jsx)(r.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u5efa\u7acb\u654f\u611f\u6587\u4ef6\u7684\u6620\u5c04\uff0c\u6765\u8fbe\u5230\u63a7\u5236\u5bbf\u4e3b\u673a\u7684\u76ee\u7684\uff0c\u4f8b\u5982\u5c06 shell \u76f8\u5173\u6587\u4ef6\u6620\u5c04\u5230 Docker \u5bb9\u5668\u4e2d\u8fdb\u884c\u8fdb\u4e00\u6b65\u63a7\u5236\u548c\u52a0\u6bd2\uff1a"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",children:"docker ... -v /usr/bin/bash:/vuln/bash ...\n"})}),"\n",(0,c.jsx)(r.p,{children:"\u5c31\u53ef\u4ee5\u8fbe\u5230\u5bf9\u5bbf\u4e3b\u673a\u7684 bash \u7a0b\u5e8f\u8fdb\u884c\u63a7\u5236\u7684\u76ee\u7684"}),"\n",(0,c.jsx)(r.p,{children:"\u6216\u8005\u5efa\u7acb\u4ee5\u4e0b\u6620\u5c04\uff0c\u4ee5\u8fbe\u5230\u5728\u5bb9\u5668\u5185\u8bfb\u53d6\u654f\u611f\u4fe1\u606f\u7684\u76ee\u7684\uff1a"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",children:"docker ... -v /etc:/vuln/etc ...\n"})}),"\n",(0,c.jsx)(r.p,{children:"\u4ea6\u6216\u8005\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7\u5c06\u6574\u4e2a\u5bbf\u4e3b\u673a\u7684\u6587\u4ef6\u7cfb\u7edf\u6620\u5c04\u8fdb\u5bb9\u5668\u5185\uff0c\u4ece\u800c\u5b9e\u73b0\u4e00\u628a\u68ad\uff1a"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",children:"docker run --privileged -it -v /:/tmp/hostss [image_name]\n"})}),"\n",(0,c.jsx)(r.p,{children:"\u8fdb\u800c\u53ef\u4ee5\u5b9e\u73b0\uff1a"}),"\n",(0,c.jsxs)(r.ul,{children:["\n",(0,c.jsx)(r.li,{children:"ssh\u5199\u5165\u540e\u95e8"}),"\n",(0,c.jsx)(r.li,{children:"\u5199\u5165\u53ef\u63a7\u7528\u6237"}),"\n",(0,c.jsx)(r.li,{children:"\u5199\u5165\u8ba1\u5212\u4efb\u52a1"}),"\n",(0,c.jsx)(r.li,{children:"......"}),"\n"]}),"\n",(0,c.jsxs)(r.h3,{id:"\u521b\u5efa\u7279\u6743\u5bb9\u5668---privileged-container",children:["\u521b\u5efa\u7279\u6743\u5bb9\u5668 - ",(0,c.jsx)(r.a,{href:"/docs/Environment/docker/Docker-Privileged",children:"Privileged Container"})]}),"\n",(0,c.jsx)(r.p,{children:"\u5e38\u89c1\u4e8e\u4ee5\u4e0b Docker \u5bb9\u5668\u542f\u52a8\u573a\u666f\uff1a"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",children:"docker run --privileged [image_name]\n"})}),"\n",(0,c.jsx)(r.p,{children:"\u5728\u7279\u6743\u5bb9\u5668\u4e2d\uff0c\u5bb9\u5668\u5185\u53ef\u4ee5\u76f4\u63a5\u64cd\u4f5c\u5bbf\u4e3b\u673a\u7684\u5185\u6838\u8d44\u6e90\u4e0e\u786c\u4ef6\u8d44\u6e90\uff0c\u5141\u8bb8\u5bb9\u5668\u4ee5 root \u6743\u9650\u8bbf\u95ee\u7cfb\u7edf\u4e2d\u7684\u4e00\u5207\uff0c\u4e3a\u6076\u610f\u7528\u6237\u521b\u9020\u4e86\u63a7\u5236\u7cfb\u7edf\u7684\u673a\u4f1a, \u4f8b\u5982\uff1a"}),"\n",(0,c.jsx)(r.h4,{id:"inside-default-container",children:"Inside Default Container"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",children:"$ docker run --rm -it alpine sh\nls /dev\nconsole  fd       mqueue   ptmx     random   stderr   stdout   urandom\ncore     full     null     pts      shm      stdin    tty      zero\n"})}),"\n",(0,c.jsx)(r.h4,{id:"inside-privileged-container",children:"Inside Privileged Container"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-shell",children:"$ docker run --rm --privileged -it alpine sh\nls /dev\ncachefiles       mapper           port             shm              tty24            tty44            tty7\nconsole          mem              psaux            stderr           tty25            tty45            tty8\ncore             mqueue           ptmx             stdin            tty26            tty46            tty9\ncpu              nbd0             pts              stdout           tty27            tty47            ttyS0\n[...]\n"})}),"\n",(0,c.jsx)(r.p,{children:"\u7531\u6b64\u53ef\u4ee5\u770b\u51fa\uff0c\u7279\u6743\u5bb9\u5668\u53ef\u4ee5\u76f4\u63a5\u63a7\u5236\u5230\u5bbf\u4e3b\u673a\u7684\u786c\u4ef6\u8d44\u6e90"}),"\n",(0,c.jsx)(r.h3,{id:"\u4f7f\u7528-metasploit-\u8fdb\u884c\u81ea\u52a8\u5316\u653b\u51fb",children:"\u4f7f\u7528 Metasploit \u8fdb\u884c\u81ea\u52a8\u5316\u653b\u51fb"}),"\n",(0,c.jsxs)(r.p,{children:["\u5728 msfconsole \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"exploit/linux/http/docker_daemon_tcp"})," \u6a21\u5757\u8fdb\u884c\u81ea\u52a8\u5316\u653b\u51fb"]}),"\n",(0,c.jsx)(r.p,{children:"\u653b\u51fb\u6a21\u5757\u7684\u4ecb\u7ecd\uff1a"}),"\n",(0,c.jsxs)(r.blockquote,{children:["\n",(0,c.jsx)(r.p,{children:'\u901a\u8fc7\u672a\u53d7\u4fdd\u62a4\u7684 tcp \u5957\u63a5\u5b57\uff082375/tcp\uff0c\u6216 2376/tcp\uff0c\u5e26 tls \u4f46\u4e0d\u5e26 tls-auth\uff09\u5229\u7528 Docker\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u5728\u8fd0\u884c Docker \u5bb9\u5668\u7684\u4e3b\u673a\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u4e00\u4e2a Docker \u5bb9\u5668\uff0c\u5e76\u5728 "/" \u8def\u5f84\u4e0a\u6302\u8f7d\u8bfb / \u5199\u6743\u9650\u3002\u7531\u4e8e Docker \u5bb9\u5668\u4ee5 uid 0 \u7684\u8eab\u4efd\u6267\u884c\u547d\u4ee4\uff0c\u56e0\u6b64\u4e3b\u673a\u64cd\u4f5c\u7cfb\u7edf\u4f1a\u6267\u884c\u8be5\u547d\u4ee4\uff0c\u5141\u8bb8\u653b\u51fb\u8005\u7f16\u8f91 / \u521b\u5efa root \u62e5\u6709\u7684\u6587\u4ef6\u3002\u672c\u6f0f\u6d1e\u5229\u7528\u8fd9\u4e00\u70b9\uff0c\u5728\u4e3b\u673a\u670d\u52a1\u5668\u7684 "/etc/cron.d/" \u8def\u5f84\u4e0b\u521b\u5efa\u4e86\u4e00\u4e2a cron \u4f5c\u4e1a\u3002Docker \u955c\u50cf\u5e94\u5b58\u5728\u4e8e\u76ee\u6807\u7cfb\u7edf\u4e0a\uff0c\u6216\u8005\u662f\u6765\u81ea hub.docker.com \u7684\u6709\u6548\u955c\u50cf\u3002'}),"\n"]}),"\n",(0,c.jsxs)(r.admonition,{title:"\u5173\u4e8e\u5bb9\u5668\u955c\u50cf",type:"info",children:[(0,c.jsx)(r.p,{children:"\u4e00\u822c\u6765\u8bf4\uff0cDocker \u5bbf\u4e3b\u673a\u5e94\u5f53\u62e5\u6709\u8bbf\u95ee\u5916\u7f51\u7684\u6743\u9650\uff0c\u6240\u4ee5 Docker \u662f\u80fd\u591f\u4ece\u50a8\u5b58\u5e93\u62c9\u53d6\u955c\u50cf\u7684\uff0c\u5982 DockerHub\u3002\u4f46\u662f\u5982\u679c Docker\u5bbf\u4e3b\u673a\u662f\u4e00\u53f0\u5185\u7f51\u673a\uff0c\u90a3\u4e48\u5c31\u6ca1\u6709\u529e\u6cd5\u81ea\u52a8\u4ece\u5916\u7f51\u62c9\u53d6\u955c\u50cf\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u9009\u62e9\u5229\u7528\u73b0\u6709\u7684\u955c\u50cf\uff0c\u5982\uff1a"}),(0,c.jsxs)(r.ul,{children:["\n",(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:"ubuntu:latest"})}),"\n",(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:"alpine:latest"})}),"\n"]}),(0,c.jsx)(r.p,{children:"\u4f46\u662f\u5982\u679cDocker\u5185\u5e76\u6ca1\u6709\u73b0\u6709\u7684\u955c\u50cf\uff0c\u4e5f\u4e0d\u5b58\u5728\u5916\u7f51\u8bbf\u95ee\u80fd\u529b\u7684\u8bdd\uff0c\u5c31\u8981\u9009\u62e9\u4ece\u5916\u90e8\u4f20\u8f93Docker Image\u7684tar\u5305\uff0c\u6267\u884c\u624b\u52a8\u5bfc\u5165\u4e4b\u540e\uff0c\u518d\u8fdb\u884c\u8fdb\u4e00\u6b65\u5229\u7528"})]}),"\n",(0,c.jsx)(r.p,{children:"\u653b\u51fb\u6a21\u5757\u7684\u57fa\u7840\u53c2\u6570\u5982\u4e0b\uff1a"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:"Name"}),(0,c.jsx)(r.th,{children:"Current Setting"}),(0,c.jsx)(r.th,{children:"Required"}),(0,c.jsx)(r.th,{children:"Description"})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"CONTAINER_ID"}),(0,c.jsx)(r.td,{}),(0,c.jsx)(r.td,{children:"no"}),(0,c.jsx)(r.td,{children:"container id you would like"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"DOCKERIMAGE"}),(0,c.jsxs)(r.td,{children:["alpine",":latest"]}),(0,c.jsx)(r.td,{children:"yes"}),(0,c.jsx)(r.td,{children:"hub.docker.com image or local image to use"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"Proxies"}),(0,c.jsx)(r.td,{}),(0,c.jsx)(r.td,{children:"no"}),(0,c.jsx)(r.td,{children:"A proxy chain"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"RHOSTS"}),(0,c.jsx)(r.td,{}),(0,c.jsx)(r.td,{children:"yes"}),(0,c.jsx)(r.td,{children:"The target host(s)"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"RPORT"}),(0,c.jsx)(r.td,{children:"2375"}),(0,c.jsx)(r.td,{children:"yes"}),(0,c.jsx)(r.td,{children:"The target port (TCP)"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"SSL"}),(0,c.jsx)(r.td,{children:"false"}),(0,c.jsx)(r.td,{children:"no"}),(0,c.jsx)(r.td,{children:"Negotiate SSL/TLS for outgoing connections"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"VHOST"}),(0,c.jsx)(r.td,{}),(0,c.jsx)(r.td,{children:"no"}),(0,c.jsx)(r.td,{children:"HTTP server virtual host"})]})]})]}),"\n",(0,c.jsxs)(r.p,{children:["\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u901a\u8fc7\u5c06\u5bbf\u4e3b\u673a\u7684",(0,c.jsx)(r.code,{children:"/etc/cron.d/"}),"\u5bb9\u5668\u6620\u5c04\u8fdb\u5bb9\u5668\u5185\uff0c\u5e76\u521b\u5efa\u6076\u610f\u7684\u8ba1\u5212\u4efb\u52a1\uff0c\u4ece\u800c\u4f7f\u5bbf\u4e3b\u673a\u4e0a\u7684crontab\u89e6\u53d1\u6076\u610f\u6307\u4ee4\uff0c\u5c06root\u6743\u9650\u6001\u7684shell\u53cd\u5f39\u81f3\u653b\u51fb\u8005\u7684\u76d1\u542c\u5668\u4e0a\uff0c\u4ece\u800c\u5b9e\u73b0\uff1a"]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Docker Remote API"})," -> \u521b\u5efa\u6076\u610f\u5bb9\u5668 -> \u63a7\u5236\u5bbf\u4e3b\u673a\u7684",(0,c.jsx)(r.code,{children:"/etc/cron.d/"}),"\u76ee\u5f55 -> \u521b\u5efa\u6076\u610f\u8ba1\u5212\u4efb\u52a1 -> \u89e6\u53d1\u6076\u610f\u8f7d\u8377\uff0c\u53cd\u5f39shell"]}),"\n",(0,c.jsx)(r.h2,{id:"reference",children:"Reference"}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"https://www.cnblogs.com/xinga/articles/17520869.html",children:"Docker Remote API \u672a\u6388\u6743\u8bbf\u95ee By axing \u7684\u661f\u7a7a"})}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"https://blog.csdn.net/Demonslzh/article/details/127484455",children:"\u7279\u6743\u5bb9\u5668\u4ee5\u53ca\u5b89\u5168\u9690\u60a3\u7684\u89c4\u907f By Demonslzh"})}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"https://book.hacktricks.xyz/linux-hardening/privilege-escalation/docker-security/docker-privileged",children:"Docker --privileged By HackTricks"})}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"https://learn.snyk.io/lesson/container-runs-in-privileged-mode/",children:"Container is running in privileged mode By snyk"})}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"https://docs.docker.com/engine/security/#docker-daemon-attack-surface",children:"Docker daemon attack surface - Docker docs"})}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"https://docs.docker.com/engine/reference/commandline/dockerd/#bind-docker-to-another-hostport-or-a-unix-socket",children:"Bind Docker to another host/port or a Unix socket - Docker docs"})})]})}function a(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>i});var c=n(7294);const o={},d=c.createContext(o);function i(e){const r=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),c.createElement(d.Provider,{value:r},e.children)}}}]);