import{r as t,a as o,g as a,R as c}from"./index-f106b69c.js";function i(){const[s,r]=t.useState();return t.useEffect(()=>{s||(async()=>{try{const e=await o.get(`${a}`,{...c()});r(e.data)}catch(e){console.error("Error fetching roles:",e)}})()},[]),s}export{i as G};
