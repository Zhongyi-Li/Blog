<!--
 * @Author: 'Zhongyi-Li' '1404377808@qq.com'
 * @Date: 2022-04-18 23:03:10
 * @LastEditors: 'Zhongyi-Li' '1404377808@qq.com'
 * @LastEditTime: 2022-05-08 22:16:26
 * @FilePath: \simple-vue\src\components\Ranking.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
      <!-- <button @click="$router.push({path:'/test'})">Go</button> -->
      <button @click="handleListAdd">ADD</button>
      <div>
          <div v-for="(m) in darft" :key="m.id">
              {{m.name}}{{m.status}}
          </div>
           <div v-for="(m) in processing" :key="m.id">
              {{m.name}}{{m.status}}
          </div>
          <div v-for="(m) in tobeConfirmed" :key="m.id">
              {{m.name}}{{m.status}}
          </div>
          <div v-for="(m) in closed" :key="m.id">
              {{m.name}}{{m.status}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        handleListAdd(){
            // let list_ = JSON.parse(JSON.stringify())
            // this.list.push.apply(this,list_)

            
            this.list.push(
            {
                name:'darft',
                status:'1',
                id:parseInt(Math.random()*10000),
            },
            {
                name:'darft',
                status:'1',
                id:parseInt(Math.random()*10000),
            },
            {
                name:'darft',
                status:'1',
                id:parseInt(Math.random()*10000),
            },
            {
                name:'darft',
                status:'1',
                id:parseInt(Math.random()*10000),
            },
            {
             name:'processing',
             status:'2',
             id:parseInt(Math.random()*10000),   
            },
            {
             name:'processing',
             status:'2',
             id:parseInt(Math.random()*10000),   
            },
            {
             name:'processing',
             status:'2',
             id:parseInt(Math.random()*10000),   
            },
            {
             name:'processing',
             status:'2',
             id:parseInt(Math.random()*10000),   
            },
            {
             name:'processing',
             status:'2',
             id:parseInt(Math.random()*10000),   
            },
            {
                name:'to be confirmed',
                status:'3',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'to be confirmed',
                status:'3',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'to be confirmed',
                status:'3',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'to be confirmed',
                status:'3',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'close',
                status:'4',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'close',
                status:'4',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'close',
                status:'4',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'close',
                status:'4',
                id:parseInt(Math.random()*10000)
            }
            )
            // this.list = [...this.list,...list_]


            // let arr = [{name:'jack'},{name:'jack'}]
            // arr.push(...arr)
            // console.log(arr);
        }
    },
    computed:{
        darft(){
            return  this.list.filter(m => m.status === '1')  
        },
        processing(){

             return  this.list.filter(m => m.status === '2')  
        },
        tobeConfirmed(){

            return  this.list.filter(m => m.status === '3')  
        },
        closed(){
            
            return  this.list.filter(m => m.status === '4')  
        }
    },
    mounted(){
        //status 1. to be confirmed  2. processing 3.darft 4. close
        this.list = [
            {
                name:'darft',
                status:'1',
                id:parseInt(Math.random()*10000),
            },
            {
                name:'darft',
                status:'1',
                id:parseInt(Math.random()*10000),
            },
            {
                name:'darft',
                status:'1',
                id:parseInt(Math.random()*10000),
            },
            {
                name:'darft',
                status:'1',
                id:parseInt(Math.random()*10000),
            },
            {
             name:'processing',
             status:'2',
             id:parseInt(Math.random()*10000),   
            },
            {
             name:'processing',
             status:'2',
             id:parseInt(Math.random()*10000),   
            },
            {
             name:'processing',
             status:'2',
             id:parseInt(Math.random()*10000),   
            },
            {
             name:'processing',
             status:'2',
             id:parseInt(Math.random()*10000),   
            },
            {
             name:'processing',
             status:'2',
             id:parseInt(Math.random()*10000),   
            },
            {
                name:'to be confirmed',
                status:'3',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'to be confirmed',
                status:'3',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'to be confirmed',
                status:'3',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'to be confirmed',
                status:'3',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'close',
                status:'4',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'close',
                status:'4',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'close',
                status:'4',
                id:parseInt(Math.random()*10000)
            },
            {
                name:'close',
                status:'4',
                id:parseInt(Math.random()*10000)
            }


        ]
        console.log(window.history);
    }
}
</script>

<style>

</style>