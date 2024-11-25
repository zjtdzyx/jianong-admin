
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as k,r as V,D as $,z,E as v,o as N,k as w,e as l,w as r,b as m,f as a,G as n,H as I,h as C,I as o,J as c,g as f,K as D,L as p,M as x,m as J,x as q}from"./index-BgC0ENBM.js";const O={class:"container"},T={class:"search-container"},F={class:"table-container"},j={class:"restore-container"},G={key:0,class:"edit-container"},K=k({__name:"MaterialInfo",setup(U){const P=[{materialNumber:"M001",name:"化肥",unit:"吨",costPrice:"2000元/吨",sellingPrice:"2500元/吨"},{materialNumber:"M002",name:"农药",unit:"升",costPrice:"100元/升",sellingPrice:"150元/升"},{materialNumber:"M003",name:"种子",unit:"公斤",costPrice:"50元/公斤",sellingPrice:"80元/公斤"},{materialNumber:"M004",name:"饲料",unit:"吨",costPrice:"3000元/吨",sellingPrice:"3500元/吨"},{materialNumber:"M005",name:"农膜",unit:"卷",costPrice:"500元/卷",sellingPrice:"600元/卷"},{materialNumber:"M006",name:"滴灌设备",unit:"套",costPrice:"1000元/套",sellingPrice:"1200元/套"},{materialNumber:"M007",name:"农机配件",unit:"件",costPrice:"200元/件",sellingPrice:"250元/件"},{materialNumber:"M008",name:"有机肥",unit:"吨",costPrice:"1500元/吨",sellingPrice:"1800元/吨"}],g=localStorage.getItem("materialInfo"),s=V(g?JSON.parse(g):[...P]),M=V(""),E=$(()=>{const d=M.value.trim().toLowerCase();return d?s.value.filter(e=>Object.values(e).some(t=>String(t).toLowerCase().includes(d))):s.value}),i=V({materialNumber:"",name:"",unit:"",costPrice:"",sellingPrice:""}),u=V(null);z(()=>{v.success("Material info loaded successfully")});function b(){localStorage.setItem("materialInfo",JSON.stringify(s.value))}function _(){s.value.push({...i.value}),b(),i.value={materialNumber:"",name:"",unit:"",costPrice:"",sellingPrice:""},v.success("Material added successfully")}function S(d){u.value={...d}}function y(){const d=s.value.findIndex(e=>{var t;return e.materialNumber===((t=u.value)==null?void 0:t.materialNumber)});d!==-1&&u.value&&(s.value[d]={...u.value},b(),u.value=null,v.success("Material updated successfully"))}function H(d){s.value=s.value.filter(e=>e.materialNumber!==d),b(),v.success("Material removed successfully")}function B(){s.value=[...P],b(),v.success("Data restored to initial state")}return(d,e)=>(N(),w("div",O,[l(a(x),{class:"box-card"},{default:r(()=>[e[16]||(e[16]=m("div",{class:"card-header"},[m("h1",null,"材料信息管理")],-1)),m("div",T,[l(a(n),{modelValue:M.value,"onUpdate:modelValue":e[0]||(e[0]=t=>M.value=t),placeholder:"输入关键词搜索材料...",clearable:""},null,8,["modelValue"])]),l(a(I),{"label-width":"120px",onSubmit:C(_,["prevent"])},{default:r(()=>[l(a(o),{label:"材料编号"},{default:r(()=>[l(a(n),{modelValue:i.value.materialNumber,"onUpdate:modelValue":e[1]||(e[1]=t=>i.value.materialNumber=t),placeholder:"材料编号",required:""},null,8,["modelValue"])]),_:1}),l(a(o),{label:"名称"},{default:r(()=>[l(a(n),{modelValue:i.value.name,"onUpdate:modelValue":e[2]||(e[2]=t=>i.value.name=t),placeholder:"名称",required:""},null,8,["modelValue"])]),_:1}),l(a(o),{label:"单位"},{default:r(()=>[l(a(n),{modelValue:i.value.unit,"onUpdate:modelValue":e[3]||(e[3]=t=>i.value.unit=t),placeholder:"单位",required:""},null,8,["modelValue"])]),_:1}),l(a(o),{label:"成本价"},{default:r(()=>[l(a(n),{modelValue:i.value.costPrice,"onUpdate:modelValue":e[4]||(e[4]=t=>i.value.costPrice=t),placeholder:"成本价",required:""},null,8,["modelValue"])]),_:1}),l(a(o),{label:"售价"},{default:r(()=>[l(a(n),{modelValue:i.value.sellingPrice,"onUpdate:modelValue":e[5]||(e[5]=t=>i.value.sellingPrice=t),placeholder:"售价",required:""},null,8,["modelValue"])]),_:1}),l(a(o),{class:"form-actions"},{default:r(()=>[l(a(c),{type:"primary",onClick:_},{default:r(()=>e[12]||(e[12]=[f(" 添加材料 ")])),_:1})]),_:1})]),_:1}),m("div",F,[l(a(D),{data:E.value,style:{width:"auto",margin:"0 auto"},height:"400",border:""},{default:r(()=>[l(a(p),{prop:"materialNumber",label:"材料编号",width:"150"}),l(a(p),{prop:"name",label:"名称",width:"150"}),l(a(p),{prop:"unit",label:"单位",width:"150"}),l(a(p),{prop:"costPrice",label:"成本价",width:"150"}),l(a(p),{prop:"sellingPrice",label:"售价",width:"150"}),l(a(p),{label:"操作",width:"150"},{default:r(t=>[l(a(c),{type:"primary",size:"small",onClick:L=>S(t.row)},{default:r(()=>e[13]||(e[13]=[f(" 编辑 ")])),_:2},1032,["onClick"]),l(a(c),{type:"danger",size:"small",onClick:L=>H(t.row.materialNumber)},{default:r(()=>e[14]||(e[14]=[f(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),m("div",j,[l(a(c),{type:"warning",onClick:B},{default:r(()=>e[15]||(e[15]=[f(" 还原数据 ")])),_:1})])]),_:1}),u.value?(N(),w("div",G,[l(a(x),{class:"box-card"},{default:r(()=>[e[19]||(e[19]=m("div",{class:"card-header"},[m("h2",null,"编辑材料")],-1)),l(a(I),{"label-width":"120px",onSubmit:C(y,["prevent"])},{default:r(()=>[l(a(o),{label:"材料编号"},{default:r(()=>[l(a(n),{modelValue:u.value.materialNumber,"onUpdate:modelValue":e[6]||(e[6]=t=>u.value.materialNumber=t),placeholder:"材料编号",required:""},null,8,["modelValue"])]),_:1}),l(a(o),{label:"名称"},{default:r(()=>[l(a(n),{modelValue:u.value.name,"onUpdate:modelValue":e[7]||(e[7]=t=>u.value.name=t),placeholder:"名称",required:""},null,8,["modelValue"])]),_:1}),l(a(o),{label:"单位"},{default:r(()=>[l(a(n),{modelValue:u.value.unit,"onUpdate:modelValue":e[8]||(e[8]=t=>u.value.unit=t),placeholder:"单位",required:""},null,8,["modelValue"])]),_:1}),l(a(o),{label:"成本价"},{default:r(()=>[l(a(n),{modelValue:u.value.costPrice,"onUpdate:modelValue":e[9]||(e[9]=t=>u.value.costPrice=t),placeholder:"成本价",required:""},null,8,["modelValue"])]),_:1}),l(a(o),{label:"售价"},{default:r(()=>[l(a(n),{modelValue:u.value.sellingPrice,"onUpdate:modelValue":e[10]||(e[10]=t=>u.value.sellingPrice=t),placeholder:"售价",required:""},null,8,["modelValue"])]),_:1}),l(a(o),{class:"form-actions"},{default:r(()=>[l(a(c),{type:"primary",onClick:y},{default:r(()=>e[17]||(e[17]=[f(" 更新材料 ")])),_:1}),l(a(c),{onClick:e[11]||(e[11]=t=>u.value=null)},{default:r(()=>e[18]||(e[18]=[f(" 取消 ")])),_:1})]),_:1})]),_:1})]),_:1})])):J("",!0)]))}}),Q=q(K,[["__scopeId","data-v-a45e50df"]]),A=k({name:"MaterialInfoView",__name:"material_info",setup(U){return(P,g)=>(N(),w("div",null,[l(Q)]))}}),W=q(A,[["__scopeId","data-v-7680aa20"]]);export{W as default};
