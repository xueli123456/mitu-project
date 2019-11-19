<template>
<div class="tabWrap">
<a href="javascript:;" class="footer-item" v-for="(n,index) in tabs" :key="index" >
<router-link :to="n.url">
<img :src="n.url=== $route.path ? n.active:n.img">
<p :class="n.url=== $route.path ?'mtactive':'weui-tabbar__label'">{{n.text}}</p>
</router-link>
</a>

</div>
</template>

<script>
// import axios from "axios";
export default {
name: "index",
data() {
return {
thatnum: 0,
tabs: [{
text: "首页",
url: '/main/home',
img: "./images/shouye.png",
active: './images/shouye1.png'
},
{
text: "目的地",
url: '/main/destinate',
img: "./images/mudi.png",
active: './images/mudi1.png'
},
{
text: "发现",
url: '/main/discover',
img: "./images/faxian .png",
active: './images/faxian1.png'
},
{
text: "我的",
url: '/main/my',
img: "./images/my.png",
active: './images/my1.png'
}
],
};
},
methods: {
addClassName: function(index) {
this.thatnum = index;
},
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabWrap {
display: flex;
width: 100%;
position: fixed;
left: 0;
bottom: 0;
width: 100%;
}

.tabWrap a {
padding: 0.1rem;
box-sizing: border-box;
width: 25%;
}

.tabWrap a img {
width:0.2rem;
height: 0.2rem;
}

.weui-tabbar__label {
	margin-top: 0.05rem;
	text-align: center;
margin-left: 0.1rem;
color: #000000;
font-size: 0.12rem;
}

.mtactive {
	margin-top: 0.05rem;
	margin-left: 0.1rem;
text-align: center;
font-size: 0.12rem;
color: #FF5523;
}
</style>
