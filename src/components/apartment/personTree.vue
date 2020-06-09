<template>
    <ul class="item">
        <li v-for="item in tree" :key = item.id>
            <div class="hover" @click="node.clickNode(item)">
                <div class="item-left">
                    <!-- <svg :class="!(item && item.child && item.child.length!=0)?'icon hidden':(!item.show? 'icon':'icon icon-selected') "
                            aria-hidden="true">
                            <use xlink:href="#icon-shixiangxiajiantou-"></use>
                    </svg> -->
                    <svg :class="!(item.show)?'icon':(!item.show? 'icon':'icon icon-selected') "
                            aria-hidden="true">
                            <use xlink:href="#icon-shixiangxiajiantou-"></use>
                    </svg>
                    <div class="title">
                        {{item.name}}
                    </div>
                </div>
                <div class="item-right">
                    <label @click.stop.prevent="node.clickSelect(item, ismulti)">
                        <input class= 'checkbox' type="checkbox" :checked="item.selected"/>
                        <span class="my-radio-border"></span>
                    </label>
                </div>
            </div>
            <template>
                <persontree v-if="item.show" :tree="item.child" :node = "node" :ismulti="ismulti"></persontree>
            </template>
        </li>
        <!-- <li v-for="item in tree" :key = item.key>
            <div class="hover-title hover" v-for="item1 in item.person" @click="node.clickSelect(item1)" :key = item1.id>
                    <div class="item-left">
                        <div class="title">
                            {{item1.title}}
                        </div>
                    </div>
                    <div class="item-right">
                        <label @click.stop="node.clickSelect(item1)">
                            <input class= 'checkbox' type="checkbox" :checked="item1.selected"/>
                        </label>
                    </div>
            </div>
        </li> -->
    </ul>
</template>
<script>
// import { dispatchSelected } from '@/utils/function.js'
// import Tree from './tree'
export default {
  name: 'persontree',
  props: {
    tree: {},
    node: {},
    ismulti: {
          type: Boolean,
          default: false
    }
  },
  data () {
    return {
      isshow: true,
      res: [],
      selectedList: [],
      test: [{title:'1'},{title:'2'}]
    }
  },
  mounted () {
      console.log('for real', this.ismulti)
    console.log('i am coming', this.tree)
    console.log('props', this.tree)
    console.log('props', this.node)
    // this.node = new Tree(this.tree)
  },
  computed: {
  },
  methods: {
    getChange (val) {
      console.log('change', val)
    },
    up (item) {
      // if (typeof item.show === 'undefined') {
      //   this.$set(item, 'show', false)
      // } else {
      //   this.$set(item, 'show', !item.show)
      // }
      // console.log(item.show)
        if (typeof item.show === 'undefined') {
            this.$set(item, 'show', true)
        } else {
            item.show = !item.show
        }
        console.log('ss', this.res)
    },
    clickNode (item) {
      item.show = !item.show
      this.$nextTick((value) => {
        console.log(value)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.my-radio-border {
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: content-box;
  margin-top: 2px;
}
.my-radio-border:hover {
  border-color: #409eff;
}
label .text {
  font-size: 14px;
  vertical-align: top;
  padding: 0 5px;
}
label input {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
label input:checked + span::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  /* height: 6px;
  width: 6px; */
  border-radius: 100%;
  background: #409eff;
  border-color: #409eff;
  transition: 1s;
  animation: bescale 0.3s ease;
  animation-fill-mode: forwards;
}
label input:checked + span + span {
  color: #409eff;
}
@keyframes bescale {
  from {
    height: 0px;
    width: 0px;
  }
  to {
    height: 12px;
    width: 12px;
  }
}

li{
    margin-left: 20px;
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
.hidden {
  opacity: 0;
}
.checkbox{
}
.title{
}
.icon-selected{
  transform: rotate(0);
  transition: 0.3s;
}
</style>
