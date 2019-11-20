<template>
    <div id="boarder">
        <h1 class="Btitle">공지사항 <md-icon class="fa fa-plus"></md-icon></h1>
        
        <md-list>
            <md-list-item>
                 <p class="md-list-item-text">[알림] 2018년도 제 1회 천안 12경 이벤트 발표</p>
                 <md-badge class="md-square" md-content="New" />
            </md-list-item>
            <md-list-item>
                <p class="md-list-item-text">[마감] 2018년도 제 1회 천안 12경 이벤트 마감</p>
                <md-badge class="md-square" md-content="New" />
            </md-list-item>
            <md-list-item>
                <p class="md-list-item-text">[안내] 2018년도 제 1회 천안 12경 이벤트 모집</p>      
                <md-badge class="md-square" md-content="New" />          
            </md-list-item>
            <md-list-item>                
                <p class="md-list-item-text">[마감] 천안 12경 홈페이지 리뉴얼</p>                
                <md-badge class="md-square" md-content="HOT" />         
            </md-list-item>
            <md-list-item>
                <p class="md-list-item-text">[알림] 모바일 프로그래밍 텀 프로젝트입니다.</p>    
                <md-badge class="md-square" md-content="HOT" />            
            </md-list-item>
        </md-list>
    </div>
</template>

<script>
export default {
  name: 'ListTypes',
  methods: {
    alert () {
      window.alert('...')
    }
  }
}
</script>

<style scoped>
    #boarder{
        margin: 5px auto;
        width:80%;
    }
    #boarder h1{
        text-align: center;
        font-size: 1.3em;
    }
    #boarder ul{
        /* border: 2px solid #dddddd; */
        margin: 0 auto;
    }
    #boarder ul li{
        border-bottom: 1px solid #dddddd;
        /* padding: 10px; */
        /* margin-right: 30px; */
        /* list-style: none; */
        font-size: 1.1em;
   }
    #boarder ul li:nth-child(1){
        border-top: 1px solid #dddddd;
    }
    #boarder ul li span{
        font-weight: bold;
    }
    #boarder ul li:hover{
        background-color: #dddddd;
    } 
    .fa-plus{
        
    }
</style>