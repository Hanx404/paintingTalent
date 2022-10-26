<template>
	<view class="content">
		<image class="boxImg" src="../../static/background-img.png" mode=""></image>
		
		<!-- logo -->
		<image class="logo" src="../../static/logo.png" mode=""></image>
		
		<!-- 绘画天赋测试 -->
		<image class="headerImg" src="../../static/header-img.png" mode=""></image>
		<view class="headerText">{{ gameAll.test_title }}</view>

		<!-- 中间 -->
		<view class="middleBox">
			<!-- 左联 -->
			<image class="coupletLeft" src="../../static/couplet-left.png" mode=""></image>

			<!-- 外图 -->
			<image class="middleImg" src="../../static/middle-img.png" mode="">
				
				<!-- 人数 -->
				<view class="personNumBox">
					<text class="personNum">{{ firstNum }}人已测</text>
				</view>
			</image>
			
			<!-- 右联 -->
			<image class="coupletRight" src="../../static/couplet-right.png" mode=""></image>
		</view>
		
		<view class="bottomBox">
			<!-- 立即测试 -->
			<image class="testBtn" @click="$noMultipleClicks(commitWork)" src="../../static/test-btn.png" mode=""></image>
			
			<!-- 题目数 -->
			<view class="bottomSubject">一共{{ firstTitleNum }}道题</view>
			
			<!-- 底部 -->
			<image class="imageBottom" src="../../static/image-bottom.png" mode=""></image>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			gameAll: {}, //首页内容
			firstNum: 0, //得分数
			firstTitleNum: 0, //题目数
			openid: '', //用户openid
			avatar: '', //用户头像
			username: '', //用户名字
			shareNum: '', //剩余次数
			typeState: '', //进入类型
			noClick: true //防抖
		};
	},

	onLoad(options) {
		//判定用户以什么形式扫码进入的
		this.typeState = options.type;
		if (options.type == null) {
			this.typeState = 0;
		}
		uni.setStorageSync('type_state', this.typeState);
		uni.login({
			//登录
			provider: 'weixin',
			success: loginRes => {
				uni.request({
					url: 'https://www.mojinshi.online/index.php/webservice/mini/onLogin',
					method: 'GET',
					data: {
						code: loginRes.code,
						type: this.typeState
					},
					success: res => {
						this.openid = res.data.infor.openid;
						uni.setStorageSync('openid', this.openid);
					}
				});
			}
		});
		uni.request({
			//首页初始化
			url: 'https://www.mojinshi.online/index.php/webservice/mini/initData',
			method: 'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				this.gameAll = res.data.infor;
				this.shareNum = res.data.infor.share_num;//答题次数
				this.firstNum = res.data.infor.person_num;
				this.firstTitleNum = res.data.infor.test_num;
				uni.setStorageSync('game_id', this.gameAll.game_id); //游戏id存本地
				uni.setStorageSync('share_num', this.shareNum);
			}
		});
	},
	methods: {
		commitWork() {
			uni.getUserProfile({
				//获取用户头像及名称
				provider: 'weixin',
				desc: '获取头像及昵称',
				success: infoRes => {
					this.avatar = infoRes.userInfo.avatarUrl;
					this.username = infoRes.userInfo.nickName;
					uni.setStorageSync('avatar', this.avatar);
					uni.setStorageSync('username', this.username);

					uni.request({
						// 更新用户信息
						url: 'https://www.mojinshi.online/index.php/webservice/mini/updateUser',
						method: 'POST',
						data: {
							openid: uni.getStorageSync('openid'),
							nickname: uni.getStorageSync('username'),
							headimgurl: uni.getStorageSync('avatar')
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							//更新成功后跳转答题页面
							uni.navigateTo({
								url: '/pages/questions/questions'
							});
						}
					});
				}
			});
		}
	}
};
</script>

<style>
.content {
	overflow-x: hidden;
}

.boxImg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 1624rpx;
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
	height: 270rpx;
	margin: 5rpx 31rpx -2rpx 27rpx;
}

.headerText {
	position: absolute;
	top: 309rpx;
	left: 107rpx;
	width: 416rpx;
	font-size: 32rpx;
	font-family: Source Han Sans CN;
	font-weight: 500;
	color: #f9db1c;
	background-color: #2828fc;
}

.coupletLeft {
	width: 75rpx;
	height: 554rpx;
	margin-left: 17rpx;
	margin-top: 74rpx;
}

.coupletRight {
	width: 75rpx;
	height: 554rpx;
	margin-right: 17rpx;
	margin-top: 74rpx;
}

.middleBox {
	display: flex;
	justify-content: space-around;
}

.middleImg {
	width: 475rpx;
	height: 660rpx;
}

.personNumBox {
	position: absolute;
	top: -5rpx;
	left: 0;
	width: 100%;
}

.personNum {
	position: absolute;
	top: 500rpx;
	left: 203rpx;
	display: inline-block;
	font-size: 24rpx;
	font-family: Adobe Heiti Std;
	font-weight: 540;
	color: #2638bd;
}

.bottomBox {
	display: flex;
	flex-direction: column;
}

.testBtn {
	width: 345rpx;
	height: 100rpx;
	margin: 21rpx auto;
}

.bottomSubject {
	text-align: center;
	font-size: 24rpx;
	font-family: Alibaba PuHuiTi;
	font-weight: 400;
	color: #ffffff;
	margin-top: -12px;
}

.imageBottom {
	width: 659rpx;
	height: 190rpx;
	margin: 17rpx auto 75rpx;
}
</style>
