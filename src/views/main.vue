<template>
	<div>
        <router-view></router-view>
       <mt-tabbar></mt-tabbar>   
    </div>
</template>

<script>
import tabbar from "../components/common/tabbar"
	export default{
        name:"tmain",
        components:{
        "mt-tabbar":tabbar
        }
	}
</script>

<style scoped>

</style>
