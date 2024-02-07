import{r as d,j as e,F as y,b as a,a as v,f as N,R as C,u as S,B as D,L as E}from"./index-1958a9a1.js";import{D as M,E as L,a as R,b as j}from"./DeleteRequest-c9bba6d0.js";import{D as O}from"./index-6896a896.js";import{G as z}from"./GetUsersList-e343ca9d.js";import{G as T}from"./GetDeptList-e055bfc7.js";const A=({department:n,onClose:c,onSave:r})=>{const[u,b]=d.useState(!0),[f,m]=d.useState(),h=z(),[l,o]=d.useState(),x=()=>{f&&r(f),c(),b(!1)},g=()=>{c(),b(!1)},k=s=>{o({id:"",name:"",principal:""});const{name:p,value:w}=s.target;m(t=>({...t,[p]:w}))};return e(y,{children:u&&e("div",{className:"overflow-y-auto max-h-[400px] shadow-2xl  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:a("div",{id:"popup-modal",className:"overflow-y-auto overflow-x-hidden relative bg-white rounded-lg shadow dark:bg-gray-700",children:[a("button",{type:"button",className:"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:g,children:[e("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e("span",{className:"sr-only",children:"Close modal"})]}),a("div",{className:"p-4 md:p-5 text-center",children:[a("h3",{className:"mb-5 text-lg font-normal text-gray-900 dark:text-gray-400",children:["Edit ",n==null?void 0:n.name," details"]}),e("hr",{}),e("div",{className:"p-4",children:e("form",{action:"",children:a("div",{className:"p-6.5",children:[a("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-left text-black dark:text-white",children:"Change Department Name"}),e("input",{type:"text",name:"name",onChange:k,placeholder:"Enter full name",className:"w-full text-black dark:text-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0}),(l==null?void 0:l.name)&&e("span",{className:"flex items-center font-medium  tracking-wide text-red-500  mt-1 ml-1",children:l.name})]}),a("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-left text-black dark:text-white",children:"Change HOD"}),a("div",{className:"relative z-20 bg-white dark:bg-form-input",children:[e("span",{className:"absolute top-1/2 left-4 z-30 -translate-y-1/2",children:O()}),a("select",{onChange:k,name:"hod",className:"relative text-black dark:text-white z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",required:!0,children:[e("option",{value:"",children:"select"}),h==null?void 0:h.map(s=>a("option",{value:s.username,children:[s.username,"(",s.email,")"]},s.id))]}),e("span",{className:"absolute top-1/2 right-4 z-10 -translate-y-1/2",children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("g",{opacity:"0.8",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z",fill:"#637381"})})})})]}),(l==null?void 0:l.hod)&&e("span",{className:"flex items-center font-medium  tracking-wide text-red-500  mt-1 ml-1",children:l.hod})]})]})})}),e("button",{"data-modal-hide":"popup-modal",type:"button",className:"text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2",onClick:x,children:"save changes"}),e("button",{type:"button",className:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",onClick:g,children:"No, cancel"})]})]})})})},B=async(n,c)=>{try{(await v.patch(`${N}${c}/`,n,{...C()})).status===200&&(window.alert("Modified Department details Successfully!"),window.location.reload())}catch(r){console.error("Error updating department:",r),v.isAxiosError(r)&&r.response&&r.response.status===400&&window.alert("Invalid department details")}},H=()=>{const n=T(),[c,r]=d.useState(!1),[u,b]=d.useState(""),[f,m]=d.useState(!1),[h,l]=d.useState(!1),[o,x]=d.useState(null),g=S(),k=t=>{x(t),m(!0)},s=t=>{x(t),l(!0)},p=n==null?void 0:n.filter(t=>Object.values(t).some(i=>i&&typeof i=="string"&&i.toLowerCase().includes(u.toLowerCase())));return a(y,{children:[" ",e(D,{pageName:"Departments"}),c?e(E,{}):a("div",{className:"rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1",children:[a("div",{className:"flex items-center justify-between mb-6",children:[e("h4",{className:"text-xl font-semibold text-black dark:text-white",children:"All Departments"}),e("div",{className:"hidden sm:block",children:e("form",{action:"",onSubmit:t=>{t.preventDefault()},children:a("div",{className:"relative",children:[e("button",{className:"absolute top-1/2 left-0 -translate-y-1/2",children:a("svg",{className:"fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z",fill:""}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z",fill:""})]})}),e("input",{type:"text",placeholder:"Type to search...",className:"w-full bg-transparent pr-4 pl-9 focus:outline-none",value:u,onChange:t=>b(t.target.value)})]})})})]}),e("div",{className:"max-w-full overflow-x-auto",children:a("table",{className:"w-full table-auto",children:[e("thead",{children:a("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Department Name"}),e("th",{className:"min-w-[150px] py-4 px-4 font-medium text-black dark:text-white",children:"HOD"}),e("th",{className:"min-w-[150px] py-4 px-4 font-medium text-black dark:text-white",children:"College"}),e("th",{className:"py-4 px-4 font-medium text-black dark:text-white",children:"Actions"})]})}),e("tbody",{children:p==null?void 0:p.map(t=>a("tr",{children:[e("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:e("div",{className:"flex items-center gap-3 p-2.5 xl:p-5",children:e("p",{className:"text-black dark:text-white sm:block",children:t.name})})}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:e("p",{className:"inline-flex text-black dark:text-white",children:t.hod})}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:e("p",{className:"inline-flex text-black dark:text-white",children:t.college})}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:a("div",{className:"flex items-center space-x-3.5",children:[e("button",{onClick:()=>s(t),className:"hover:text-primary",children:e("img",{className:"w-7 h-7 rounded-full",src:M,alt:"Delete"})}),e("button",{onClick:()=>k(t),className:"hover:text-primary",children:e("img",{className:"w-7 h-7 rounded-full",src:L,alt:"Edit"})}),e("button",{className:"hover:text-primary"})]})})]},t.id))})]})}),h&&e(R,{object:o,onClose:()=>l(!1),onDelete:()=>{r(!0),j(N,o==null?void 0:o.id,g),console.log("Deleted user",o==null?void 0:o.name),r(!1),l(!1)}}),f&&e(A,{department:o,onClose:()=>m(!1),onSave:t=>{r(!0);const i=new FormData;t.name&&i.append("name",t.name),t.hod&&i.append("hod",t.hod),B(i,o.id),r(!1),m(!1)}})]})]})};export{H as default};
