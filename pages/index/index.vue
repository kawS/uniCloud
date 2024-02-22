<template>
	<div class="list">
	  <div class="sbox">
	    <div class="tlt">BOOSTER PACK</div>
	    <div class="slist">
	      <template v-for="sitem in series.pack" :key="sitem.no">
	        <div class="item" @click="goSeries(sitem)">
	          <div class="imgwp">
	            <image :src="sitem.img" mode="heightFix" class="img"></image>
	          </div>
	          {{ sitem.name }}
            <div class="ps">[{{ sitem.no }}]</div>
	        </div>
	      </template>
	    </div>
	  </div>
    <div class="sbox">
      <div class="tlt">STARTER DECK</div>
      <div class="slist">
        <template v-for="sitem in series.deck" :key="sitem.no">
          <div class="item" @click="goSeries(sitem)">
            <div class="imgwp">
              <image :src="sitem.img" mode="heightFix" class="img"></image>
            </div>
            {{ sitem.name }}
            <div class="ps">[{{ sitem.no }}]</div>
          </div>
        </template>
      </div>
    </div>
	</div>
  <copyRight></copyRight>
</template>

<script setup>
  import copyRight from '../../components/copyright/index.vue'
	import { ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
  
  const series = {
    pack: [
      { no: 'FB01', name: '-AWAKENED PULSE-', img: 'https://www.dbs-cardgame.com/fw/images/products/item/FB01.webp', type: 'BOOSTER PACK' }
    ],
    deck: [
      { no: 'FS01', name: '-SON GOKU-', img: 'https://www.dbs-cardgame.com/fw/images/products/item/FS01.webp', type: 'STARTER DECK' },
      { no: 'FS02', name: '-VEGETA-', img: 'https://www.dbs-cardgame.com/fw/images/products/item/FS02.webp', type: 'STARTER DECK' },
      { no: 'FS03', name: '-BROLY-', img: 'https://www.dbs-cardgame.com/fw/images/products/item/FS03.webp', type: 'STARTER DECK' },
      { no: 'FS04', name: '-FRIEZA-', img: 'https://www.dbs-cardgame.com/fw/images/products/item/FS04.webp', type: 'STARTER DECK' }
    ]
  }
  
  onLoad(options => {
    
  })
  
  const goSeries = (item) => {
    const pack = encodeURIComponent(`${item.type} ${item.name} [${item.no}]`);
    uni.navigateTo({
    	url: `/subCardList/pages/list/index?no=${item.no}&name=${encodeURIComponent(item.name)}&where=${pack}`
    })
  }
</script>

<style scoped lang="scss">
	.list{
	  padding: 30rpx 0;
	  .sbox{
	    margin: 0 30rpx 10rpx;
	    &:last-of-type{
	      margin-bottom: 0;
	    }
	    .tlt{
	      margin: 0 0 10rpx 0;
	    }
	    .slist{
	      display: flex;
	      flex-wrap: wrap;
	      justify-content: space-between;
	      .item{
	        margin: 0 0 15rpx 0;
	        padding: 30rpx 0 20rpx;
	        background: rgba(0,0,0,.1);
	        width: 49%;
	        border-radius: 10rpx;
	        text-align: center;
	        display: flex;
	        align-items: center;
	        flex-direction: column;
	        .imgwp{
            margin-bottom: 20rpx;
	          width: 100%;
	          height: 200rpx;
	          display: flex;
	          align-items: center;
	          overflow: hidden;
	        }
	        .img{
            margin: 0 auto;
	          height: 200rpx;
	          display: block;
	        }
          .ps{
            font-size: 12px;
          }
	      }
	    }
	  }
	}
  
</style>
