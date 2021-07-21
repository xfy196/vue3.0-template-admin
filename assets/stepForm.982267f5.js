import{d as e,r as l,m as a,e as o,p as t,a as u,i as r,o as c,c as d,b as n,F as s,E as m,w as i,z as p}from"./vendor.308b7906.js";var f=e({setup(){const e=l(),t=l(0),u=a({payAccountNo:"",accAccountNo:"",accAccountName:"",transferNum:""}),r=l("1"),c=o();return{handleRedo:()=>{t.value=0},active:t,handleBack:()=>{c.go(-1)},ruleForm:u,selectedAccType:r,rules:{payAccountNo:[{required:!0,message:"请输入付款人账户",trigger:"blur"}],accAccountNo:[{required:!0,message:"请输入收款人账户",trigger:"blur"}],accAccountName:[{required:!0,message:"请输入收款人姓名",trigger:"blur"}],transferNum:[{required:!0,message:"请输入转账金额",trigger:"blur"}]},submitForm:()=>(t.value=3,!0),handleNextStep:()=>{e.value.validate((e=>e?(t.value=1,console.log("handle ruleForm  data",u),!0):(console.log("error submit!!"),!1)))},handleLastStep:()=>(t.value=0,!0),accountForm:e,resetForm:()=>{e.value.resetFields()}}}});const N=i();t("data-v-2a102a6e");const F={class:"stepForm"},y={class:"info"},A=p("分步表单"),_=n("span",{style:{"text-align":"left"}},"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",-1),b={class:"grid-content bg-purple-dark"},V={class:"card-header"},v=n("i",{class:"el-icon-arrow-left"},null,-1),g=p("返回"),h=n("span",null,"表单信息",-1),k=n("div",null,null,-1),x=p("下一步"),U=p("重置"),C=p("提交"),w=p("上一步"),q=p("再转一笔");u();const S=N(((e,l,a,o,t,u)=>{const i=r("el-divider"),p=r("el-button"),f=r("el-step"),S=r("el-steps"),T=r("el-input"),z=r("el-form-item"),B=r("el-option"),L=r("el-select"),R=r("el-form"),j=r("el-result"),E=r("el-card"),I=r("el-col"),M=r("el-row");return c(),d("div",F,[n("div",y,[n(i,{"content-position":"left"},{default:N((()=>[A])),_:1}),_]),n(M,null,{default:N((()=>[n(I,{offset:1,span:22},{default:N((()=>[n("div",b,[n(E,{class:"box-card"},{header:N((()=>[n("div",V,[n(p,{class:"button",type:"text",onClick:e.handleBack},{default:N((()=>[v,g])),_:1},8,["onClick"]),h,k])])),default:N((()=>[n(S,{active:e.active,"align-center":"false","finish-status":"success"},{default:N((()=>[n(f,{title:"填写转账信息",description:"请仔细填写转账信息"}),n(f,{title:"确认转账信息",description:"请仔细核对转账信息"}),n(f,{title:"完成",description:"操作成功"})])),_:1},8,["active"]),0==e.active?(c(),d(R,{key:0,ref:"accountForm",model:e.ruleForm,rules:e.rules,"label-width":"100px",class:"demo-ruleForm"},{default:N((()=>[n(z,{label:"付款账户",prop:"payAccountNo"},{default:N((()=>[n(T,{modelValue:e.ruleForm.payAccountNo,"onUpdate:modelValue":l[1]||(l[1]=l=>e.ruleForm.payAccountNo=l)},null,8,["modelValue"])])),_:1}),n(z,{label:"收款账户",prop:"accAccountNo"},{default:N((()=>[n(T,{modelValue:e.ruleForm.accAccountNo,"onUpdate:modelValue":l[3]||(l[3]=l=>e.ruleForm.accAccountNo=l)},{prepend:N((()=>[n(L,{modelValue:e.selectedAccType,"onUpdate:modelValue":l[2]||(l[2]=l=>e.selectedAccType=l),style:{width:"110px"},placeholder:"请选择"},{default:N((()=>[n(B,{label:"支付宝",value:"1"}),n(B,{label:"银行账户",value:"2"})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),n(z,{label:"收款人姓名",prop:"accAccountName"},{default:N((()=>[n(T,{modelValue:e.ruleForm.accAccountName,"onUpdate:modelValue":l[4]||(l[4]=l=>e.ruleForm.accAccountName=l)},null,8,["modelValue"])])),_:1}),n(z,{label:"转账金额",prop:"transferNum"},{default:N((()=>[n(T,{modelValue:e.ruleForm.transferNum,"onUpdate:modelValue":l[5]||(l[5]=l=>e.ruleForm.transferNum=l),modelModifiers:{number:!0},"prefix-icon":"el-icon-money"},null,8,["modelValue"])])),_:1}),n(z,null,{default:N((()=>[n(p,{type:"primary",onClick:l[6]||(l[6]=l=>e.handleNextStep())},{default:N((()=>[x])),_:1}),n(p,{onClick:l[7]||(l[7]=l=>e.resetForm())},{default:N((()=>[U])),_:1})])),_:1})])),_:1},8,["model","rules"])):1==e.active?(c(),d(s,{key:1},[n(R,{ref:"accountForm",model:e.ruleForm,"label-width":"100px",class:"demo-ruleForm"},{default:N((()=>[n(z,{label:"付款账户",prop:"payAccountNo"},{default:N((()=>[n(T,{modelValue:e.ruleForm.payAccountNo,"onUpdate:modelValue":l[8]||(l[8]=l=>e.ruleForm.payAccountNo=l),readonly:""},null,8,["modelValue"])])),_:1}),n(z,{label:"收款账户",prop:"payAccountNo"},{default:N((()=>[n(T,{modelValue:e.ruleForm.accAccountNo,"onUpdate:modelValue":l[9]||(l[9]=l=>e.ruleForm.accAccountNo=l),readonly:""},null,8,["modelValue"])])),_:1}),n(z,{label:"付款人姓名",prop:"payAccountNo"},{default:N((()=>[n(T,{modelValue:e.ruleForm.accAccountName,"onUpdate:modelValue":l[10]||(l[10]=l=>e.ruleForm.accAccountName=l),readonly:""},null,8,["modelValue"])])),_:1}),n(z,{label:"转账金额",prop:"payAccountNo"},{default:N((()=>[n(T,{modelValue:e.ruleForm.transferNum,"onUpdate:modelValue":l[11]||(l[11]=l=>e.ruleForm.transferNum=l),readonly:""},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),n(z,null,{default:N((()=>[n(p,{type:"warning",onClick:l[12]||(l[12]=l=>e.submitForm())},{default:N((()=>[C])),_:1}),n(p,{onClick:l[13]||(l[13]=l=>e.handleLastStep())},{default:N((()=>[w])),_:1})])),_:1}),n(i)],64)):3==e.active?(c(),d(j,{key:2,icon:"success",title:"操作成功","sub-title":"预计两小时内到账"},{extra:N((()=>[n(p,{type:"primary",size:"medium",onClick:e.handleRedo},{default:N((()=>[q])),_:1},8,["onClick"])])),_:1})):m("",!0)])),_:1})])])),_:1})])),_:1})])}));f.render=S,f.__scopeId="data-v-2a102a6e";export default f;
