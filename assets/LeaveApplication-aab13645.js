import{u as v,r as i,j as e,h as g,b as t,F as w,B as y,L as N,a as p,A as _,R as L}from"./index-f106b69c.js";import{G as C}from"./GetProfileList-c24037eb.js";const R=()=>{const b=v(),o=localStorage.getItem("username"),[u,c]=i.useState(!1),[m,f]=i.useState(),[r,h]=i.useState({leave_reason:"",leave_type:"",start_date:"",end_date:"",alternative_staff:"",applicant:""}),s=["Half-day leave","Casual Leave","One-day leave","Earned/Vacation/Privilege Leave","Sick Leave/Medical Leave","Maternity Leave","Paternity leave","Sabbatical Leave","Compensatory leave","Bereavement leave","Compassionate leave"],l=C();if(!l)return e(g,{});const n=d=>{const{name:a,value:k}=d.target;f(x=>({...x,[a]:k}))};return t(w,{children:[e(y,{pageName:"Leave Application"}),u?e(N,{}):e("div",{className:"grid grid-cols-1 gap-9 sm:grid-cols-1",children:t("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[e("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:e("h3",{className:"font-medium text-black dark:text-white",children:"Leave Application Form"})}),e("form",{action:"",onSubmit:async d=>{d.preventDefault(),c(!0),m.applicant=o;try{(await p.post(_,m,{...L()})).status===201&&(window.alert("Submitted Application Successfully!"),b("/applications/my-applications"))}catch(a){p.isAxiosError(a)&&a.response?a.response.status===400?h({leave_reason:a.response.data.leave_reason||"",leave_type:a.response.data.leave_type||"",alternative_staff:a.response.data.alternative_staff||"",applicant:a.response.data.applicant||"",start_date:a.response.data.start_date||"",end_date:a.response.data.end_date||""}):(console.error("An error occurred:",a.message),window.alert(`An error occurred:${a.message}`)):(console.error("An unexpected error occurred:",a),window.alert(`An error occurred:${a}`))}finally{c(!1)}},children:t("div",{className:"p-6.5",children:[t("div",{className:"mb-4.5",children:[e("label",{className:"mb-3 block font-medium text-black dark:text-white",children:"Applicant"}),e("input",{type:"text",value:o||"",disabled:!0,className:"w-full text-black dark:text-white rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"}),r.applicant&&e("span",{className:"flex items-center font-medium text-red tracking-wide text-red-500 text-xs mt-1 ml-1",children:r.applicant})]}),t("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-black dark:text-white",children:"Select Leave type"}),t("div",{className:"relative z-20 bg-white dark:bg-form-input",children:[t("select",{name:"leave_type",onChange:n,className:"relative z-20 w-full text-black dark:text-white appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[e("option",{value:"",children:"select"}),s==null?void 0:s.map((d,a)=>e("option",{value:d,children:d},a))]}),e("span",{className:"absolute top-1/2 right-4 z-10 -translate-y-1/2",children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("g",{opacity:"0.8",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z",fill:"#637381"})})})}),r.leave_type&&e("span",{className:"flex items-center font-medium text-red tracking-wide text-red-500 text-xs mt-1 ml-1",children:r.leave_type})]})]}),t("div",{className:"mb-4.5",children:[e("label",{className:"mb-2.5 block text-black dark:text-white",children:"Select Alternative Staff"}),t("div",{className:"relative z-20 bg-white dark:bg-form-input",children:[t("select",{name:"alternative_staff",onChange:n,className:"relative z-20 w-full text-black dark:text-white appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[e("option",{value:"",children:"select"}),l==null?void 0:l.map(d=>t("option",{value:d.id,children:[d.name," | ",d.user]},d.id))]}),e("span",{className:"absolute top-1/2 right-4 z-10 -translate-y-1/2",children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("g",{opacity:"0.8",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z",fill:"#637381"})})})}),r.alternative_staff&&e("span",{className:"flex items-center font-medium text-red tracking-wide text-red-500 text-xs mt-1 ml-1",children:r.alternative_staff})]})]}),t("div",{className:"mb-4.5",children:[e("label",{className:"mb-3 block text-black dark:text-white",children:"Start Date"}),e("div",{className:"relative",children:e("input",{type:"date",name:"start_date",onChange:n,className:"custom-input-date text-black dark:text-white custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})}),r.start_date&&e("span",{className:"flex items-center font-medium text-red tracking-wide text-red-500 text-xs mt-1 ml-1",children:r.start_date})]}),t("div",{className:"mb-4.5",children:[e("label",{className:"mb-3 block text-black dark:text-white",children:"End Date"}),t("div",{className:"relative",children:[e("input",{name:"end_date",type:"date",onChange:n,className:"custom-input-date text-black dark:text-white custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"}),r.end_date&&e("span",{className:"flex items-center  font-medium text-red tracking-wide text-red-500 text-xs mt-1 ml-1",children:r.end_date})]})]}),t("div",{className:"mb-4.5",children:[e("label",{className:"mb-3 block text-black dark:text-white",children:"Reason"}),e("textarea",{name:"leave_reason",onChange:n,rows:10,className:"block p-2.5 w-full text-sm text-black dark:text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Write your reason here..."}),r.leave_reason&&e("span",{className:"flex items-center font-medium text-red tracking-wide text-red-500 text-xs mt-1 ml-1",children:r.leave_reason})]}),e("button",{className:"flex w-full justify-center rounded bg-primary p-3 font-medium text-white",children:"Next"})]})})]})})]})};export{R as default};
