<template>
    <div class="page-warper" @click="cancelPerson">
      <div class="person-warper" @click.stop>
       <div class="person-header">
         <span>选择人员</span>
         <svg class="icon"
                @click="cancelPerson"
                 aria-hidden="true">
              <use xlink:href="#icon-chacha"></use>
          </svg>
       </div>

       <div class="person-content">
           <div class="person-left">
              <div class="person-search">
                <input placeholder="搜索" type="text">
              </div>
              <div class="person-tree" >
                <personTree :tree='node.tree' :node="node" class="person-tree-spc" @selectedList = 'getSelected'></personTree>
              </div>
           </div>
           <div class="person-right">
             <div class="person-right-header">
                已选人员: {{node.selectedNode && node.selectedNode.length}}人
             </div>
             <ul>
               <li v-for="item in node.selectedNode" :key=item.id class="addedlist">
                 <div>{{item.title}}</div>
                 <div>
                   <svg class="icon"
                     @click="node.delItem(item.title)"
                     aria-hidden="true">
                    <use xlink:href="#icon-chacha"></use>
                  </svg>
                 </div>
               </li>
             </ul>
           </div>

       </div>

       <div class="person-footer">
        <button @click="cancelPerson">取消</button>
        <button @click="confirm">确定</button>
       </div>
     </div>
    </div>
</template>
<script>
import personTree from '@/components/personTree'
import Tree from './tree.js'
export default {
  name: 'persom-select',
  data () {
    return {
      selectedList: [],
      node: '',
      tree: [
        {
          title: '1部',
          id: '1',
          eid: '1',
          child: [{
            id: '2',
            title: '2部',
            eid: '2',
            child: [
              {
                id: '3',
                title: '3部',
                eid: '2',
                child:
                [{
                  title: '曹星',
                  id: '4',
                  child: []
                }]
              }]
          },
          {
            title: '二级标题',
            child: [
              {
                title: '三级标题',
                child:
                [{
                  title: '四级标题',
                  child: []
                }]
              }]
          }]
        },
        {
          title: '一级标题2',
          child: [{ title: '二级标题',
            child: [{ title: '三级标题', child: [] }]
          }]
        },
        {
          title: '一级标题3',
          child: [{ title: '二级标题',
            child: [{ title: '三级标题', child: [] }]
          }]
        },
        {
          title: '一级标题4',
          child: [{ title: '二级标题',
            child: [{ title: '三级标题', child: [] }]
          }]
        },
        {
          title: '一级标题4',
          child: [{ title: '二级标题',
            child: [{ title: '三级标题', child: [] }]
          }]
        },
        {
          title: '一级标题4',
          child: [{ title: '二级标题',
            child: [{ title: '三级标题', child: [] }]
          }]
        },
        {
          title: '一级标题4',
          child: [{ title: '二级标题',
            child: [{ title: '三级标题', child: [] }]
          }]
        },
        {
          title: '一级标题4',
          child: [{ title: '二级标题',
            child: [{ title: '三级标题', child: [] }]
          }]
        }
      ]
    }
  },
  methods: {
    cancelPerson () {
      this.$emit('cancelPerson', false)
    },
    getSelected (value) {
      console.log('value', value)
      this.selectedList = value
    },
    confirm () {
      console.log('selected', this.node.selectedNode)
    }
  },
  components: {
    personTree
  },
  mounted () {
    this.node = new Tree(this.tree)
    console.log('gggg', this.node)
  }
}
</script>
<style lang="less" scoped>
// 外层幕遮
.page-warper{
   height: 100%;
   background: rgb(127, 127, 127);
//    overflow: hidden;
   opacity: .5;
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   z-index: 888;
   // 弹出框包裹
   .person-warper{
    position: fixed;
    background: red;
    max-height: 430px;
    max-width: 700px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    z-index: 999;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    .person-header{
      height: 48px;
      background: #f1f4f8;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .person-content {
      height: 320px;
      display: flex;
      flex-wrap: nowrap;
      .person-left{
        height: 100%;
        width: 50%;
        .person-search{
          height: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
          input {
            width: 80%;
            height: 36px;
            border-radius: 2px;
            outline-color: #3ecf8e;
            border: 1px #3ecf8e solid;

            // outline: 0;
          }
        }
        .person-tree{
          height: 80%;
          padding-right: 20px;
          overflow: auto;
          display: flex;
          justify-content: flex-start;
          .person-tree-spc{
            height: 100%;
            width:100%;
            text-align: left;
          }
        }
      }
      .person-right{
        height: 100%;
        width: 50%;
        .person-right-header{
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .addedlist{
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .person-footer{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 62px;
      padding: 0 24px;
      button{
        height: 50%;
        outline: none;
        border-radius: 2px;
        padding: 0 12px;
        margin-left: 8px;
      }
      // background: red;
    }
   }
}
.icon {
  width: 22px;
  height: 22px;
  font-size: 22px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
}
</style>
