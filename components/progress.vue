<template>
	<view class="container">
		<view class="bg"></view>
		<view class="current" :style="{width: current / total *100 + '%'}"></view>
	</view>
</template>

<script>
export default {
	props: {
		total: {
			type: Number,
			default: 100
		},
		current:{
			type: Number
		}
	}
}
</script>

<style>
	.container {
		position: relative;
		top: 50rpx;
		left: 33rpx;
		width: 590rpx;
		height: 13rpx;	
		border-radius: 64rpx;
	}
	.bg{
		position: absolute;
		left: 0;
		top: 0;
		width: 93%;
		height: 100%;
		background-color: #ebebeb;
		border-radius: 64rpx;
	}
	.current {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 59%;
		background-color: #feae0c;
		border-radius: 64rpx;
	}
</style>