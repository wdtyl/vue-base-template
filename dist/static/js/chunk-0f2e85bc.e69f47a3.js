(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f2e85bc"],{"0e74":function(e,t,n){"use strict";var a=n("4588d"),i=n.n(a);i.a},"4588d":function(e,t,n){},f736:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("box-content",[n("search-form",[n("search-item",{attrs:{label:"姓名"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入姓名"}})],1),e._v(" "),n("search-item",{attrs:{label:"类型"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择类型"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.types,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)],1),e._v(" "),n("base-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{columns:e.headers,list:e.list},on:{reset:e.resetCb,edit:e.editCb,delete:e.deleteCb},scopedSlots:e._u([{key:"roleSlot",fn:function(t){var n=t.scope;return[e._v("\n      "+e._s(n.row.roleName)+"\n    ")]}}])})],1)},i=[],o={data:function(){return{loading:!1,pageNo:1,pageSize:15,totalCount:0,pageSizes:[15,20,25,30],pageLayout:"total, sizes, prev, pager, next, jumper",list:[]}},methods:{handleSizeChange:function(e){this.pageSize=e,this.load()},handleCurrentChange:function(e){this.pageNo=e,this.load()},listSuccessCb:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.log(t),new Promise(function(t){var n=[{name:"demo",id:"demo",age:"demo"}];e.loading=!1,t(n)})},listExceptionCb:function(e){this.loading=!1,console.error(e)}},created:function(){console.log("list mixin creatd")}},s=o,l={data:function(){return{types:[]}},methods:{getAllTypesList:function(){this.types=[{name:"admin",id:"admin"},{name:"user",id:"user"}]}},created:function(){this.getAllTypesList()}},c={name:"list",mixins:[s,l],data:function(){return{loading:!1,type:"",headers:[{type:"selection"},{type:"index"},{key:"loginName",title:"登录名"},{key:"userName",title:"用户名"},{key:"roleName",title:"角色名称",hidden:!0,slot:"roleSlot"},{key:"createDate",title:"创建时间"},{type:"operate",title:"操作",operates:[{name:"重置",emitKey:"reset"},{name:"编辑",emitKey:"edit"},{name:"删除",emitKey:"delete"}]}]}},methods:{load:function(){var e=this;this.loading=!0,setTimeout(function(){e.loading=!1;for(var t=[],n=0;n<14;n++)t.push({loginName:"admin".concat(n),userName:"user".concat(n),roleName:"role".concat(n),createDate:(new Date).getTime(),id:n});e.list=t},2e3)},resetCb:function(e){this.$message.success("reset  ".concat(e.loginName))},editCb:function(e){this.$message.success("edit  ".concat(e.loginName))},deleteCb:function(e){this.$message.success("delete  ".concat(e.loginName))}},activated:function(){console.log("activated"),this.load()}},r=c,d=(n("0e74"),n("0c7c")),u=Object(d["a"])(r,a,i,!1,null,null,null);t["default"]=u.exports}}]);