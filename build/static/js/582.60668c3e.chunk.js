"use strict";(self.webpackChunkblogs_ui=self.webpackChunkblogs_ui||[]).push([[582],{582:(a,t,e)=>{e.r(t),e.d(t,{default:()=>i});var c=e(2791),o=e(7689),n=e(2683),r=e(5277),s=e(184);const i=()=>{const{session_id:a}=(0,o.UO)(),[t,e]=(0,c.useState)([]),[i,l]=(0,c.useState)(!0),[d,u]=(0,c.useState)("");(0,c.useEffect)((()=>{(async()=>{try{const t=await(0,r.cj)(a);e(t.data.data)}catch(t){console.log("Error fetching data:"),u(t.message)}finally{l(!1)}})()}),[a]);return i?(0,s.jsx)(n.yC,{"data-testid":"spinner",size:"large"}):0===t.length?(0,s.jsx)("h3",{children:"No Record Found!"}):d?(0,s.jsx)("h3",{children:"Error fetching data"}):(0,s.jsx)(n.SK,{children:(0,s.jsx)("div",{className:"bulk-error-container",children:(0,s.jsx)("div",{className:"table-container",children:(0,s.jsx)(n.iA,{"data-tesid":"myTable",dataSource:t,columns:[{title:"Row Number",dataIndex:"rowNumber",key:"rowNumber"},{title:"Error Detail",dataIndex:"errorDetails",key:"errorDetails"}],pagination:!1})})})})}},5277:(a,t,e)=>{e.d(t,{CP:()=>h,Ik:()=>l,OX:()=>r,PR:()=>s,SR:()=>u,_Z:()=>n,aR:()=>g,cj:()=>i,kt:()=>m,nG:()=>y,rd:()=>d});var c=e(5294),o=e(7406);const n=async(a,t)=>await c.Z.get("".concat(o.E,"/get?page=").concat(a,"&limit=").concat(t),{headers:{Authorization:localStorage.getItem("authToken")}}),r=async(a,t,e)=>await c.Z.get("".concat(o.E,"/search/").concat(a,"?page=").concat(t,"&limit=").concat(e)),s=async(a,t,e)=>await c.Z.get("".concat(o.E,"/getbycategories/").concat(a,"?page=").concat(t,"&limit=").concat(e)),i=async a=>await c.Z.get("".concat(o.E,"/bulk-uploads-errors/").concat(a)),l=async()=>await c.Z.get("".concat(o.E,"/bulk-uploads-list")),d=async a=>await c.Z.post("".concat(o.E,"/bulk-upload"),a,{headers:{"Content-Type":"multipart/form-data",Authorization:localStorage.getItem("authToken")}}),u=async a=>await c.Z.delete("".concat(o.E,"/").concat(a),{headers:{Authorization:localStorage.getItem("authToken")}}),g=async a=>await c.Z.get("".concat(o.E,"/getbyid/").concat(a)),h=async(a,t)=>{await c.Z.patch("".concat(o.E,"/updatebyid/").concat(t),a,{headers:{Authorization:localStorage.getItem("authToken")}})},y=async a=>await c.Z.post("".concat(o.E,"/create"),a,{headers:{Authorization:localStorage.getItem("authToken")}}),m=async a=>await c.Z.get("".concat(o.E,"/getbyid/").concat(a))}}]);
//# sourceMappingURL=582.60668c3e.chunk.js.map