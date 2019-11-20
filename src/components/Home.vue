<template>
  <div>
    <div id="desktop">
      <div class="md-layout">
        <div class="md-layout-item">
          <boarder></boarder>
          <imgslider></imgslider>
        </div>
        <div class="md-layout-item">
          <poster></poster>
        </div>
      </div>    
   </div>
    <div id="tablet">
      <poster></poster>
      <boarder></boarder>
      <imgslider></imgslider>
    </div>
    <div id="mobile">
      <!-- <poster></poster> -->
      <boarder></boarder>
      <imgslider></imgslider>
    </div>
  </div>
</template>

<script>
import gm from '@/components/gm'
import imgslider from '@/components/imgslider'
import poster from '@/components/poster'
import boarder from '@/components/boarder'
export default {
  components: {
    'gm':gm,
    'boarder':boarder,
    'poster':poster,
    'imgslider':imgslider
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

@media (max-width:799px){
  #desktop{
    display : none;
  }
  .swiper{
    width:200px;
    height: 100px;
  }
  #tablet{
    display: none;
  }
  .md-badge{
    display: none;
  }
  .poster{
    width:600px;
  }
  
}
@media only screen and (min-width : 800px) and (max-width : 1023px){  
  #desktop{
    display : none;
  }
  #mobile{
    display : none;
  }  
  .swiper{
    width : 400px; height: 100%;
  }
}
@media only screen and (min-width : 1024px){

  #tablet{
    display: none;
  }
  #mobile{
    display : none;
  }  
 
  
}
</style>
