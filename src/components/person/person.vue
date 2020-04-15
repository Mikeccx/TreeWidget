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
                    <svg class="searchicon"
                        @click="cancelPerson"
                        aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                    <input placeholder="搜索" type="text" @input="test($event,onSearch)" :value="keyword">
                </div>

                <div class="person-tree" v-if="keyword">
                    <ul>
                        <li v-for="item in searchRes" :key='item.id' class="addedlist">
                            <div class="hover" @click="node.clickNode(item);node.clickSelect(item)">
                                <div class="item-left">
                                    <div class="title">
                                        {{item.title}}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="person-tree" v-if="!keyword">
                    <personTree :tree='node.tree' :node="node" :person='person' class="person-tree-spc" @selectedList = 'getSelected'></personTree>
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
                                    @click="node.delItem(item.id)"
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
import personTree from '@/components/person/personTree'
import Tree from './tree.js'
import {debounce} from '@/utils/function'
export default {
  name: 'persom-select',
  props: {
      tree: {}
  },
  data () {
    return {
      selectedList: [],
      node: '',
      person:[],
      keyword: '',
      searchRes: [],
      timer: null
    }
  },
  watch: {
	tree(val){
		this.tree = val;
	}
  },
  methods: {
        async onSearch (val) {
            this.keyword = val.target.value
            let res = await this.$http(
                {
                    url:'/personsearch',
                    params: this.keyword
                }
            )
            this.searchRes = res.person
        },
        test: debounce((val)=>{
            val[1].call(null,val[0])
        }),
        cancelPerson () {
            this.$emit('cancelPerson', false)
        },
        getSelected (value) {
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
    //   this.debounce()()
    console.log(this.test)
      console.log('prop',this.tree)
      this.node = new Tree(this.tree)
        // this.test()
        // debugger
  }
}
</script>
<style lang="less" scoped>
// 外层幕遮
.page-warper{
    height: 100%;
    background-color: rgba(34,33,52,.6);
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
        border-radius: 4px;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        z-index: 999;
        background: #fff;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        .person-header{
        height: 48px;
        background: #f1f4f8;
        padding: 0 24px;
        border-radius: 4px;
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
                width: 86%;
                height: 36px;
                border-radius: 2px;
                outline: none;
                // outline-color: none;
                
                box-sizing: border-box;
                padding-left: 32px;
                border: none;
                height: 25px;
                color: #9fa4a6;
                border-radius: 94px;
                background-color: #f1f3f7;
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
            border-left: 1px solid #ccc;
            .person-right-header{
            padding-left: 20px;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            }
            .addedlist{
            display: flex;
            justify-content: space-between;
            padding-right: 20px;
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

            border: 0;
            border-radius: 4px;
            color: #fff;
            width: 96px;
            height: 30px;
            cursor: pointer;
            line-height: 30px;
            text-align: center;
            &:nth-of-type(1) {
                background-color: #e9ecf1;
                color: #3d464a;
                &:hover {
                background-color: #e0e3e8;
            }
            }
            &:nth-of-type(2) {
                background: #f59c25;
            }
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
ul{
    width: 100%;
    li{
        margin-left: 20px;
    }

}
.hover-title {
    display: flex;
    flex-wrap: nowrap;
    cursor: pointer;
    justify-content: space-between;
    padding-left: 5px;
    .item-left{
        display: flex;
        flex-wrap: nowrap;
    }
}
.hover{
    display: flex;
    flex-wrap: nowrap;
    cursor: pointer;
    justify-content: space-between;
    .item-left{
        display: flex;
        flex-wrap: nowrap;
    }

}
.hover:hover{
    background:#f1f4f8;

}
.icon {
    display: inline-block;
    width: 22px;
    height: 22px;
    font-size: 22px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    cursor: pointer;
    transform: rotate(-90deg);
    transition: 0.3s;
}
.searchicon {
    width: 16px;
    height: 16px;
    font-size: 16px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    left: 30px;
    &:hover{
        -webkit-filter: drop-shadow(0px 0px 0px #2B76B3);
    }

}
</style>
