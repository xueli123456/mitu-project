<template>
	<div class="xl_home">
        <!-- 旅游圈开始-->
        <xl-home-tourism></xl-home-tourism>
        <!-- 错峰特惠开始-->
        <div class="xl_character_tab" :class="searchBarFixed == true ? 'isFixed' :''" >
            <div class="xl_tab-item" @click="flag=0" :class="{xl_tab_active:flag===0}"> 错峰特惠  </div>
            <div class="xl_tab-item" @click="flag=1" :class="{xl_tab_active:flag===1}"> 为你系列  </div>
            <div class="xl_tab-item" @click="flag=2" :class="{xl_tab_active:flag===2}"> 设计师说  </div>
            <div class="xl_tab-item" @click="flag=3" :class="{xl_tab_active:flag===3}"> 嗨玩周末  </div>
        </div>
        <xl-home-character :flag="flag"></xl-home-character>
        <!--footer开始-->
        <xl-home-footer></xl-home-footer>
<!--        <div class="kong"></div>-->
	</div>
</template>

<script>
    import xlHomeTourism from '../components/xl-home/xl-home-tourism'
    import xlHomeCharacter from '../components/xl-home/home-character'
    import xlHomeFooter from '../components/xl-home/xl-home-footer'
	export default{
		name:"home",
        data() {
            return {
                "flag": 0,
                "searchBarFixed":true
            }
        },
        components:{
            "xl-home-tourism":xlHomeTourism,
            "xl-home-character":xlHomeCharacter,
            "xl-home-footer":xlHomeFooter
        },
        methods:{
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                console.log(scrollTop)
                var offsetTop = document.querySelector('.xl_character_tab').offsetTop
                if(scrollTop > offsetTop + 30) {
                    this.searchBarFixed = true
                } else {
                    this.searchBarFixed = false
                }
            },
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
	}
</script>

<style scoped>
	@import "../assets/css/xl_home_css/xl_home_css.css";
</style>
