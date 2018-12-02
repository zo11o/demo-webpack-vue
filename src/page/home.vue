<template>
    <div>
        <a href="javascript:void(0)" @click="showName">The project author is {{this.name}}</a>
    </div>
</template>

<script>
export default {
    //
    data(){
        return {
            name:'',
        }
    },
    methods:{
        showName:function(){
            this.name='zo11o'
        }
    }
}
</script>

<style>

</style>
