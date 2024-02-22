<template>
	<page-meta :page-style="`overflow: ${isShowCard == true ? 'hidden' : '' }`" />
  <unicloud-db v-slot:default="{data, loading, error, options}" collection="demoDB" :where="`pack == '${where}'`">
    <template v-if="error">{{ error.message }}</template>
    <template v-else-if="loading">
      <div style="padding: 20rpx 0;text-align: center;">
        <icon type="waiting" size="26"/>
      </div>
    </template>
    <template v-else>
      <div class="fctrl">
      	<div class="info">
      		<div>{{ serName }} [{{ sno }}]</div>
      		<div>共{{ data.length }}张</div>
      	</div>
      	<!-- <div class="tabs">
      		<div class="tn xs" @click="showFilter">过滤</div>
      		<div class="tn" :class="{on: classType == 'All'}" @click="changeTabs('All')">ALL</div>
      		<div class="tn" :class="{on: classType == 'Leader'}" @click="changeTabs('Leader')">LEADER</div>
      		<div class="tn" :class="{on: classType == 'Battle'}" @click="changeTabs('Battle')">BATTLE</div>
      		<div class="tn" :class="{on: classType == 'Extra'}" @click="changeTabs('Extra')">EXTRA</div>
      	</div> -->
      </div>
      <div class="list">
        <template v-for="item in data" :key="item._id">
          <div class="item">
            <div class="picwp" @click="showDet(item)">
              <image src="../../../static/img/sleeve.webp" mode="widthFix" class="cback"></image>
              <div class="prshow">
                <div class="skill" v-if="item.showF">
                  <template v-if="item.showF == '1'">
                    <div class="sitem" v-for="(skill, index) in item.effect[0]" :key="index">
                      <div class="sdet">{{ skill }}</div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="sitem" v-for="(skill, index) in item.effect[1]" :key="index">
                      <div class="sdet">{{ skill }}</div>
                    </div>
                  </template>
                </div>
                <div class="skill" v-else>
                  <div class="sitem" v-for="(skill, index) in item.effect[0]" :key="index">
                    <div class="sdet">{{ skill }}</div>
                  </div>
                </div>
              </div>
              <template v-if="item.showF">
                <image :src="item.img[0]" lazy-load mode="widthFix" class="img" v-if="item.showF == '1'"></image>
                <image :src="item.img[1]" lazy-load mode="widthFix" class="img" v-else></image>
              </template>
              <template v-else>
                <image :src="item.img[0]" lazy-load mode="widthFix" class="img"></image>
              </template>
              <div class="type">{{ item.type }}</div>
            </div>
            <div class="name">
              <template v-if="item.showF">
                <template v-if="item.showF == '1'">{{ item.name[0] }}</template>
                <template v-else>{{ item.name[1] }}</template>
              </template>
              <template v-else>{{ item.name[0] }}</template>
              <div class="bn" @click="changeLeader(item)" v-if="item.showF">查看{{ item.showF == '1' ? '反' : '正' }}面</div>
            </div>
          </div>
        </template>
      </div>
      <emptyList v-if="data.length == 0"></emptyList>
    </template>
  </unicloud-db>
  <copyRight></copyRight>
  <div class="popups" v-show="isShowFilter">
  	<div class="p-filter">
  		<div class="tclass">
  			<div class="plist">
  				<div class="item" :class="{on: filterStr == 'Red'}" @click="filterColor('Red')">Red</div>
          <div class="item" :class="{on: filterStr == 'Blue'}" @click="filterColor('Blue')">Blue</div>
          <div class="item" :class="{on: filterStr == 'Green'}" @click="filterColor('Green')">Green</div>
          <div class="item" :class="{on: filterStr == 'Yellow'}" @click="filterColor('Yellow')">Yellow</div>
  			</div>
  		</div>
  		<div class="ctrl">
  			<div class="bns" @click="resetList">重置</div>
  			<div class="bns" @click="isShowFilter = false">关闭</div>
  		</div>
  	</div>
  </div>
  
  <div class="popups" v-if="isShowCard">
  	<div class="p-showcard" :class="{'animate__zoomIn': isShowCard}">
  		<div class="cardShow">
        <template v-if="showCardDet.showF">
          <image :src="showCardDet.img[0]" mode="widthFix" class="img" v-if="showCardDet.showF == '1'"></image>
          <image :src="showCardDet.img[1]" mode="widthFix" class="img" v-else></image>
        </template>
        <template v-else>
          <image :src="showCardDet.img[0]" mode="widthFix" class="img"></image>
        </template>
  		</div>
      <div class="close" @click="changeLeader(showCardDet)" v-if="showCardDet.showF">查看{{ showCardDet.showF == '1' ? '反' : '正' }}面</div>
  		<div class="detInfo">
        <template v-if="showCardDet.showF">
          <div class="name" v-if="showCardDet.showF == '1'">{{ showCardDet.name[0] }}</div>
          <div class="name" v-else>{{ showCardDet.name[0] }}</div>
        </template>
        <template v-else>
          <div class="name">{{ showCardDet.name[0] }}</div>
        </template>
        <div class="skill" v-if="showCardDet.showF">
          <template v-if="showCardDet.showF == '1'">
            <div class="showCardDet" v-for="(skill, index) in showCardDet.effect[0]" :key="index">
              <div class="sdet">{{ skill }}</div>
            </div>
          </template>
          <template v-else>
            <div class="showCardDet" v-for="(skill, index) in showCardDet.effect[1]" :key="index">
              <div class="sdet">{{ skill }}</div>
            </div>
          </template>
        </div>
        <div class="skill" v-else>
          <div class="showCardDet" v-for="(skill, index) in showCardDet.effect[0]" :key="index">
            <div class="sdet">{{ skill }}</div>
          </div>
        </div>
  		</div>
  		<div class="close" @click="isShowCard = false; showCardDet.showF = '1'">关闭</div>
  	</div>
  </div>
</template>

<script setup>
	import emptyList from '../../../components/emptyList/index.vue'
	import copyRight from '../../../components/copyright/index.vue'
	// import { returnSerDetList } from '../../untils/seriesList.js'
	// import { returnPMType } from '../../untils/returnCHN'
	import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'

	// const typeList = returnPMType('all');

	let isLoading = ref(true);
  
	let sno = ref(null);
	let serName = ref(null);
  let where = ref(null);
  
	let cardLength = ref(null);
  
	let detList = ref([]);
	let aList = ref([]);
	let pList = ref([]);
	let tList = ref([]);
	let eList = ref([]);
  
	let classType = ref('All');
	let isShowFilter = ref(false);
  let filterStr = ref(null);
  
	let isShowCard = ref(false);
	let showCardDet = ref(null);
	
	onLoad(options => {
		sno.value = options.no;
		serName.value = decodeURIComponent(options.name);
    where.value = decodeURIComponent(options.where);
    // console.log(where.value)
		// scode.value = options.code;
		// returnSerDetList(sno.value, function(res){
		// 	getData(res)
		// }, function(){
		// 	isLoading.value = false
		// })
	})
  
  const changeLeader = (FoB) => {
    if(FoB.showF == '1'){
      FoB.showF = '0'
    }else{
      FoB.showF = '1'
    }
  }
  
  const showDet = (item) => {
    let copy = JSON.parse(JSON.stringify(item));
    if(copy.showF){
      copy.showF = '1';
    }
  	showCardDet.value = copy;
  	isShowCard.value = true
  }
  
  

	const getData = (res) => {
		uni.showLoading({
			title: '加载中',
			mask: true
		});
		detList.value = res.default;
		aList.value = res.default;
		pList.value = res.default.filter(item => {
			return item.type == 'Pokemon'
		});
		tList.value = res.default.filter(item => {
			return item.type == 'Trainers'
		});
		eList.value = res.default.filter(item => {
			return item.type == 'Energy'
		})
		isLoading.value = false;
		setTimeout(function () {
			uni.hideLoading()
		}, 1000);
	}

	const _showLoading = (duration = 1000) => {
		uni.showLoading({
			title: '加载中',
			mask: true
		});
		setTimeout(function () {
			uni.hideLoading()
		}, duration);
	}
  
	const changeTabs = (type) => {
		if(uni.pageScrollTo){
			uni.pageScrollTo({
				scrollTop: 0
			})
		}
		_showLoading();
		classType.value = type;
		switch(type){
			case 'All': detList.value = aList.value; break;
			case 'Pokemon': detList.value = pList.value; break;
			case 'Trainers': detList.value = tList.value; break;
			case 'Energy': detList.value = eList.value; break;
		}
	}

	const showFilter = () => {
		isShowFilter.value = true
	}

	const filterColor = (type) => {
		if(uni.pageScrollTo){
			uni.pageScrollTo({
				scrollTop: 0
			})
		}
		_showLoading();
		filterStr.value = type;
		detList.value = aList.value.filter(item => {
			return item.typeEnergy == type
		})
		classType.value = 'Pokemon';
		isShowFilter.value = false
	}

	const resetList = () => {
		_showLoading();
		filterStr.value = '';
		detList.value = aList.value;
		classType.value = 'All';
		isShowFilter.value = false
	}

  

	const changeArt = (url) => {
		showCardDet.value.showImg = url
	}
</script>

<style scoped lang="scss">
	.fctrl{
		position: sticky;
		top: 0;
		padding: 20rpx 30rpx 10rpx;
		background: #f3f3f3;
		box-shadow: 0 -1px #f3f3f3;
		z-index: 5;
		.info{
			margin: 0 0 10rpx 0;
			display: flex;
			justify-content: space-between;
		}
		.tabs{
			display: flex;
			text-align: center;
			align-items: center;
			.tn{
				flex: 1;
				&.xs{
					font-size: 12px;
					flex: .5
				}
			}
			.on{
				color: #16baaa
			}
		}
	}
	.list{
		margin: 10rpx 30rpx 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.item{
			position: relative;
			margin: 0 0 20rpx 0;
			width: 48%;
			min-height: 80rpx;
			text-align: center;
			font-size: 12px;
			.picwp{
				position: relative;
				margin: 0 0 10rpx 0;
				overflow: hidden;
				.cback{
					width: 100%;
					display: block;
					opacity: .3;
				}
				.img{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					display: block;
				}
				.prshow{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					overflow-y: scroll;
					.skill{
						.sitem{
							margin: 10rpx 0;
							padding: 0 5%;
							text-align: left;
							&:last-of-type{
								margin-bottom: 0;
							}
						}
					}
				}
        .type{
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 0 10rpx;
          background: #fff;
          transform: scale(.6);
          transform-origin: 0 100%;
        }
			}
			.name{
        position: relative;
				text-align: center;
        .bn{
          position: absolute;
          bottom: 0;
          right: 0;
          background: #333;
          color: #fff
        }
			}
		}
	}
	.p-filter{
		position: absolute;
		top: 50%;
		left: 50%;
		padding: 30rpx;
		background: #fff;
		width: 80%;
		border-radius: 20rpx;
		transform: translate(-50%, -50%);
		.plist{
			margin: 10rpx 0 20rpx;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			.item{
				margin: 15rpx 0;
				padding: 0 8rpx;
				width: 21%;
				border: 1px solid #ccc;
				border-radius: 10rpx;
				text-align: center;
				box-sizing: border-box;
				&.on{
					background: #16baaa;
					border-color: #16baaa;
					color: #fff
				}
				.img{
					margin: 10rpx auto;
					width: 35rpx;
					height: 35rpx;
					display: block;
				}
			}
		}
		.ctrl{
			padding: 50rpx 0 0 0;
			display: flex;
			justify-content: center;
			.bns{
				margin: 0 20rpx
			}
		}
	}
	.p-showcard{
		position: absolute;
		top: 0;
		left: 0;
		padding: 5%;
		width: 100%;
		height: 100%;
		animation-duration: .4s;
		overflow-y: scroll;
		box-sizing: border-box;
		.cardShow{
      position: relative;
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			.img{
				margin: 0 auto;
				width: 70%;
				display: block;
			}
		}
		.detInfo{
			margin: 30rpx auto 0;
			padding: 10rpx 20rpx;
			width: 100%;
			background: rgba(255,255,255,.9);
			border-radius: 20rpx;
			font-size: 30rpx;
			box-sizing: border-box;
			.name{
				text-align: center;
			}
			.skill{
				.item{
					margin: 10rpx 0;
					&:last-of-type{
						margin-bottom: 0;
					}
				}
			}
		}
		.close{
			margin: 30rpx auto 0;
			padding: 10rpx 0;
			background: #fff;
			width: 30%;
			border-radius: 10rpx;
			font-size: 28rpx;
			text-align: center;
		}
	}
	
</style>