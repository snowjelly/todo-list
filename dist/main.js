(()=>{"use strict";const t=((t,o)=>{const e={title:"inbox",description:"the default",todoList:[]};return{getProject:()=>e,getTodoList:()=>e.todoList}})(),o=((o,e="",i="",c=null,r=t.getProject())=>({title:o,description:e,dueDate:i,priority:c,complete:!1,notes:"",project:r}))("clean room");console.log(o)})();