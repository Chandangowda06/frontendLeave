import{r as i,j as e,F as c,b as r,a as g,R as u}from"./index-9818a022.js";const m="/assets/delete-2bc0ea2f.svg",x="/assets/edit-d2f86fba.svg",y=({object:a,onClose:o,onDelete:t})=>{const[d,s]=i.useState(!0),l=()=>{t(),s(!1)},n=()=>{s(!1),o()};return e(c,{children:d&&e("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:r("div",{id:"popup-modal",className:"overflow-y-auto overflow-x-hidden relative bg-white rounded-lg shadow dark:bg-gray-700",children:[r("button",{type:"button",className:"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:n,children:[e("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e("span",{className:"sr-only",children:"Close modal"})]}),r("div",{className:"p-4 md:p-5 text-center",children:[e("svg",{className:"mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),r("h3",{className:"mb-5 text-lg font-normal text-gray-900 dark:text-gray-400",children:["Are you sure you want to delete ",a.name,"?",e("br",{})]}),e("button",{"data-modal-hide":"popup-modal",type:"button",className:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2",onClick:l,children:"Yes, I'm sure"}),e("button",{type:"button",className:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",onClick:n,children:"No, cancel"})]})]})})})},w=async(a,o)=>{try{const t=await g.delete(`${a}${o}/`,{...u()});t.status>=200&&t.status<300&&(window.alert("Delete Success"),window.location.reload())}catch(t){console.error("Error deleting :",t),window.alert(t)}};export{m as D,x as E,y as a,w as b};
