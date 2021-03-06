/* eslint-disable */
import { treeIterate,delItem } from '@/utils/function'
import Vue from 'vue'
import http from '@/api/api.js'
// 树形结构
export default class Tree {
    constructor (tree) {
      // 列表深拷贝
      this.tree = tree
      // 已经选择的条目
      this.selectedNode = []
      this.treeInit(this.tree)
    }
    // 对树形数据结构初始化
    treeInit (obj) {
        if(obj) {
        let init = function (obj) {
            Vue.set(obj,'selected',false)
            Vue.set(obj,'show',false)
            Vue.set(obj,'child',[])
        }
        for (let i = 0; i < obj.length; i++){
            treeIterate(init)(obj[i])
        }
        } else {
            return
        }
    }
    // 点击选中按钮
    async clickNode (item) {
        item.show = !item.show
        if (!(item.child && item.child.length)) {            
            let res = await http((
                {
                    url:'/org/depTree',
                    params: {orgId: item.orgId}
                }
            ))
            res.forEach((ele)=>{
                ele.show = false
                ele.selected = false
            })
            Vue.set(item,'child',res)
        }
    }
    // 选中点击事件，自上而下传递
    clickSelect (item, ismulti) {
        item.selected = !item.selected
        if (ismulti) {
            if (item.selected) {
                if(!(this.selectedNode.find( ele => ele.orgId === item.orgId))) {
                        this.selectedNode.push(item)
                }
            } else {
                if(this.selectedNode.find( ele => ele.orgId === item.orgId)) {
                    let index = this.selectedNode.findIndex( ele => ele.orgId === item.orgId)
                    this.selectedNode.splice(index,1)
                }
            }
        } else {
            if (!this.selectedNode.length) {
                if (item.selected) {
                    this.selectedNode.push(item)
                }
            } else {
                if (this.selectedNode[0].orgId === item.orgId) {
                    this.selectedNode.pop()
                } else {
                    this.selectedNode[0].selected = false
                    this.selectedNode.pop()
                    this.selectedNode.push(item)
                }
            }
        }
        // if (item.selected) {
        //     debugger
        //     if(this.selectedNode.indexOf(item) === -1) {
        //             this.selectedNode.push(item)
        //     }
        // } else {
        //     if(this.selectedNode.indexOf(item) !== -1) {
        //         let index = this.selectedNode.indexOf(item)
        //         this.selectedNode.splice(index,1)
        //     }
        // }
        // var that = this
        // let selected = function (item, value) {
        //     item.selected = !value
        //     console.log(item.title, item.selected)
        //     if(item.selected) {
        //         if(item && item.child && item.child.length === 0 )
        //             that.selectedNode.push(item)
        //         else 
        //             return 
        //         } else {
        //             that.delItem(item.title)
        //         }
        //     // console.log('item.title: ', item)
        // }
        // treeIterate(selected)(item, value)
    }
    // 删除某一节点 
    delItem (value) {
        console.log('tree', this.tree)
        for (let i = 0 ; i < this.selectedNode.length ; i++ ){
            if(this.selectedNode[i].orgId === value) {
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
};