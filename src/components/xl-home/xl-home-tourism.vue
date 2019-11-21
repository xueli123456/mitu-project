<template>
    <div class="xl_tourism">
        <div class="tourism_title">
           <div class="xl_tour_con">
               <p> 旅友圈  </p>
               <span class="xl-label-desc">跟随遨游产品设计师，在陌生的地方发现一种久违的感动</span>
           </div>
        </div>
        <ul class="xl_tourism_list">
            <li class="tourism_list_item" v-for="(item,index) in tourCircle" :key="index">
                <a href="#/">
                    <div class="traveler-img">
                        <img :src="item.src">
                    </div>
                    <div class="tourism_content" :class="index === 1 ?'xl_active':''">
                        <div class="traveler-infor">
                            <p>{{item.name}}</p>
                            <div class="xl-label-desc">
                                <span class="travel-tag">
                                    {{item.sign}}
                                </span>
                            </div>
                        </div>
                        <div class="xl_product_item">
                            <p class="xl_product_recommend">
                                {{item.common}}
                            </p>
                            <div class="xl_item-img">
                                <img :src="item.pic" >
                                <div class="xl_product-price">
                                    <span>¥{{item.price}}<b>起</b></span>
                                </div>
                            </div>
                            <div class="xl_item-infor">
                                <h3 class="xl_item-tit">{{item.title}}</h3>
                                <p class="xl_item-des">{{item.details}}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "xl-home-tourism",
        data(){
            return{
                tourCircle:[
                    {
                        "src":"https://images1.aoyou.com/basedataoperation/201910/xt66xv30150654.jpg",
                        "name":"Sharon",
                        "sign":"喜欢探寻当地历史文化与地道生活之所在。",
                        "common":" 新品尝鲜！往返国航直飞。解锁新加坡的“海上后花园”巴淡岛。这里是印尼仅次于巴厘岛的第二大旅游目的地拿起护照，说走就走，巴淡岛落地免签。3晚巴淡岛度假酒店+1晚新加坡，特别安排巴淡岛一整天自由活动，可体验芒果岛出海，也可自由DIY！",
                        "pic":"http://images1.aoyou.com/productlist/201605/x4hv6h30112057.jpg?imageView2/1/w/285/h/158/q/90",
                        "price":"2999",
                        "title":"【新巴物语】新加坡+巴淡岛6-7日游",
                        "details":"精选国航/小红书疯狂推荐蜜月海岛/1天自由活动/全程四星酒店/网红打卡哈之巷+滨海湾花园+双螺旋桥"
                    },
                    {
                        "src":"https://images1.aoyou.com/basedataoperation/201910/xt66xv30150654.jpg",
                        "name":"Sharon",
                        "sign":"喜欢探寻当地历史文化与地道生活之所在。",
                        "common":" 新品尝鲜！往返国航直飞。解锁新加坡的“海上后花园”巴淡岛。这里是印尼仅次于巴厘岛的第二大旅游目的地拿起护照，说走就走，巴淡岛落地免签。3晚巴淡岛度假酒店+1晚新加坡，特别安排巴淡岛一整天自由活动，可体验芒果岛出海，也可自由DIY！",
                        "pic":"http://images1.aoyou.com/productlist/201605/x4hv6h30112057.jpg?imageView2/1/w/285/h/158/q/90",
                        "price":"2999",
                        "title":"【新巴物语】新加坡+巴淡岛6-7日游",
                        "details":"精选国航/小红书疯狂推荐蜜月海岛/1天自由活动/全程四星酒店/网红打卡哈之巷+滨海湾花园+双螺旋桥"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/css/xl_home_css/xl_home_css.css";
</style>