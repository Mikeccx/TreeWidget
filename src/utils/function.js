// 点击父节点，自上而下传播
export const dispatchSelected = (item, value) => { 
    let deepclone = function (obj) {
       console.log('test', obj)
       if(obj){
         obj.selected = !value;
          if(obj && obj.child && obj.child.length!=0){
            for(let i = 0 ; i < obj.child.length ; i++)
            deepclone(obj.child[i])
         }
       }
    }
    deepclone(item)
  // return deepclone(item)
}

export const treeIterate = function(fn){
  return function Iterate(obj,value) {
  if(obj){
     fn(obj,value)
     if(obj && obj.child && obj.child.length!=0){
       for(let i = 0 ; i < obj.child.length ; i++)  
       Iterate(obj.child[i],value)
    }
  }
 }
}