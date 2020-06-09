<template>
    <ul class="item">
        <template v-if="tree && tree.orgData && tree.orgData.length">
        <li v-for="item in tree.orgData" :key = item.id>
            <div class="hover" @click="node.clickNode(item)">
                <div class="item-left">
                    <!-- <svg :class="!(item && item.child && item.child.length!=0)?'icon hidden':(!item.show? 'icon':'icon icon-selected') "
                            aria-hidden="true">
                            <use xlink:href="#icon-shixiangxiajiantou-"></use>
                    </svg> -->
                    <svg :class="!(item && item.child && item.child.length!=0)?'icon':(!item.show? 'icon':'icon icon-selected') "
                            aria-hidden="true">
                            <use xlink:href="#icon-shixiangxiajiantou-"></use>
                    </svg>
                    <div class="title">
                        {{item.name}}
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
        </template>
        <template v-if="tree && tree.personData && tree.personData.length">
        <li v-for="item in tree.personData" :key = item.key @click="node.clickSelect(item, ismulti)" class="hover-title hover">
            <div class="item-left">
                <img :src="item.photoUrl"/>
                <div class="title">
                    {{item.name}}
                </div>
            </div>
            <!-- <div class="hover-title hover" v-for="item1 in item.person" @click="node.clickSelect(item1)" :key = item1.id>
                    <div class="item-left">
                        <div class="title">
                            {{item1.name}}
                        </div>
                    </div>
                    
            </div> -->
        </li>
        </template>
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
    //   debugger
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
    height: 30px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .title{
        margin-left: 10px;
    }
    img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        
    }
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
