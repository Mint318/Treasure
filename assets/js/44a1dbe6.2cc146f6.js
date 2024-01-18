"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[328],{9742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=t(5893),i=t(1151);const c={sidebar_position:1,sidebar_label:"Vercel",sidebar_class_name:"green"},s="Vercel",l={id:"Devops/SaaS/Vercel/index",title:"Vercel",description:"Vercel \u7684\u524d\u7aef\u4e91\u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u6846\u67b6\u3001\u5de5\u4f5c\u6d41\u7a0b\u548c\u57fa\u7840\u8bbe\u65bd\uff0c\u4ee5\u6784\u5efa\u66f4\u5feb\u3001\u66f4\u4e2a\u6027\u5316\u7684 Web\u3002",source:"@site/docs/Devops/SaaS/Vercel/index.md",sourceDirName:"Devops/SaaS/Vercel",slug:"/Devops/SaaS/Vercel/",permalink:"/docs/Devops/SaaS/Vercel/",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Devops/SaaS/Vercel/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Vercel",sidebar_class_name:"green"},sidebar:"Devops_Sidebar",previous:{title:"Github Page",permalink:"/docs/Devops/SaaS/Github-Page/"},next:{title:"Cloudflare Page",permalink:"/docs/Devops/SaaS/Cloudflare-Page/"}},o={},a=[{value:"Vercel with Github",id:"vercel-with-github",level:2},{value:"\u901a\u8fc7 Github App \u90e8\u7f72 Vercel",id:"\u901a\u8fc7-github-app-\u90e8\u7f72-vercel",level:3},{value:"\u901a\u8fc7 Github Action \u90e8\u7f72 Vercel",id:"\u901a\u8fc7-github-action-\u90e8\u7f72-vercel",level:3},{value:"Vercel CLI",id:"vercel-cli",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"vercel",children:"Vercel"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Vercel \u7684\u524d\u7aef\u4e91\u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u6846\u67b6\u3001\u5de5\u4f5c\u6d41\u7a0b\u548c\u57fa\u7840\u8bbe\u65bd\uff0c\u4ee5\u6784\u5efa\u66f4\u5feb\u3001\u66f4\u4e2a\u6027\u5316\u7684 Web\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"vercel-with-github",children:"Vercel with Github"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://vercel.com/docs/concepts/deployments/git/vercel-for-github",children:"Deploying GitHub Projects with Vercel"})}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7-github-app-\u90e8\u7f72-vercel",children:"\u901a\u8fc7 Github App \u90e8\u7f72 Vercel"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Github App"})," \u660e\u663e\u5f88\u65b9\u4fbf\uff0c\u4f46\u662f\u5176\u7ed5\u4e0d\u5f00\u5bf9\u4ed3\u5e93\u6743\u9650\u7684\u9650\u5236\uff0c\u4ee5\u53ca\u7ec4\u7ec7\u6240\u5c5e\u7684\u4ed3\u5e93\u6ca1\u529e\u6cd5\u514d\u8d39\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Github App"})," \u90e8\u7f72\u5230 ",(0,r.jsx)(n.code,{children:"Vercel"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/apps/vercel",children:"GitHub App - Vercel"})}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7-github-action-\u90e8\u7f72-vercel",children:"\u901a\u8fc7 Github Action \u90e8\u7f72 Vercel"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3a\u5b98\u65b9\u6559\u7a0b"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://vercel.com/guides/how-can-i-use-github-actions-with-vercel",children:"How to Use GitHub Actions to Deploy to Vercel"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u4ee5 Mkdocs \u4e3a\u4f8b"})}),"\n",(0,r.jsx)(n.p,{children:"Github Action \u914d\u7f6e\u6587\u4ef6\u5982\u4e0b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'name: Build and Release to Vercel\n\nenv:\n  VERCEL_ORG_ID: ${{secrets.VERCEL_ORG_ID}}\n  VERCEL_PROJECT_ID: ${{secrets.VERCEL_PROJECT_ID}}\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n      packages: write\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      - name: Setup Python\n        uses: actions/setup-python@v2\n        with:\n          python-version: "3.11"\n\n      - name: Upgrade pip\n        run: python3 -m pip install --upgrade pip\n\n      - name: Install requirements\n        run: python3 -m pip install -r ./requirements.txt\n\n      - name: Install Vercel CLI\n        run: npm install --global vercel@latest\n\n      - name: Mkdocs build Project\n        run: mkdocs build\n\n      - name: Pull Vercel Environment Information\n        working-directory: ./site\n        run: vercel pull --yes --environment=production --token=${{secrets.VERCEL_TOKEN}}\n\n      - name: Build Project Artifacts\n        working-directory: ./site\n        run: vercel build --prod --token=${{secrets.VERCEL_TOKEN}}\n\n      - name: Deploy Project Artifacts to Vercel\n        working-directory: ./site\n        run: vercel deploy --prebuilt --prod --token=${{secrets.VERCEL_TOKEN}}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"vercel-cli",children:"Vercel CLI"})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(7294);const i={},c=r.createContext(i);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);