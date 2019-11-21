<template>
    <div class="xl_character">
<!--         <div class="xl_character_tab" >-->
<!--             <div class="xl_tab-item" @click="flag=0" :class="{xl_tab_active:flag===0}"> 错峰特惠  </div>-->
<!--             <div class="xl_tab-item" @click="flag=1" :class="{xl_tab_active:flag===1}"> 为你系列  </div>-->
<!--             <div class="xl_tab-item" @click="flag=2" :class="{xl_tab_active:flag===2}"> 设计师说  </div>-->
<!--             <div class="xl_tab-item" @click="flag=3" :class="{xl_tab_active:flag===3}"> 嗨玩周末  </div>-->
<!--         </div>-->
        <div class="xl_character_product">
            <a href="#/" class="character_product_item" v-for="(item,index) in characterList[flag].peak" :key="index">
                <div class="character-item-img">
                    <img :src="item.src" />
                    <div class="shade jian">
                        <div class="xl_product-tag">
                            <span class="tag tag-green">{{item.tip}}</span>
                        </div>
                    </div>
                    <div class="xl_product-price">
                        <span>¥{{item.price}}<b>起</b></span>
                    </div>
                </div>
                <div class="xl_item-infor">
                    <h3 class="xl_item-tit desc">{{item.title}}</h3>
                    <p class="xl_item-des">{{item.details}}</p>
                    <div class="tag-wrap">
                        <p> <span class="tag-yellow">{{item.tag}}</span></p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-character",
        data(){
            return{
                // "flag":0,
                "searchBarFixed":true,
                characterList:
                    [
                        {
                            "peak":[
                                {
                                   "src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                },
                                {
                                    "src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                },
                                {
                                    "src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                }
                            ]
                        },
                        {
                            "peak":[
                                {
                                    "src":"http://images1.aoyou.com/productlist/201601/znx48621193934.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                },
                                {
                                    "src":"http://images1.aoyou.com/productlist/201601/znx48621193934.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                },
                                {
                                    "src":"http://images1.aoyou.com/productlist/201601/znx48621193934.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                }
                            ]
                        },
                        {
                            "peak":[
                                {
                                    "src":"http://images1.aoyou.com/productlist/201709/0z4bn807140602.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                },
                                {
                                    "src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                },
                                {
                                    "src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                }
                            ]
                        },
                        {
                            "peak":[
                                {
                                    "src":"http://images1.aoyou.com/productlist/201907/0z060202141434.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                },
                                {
                                    "src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                },
                                {
                                    "src":"http://images1.aoyou.com/productlist/201607/t0b80612144428.jpg?imageView2/1/w/335/h/180/q/90",
                                    "tip":"跟团游",
                                    "price":"9999",
                                    "title":"遨游保障|英国+爱尔兰乐享品质12日游【莫赫悬崖/巨人堤/黑暗树篱/爱尔兰农场做面包学舞打手鼓】",
                                    "details":"托莱多+毕加索故居马拉加+斗牛发源地龙达+马德里皇宫+葡式餐+拒签全退+自由活动",
                                    "tag":"4钻"
                                }
                            ]
                        },
                    ]
            }
        },
        props:['flag']

    }
</script>

<style scoped>
    @import "../../assets/css/xl_home_css/xl_home_css.css";
</style>