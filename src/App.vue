<template>
    <div id="app">
        <person v-if="isPopPerson" :tree = tree
        @cancelPerson="isPopPerson = false"></person>

        <org v-if="isPopOrg" :tree = tree @cancelOrg="isPopOrg = false" :eid='eid' @selectedOrg="getOrg"></org>

        <button @click="PopPerson">点击弹出</button>
        <button @click="PopOrg">点击弹出部门桥</button>

    </div>
</template>

<script>
import person from '@/components/person/person.vue'
import org from '@/components/apartment/person.vue'

export default {
    name: 'app',
    components: {
            person,
            org
    },
    data () {
        return {
            isPopPerson: false,
            isPopOrg: false,
            tree: [],
            eid: 19252765
        }
    },
    async created () {
        // this.getInit()
        this.baseIndex()
        //   console.log('s',this.tree)
    },
    mounted () {
    },
    methods: {
        getOrg (val) {
        },
        PopPerson () {
            this.isPopPerson = true
        },
        PopOrg () {
            this.isPopOrg = true
        },

        async getInit() {
            let res = await this.$http({url:'/test/getData/'})
            this.tree = res.tree
        },

        async baseIndex () {
            let res = await this.$http(
                {
                    url:'/base/index',
                    method: 'GET',
                    params: {
                        ticket: 'APPURLWITHTICKET66faa5b21eb322b7e44d7cf2d590d4d2',
                        eid: '19252765'
                    }
                }
            )
            // this.tree = res.tree
        }
    }
}
</script>

<style lang="less">
*{margin:0;padding:0}
#app {
    text-align: center;
    height: 100%;
    overflow: auto;
}
html,body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font: 14px/1.5em -apple-system,Microsoft YaHei,Arial,Microsoft JhengHei,Helvetica Neue,sans-serif;
    color: #3d464a;
    background: #f8f9fb;
    -webkit-font-smoothing: antialiased;
}
ul li {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>