<template>
  <div class="page-container">
    <md-app>
      <md-app-content>
        <router-view/>
      </md-app-content>
      <md-app-toolbar>
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title" >
        <router-link to="/" class="mtitle" 
            style="color:black; text-decoration:none; font-family: 'Gamja Flower', cursive; font-size:1.5em;"> 천안, 여기 어때? </router-link>
        </span>
        
        <md-menu class="align-right" md-size="medium" md-align-trigger>
          <md-button md-menu-trigger><md-icon>more_vert</md-icon></md-button>

          <md-menu-content>
            <md-menu-item to="/login">Sign in</md-menu-item>
            <md-menu-item to="/signup">Sign up</md-menu-item>
            <md-menu-item>내 정보</md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-app-toolbar>
      
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar  md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense " @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list class="left-drawer">
          <md-list-item to="/">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">HOME</span>
          </md-list-item>

          <md-list-item to="/v1">
            <md-icon>filter_1</md-icon>
            <span class="md-list-item-text"> 천안삼거리 </span>
          </md-list-item>

          <md-list-item to="/v2">
            <md-icon>filter_2</md-icon>
            <span class="md-list-item-text"> 독립기념관 </span>
          </md-list-item>

          <md-list-item to="/v3">
            <md-icon>filter_3</md-icon>
            <span class="md-list-item-text"> 유관순열사 사적지 </span>
          </md-list-item>

          <md-list-item to="/v4">
            <md-icon>filter_4</md-icon>
            <span class="md-list-item-text"> 아라리오 광장 </span>
          </md-list-item>

          <md-list-item to="/v5">
            <md-icon>filter_5</md-icon>
            <span class="md-list-item-text"> 병천 순대거리 </span>
          </md-list-item>

          <md-list-item to="/v6">
            <md-icon>filter_6</md-icon>
            <span class="md-list-item-text"> 태조산 각원사 </span>
          </md-list-item>

          <md-list-item to="/v7">
            <md-icon>filter_7</md-icon>
            <span class="md-list-item-text"> 광덕산 설경 </span>
          </md-list-item>

          <md-list-item to="/v8">
            <md-icon>filter_8</md-icon>
            <span class="md-list-item-text"> 천안종합휴향관광지 </span>
          </md-list-item>

          <md-list-item to="/v9">
            <md-icon>filter_9</md-icon>
            <span class="md-list-item-text"> 왕지봉 배꽃 </span>
          </md-list-item>

          <md-list-item to="/v10">
            <md-icon>filter_9_plus</md-icon>
            <span class="md-list-item-text"> 입장 거봉포도마을 </span>
          </md-list-item>

          <md-list-item to="/v11">
            <md-icon>filter_9_plus</md-icon>
            <span class="md-list-item-text"> 흥타령 축제 </span>
          </md-list-item>

          <md-list-item to="/v12">
            <md-icon>filter_9_plus</md-icon>
            <span class="md-list-item-text"> 천호지 야경 </span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      
    </md-app>
  </div>
</template>

<script>

  export default {
    name: 'PersistentFull',
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
    z-index: 100;
  }
  .align-right{
    position: absolute;
    right: 30px;
  }

</style>