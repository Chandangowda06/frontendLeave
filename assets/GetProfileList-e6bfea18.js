import{r as s,a as o,m as a,R as f}from"./index-9818a022.js";function n(){const[e,t]=s.useState();return s.useEffect(()=>{e||(async()=>{try{const r=await o.get(`${a}`,{...f()});t(r.data)}catch(r){console.error("Error fetching profiles:",r)}})()},[e]),e}export{n as G};
