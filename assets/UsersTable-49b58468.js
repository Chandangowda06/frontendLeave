import{r as o,j as e,F as w,b as r,u as C,B as S,U as D,n as L}from"./index-fe9762f0.js";import{D as E,E as z,a as M,b as _}from"./DeleteRequest-b489c99a.js";import{G as R}from"./GetProfileList-42891a4a.js";import{G as j}from"./GetRolesList-2e743b5b.js";import{G}from"./GetDeptList-e3d2f265.js";import{G as I}from"./GetCollegeList-6514f65f.js";import{D as f}from"./index-d5c65384.js";import{u as P}from"./ProfilePatchRequest-a15b5db5.js";const q=({user:d,onClose:h,onSave:u})=>{const[x,i]=o.useState(!0),[s,p]=o.useState(),l=j(),c=G(),m=I(),[n,k]=o.useState({staff_id:"",staff_role:"",name:"",phone:"",college:"",department:"",image:"",user:""}),b=()=>{s&&u(s),h(),i(!1)},g=()=>{h(),i(!1)},t=a=>{k({staff_id:"",staff_role:"",name:"",phone:"",college:"",department:"",image:"",user:""});const{name:v,value:y}=a.target;p(N=>({...N,[v]:y}))};return e(w,{children:x&&e("div",{className:"overflow-y-auto max-h-[400px] shadow-2xl  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:r("div",{id:"popup-modal",className:"overflow-y-auto overflow-x-hidden relative bg-white rounded-lg shadow dark:bg-gray-700",children:[r("button",{type:"button",className:"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:g,children:[e("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e("span",{className:"sr-only",children:"Close modal"})]}),r("div",{className:"p-4 md:p-5 text-center",children:[r("h3",{className:"mb-5 text-lg font-normal text-gray-900 dark:text-gray-400",children:["Edit ",d==null?void 0:d.user," Profile"]}),e("hr",{}),e("div",{className:"p-4",children:e("form",{action:"",children:r("div",{className:"p-6.5",children:[r("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-left text-black dark:text-white",children:"Staff ID"}),e("input",{type:"text",name:"staff_id",onChange:t,placeholder:"Enter Staff ID",className:"w-full text-black dark:text-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0}),n.staff_id&&e("span",{style:{color:"red"},className:"flex items-center font-medium  tracking-wide text-red-500 text-xs mt-1 ml-1",children:n.staff_id})]}),r("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-left text-black dark:text-white",children:"Name"}),e("input",{type:"text",name:"name",onChange:t,placeholder:"Enter full name",className:"w-full text-black dark:text-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0}),n.name&&e("span",{className:"flex items-center font-medium  tracking-wide text-red-500  mt-1 ml-1",children:n.name})]}),r("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-left text-black dark:text-white",children:"Select Role"}),r("div",{className:"relative z-20 bg-white dark:bg-form-input",children:[e("span",{className:"absolute top-1/2 left-4 z-30 -translate-y-1/2",children:f()}),r("select",{onChange:t,name:"staff_role",className:"relative text-black dark:text-white z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",required:!0,children:[e("option",{value:"",children:"select"}),l==null?void 0:l.map(a=>e("option",{value:a.id,children:a.name},a.id))]}),e("span",{className:"absolute top-1/2 right-4 z-10 -translate-y-1/2",children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("g",{opacity:"0.8",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z",fill:"#637381"})})})})]}),n.staff_role&&e("span",{className:"flex items-center font-medium  tracking-wide text-red-500  mt-1 ml-1",children:n.staff_role})]}),r("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-left text-black dark:text-white",children:"Phone"}),e("input",{type:"text",name:"phone",onChange:t,placeholder:"Enter phone number",className:"w-full text-black dark:text-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0,maxLength:10,minLength:10}),n.phone&&e("span",{className:"flex items-center font-medium  tracking-wide text-red-500  mt-1 ml-1",children:n.phone})]}),r("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-left text-black dark:text-white",children:"Select College *"}),r("div",{className:"relative z-20 bg-white dark:bg-form-input",children:[e("span",{className:"absolute top-1/2 left-4 z-30 -translate-y-1/2",children:f()}),r("select",{onChange:t,name:"college",className:"relative text-black dark:text-white z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[e("option",{value:"",children:"select"}),m==null?void 0:m.map(a=>e("option",{value:a.name,children:a.name},a.id))]}),e("span",{className:"absolute top-1/2 right-4 z-10 -translate-y-1/2"})]}),n.college&&e("span",{className:"flex items-center font-medium  tracking-wide text-red-500  mt-1 ml-1",children:n.college})]}),r("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 text-left block text-black dark:text-white",children:"Select Department *"}),r("div",{className:"relative z-20 bg-white dark:bg-form-input",children:[e("span",{className:"absolute top-1/2 left-4 z-30 -translate-y-1/2",children:f()}),r("select",{onChange:t,name:"department",className:"relative text-black dark:text-white z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[e("option",{value:"",children:"select"}),c==null?void 0:c.filter(a=>a.college===(s==null?void 0:s.college)).map(a=>e("option",{value:a.name,children:a.name},a.id))]}),e("span",{className:"absolute top-1/2 right-4 z-10 -translate-y-1/2",children:f()})]}),n.department&&e("span",{className:"flex items-center font-medium  tracking-wide text-red-500  mt-1 ml-1",children:n.department})]})]})})}),e("button",{"data-modal-hide":"popup-modal",type:"button",className:"text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2",onClick:b,children:"save changes"}),e("button",{type:"button",className:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",onClick:g,children:"No, cancel"})]})]})})})},H=()=>{const d=R();o.useState(!1);const[h,u]=o.useState(""),[x,i]=o.useState(!1),[s,p]=o.useState(!1),[l,c]=o.useState(null),m=C(),n=t=>{c(t),i(!0)},k=t=>{c(t),p(!0)},b=d==null?void 0:d.filter(t=>Object.values(t).some(a=>a&&typeof a=="string"&&a.toLowerCase().includes(h.toLowerCase())));return r(w,{children:[" ",e(S,{pageName:"Users"}),r("div",{className:"rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1",children:[r("div",{className:"flex items-center justify-between mb-6",children:[e("h4",{className:"text-xl font-semibold text-black dark:text-white",children:"All Users"}),e("div",{className:"hidden sm:block",children:e("form",{action:"",onSubmit:t=>{t.preventDefault()},children:r("div",{className:"relative",children:[e("button",{className:"absolute top-1/2 left-0 -translate-y-1/2",children:r("svg",{className:"fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z",fill:""}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z",fill:""})]})}),e("input",{type:"text",placeholder:"Type to search...",className:"w-full bg-transparent pr-4 pl-9 focus:outline-none",value:h,onChange:t=>u(t.target.value)})]})})})]}),e("div",{className:"max-w-full overflow-x-auto",children:r("table",{className:"w-full table-auto",children:[e("thead",{children:r("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"User"}),e("th",{className:"min-w-[150px] py-4 px-4 font-medium text-black dark:text-white",children:"Role"}),e("th",{className:"min-w-[120px] py-4 px-4 font-medium text-black dark:text-white",children:"Department"}),e("th",{className:"min-w-[120px] py-4 px-4 font-medium text-black dark:text-white",children:"College"}),e("th",{className:"py-4 px-4 font-medium text-black dark:text-white",children:"Actions"})]})}),e("tbody",{children:b==null?void 0:b.map(t=>r("tr",{children:[e("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:r("div",{className:"flex items-center gap-3 p-2.5 xl:p-5",children:[e("div",{children:e("img",{className:"w-10 h-10 rounded-full",src:t.image?t.image:D,alt:"Profile image"})}),e("p",{className:"text-black dark:text-white sm:block",children:t.name})]})}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:e("p",{className:"inline-flex text-black dark:text-white",children:t.staff_role?t.staff_role.name:"-----"})}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:e("p",{className:"inline-flex text-black dark:text-white",children:t.department?t.department:"-----"})}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:e("p",{className:"inline-flex text-black dark:text-white",children:t.college?t.college:"-----"})}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:r("div",{className:"flex items-center space-x-3.5",children:[e("button",{onClick:()=>k(t),className:"hover:text-primary",children:e("img",{className:"w-7 h-7 rounded-full",src:E,alt:"Delete"})}),e("button",{onClick:()=>n(t),className:"hover:text-primary",children:e("img",{className:"w-7 h-7 rounded-full",src:z,alt:"Edit"})}),e("button",{className:"hover:text-primary"})]})})]},t.id))})]})}),s&&e(M,{object:l,onClose:()=>p(!1),onDelete:()=>{_(L,l==null?void 0:l.user,m),console.log("Deleted user",l==null?void 0:l.user),p(!1)}}),x&&e(q,{user:l,onClose:()=>i(!1),onSave:t=>{P(t,l==null?void 0:l.user,m,"/dashboard/users/"),i(!1)}})]})]})};export{H as default};
