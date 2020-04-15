<template>
    <ul class="item">
        <li v-for="item in tree" :key = item.id>
            <div class="hover" @click="node.clickNode(item);node.clickSelect(item)">
                <div class="item-left">
                    <svg :class="!(item && item.child && item.child.length!=0)?'icon hidden':(!item.show? 'icon':'icon icon-selected') "
                            aria-hidden="true">
                            <use xlink:href="#icon-shixiangxiajiantou-"></use>
                    </svg>
                    <div class="title">
                        {{item.title}}
                    </div>
                </div>
                <!-- <div class="item-right">
                    <label @click.stop="node.clickSelect(item)">
                        <input class= 'checkbox' type="checkbox" :checked="item.selected"/>
                    </label>
                </div> -->
            </div>
            <template>
                <persontree v-if="item.show && item.child" :tree="item.child" :node = "node"></persontree>
            </template>
        </li>
        <li v-for="item in tree" :key = item.key>
            <div class="hover-title hover" v-for="item1 in item.person" @click="node.clickSelect(item1)" :key = item1.id>
                    <div class="item-left">
                        <div class="title">
                            {{item1.title}}
                        </div>
                    </div>
                    <!-- <div class="item-right">
                        <label @click.stop="node.clickSelect(item1)">
                            <input class= 'checkbox' type="checkbox" :checked="item1.selected"/>
                        </label>
                    </div> -->
            </div>
        </li>
    </ul>
</template>
<script>
// import { dispatchSelected } from '@/utils/function.js'
// import Tree from './tree'
export default {
  name: 'persontree',
  props: {
    tree: {},
    node: {}
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
    console.log('i am coming', this.tree)
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
    },
    selected (item, value) {
      // if (item.selected) {
      //   this.selectedList.push(item)
      //   item.child.selected = false
      //   this.$emit('selectedList', this.selectedList)
      // } else {
      // }
      // dispatchSelected(item, value)
      // console.log('selected', this.test)
    }
  }
}
</script>
<style lang="less" scoped>
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
