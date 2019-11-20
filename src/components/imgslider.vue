<template>
  <div>
    <h3>천안 12경 바로가기</h3>
  <md-card style="width:450px; height:300px;margin: 0 auto;">
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption" style="height:300px;">
        <swiper-slide>
          <md-card>
            <md-card-media>
              <img src="../assets/img/v1/6.jpg" alt="Skyscraper" >
            </md-card-media>

            <md-card-header>              
              <div class="md-subhead">천안 1경</div>
            </md-card-header>
            <md-card-actions>
                <md-button to="./v1">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        <swiper-slide>      
          <md-card>
            <md-card-media>
              <img src="../assets/img/v2/1.jpg" alt="Skyscraper" >
            </md-card-media>

            <md-card-header>
              <div class="md-subhead">천안 2경</div>
            </md-card-header>
            
            <md-card-actions>
                <md-button to="./v2">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        <swiper-slide>
          <md-card>
            <md-card-media>
              <img src="../assets/img/v3/6.jpg" alt="Skyscraper" >      
            </md-card-media>

            <md-card-header>
              
              <div class="md-subhead">천안 3경</div>
            </md-card-header>
            <md-card-actions>
                <md-button to="./v3">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        <swiper-slide>
          <md-card>
            <md-card-media>
              <img src="../assets/img/v4/6.jpg" alt="Skyscraper" >
            </md-card-media>

            <md-card-header>
              
              <div class="md-subhead">천안 4경</div>
            </md-card-header>
            
            <md-card-actions>
                <md-button to="./v4">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        <swiper-slide>      
          <md-card>
            <md-card-media>
              <img src="../assets/img/v5/6.jpg" alt="Skyscraper" >
            </md-card-media>

            <md-card-header>
              
              <div class="md-subhead">천안 5경</div>
            </md-card-header>
            <md-card-actions>
                <md-button to="./v5">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        <swiper-slide>
          <md-card>
            <md-card-media>
              <img src="../assets/img/v6/6.jpg" alt="Skyscraper" >
            </md-card-media>

            <md-card-header>
              
              <div class="md-subhead">천안 6경</div>
            </md-card-header>
            <md-card-actions>
                <md-button to="./v6">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        <swiper-slide>
          <md-card>
            <md-card-media>
              <img src="../assets/img/v7/6.jpg" alt="Skyscraper" >
            </md-card-media>

            <md-card-header>
              
              <div class="md-subhead">천안 7경</div>
            </md-card-header>
            <md-card-actions>
                <md-button to="./v7">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        <swiper-slide>
          <md-card>
            <md-card-media>
              <img src="../assets/img/v8/3.jpg" alt="Skyscraper" >
            </md-card-media>

            <md-card-header>
              
              <div class="md-subhead">천안 8경</div>
            </md-card-header>
            <md-card-actions>
                <md-button to="./v8">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        <swiper-slide>
          <md-card>
            <md-card-media>
              <img src="../assets/img/v9/6.jpg" alt="Skyscraper" >
            </md-card-media>

            <md-card-header>
              
              <div class="md-subhead">천안 9경</div>
            </md-card-header>
            <md-card-actions>
                <md-button to="./v9">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        <swiper-slide>          
          <md-card>
            <md-card-media>
              <img src="../assets/img/v10/4.jpg" alt="Skyscraper" >
            </md-card-media>

            <md-card-header>
              
              <div class="md-subhead">천안 10경</div>
            </md-card-header>
            <md-card-actions>
                <md-button to="./v10">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        <swiper-slide>          
          <md-card>
            <md-card-media>
              <img src="../assets/img/v11/6.jpg" alt="Skyscraper" >
            </md-card-media>

            <md-card-header>
              
              <div class="md-subhead">천안 11경</div>
            </md-card-header>
            <md-card-actions>
                <md-button to="./v11">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        <swiper-slide>          
          <md-card>
            <md-card-media>
              <img src="../assets/img/v12/6.jpg" alt="Skyscraper" >
            </md-card-media>

            <md-card-header>
             <div class="md-subhead">천안 12경</div>
            </md-card-header>
            <md-card-actions>
                <md-button to="./v12">바로가기</md-button>              
            </md-card-actions>
          </md-card>
        </swiper-slide>
        
        <div class="swiper-pagination" slot="pagination" style="bottom:0px;"></div>
      </swiper>
    </md-card-media>
  </md-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  li {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    margin-right: 50px;
  }
  h3{
    text-align: center;
  }
  .swiper-slide .md-card{
    width:110%;
  }
  .swiper-slide img{
    margin-top: 45px;
    // padding: 5px;
    width: 320px;
  }
  .ititle{
    text-align: center;
    font-size:1.3em;
    margin : 20px 0;
  }
  .md-card{
    height: 250px;
  }
  .md-subhead{
    color: #000000;
    position: absolute;
    bottom: 30px;
  }
  .md-button{
    position: absolute;
    bottom: 5px;
  }
</style>