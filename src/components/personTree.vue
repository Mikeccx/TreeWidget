<template>
    <ul>
      <li v-for="item in tree" :key = item.index >
        <div class="hover" @click="node.clickNode(item)">
          <svg :class="!(item && item.child && item.child.length!=0)?'icon hidden':(!item.show? 'icon':'icon icon-selected') "
                  aria-hidden="true">
                <use xlink:href="#icon-shixiangxiajiantou-"></use>
          </svg>
          <div class="title">
            {{item.title}}
          </div>
          <label @click.stop="node.clickSelect(item)">
            <input class= 'checkbox' type="checkbox" :checked="item.selected" />
            {{item.selected}}
          </label>
        </div>
          <template v-if="item.show && item.child">
              <persontree  :tree="item.child"></persontree>
          </template>

      </li>
    </ul>
</template>
<script>
// import { dispatchSelected } from '@/utils/function.js'
import Tree from './tree'
export default {
  name: 'persontree',
  props: {
    tree: {}
  },
  data () {
    return {
      isshow: true,
      res: [],
      selectedList: [],
      node: '',
      test: []
    }
  },
  mounted () {
    console.log('i am coming')
    this.node = new Tree(this.tree)
  },
  methods: {
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
.hover{
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;

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
