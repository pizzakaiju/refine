"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75487],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(m,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90979:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",slug:"framer-motion-react-animations",authors:"joel_ezimorah",tags:["css","react","animation","framer-motion"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/framer-motion-react-animations",source:"@site/blog/2022-09-01-framer-text-animations.md",title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",date:"2022-09-01T00:00:00.000Z",formattedDate:"September 1, 2022",tags:[{label:"css",permalink:"/blog/tags/css"},{label:"react",permalink:"/blog/tags/react"},{label:"animation",permalink:"/blog/tags/animation"},{label:"framer-motion",permalink:"/blog/tags/framer-motion"}],readingTime:8.64,hasTruncateMarker:!0,authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],frontMatter:{title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",slug:"framer-motion-react-animations",authors:"joel_ezimorah",tags:["css","react","animation","framer-motion"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-01-framer-text-animations/social.png",hide_table_of_contents:!1},prevItem:{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui"},nextItem:{title:"Using Google Lighthouse to improve app performance",permalink:"/blog/lighthouse-google-chrome"},relatedPosts:[{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.785,date:"2022-03-01T00:00:00.000Z"},{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering",formattedDate:"August 26, 2022",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:14.665,date:"2022-08-26T00:00:00.000Z"},{title:"React Hook Form Validation with Complete Examples",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:17.52,date:"2022-09-27T00:00:00.000Z"}],authorPosts:[]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2}],s={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"When a tool like Framer Motion is available, why write many lines of CSS code to create an animation? Web applications look more exciting and beautiful when they are animated."),(0,r.kt)("p",null," Many developers avoid adding animation to their web applications since animation codes can be rigorous to write. However, with Framer Motion, you can execute animations with only a few lines of code. This external library in React.js makes animation incredibly simple, allowing the developer to concentrate on other aspects of the project."),(0,r.kt)("p",null,"In this article, we'll examine Framer Motion's functionality, installation process, and usability by using it to animate text and images."))}p.isMDXComponent=!0}}]);