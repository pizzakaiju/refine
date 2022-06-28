"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1782],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9003:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n.p+"assets/images/delete-mui-ca970ca582476a54b6973b7b1bd80068.png",i=n.p+"assets/images/confirmation-mui-eacb44fe1442c13d9c700995860f8b93.gif",d=["components"],s={id:"delete-button",title:"Delete"},p=void 0,m={unversionedId:"ui-frameworks/mui/components/buttons/delete-button",id:"ui-frameworks/mui/components/buttons/delete-button",isDocsHomePage:!1,title:"Delete",description:"` uses Material UI  and ` components.",source:"@site/docs/ui-frameworks/mui/components/buttons/delete.md",sourceDirName:"ui-frameworks/mui/components/buttons",slug:"/ui-frameworks/mui/components/buttons/delete-button",permalink:"/docs/ui-frameworks/mui/components/buttons/delete-button",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/mui/components/buttons/delete.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1656407404,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"delete-button",title:"Delete"},sidebar:"someSidebar",previous:{title:"Create",permalink:"/docs/ui-frameworks/mui/components/buttons/create-button"},next:{title:"Edit",permalink:"/docs/ui-frameworks/mui/components/buttons/edit-button"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"<code>recordItemId</code>",id:"recorditemid",children:[],level:3},{value:"<code>onSuccess</code>",id:"onsuccess",children:[],level:3},{value:"<code>mutationMode</code>",id:"mutationmode",children:[],level:3},{value:"<code>hideText</code>",id:"hidetext",children:[],level:3},{value:"<code>ignoreAccessControlProvider</code>",id:"ignoreaccesscontrolprovider",children:[],level:3}],level:2},{value:"How to override confirm texts?",id:"how-to-override-confirm-texts",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties-1",children:[],level:3}],level:2}],u={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," uses Material UI ",(0,l.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/loading-button/#main-content"},(0,l.kt)("inlineCode",{parentName:"a"},"<LoadingButton>"))," and ",(0,l.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-dialog/"},(0,l.kt)("inlineCode",{parentName:"a"},"<Dialog>"))," components.\nWhen you try to delete something, a pop-up shows up and asks for confirmation. When confirmed it executes the ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useDelete"},(0,l.kt)("inlineCode",{parentName:"a"},"useDelete"))," method provided by your ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},(0,l.kt)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable } from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    // highlight-next-line\n    DeleteButton,\n    TableHead,ev\n    TableRow,\n    TableCell,\n    TableBody,\n} from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>();\n\n    const { data } = tableQueryResult;\n\n    return (\n        <List>\n            <Table aria-label="simple table">\n                <TableHead>\n                    <TableRow>\n                        <TableCell>ID</TableCell>\n                        <TableCell>Title</TableCell>\n                        <TableCell align="center">Action</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {data?.data.map((row) => (\n                        <TableRow key={row.id}>\n                            <TableCell>{row.id}</TableCell>\n                            <TableCell component="th" scope="row">\n                                {row.title}\n                            </TableCell>\n                            <TableCell align="center">\n                                //highlight-start\n                                <DeleteButton\n                                    recordItemId={row.id}\n                                />\n                                //highlight-end\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,l.kt)("p",null,"Will look like this:"),(0,l.kt)("div",{class:"img-container"},(0,l.kt)("div",{class:"window"},(0,l.kt)("div",{class:"control red"}),(0,l.kt)("div",{class:"control orange"}),(0,l.kt)("div",{class:"control green"})),(0,l.kt)("img",{src:o,alt:"Default delete button"})),(0,l.kt)("br",null),(0,l.kt)("p",null,"When clicked, it opens the confirmation window like this:"),(0,l.kt)("div",{class:"img-container"},(0,l.kt)("div",{class:"window"},(0,l.kt)("div",{class:"control red"}),(0,l.kt)("div",{class:"control orange"}),(0,l.kt)("div",{class:"control green"})),(0,l.kt)("img",{src:i,alt:"Confirmation window"})),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"recorditemid"},(0,l.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which record will be deleted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-mui";\n\nexport const MyDeleteComponent = () => {\n    return <DeleteButton resourceNameOrRouteName="posts" recordItemId="1" />;\n};\n')),(0,l.kt)("p",null,"Clicking the button will trigger the ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useDelete"},(0,l.kt)("inlineCode",{parentName:"a"},"useDelete"))," method and then the record whose resource is ",(0,l.kt)("inlineCode",{parentName:"p"},"post")," and whose id is ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," gets deleted."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"<DeleteButton>"))," component reads the id information from the route by default."))),(0,l.kt)("h3",{id:"onsuccess"},(0,l.kt)("inlineCode",{parentName:"h3"},"onSuccess")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"onSuccess")," can be used if you want to do anything on the result returned after the delete request."),(0,l.kt)("p",null,"For example, let's ",(0,l.kt)("inlineCode",{parentName:"p"},"console.log")," after deletion:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    // highlight-next-line\n    DeleteButton,\n    TableHead,\n    TableRow,\n    TableCell,\n    TableBody,\n} from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>();\n\n    const { data } = tableQueryResult;\n\n    return (\n        <List>\n            <Table aria-label="simple table">\n                <TableHead>\n                    <TableRow>\n                        <TableCell>ID</TableCell>\n                        <TableCell>Title</TableCell>\n                        <TableCell align="center">Action</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {data?.data.map((row) => (\n                        <TableRow key={row.id}>\n                            <TableCell>{row.id}</TableCell>\n                            <TableCell component="th" scope="row">\n                                {row.title}\n                            </TableCell>\n                            <TableCell align="center">\n                                <DeleteButton\n                                    recordItemId={record.id}\n                                    // highlight-start\n                                    onSuccess={(value) => {\n                                        console.log(value);\n                                    }}\n                                    // highlight-end\n                                />\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,l.kt)("h3",{id:"mutationmode"},(0,l.kt)("inlineCode",{parentName:"h3"},"mutationMode")),(0,l.kt)("p",null,"Determines which mode mutation will have while executing ",(0,l.kt)("inlineCode",{parentName:"p"},"<DeleteButton>"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/mutation-mode"},"Refer to the mutation mode docs for further information. ","\u2192")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable } from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    // highlight-next-line\n    DeleteButton,\n    TableHead,\n    TableRow,\n    TableCell,\n    TableBody,\n} from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>();\n\n    const { data } = tableQueryResult;\n\n    return (\n        <List>\n            <Table aria-label="simple table">\n                <TableHead>\n                    <TableRow>\n                        <TableCell>ID</TableCell>\n                        <TableCell>Title</TableCell>\n                        <TableCell align="center">Action</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {data?.data.map((row) => (\n                        <TableRow key={row.id}>\n                            <TableCell>{row.id}</TableCell>\n                            <TableCell component="th" scope="row">\n                                {row.title}\n                            </TableCell>\n                            <TableCell align="center">\n                                <DeleteButton\n                                    recordItemId={row.id}\n                                    // highlight-next-line\n                                    mutationMode="undoable"\n                                />\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,l.kt)("h3",{id:"hidetext"},(0,l.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,l.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-mui";\n\nexport const MyDeleteComponent = () => {\n    return <DeleteButton hideText />;\n};\n')),(0,l.kt)("h3",{id:"ignoreaccesscontrolprovider"},(0,l.kt)("inlineCode",{parentName:"h3"},"ignoreAccessControlProvider")),(0,l.kt)("p",null,"It is used to skip access control for the button so that it doesn't check for access control. This is relevant only when an ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/providers/accessControl-provider"},(0,l.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,l.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-mui";\n\nexport const MyListComponent = () => {\n    return <DeleteButton ignoreAccessControlProvider />;\n};\n')),(0,l.kt)("h2",{id:"how-to-override-confirm-texts"},"How to override confirm texts?"),(0,l.kt)("p",null,"You can change the text that appears when you confirm a transaction with ",(0,l.kt)("inlineCode",{parentName:"p"},"confirmTitle")," prop, as well as what ok and cancel buttons text look like with ",(0,l.kt)("inlineCode",{parentName:"p"},"confirmOkText")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"confirmCancelText")," props."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-mui";\n\nexport const MyDeleteComponent = () => {\n    return (\n        <DeleteButton\n            confirmTitle="Title"\n            confirmOkText="Ok Text"\n            confirmCancelText="Delete Text"\n        />\n    );\n};\n')),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"properties-1"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"props"),(0,l.kt)("td",{parentName:"tr",align:null},"Material UI button properties"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/button/"},(0,l.kt)("inlineCode",{parentName:"a"},"ButtonProps"))," & ",(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#delete-button-props"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteButtonProps"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resourceNameOrRouteName"),(0,l.kt)("td",{parentName:"tr",align:null},"Determines which resource to use for redirection"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from route")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"recordItemId"),(0,l.kt)("td",{parentName:"tr",align:null},"Determines which id to use for deletion"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#basekey"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseKey"))),(0,l.kt)("td",{parentName:"tr",align:null},"Record id that it reads from route")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onSuccess"),(0,l.kt)("td",{parentName:"tr",align:null},"Called when ",(0,l.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," is successful"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(value: DeleteOneResponse) => void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,l.kt)("td",{parentName:"tr",align:null},"Determines when mutations are executed."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"pessimistic"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"optimistic"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideText"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows to hide button text"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confirmTitle"),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the confirmation box"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"Are you sure?"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confirmOkText"),(0,l.kt)("td",{parentName:"tr",align:null},"The text of the Confirm button"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"Delete"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confirmCancelText"),(0,l.kt)("td",{parentName:"tr",align:null},"The text of the Cancel button"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"Cancel"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"children"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the button text"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"Delete"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ignoreAccessControlProvider"),(0,l.kt)("td",{parentName:"tr",align:null},"Skip access control"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the icon component of button"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/material-icons/?query=delete&theme=Outlined&selected=DeleteOutlineOutlined"},(0,l.kt)("inlineCode",{parentName:"a"},"<DeleteOutlineIcon />")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"svgIconProps"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows to set icon props"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/svg-icon/#props"},(0,l.kt)("inlineCode",{parentName:"a"},"SvgIconProps"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metaData"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,l.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,l.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,l.kt)("td",{parentName:"tr",align:null},"{}")))))}k.isMDXComponent=!0}}]);