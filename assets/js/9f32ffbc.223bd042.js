"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[6275],{2310:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(5893),t=n(1151);const a={sidebar_position:2,sidebar_label:"\u7ba1\u7406\u9762\u677f Portainer",sidebar_class_name:"green"},i="\u7ba1\u7406\u9762\u677f Portainer",s={id:"Environment/docker/Tool-Portainer",title:"\u7ba1\u7406\u9762\u677f Portainer",description:"\u4ee5\u4e0b\u76f8\u5173\u64cd\u4f5c\u90fd\u57fa\u4e8e Portainer Community \u793e\u533a\u7248\u672c\uff0cDocker \u5355\u673a\u90e8\u7f72\u73af\u5883\u8fdb\u884c\u4ecb\u7ecd\u4e0e\u64cd\u4f5c",source:"@site/docs/Environment/docker/Tool-Portainer.md",sourceDirName:"Environment/docker",slug:"/Environment/docker/Tool-Portainer",permalink:"/docs/Environment/docker/Tool-Portainer",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Environment/docker/Tool-Portainer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u7ba1\u7406\u9762\u677f Portainer",sidebar_class_name:"green"},sidebar:"Environment_Sidebar",previous:{title:"Dockerfile \u6307\u5357",permalink:"/docs/Environment/docker/Dockerfile-guide"},next:{title:"Docker Daemon API",permalink:"/docs/Environment/docker/Docker-Daemon-API"}},c={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"\u7ba1\u7406\u9762\u677f-portainer",children:"\u7ba1\u7406\u9762\u677f Portainer"}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"\u4ee5\u4e0b\u76f8\u5173\u64cd\u4f5c\u90fd\u57fa\u4e8e Portainer Community \u793e\u533a\u7248\u672c\uff0cDocker \u5355\u673a\u90e8\u7f72\u73af\u5883\u8fdb\u884c\u4ecb\u7ecd\u4e0e\u64cd\u4f5c"}),"\n",(0,o.jsx)(r.p,{children:"Business \u5546\u4e1a\u7248\u672c\u53ef\u4ee5\u514d\u8d39\u7533\u8bf7\uff0c\u4f46\u662f\u754c\u9762\u4e0e\u57fa\u672c\u529f\u80fd\u662f\u4e0e Community \u793e\u533a\u7248\u672c\u4e00\u81f4\u7684"}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,o.jsxs)(r.p,{children:["\u5b98\u65b9\u5df2\u7ecf\u63d0\u4f9b\u4e86\u4e00\u4efd\u5b89\u88c5\u5f15\u5bfc\u8bf4\u660e\uff1a",(0,o.jsx)(r.a,{href:"https://docs.portainer.io/start/install-ce",children:"Portainer - Install Portainer CE"})]}),"\n",(0,o.jsx)(r.p,{children:"\u5bf9\u4e8e\u5355\u673a\u90e8\u7f72\u7684 Docker \u73af\u5883\uff08\u5373\u6ca1\u6709\u5f00\u542f Docker \u96c6\u7fa4\uff09\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u8fdb\u884c Portainer \u7684\u90e8\u7f72"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# \u521b\u5efa\u6570\u636e\u5377\uff0c\u4ee5\u4fbf\u4e8e\u8bbe\u7f6e Portainer\ndocker volume create portainer_data\n# \u5e38\u89c4\u90e8\u7f72\uff0c\u9700\u8981\u4f7f\u7528 https \u534f\u8bae\u901a\u8fc7 9443 \u7aef\u53e3\u8bbf\u95ee Portainer\ndocker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest\n# \u975e\u5e38\u89c4\u90e8\u7f72\uff0c\u53ef\u4ee5\u4f7f\u7528 http \u534f\u8bae\u901a\u8fc7 9000 \u7aef\u53e3\u76f4\u63a5\u8bbf\u95ee Portainer\uff0c\u4f46\u662f\u6d41\u91cf\u6570\u636e\u4e0d\u4fdd\u8bc1\u5b89\u5168\u6027\ndocker run -d -p 8000:8000 -p 9000:9000 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u5982\u679c Docker \u73af\u5883\u6ca1\u6709\u95ee\u9898\u7684\u8bdd\uff0c\u7b49\u4ee5\u4e0a\u8bed\u53e5\u6267\u884c\u7ed3\u675f\u4e4b\u540e\u5c31\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u94fe\u63a5\u8bbf\u95ee Portainer"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# By HTTPS\nhttps://localhost:9443\n# By HTTP\nhttp://localhost:9000\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u5982\u679c\u9700\u8981\u66f4\u6539 Portainer \u5f00\u653e\u7684\u7aef\u53e3\uff0c\u5219\u53ea\u9700\u8981\u4fee\u6539\u76f8\u5173\u90e8\u7f72\u6307\u4ee4\u5373\u53ef"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker run -d -p 8000:8000 -p <HTTP port>:9000 -p <HTTPS port>:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest\n"})}),"\n",(0,o.jsx)(r.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,o.jsx)(r.p,{children:"\u5728\u9075\u5faa\u6307\u793a\u521d\u59cb\u5316 Portainer \u4e4b\u540e\uff0c\u767b\u5f55 Portainer \u4e4b\u540e\uff0c\u5e94\u8be5\u80fd\u770b\u5230\u4ee5\u4e0b\u754c\u9762"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Portainer main",src:n(5253).Z+"",width:"1920",height:"937"})}),"\n",(0,o.jsxs)(r.p,{children:["\u5176\u4e2d\u7684 ",(0,o.jsx)(r.code,{children:"local"})," \u5c31\u662f\u672c\u673a\u8282\u70b9\uff0c\u70b9\u51fb\u8fdb\u53bb"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Portainer local",src:n(8686).Z+"",width:"1920",height:"937"})}),"\n",(0,o.jsx)(r.p,{children:"\u5373\u53ef\u770b\u5230\u672c\u8282\u70b9\u7684 Docker \u8fd0\u884c\u4fe1\u606f\uff0c\u5176\u4e2d\u5c31\u5305\u62ec\u4e86\u6700\u5e38\u7528\u7684 Docker container \u548c Docker Image\uff0c\u70b9\u51fb\u8fdb\u53bb\u5373\u53ef\u76f4\u63a5\u64cd\u4f5c"})]})}function p(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},5253:(e,r,n)=>{n.d(r,{Z:()=>o});const o=n.p+"assets/images/image_20230803-140311-e64b3cd356925564a98894e10d376c3b.png"},8686:(e,r,n)=>{n.d(r,{Z:()=>o});const o=n.p+"assets/images/image_20230809-140917-ede408e5675050600fdb29ebc4f6b3c6.png"},1151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>i});var o=n(7294);const t={},a=o.createContext(t);function i(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);