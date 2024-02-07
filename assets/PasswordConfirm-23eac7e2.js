import{l as h,u as g,r as d,j as r,F as y,L as N,b as a,a as p,s as v}from"./index-fe9762f0.js";function S(){const{uidb64:n,token:i}=h(),l=g(),[s,t]=d.useState({password:"",password2:"",error:""}),[u,c]=d.useState(!1),[b,w]=d.useState({password:"",password2:""}),m=o=>{t({password:"",password2:"",error:""});const{name:e,value:k}=o.target;w(x=>({...x,[e]:k}))},f=async o=>{if(o.preventDefault(),c(!0),n&&i)try{(await p.post(`${v}/${n}/${i}/`,b)).status===200&&(t({password:"",password2:"",error:""}),window.alert("Password reset success"),l("/login"))}catch(e){p.isAxiosError(e)&&e.response&&(e.response.status===400?(console.log("Error object:",e.response.data),t({password:e.response.data.password,error:e.response.data.error,password2:e.response.data.password2})):console.error("An error occurred:",e.message))}finally{c(!1)}else l("/")};return r(y,{children:u?r(N,{}):r("div",{className:"grid grid-cols-1 gap-9 sm:grid-cols-1",children:a("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[r("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:a("h3",{className:"font-medium text-black dark:text-white",children:["Reset Password",s.error&&r("span",{style:{color:"red"},className:"flex items-center font-medium pt-5  tracking-wide text-red-500 text-xs mt-1 ml-1",children:s.error})]})}),r("form",{action:"",onSubmit:f,children:a("div",{className:"p-6.5",children:[a("div",{className:"mb-4.5",children:[r("label",{className:"mb-2.5 block text-black dark:text-white",children:"Password"}),r("input",{type:"password",name:"password",onChange:m,placeholder:"Enter password",className:"w-full text-black dark:text-white rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0,autoComplete:"off"}),s.password&&r("span",{style:{color:"red"},className:"flex items-center font-medium  tracking-wide text-red-500 text-xs mt-1 ml-1",children:s.password2})]}),a("div",{className:"mb-5.5",children:[r("label",{className:"mb-2.5 block text-black dark:text-white",children:"Re-type Password"}),r("input",{type:"password",name:"password2",onChange:m,placeholder:"Re-enter password",className:"w-full text-black dark:text-white  rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",required:!0,autoComplete:"off"}),s.password2&&r("span",{style:{color:"red"},className:"flex items-center font-medium  tracking-wide text-red-500 text-xs mt-1 ml-1",children:s.password2})]}),r("button",{type:"submit",className:"flex w-full justify-center rounded bg-primary p-3 font-medium text-white",children:"Set Password"})]})})]})})})}export{S as default};
