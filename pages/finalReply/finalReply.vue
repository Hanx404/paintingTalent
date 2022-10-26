<template>
	<view class="content">
		<image class="boxImg" src="../../static/background-img.png" mode=""></image>

		<!-- logo -->
		<image class="logo" src="../../static/logo.png" mode=""></image>

		<!-- 绘画天赋测试 -->
		<image class="headerImg" src="../../static/header-img.png" mode=""></image>

		<!-- 中间结论 -->
		<view class="conclusion">
			<!-- 题目 -->
			<view class="conclusionTitle">
			<!-- 得分 -->
				<text class="fraction">恭喜你，你的了{{fraction}}分!</text> <br />
				<text class="conclusionNum">{{ interceptTitle }}</text>
			</view>

			<!-- 内容 -->
			<view class="conclusionText">{{ interceptContent }}</view>
		</view>
		<!-- 绘画不仅是兴趣 -->
		<image class="manMsg" src="../../static/man-msg.png" mode="" v-if="showManMsg"></image>

		<!-- 箭头 -->
		<image class="arrow" src="../../static/arrow.png" mode="" v-if="showArrow"></image>

		<!-- 二维码 -->
		<image class="QRCode" :src="answerList.qrcode" mode="widthFix" show-menu-by-longpress="true" v-if="showQRCode"></image>
	</view>
</template>

<script>
export default {
	data() {
		return {
			answerList: '', //得分页面所有内容
			showManMsg: true, //绘画不仅是兴趣
			showArrow: true, //箭头
			showQRCode: true, //二维码
			answerListTitle: '', //本文框所有内容
			interceptNum: '', //第一个叹号的下标
			interceptTitle: '', //截取题目
			interceptContent: '', //截取内容
			typeState: '' ,//进入类型
			fraction: ''//分数
		};
	},
	onLoad() {
		uni.request({
			//获取得分
			url: 'https://www.mojinshi.online/index.php/webservice/mini/get_score',
			method: 'POST',
			data: {
				game_id: uni.getStorageSync('game_id'),
				answer_list: JSON.stringify(uni.getStorageSync('answer_list')),
				openid: uni.getStorageSync('openid'),
				type: uni.getStorageSync('type_state')
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				this.answerList = res.data.infor; //得分页所有数据
				this.fraction = res.data.infor.total_score; //得分
				this.answerListTitle = res.data.infor.score_content; //文本框所有内容
				this.interceptNum = this.answerListTitle.indexOf('！'); //第一个叹号的下标
				this.interceptTitle = this.answerListTitle.substring(0, this.interceptNum + 1); //题目
				this.interceptContent = this.answerListTitle.substring(this.interceptNum + 1); //内容
				if (!this.answerList.qrcode) {
					// 如果二维码没返回则不显示
					this.showManMsg = false;
					this.showArrow = false;
					this.showQRCode = false;
				}
			}
		});
	},
	methods: {}
};
</script>

<style>
.content {
	width: 100%;
	height: 100%;
	overflow-x: hidden;
}

.boxImg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
}

.logo {
	width: 116rpx;
	height: 76rpx;
	margin-top: 28rpx;
	margin-left: 41rpx;
}

.headerImg {
	width: 711rpx;
	height: 282rpx;
	margin: 0 31rpx 0 27rpx;
}

.conclusion {
	width: 663rpx;
	height: 358rpx;
	background: #fff;
	border: 4rpx solid #2638bd;
	border-radius: 20rpx;
	margin: 0 43rpx 0 44rpx;
}

.conclusionTitle {
	line-height: 52rpx;
	text-align: center;
	margin: 18rpx 3rpx 10rpx -12rpx;
	box-sizing: border-box;
	font-family: my-font;
}

.fraction {
	font-size: 41rpx;
	color: #2638bd;
	font-weight: 700;
	margin-left: -64rpx;
	box-sizing: border-box;
	font-family: my-font;
}

.conclusionNum {
	font-size: 41rpx;
	color: #2638bd;
	font-weight: 700;
}
.conclusionText {
	width: 512rpx;
	height: 167rpx;
	font-size: 24rpx;
	font-family: Source Han Sans CN;
	font-weight: 600;
	color: #2638bd;
	line-height: 48rpx;
	text-align: center;
	margin: 0 76rpx 0 75rpx;
}

.manMsg {
	width: 663rpx;
	height: 219rpx;
	margin: 10rpx 43rpx -10rpx 44rpx;
}

.arrow {
	width: 87rpx;
	height: 100rpx;
	margin: 10rpx 329rpx -53rpx 329rpx;
}

.QRCode {
	display: block;
	width: 300rpx;
	margin: 62rpx auto;
}
</style>
