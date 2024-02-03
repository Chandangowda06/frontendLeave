import{r as i,j as r,F as k,L as h,b as s,a as m,P as x}from"./index-9818a022.js";function w(){const[a,t]=i.useState({email:"",error:"",message:""}),[c,l]=i.useState(!1),[u,n]=i.useState({email:""}),b=o=>{t({email:"",error:"",message:""});const{name:e,value:d}=o.target;n(f=>({...f,[e]:d}))},p=async o=>{o.preventDefault(),l(!0);try{const e=await m.post(`${x}`,u);e.status===200&&(console.log(e),t({email:"",error:"",message:"Password reset link sent to your email."}),window.alert("Password reset link sent to your email"))}catch(e){m.isAxiosError(e)&&e.response&&(e.response.status===400?(t({email:e.response.data.email||"",error:e.response.data.error||"",message:e.response.data.message||""}),n(d=>({...d}))):console.error("An error occurred:",e.message))}finally{l(!1)}};return r(k,{children:c?r(h,{}):r("div",{className:"grid grid-cols-1 gap-9 sm:grid-cols-1",children:s("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[r("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:s("h3",{className:"font-medium text-black dark:text-white",children:["Reset Password",a.error&&r("span",{style:{color:"red"},className:"flex items-center font-medium pt-5  tracking-wide text-red-500 text-xs mt-1 ml-1",children:a.error})]})}),r("form",{action:"",onSubmit:p,children:s("div",{className:"p-6.5",children:[s("div",{className:"mb-4.5",children:[r("label",{className:"mb-2.5 block text-black dark:text-white",children:"Email"}),r("input",{type:"email",name:"email",onChange:b,placeholder:"Enter email address",className:"w-full text-black dark:text-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0}),a.email&&r("span",{style:{color:"red"},className:"flex items-center font-medium  tracking-wide text-red-500 text-xs mt-1 ml-1",children:a.email})]}),r("button",{type:"submit",className:"flex w-full justify-center rounded bg-primary p-3 font-medium text-white",children:"Send Link"})]})})]})})})}export{w as default};
