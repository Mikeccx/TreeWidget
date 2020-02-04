import { treeIterate } from '@/utils/function'
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
      let init = function (obj) {
        Vue.set(obj,'selected',false)
        Vue.set(obj,'show',false)
      }
      for (let i = 0; i < obj.length; i++){
        treeIterate(init)(obj[i])
      }
    }
    // 点击选中按钮
    clickNode (item) {
      item.show = !item.show
    }
    clickSelect (item) {
      // console.log('node1', this.tree)
      const value = item.selected
      console.log('value',value)
      let selected = function (item, value) {
        item.selected = !item.selected
        console.log('item.title: ', item)
      }
      treeIterate(selected)(item, value)
      // console.log('node', this.tree)

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