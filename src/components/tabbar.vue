<template>
	<div class="tabWrap">
		<a href="javascript:;" class="footer-item" v-for="(i,index) in tabs" :key="index" :class="{active:index == thatnum}" @click="addClassName(index)">
			<router-link :to="i.url">
				<img v-if="thatnum!=index" :src="i.img">
				<img v-if="thatnum==index" :src="i.active">
				<p class="weui-tabbar__label">{{i.text}}</p>
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
						url: '/',
						img: "./images/shouye.png",
						active: './images/shouye1.png'
					},
					{
						text: "目的地",
						url: '/mudi',
						img: "./images/mudi.png",
						active: './images/mudi1.png'
					},
					{
						text: "发现",
						url: '/faxian',
						img: "./images/faxian .png",
						active: './images/faxian1.png'
					},
					{
						text: "签证大厅",
						url: '/qianzhen',
						img: "./images/qianzhen.png",
						active: './images/qianzhen1.png'
					},
					{
						text: "我的",
						url: '/my',
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
		width: 20%;
	}

	.tabWrap a img {
		width: 1.5rem;
		height: 1.5rem;
	}

	.weui-tabbar__label {
		margin: 0;
		font-size: 0.14rem;
	}

	.active p {
		color: red;
	}
</style>
