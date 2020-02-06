import { treeIterate,delItem } from '@/utils/function'
import Vue from 'vue'
// 树形结构
export default class Tree {
    constructor (tree) {
      // 列表深拷贝
      // this.tree = JSON.parse(JSON.stringify(tree))
      this.tree = tree
      // 已经选择的条目
      this.selectedNode = []
      this.treeInit(this.tree)
    }
    // 对树形数据结构初始化
    treeInit (obj) {
      // let treeIterate = function (obj) {
      //   if(obj){
      //     obj.selected = false;
      //     obj.show = false;
      //      if(obj && obj.child && obj.child.length!=0){
      //        for(let i = 0 ; i < obj.child.length ; i++)  
      //         treeIterate(obj.child[i])
      //     }
      //   }
      // }
      if(obj) {
      let init = function (obj) {
        Vue.set(obj,'selected',false)
        Vue.set(obj,'show',false)
      }
      for (let i = 0; i < obj.length; i++){
        treeIterate(init)(obj[i])
      }
     } else {
       return
     }
    }
    // 点击选中按钮
    clickNode (item) {
      item.show = !item.show
      console.log('item',item)
    }
    // 选中点击事件，自上而下传递
    clickSelect (item) {
      // console.log('node1', this.tree)
      const value = item.selected
      console.log('value',value)
      var that = this
      
      let selected = function (item, value) {
        item.selected = !value
        console.log(item.title, item.selected)
        if(item.selected) {
          if(item && item.child && item.child.length === 0 )
          that.selectedNode.push(item)
          else 
          return 
        } else {
          that.delItem(item.title)
        }
        // console.log('item.title: ', item)
      }
      treeIterate(selected)(item, value)
      console.log('selectedNode', that.selectedNode)
    }
    // 删除某一节点 
    delItem (value) {
      console.log('haha')
      for (let i = 0 ; i < this.selectedNode.length ; i++ ){
        if(this.selectedNode[i].title === value) {
          this.selectedNode[i].selected = false
          this.selectedNode.splice(i,1)
        }
      }
    }
    // 获取已经选取的节点
    getSelectedNode () {
      // let treeIterate = function (obj) {
      //   if(obj){
      //     if(obj.selected && obj.id)
      //      this.selectedNode.push(obj.id)
      //      if(obj && obj.child && obj.child.length!=0){
      //        for(let i = 0 ; i < obj.child.length ; i++)
      //        treeIterate(obj.child[i])
      //     }
      //   }
      // }
      // treeIterate(this.tree)
    }
    // 
    
};