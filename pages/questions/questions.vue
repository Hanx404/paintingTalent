<template>
	<view class="content">
		<image class="boxImg" src="../../static/background-img.png" mode=""></image>
		<!-- logo -->
		<image class="logo" src="../../static/logo.png" mode=""></image>
		<!-- 绘画天赋测试 -->
		<image class="headerImg" src="../../static/header-img.png" mode=""></image>
		<!-- 答题盒子 -->
		<view class="answerBox">
			<!-- 进度条 -->
			<m-progress :total="14" :current="titleIndex - 1" />
			<view class="progressNum">
				<text>{{ titleIndex }}</text>
				<text>/</text>
				<text>{{ contentList.length }}</text>
			</view>

			<!-- 第一种类型 -->
			<view class="questionOne" v-if="contentList1.answer_style == 1">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<view class="">
					<!-- 图片 -->
					<image :src="contentList1.topic_img" mode=""></image>
					<!-- 单选 -->
					<view class="radio11" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
						<view class="radio1"><view class="radio1Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
						<text>{{ items.content }}</text>
					</view>
				</view>
			</view>

			<!-- 第二种类型 -->
			<view class="questionTwo" v-if="contentList1.answer_style == 2">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 图片 -->
				<image :src="contentList1.topic_img" mode="" v-if="contentList1.topic_img"></image>
				<!-- 单选 -->
				<view class="radio22" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
					<view class="radio2"><view class="radio2Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
					<text>{{ items.content }}</text>
				</view>
			</view>

<!-- 第三种类型 -->
			<view class="questionTen" v-if="contentList1.answer_style == 3">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 图片 -->
				<image :src="contentList1.topic_img" mode="" v-if="contentList1.topic_img"></image>
				<!-- 单选 -->
				<view class="radio99" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
					<view class="radio9"><view class="radio9Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
					<text>{{ items.content }}</text>
					<view class="radio99Img"><image :src="items.img" mode=""></image></view>
				</view>
			</view>

			<!-- 第四种类型 -->
			<view class="questionThree" v-if="contentList1.answer_style == 4">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 图片 -->
				<image :src="contentList1.topic_img" mode="" v-if="contentList1.topic_img"></image>
				<!-- 单选 -->
				<view class="radio33" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
					<view class="radio3"><view class="radio3Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
					<text>{{ items.content }}</text>
					<view class="radio33Img"><image :src="items.img" mode=""></image></view>
				</view>
			</view>

<!-- 第五种类型 -->
			<view class="questionThirteen" v-if="contentList1.answer_style == 5">
				<!-- 答题题目 -->
				<view class="answerTitle13">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 图片 -->
				<image :src="contentList1.topic_img" mode="" v-if="contentList1.topic_img"></image>
				<!-- 单选 -->
				<view class="radio1313" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
					<view class="radio13"><view class="radio13Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
					<view class="radio13Con">
						<text>{{ items.content }}</text>
					</view>
					<view class="radio13Img"><image :src="items.img" mode=""></image></view>
				</view>
			</view>

<!-- 第六种类型 -->
			<view class="questionEleven" v-if="contentList1.answer_style == 6">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 图片 -->
				<image :src="contentList1.topic_img" mode="" v-if="contentList1.topic_img"></image>
				<!-- 单选 -->
				<view class="radio1111" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
					<view class="radio111"><view class="radio111Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
					<text>{{ items.content }}</text>
					<view class="radio1111Img"><image :src="items.img" mode=""></image></view>
				</view>
			</view>

			<!-- 第七种类型 -->
			<view class="questionFour" v-if="contentList1.answer_style == 7">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 图片 -->
				<image :src="contentList1.topic_img" mode="" v-if="contentList1.topic_img"></image>
				<!-- 单选 -->
				<view class="radio44" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
					<view class="radio44Img"><image :src="items.img" mode=""></image></view>
					<view class="radio4"><view class="radio4Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
					<text>{{ items.content }}</text>
				</view>
			</view>

<!-- 第八种类型 -->
			<view class="questionTwelve" v-if="contentList1.answer_style == 8">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 图片 -->
				<image :src="contentList1.topic_img" mode="" v-if="contentList1.topic_img"></image>
				<!-- 单选 -->
				<view class="questionTwelveBox">
					<view class="radio1212" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
						<view class="radio12Img"><image :src="items.img" mode=""></image></view>
						<view class="radio12"><view class="radio12Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
						<text>{{ items.content }}</text>
					</view>
				</view>
			</view>

<!-- 第九种类型 -->
			<view class="questionFourteen" v-if="contentList1.answer_style == 9">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 图片 -->
				<image :src="contentList1.topic_img" mode="" v-if="contentList1.topic_img"></image>
				<!-- 单选 -->
				<view class="radio1414" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
					<view class="radio14"><view class="radio14Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
					<view class="radio14Box">
						<text>{{ items.content }}</text>
					</view>
				</view>
			</view>

			<!-- 第十种类型 -->
			<view class="questionFive" v-if="contentList1.answer_style == 10">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 图片 -->
				<image :src="contentList1.topic_img" mode="" v-if="contentList1.topic_img"></image>
				<!-- 单选 -->
				<view class="radio55" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
					<view class=""><image :src="items.img" mode=""></image></view>
					<view class="radio5"><view class="radio5Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
					<text>{{ items.content }}</text>
				</view>
			</view>

			<!-- 第十二种类型 -->
			<view class="questionSeven" v-if="contentList1.answer_style == 12">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 图片 -->
				<image :src="contentList1.topic_img" class="questionSevenImg" mode="" v-if="contentList1.topic_img"></image>
				<!-- 单选 -->
				<view class="radio66" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
					<view class="radio6"><view class="radio6Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
					<text>{{ items.content }}</text>
					<image :src="items.img" mode=""></image>
				</view>
			</view>

			<!-- 第十三种类型 -->
			<view class="questionEight" v-if="contentList1.answer_style == 13">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 图片 -->
				<image :src="contentList1.topic_img" mode="" v-if="contentList1.topic_img"></image>
				<!-- 单选 -->
				<view class="radio77" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
					<view class="radio7"><view class="radio7Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
					<text>{{ items.content }}</text>
				</view>
			</view>

			<!-- 第十四种类型 -->
			<view class="questionNine" v-if="contentList1.answer_style == 14">
				<!-- 答题题目 -->
				<view class="answerTitle">{{ contentList1.which_number }}.{{ contentList1.content }}</view>
				<!-- 答题第一种类型 -->
				<view class="questionNineImg">
					<!-- 图片 -->
					<image :src="contentList1.topic_img" mode=""></image>
					<!-- 单选 -->
					<view class="radio88" v-for="(items, indexs) in contentList1.answer_list" :key="indexs" @click="touchIt(indexs)">
						<view class="radio8"><view class="radio8Small" :class="abc == indexs ? 'colorChange' : ''"></view></view>
						<text>{{ items.content }}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 恭喜弹框 -->
		<view class="surpriseBox" v-if="surpriseBox">
			<image class="pupUp" src="../../static/pup-up.png" mode=""></image>
			<button open-type="share">
				<image class="shareBtn" src="../../static/share-btn.png" mode="">
					<text class="shareText">分享次数 {{ surplus }}/{{ surplusTwo }} 次</text>
				</image>
			</button>
			<!-- 叉号 -->
			<image src="../../static/cancel-btn.png" mode="" class="cancelBtn" @click="cancelIt"></image>
		</view>
		<!-- 遮罩层 -->
		<view class="mask" v-if="mask"></view>
	</view>
</template>

<script>
import mProgress from '../../components/progress.vue';
export default {
	components: {
		mProgress //进度条
	},
	data() {
		return {
			abc: null, //中心点
			contentList: [], //总数据
			otherList: '', //其他内容
			answerList: [], // 需传后端
			topic_img: true, //是否显示中间图
			titleIndex: 1, //初始index，每次点按传入
			contentList1: {}, //第一个题目
			answer_style: '', //空样式
			surpriseBox: false, //弹框
			mask: false, //遮罩层
			surplus: 0, //剩余次数
			surplusTwo: '', //剩余次数右
			contentBox: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				6: 6,
				7: 7,
				8: 8,
				9: 9,
				10: 10,
				11: 10,
				12: 12,
				13: 13,
				14: 14
			}
		};
	},
	onLoad() {
		uni.request({
			url: 'https://www.mojinshi.online/index.php/webservice/mini/get_test_topic',
			method: 'POST',
			data: {
				id: uni.getStorageSync('game_id')
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				console.log(res, 'res');
				this.contentList1 = res.data.infor.topic_class.topic_list[this.titleIndex - 1]; //第一题
				this.answer_style = this.contentBox[this.titleIndex]; //每一题的样式
				this.contentList1.answer_style = this.contentBox[this.titleIndex]; //第一题的样式
				this.contentList = res.data.infor.topic_class.topic_list; //所有的题目
			}
		});
		this.surplusTwo = uni.getStorageSync('share_num'); //答题次数
	},
	onShareAppMessage(res) {
		//分享成功回调
		if (res.from === 'button') {
			setTimeout(() => {
				if (this.surplus < this.surplusTwo) {
					//如果次数小于规定就+1
					this.surplus++;
				}
				uni.reLaunch({
					//达到规定次数跳转得分页
					url: '/pages/finalReply/finalReply'
				});
			}, 1000); //加延时器为了适配ios成功后跳转和防止安卓在分享前就跳转得分页
		}
		return {
			title: '磨金石教育绘画天赋测试', //分享的标题
			path: '/pages/finalReply/finalReply'
		};
	},

	methods: {
		touchIt(indexs) {
			//接收点按答案的下标
			this.abc = indexs;
			setTimeout(() => {
				if (this.titleIndex < this.contentList.length) {
					//如果index小于题目长度则index+1，继续答题
					this.titleIndex++;
				} else {
					//答题完后将所有题目答案存到本地
					uni.setStorageSync('answer_list', this.answerList);
					this.surpriseBox = true;
					this.mask = true;
				}
				this.contentList1 = this.contentList[this.titleIndex - 1]; //每次点按传入题目对应index
				this.contentList1.answer_style = this.contentBox[this.titleIndex]; //每次点按传入题目对应样式
				this.abc = null; //下一题前清空选项
			}, 200);
			if (this.answerList != this.contentList.length) {
				//叠加答案传后端
				this.answerList.push({
					id: this.contentList1.answer_list[indexs].id,
					orderby: this.contentList1.answer_list[indexs].orderby,
					score: this.contentList1.answer_list[indexs].score
				});
			}
		},
		// 点击取消
		cancelIt() {
			//点击弹框叉号跳到第一题（不分享的情况）
			uni.redirectTo({
				url: '/pages/questions/questions'
			});
		}
	}
};
</script>

<style>
.content {
	width: 100%;
	height: 100%;
	overflow-x: hidden;
}
/* 中心点 */
.radio1Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio2Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio3Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio4Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio5Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio6Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio7Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio8Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio9Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio111Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio12Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio13Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.radio14Small {
	width: 18rpx;
	height: 18rpx;
	border-radius: 50%;
	margin: 3rpx auto;
}
.colorChange {
	background-color: #feae0c !important;
}
/* 背景图 */
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
	margin: 5rpx 31rpx 0 27rpx;
}

.answerBox {
	width: 692rpx;
	height: 770rpx;
	background-color: #fff;
	border: 5rpx solid #2638bd;
	border-radius: 30rpx;
	margin: 60rpx 29rpx 95rpx;
}

.pupUp {
	position: fixed;
	top: 350rpx;
	left: 50%;
	transform: translateX(-50%);
	width: 504rpx;
	height: 567rpx;
	z-index: 110;
}

.shareBtn {
	position: fixed;
	top: 780rpx;
	left: 50%;
	transform: translateX(-50%);
	width: 325rpx;
	height: 110rpx;
	z-index: 110;
}
.shareText {
	position: fixed;
	top: 861rpx;
	right: 315rpx;
	z-index: 122;
	font-size: 19rpx;
}
.cancelBtn {
	position: fixed;
	top: 955rpx;
	left: 346rpx;
	width: 52rpx;
	height: 52rpx;
	z-index: 110;
}
.mask {
	position: fixed;
	left: 0px;
	top: 0px;
	background: rgba(0, 0, 0, 0.4);
	width: 100%;
	height: 100%;
	z-index: 100;
}

.progressBar {
	margin-top: 50rpx;
	padding-left: 46rpx;
	padding-right: 95rpx;
}
.progressNum {
	position: absolute;
	top: 512rpx;
	right: 55rpx;
	width: 61rpx;
	height: 22rpx;
	font-size: 28rpx;
	font-family: Roboto;
	font-weight: bold;
	color: #ffae00;
}

.answerTitle {
	font-size: 32rpx;
	font-family: Alibaba PuHuiTi;
	font-weight: 700;
	color: #000000;
	margin: 110rpx 0 33rpx 37rpx;
}

/* 第一种类型 */
.questionOne {
}
.questionOne image {
	width: 420rpx;
	height: 341rpx;
	margin: 0 145rpx 70rpx 145rpx;
}

.radio11 {
	display: inline-block;
	vertical-align: center;
}
.radio1 {
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-left: 85rpx;
	margin-right: 15rpx;
}

/* 第二种类型 */
.questionTwo {
	margin-bottom: 20rpx;
}
.questionTwo image {
	width: 362rpx;
	height: 363rpx;
	margin: 0 164rpx 0 166rpx;
}
.radio22 {
	display: inline-block;
	background-color: #fff;
	margin-left: 160rpx;
}
.radio22 image {
	width: 37rpx;
	height: 36rpx;
}
.radio22Img {
	display: inline-block;
}
.radio2 {
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-top: 30rpx;
	margin-right: 17rpx;
}

.radio33 {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin-left: -43rpx;
	padding: 26rpx 0;
}
.radio3 {
	display: flex;
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-right: -80rpx;
	margin-top: 10rpx;
}
.radio33 text {
	padding-right: 43rpx;
}
.radio33Img {
	display: inline-block;
	margin-left: 100rpx;
}
.radio33Img image {
	width: 90rpx;
	height: 36rpx;
	vertical-align: middle;
}

.radio44 {
	display: inline-block;
}
.radio44 image {
	width: 112rpx;
	height: 137rpx;
}
.radio44Img {
	padding: 20rpx 0 35rpx 53rpx;
}
.radio4 {
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-left: 66rpx;
	margin-right: 16rpx;
}

.radio55 {
	display: inline-block;
}
.radio55 image {
	display: inline-block;
	width: 151rpx;
	height: 186rpx;
	margin-left: 128rpx;
	margin-top: 15rpx;
}
.radio5 {
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-left: 158rpx;
	margin-top: 20rpx;
	margin-right: 17rpx;
}

.radio6 {
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-right: 15rpx;
}

.radio66 {
	display: inline-block;
	margin-left: 98rpx;
	margin-right: 17rpx;
}
.radio66 image {
	width: 125rpx;
	height: 117rpx;
	vertical-align: middle;
}
.questionSevenImg {
	width: 298rpx;
	height: 215rpx;
	margin: 0 197rpx 56rpx 197rpx;
}

.questionEight image {
	width: 338rpx;
	height: 240rpx;
	margin-left: 180rpx;
	margin-bottom: 77rpx;
}
.radio77 {
	display: inline-block;
	padding: 13rpx 87rpx;
}
.radio7 {
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-right: 16rpx;
}

.radio88 {
	display: inline-block;
}
.radio8 {
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-left: 49rpx;
	margin-right: 25rpx;
}
.questionNineImg image {
	width: 295rpx;
	height: 367rpx;
	margin: 0 198rpx 53rpx 199rpx;
}

.radio99 {
	display: inline-block;
	margin-top: 76rpx;
}
.radio9 {
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-left: 64rpx;
	margin-right: 15rpx;
}
.radio99Img {
	display: inline-block;
	padding-right: 80rpx;
	vertical-align: middle;
}
.radio99Img image {
	width: 37rpx;
	height: 36rpx;
	margin-left: 31rpx;
}

.radio1111 {
}
.radio111 {
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-right: 16rpx;
	margin-left: 50rpx;
}
.radio1111Img {
	display: inline-block;
	vertical-align: middle;
}
.radio1111Img image {
	width: 265rpx;
	height: 56rpx;
	margin-left: 34rpx;
}

.radio1212 {
	display: inline-block;
	margin: 13rpx 0 0 11rpx;
}
.radio1212 image {
	width: 211rpx;
	height: 339rpx;
}
.radio1212Img {
	padding-left: 53rpx;
}
.questionTwelveBox {
	margin-left: 137rpx;
}
.radio12 {
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin: 22rpx 16rpx 0 66rpx;
}

.answerTitle13 {
	font-family: Alibaba PuHuiTi;
	font-weight: 700;
	color: #000000;
	margin: 110rpx 16rpx 70rpx 37rpx;
}
.radio1313 {
	display: flex;
	margin-bottom: 60rpx;
}
.radio13 {
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-top: 10rpx;
	margin-left: 58rpx;
	margin-right: 15rpx;
}
.radio13Con {
	width: 280rpx;
	margin-right: 150rpx;
}

.radio13Img image {
	width: 89rpx;
	height: 36rpx;
}

.questionFourteen image {
	width: 255rpx;
	height: 243rpx;
	margin: 76rpx 216rpx 0 221rpx;
}
.radio14 {
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background: #ffffff;
	border: 3rpx solid #e6e6e6;
	border-radius: 50%;
	margin-right: 15rpx;
	margin-left: 145rpx;
}
.radio1414 {
	display: inline-block;
	margin-top: 21rpx;
	box-sizing: border-box;
	/* margin-left: 130rpx; */
	/* margin-right: 150rpx; */
}
.radio14Box {
	display: inline-block;
	width: 88rpx;
}
</style>
