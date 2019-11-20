<template>
  <md-card>
      <div class="md-title">
        Event
      </div>
    <md-card-media>
      <!-- swiper -->
      
      <swiper style="width : 500px; height: 100%;" :options="swiperOption">
        <swiper-slide>
          <img src="../assets/poster1.jpg" alt="Skyscraper" >
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/poster2.jpg" alt="Skyscraper" >
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/poster3.jpg" alt="Skyscraper" >
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
<style lang="">
  .md-title{
    text-align: center;
  }
</style>