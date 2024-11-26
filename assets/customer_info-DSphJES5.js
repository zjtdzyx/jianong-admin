
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as E,r as V,D as L,z as M,E as v,o as w,k as y,e as l,w as u,b as c,f as a,G as m,H as g,h as x,I as n,J as i,g as f,K as O,L as p,M as k,m as T,x as q}from"./index-hvzRevkC.js";const $={class:"container"},z={class:"search-container"},F={class:"table-container"},j={key:0,class:"edit-container"},G=E({__name:"CustomerInfo",setup(S){const C=[{customerNumber:"001",name:"张三",contact:"123456789",address:"北京市"},{customerNumber:"002",name:"李四",contact:"987654321",address:"上海市"},{customerNumber:"003",name:"王五",contact:"456123789",address:"广州市"},{customerNumber:"004",name:"赵六",contact:"321654987",address:"深圳市"},{customerNumber:"005",name:"孙七",contact:"789123456",address:"杭州市"},{customerNumber:"006",name:"周八",contact:"654789123",address:"成都市"},{customerNumber:"007",name:"吴九",contact:"123789456",address:"南京市"},{customerNumber:"008",name:"郑十",contact:"987321654",address:"苏州市"},{customerNumber:"009",name:"王十一",contact:"456987123",address:"武汉市"},{customerNumber:"010",name:"李十二",contact:"321987654",address:"长沙市"}],s=V(JSON.parse(localStorage.getItem("customerInfo")||JSON.stringify(C))),N=V(""),U=L(()=>{const d=N.value.trim().toLowerCase();return d?s.value.filter(e=>Object.values(e).some(t=>String(t).toLowerCase().includes(d))):s.value}),r=V({customerNumber:"",name:"",contact:"",address:""}),o=V(null);M(()=>{v.success("Customer info loaded successfully")});function b(){localStorage.setItem("customerInfo",JSON.stringify(s.value))}function _(){s.value.push({...r.value}),r.value={customerNumber:"",name:"",contact:"",address:""},b(),v.success("Customer added successfully")}function H(d){o.value={...d}}function I(){const d=s.value.findIndex(e=>{var t;return e.customerNumber===((t=o.value)==null?void 0:t.customerNumber)});d!==-1&&o.value&&(s.value[d]={...o.value},o.value=null,b(),v.success("Customer updated successfully"))}function B(d){s.value=s.value.filter(e=>e.customerNumber!==d),b(),v.success("Customer removed successfully")}function D(){s.value=[...C],b(),v.success("Data restored to default values")}return(d,e)=>(w(),y("div",$,[l(a(k),{class:"box-card"},{default:u(()=>[e[14]||(e[14]=c("div",{class:"card-header"},[c("h1",null,"顾客信息管理")],-1)),c("div",z,[l(a(m),{modelValue:N.value,"onUpdate:modelValue":e[0]||(e[0]=t=>N.value=t),placeholder:"输入关键词搜索客户...",clearable:""},null,8,["modelValue"])]),l(a(g),{"label-width":"120px",onSubmit:x(_,["prevent"])},{default:u(()=>[l(a(n),{label:"客户编号"},{default:u(()=>[l(a(m),{modelValue:r.value.customerNumber,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value.customerNumber=t),placeholder:"客户编号",required:""},null,8,["modelValue"])]),_:1}),l(a(n),{label:"名称"},{default:u(()=>[l(a(m),{modelValue:r.value.name,"onUpdate:modelValue":e[2]||(e[2]=t=>r.value.name=t),placeholder:"名称",required:""},null,8,["modelValue"])]),_:1}),l(a(n),{label:"联系人"},{default:u(()=>[l(a(m),{modelValue:r.value.contact,"onUpdate:modelValue":e[3]||(e[3]=t=>r.value.contact=t),placeholder:"联系人",required:""},null,8,["modelValue"])]),_:1}),l(a(n),{label:"地址"},{default:u(()=>[l(a(m),{modelValue:r.value.address,"onUpdate:modelValue":e[4]||(e[4]=t=>r.value.address=t),placeholder:"地址",required:""},null,8,["modelValue"])]),_:1}),l(a(n),{class:"form-actions"},{default:u(()=>[l(a(i),{type:"primary",onClick:_},{default:u(()=>e[10]||(e[10]=[f(" 添加客户 ")])),_:1})]),_:1})]),_:1}),c("div",F,[l(a(O),{data:U.value,style:{width:"auto",margin:"0 auto"},height:"400",border:""},{default:u(()=>[l(a(p),{prop:"customerNumber",label:"客户编号",width:"150"}),l(a(p),{prop:"name",label:"名称",width:"150"}),l(a(p),{prop:"contact",label:"联系人",width:"150"}),l(a(p),{prop:"address",label:"地址",width:"150"}),l(a(p),{label:"操作",width:"150"},{default:u(t=>[l(a(i),{type:"primary",size:"small",onClick:J=>H(t.row)},{default:u(()=>e[11]||(e[11]=[f(" 编辑 ")])),_:2},1032,["onClick"]),l(a(i),{type:"danger",size:"small",onClick:J=>B(t.row.customerNumber)},{default:u(()=>e[12]||(e[12]=[f(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),l(a(i),{type:"warning",onClick:D},{default:u(()=>e[13]||(e[13]=[f("还原数据")])),_:1})]),_:1}),o.value?(w(),y("div",j,[l(a(k),{class:"box-card"},{default:u(()=>[e[17]||(e[17]=c("div",{class:"card-header"},[c("h2",null,"编辑客户")],-1)),l(a(g),{"label-width":"120px",onSubmit:x(I,["prevent"])},{default:u(()=>[l(a(n),{label:"客户编号"},{default:u(()=>[l(a(m),{modelValue:o.value.customerNumber,"onUpdate:modelValue":e[5]||(e[5]=t=>o.value.customerNumber=t),placeholder:"客户编号",required:""},null,8,["modelValue"])]),_:1}),l(a(n),{label:"名称"},{default:u(()=>[l(a(m),{modelValue:o.value.name,"onUpdate:modelValue":e[6]||(e[6]=t=>o.value.name=t),placeholder:"名称",required:""},null,8,["modelValue"])]),_:1}),l(a(n),{label:"联系人"},{default:u(()=>[l(a(m),{modelValue:o.value.contact,"onUpdate:modelValue":e[7]||(e[7]=t=>o.value.contact=t),placeholder:"联系人",required:""},null,8,["modelValue"])]),_:1}),l(a(n),{label:"地址"},{default:u(()=>[l(a(m),{modelValue:o.value.address,"onUpdate:modelValue":e[8]||(e[8]=t=>o.value.address=t),placeholder:"地址",required:""},null,8,["modelValue"])]),_:1}),l(a(n),{class:"form-actions"},{default:u(()=>[l(a(i),{type:"primary",onClick:I},{default:u(()=>e[15]||(e[15]=[f(" 更新客户 ")])),_:1}),l(a(i),{onClick:e[9]||(e[9]=t=>o.value=null)},{default:u(()=>e[16]||(e[16]=[f(" 取消 ")])),_:1})]),_:1})]),_:1})]),_:1})])):T("",!0)]))}}),K=q(G,[["__scopeId","data-v-8a49bab5"]]),Q=E({name:"CustomerInfoView",__name:"customer_info",setup(S){return(C,s)=>(w(),y("div",null,[l(K)]))}}),P=q(Q,[["__scopeId","data-v-d25c1dce"]]);export{P as default};
