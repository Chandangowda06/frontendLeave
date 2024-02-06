import{u as x,r as c,b as t,F as N,j as e,B as v,L as y,a as p,f as w,R as D}from"./index-86f17670.js";import{D as b}from"./index-52db1466.js";import{G as S}from"./GetUsersList-8b09d97d.js";import{G as A}from"./GetCollegeList-88d2a99b.js";const G=()=>{const h=x(),s=S(),n=A(),[u,m]=c.useState(!1),[o,d]=c.useState({name:"",hod:"",college:""}),[l,f]=c.useState({name:"",hod:"",college:""}),i=r=>{d({name:"",hod:"",college:""});const{name:a,value:g}=r.target;f(k=>({...k,[a]:g}))};return t(N,{children:[e(v,{pageName:"Add Departments"}),e("div",{className:"grid grid-cols-1 gap-9 sm:grid-cols-1",children:t("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e("h3",{className:"font-medium text-black dark:text-white",children:"Add Department"})}),e("form",{action:"",onSubmit:async r=>{r.preventDefault(),m(!0);try{(await p.post(`${w}`,l,{...D()})).status===201&&(d({name:"",hod:"",college:""}),window.alert("Registered Department "+l.name+" of "+l.college+" Successfully!"),h("/dashboard/departments"))}catch(a){p.isAxiosError(a)&&a.response?a.response.status===400?d({name:a.response.data.name||"",hod:a.response.data.hod||"",college:a.response.data.college||""}):console.error("An error occurred:",a.message):console.error("An unexpected error occurred:",a)}finally{m(!1)}},children:u?e(y,{}):t("div",{className:"p-6.5",children:[t("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-black dark:text-white",children:"Department Name"}),e("input",{type:"text",name:"name",placeholder:"Enter department name",onChange:i,className:"w-full text-black dark:text-white rounded border-[1.5px] placeholder-gray-500 border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"}),o.name&&e("span",{style:{color:"red"},className:"flex items-center font-medium  tracking-wide text-red-500 text-xs mt-1 ml-1",children:o.name})]}),t("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-black dark:text-white",children:"Select HOD"}),t("div",{className:"relative z-20 bg-white dark:bg-form-input",children:[e("span",{className:"absolute top-1/2 left-4 z-30 -translate-y-1/2",children:b()}),t("select",{onChange:i,name:"hod",className:"relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[e("option",{value:"",children:"select"}),s==null?void 0:s.map(r=>t("option",{value:r.username,children:[r.username," (",r.email,")"]},r.id))]}),o.hod&&e("span",{style:{color:"red"},className:"flex items-center font-medium  tracking-wide text-red-500 text-xs mt-1 ml-1",children:o.hod})]})]}),t("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-black dark:text-white",children:"Select College"}),t("div",{className:"relative z-20 bg-white dark:bg-form-input",children:[e("span",{className:"absolute top-1/2 left-4 z-30 -translate-y-1/2",children:b()}),t("select",{onChange:i,name:"college",className:"relative text-black dark:text-white z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[e("option",{value:"",children:"select"}),n==null?void 0:n.map(r=>e("option",{value:r.name,children:r.name},r.id))]}),o.college&&e("span",{style:{color:"red"},className:"flex items-center font-medium  tracking-wide text-red-500 text-xs mt-1 ml-1",children:o.college})]})]}),e("button",{type:"submit",className:"flex w-full justify-center rounded bg-primary p-3 font-medium text-white",children:"Add"})]})})]})})]})};export{G as default};
