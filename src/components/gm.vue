<template>
  <div id="gm">
    <div class="md-title">
        천안 12경 바로가기
    </div>
    <swiper style="width :600px" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide style=" margin-left:100px;">
          <md-card class="element" style="width : 300px;" >
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v1/6.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 1경</span>
                  <span class="md-subhead">천안 삼거리 공원</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./view1">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>
      </swiper-slide>
      <swiper-slide style=" margin-left:100px;">
        <md-card class="element" style="width : 300px;">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v2/6.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 2경</span>
                  <span class="md-subhead">독립기념관</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./v2">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>
      </swiper-slide>
      <swiper-slide style=" margin-left:100px;">
        <md-card class="element" style="width : 300px;">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v3/4.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 3경</span>
                  <span class="md-subhead">유관순 열사 사적지</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./v3">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>
      </swiper-slide>
      <swiper-slide style=" margin-left:100px;">
        <md-card class="element" style="width : 300px;">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v4/2.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 4경</span>
                  <span class="md-subhead">아라리오 광장</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./v4">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>
      </swiper-slide>
      <swiper-slide style=" margin-left:100px;">
        <md-card class="element" style="width : 300px;">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v5/6.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 5경</span>
                  <span class="md-subhead">병천 순대거리</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./v5">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>
      </swiper-slide>
      <swiper-slide style=" margin-left:100px;">
        <md-card class="element" style="width : 300px;">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v6/3.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 6경</span>
                  <span class="md-subhead"> 태조산 각원사</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./v6">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>
      </swiper-slide>
      <swiper-slide style=" margin-left:100px;">
        <md-card class="element" style="width : 300px;">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v7/1.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 7경</span>
                  <span class="md-subhead">광덕산 설경</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./v7">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>
      </swiper-slide>
      <swiper-slide style=" margin-left:100px;">
        <md-card class="element" style="width : 300px;">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v8/6.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 8경</span>
                  <span class="md-subhead">천안종합휴향관광지</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./v8">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>
      </swiper-slide>
      <swiper-slide style=" margin-left:100px;">
        <md-card class="element" style="width : 300px;">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v9/2.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 9경</span>
                  <span class="md-subhead">왕지봉 배꽃</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./v9">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>        
      </swiper-slide>
      <swiper-slide style=" margin-left:100px;">
        <md-card class="element" style="width : 300px;">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v10/4.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 10경</span>
                  <span class="md-subhead">입장 거봉포도마을</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./v10">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>
      </swiper-slide>
      <swiper-slide style=" margin-left:100px;">
        <md-card class="element" style="width : 300px;">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v11/4.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 11경</span>
                  <span class="md-subhead">흥타령 축제</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./v11">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>
      </swiper-slide>
      <swiper-slide style=" margin-left:100px;">
        <md-card class="element" style="width : 300px;">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="1:1">
                <img src="../assets/img/v12/6.jpg" alt="Skyscraper" >
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-subhead">천안 제 12경</span>
                  <span class="md-subhead">천호지 야경</span>
                </md-card-header>
              </md-card-area>
              <md-card-actions>
                <md-button to="./v12">바로가기</md-button>              
              </md-card-actions>
            </md-card-media-cover>
          </md-card>
      </swiper-slide>
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="">

   .md-title{
     text-align: center;
     
   }

</style>