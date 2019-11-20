<template>
    <md-tabs>
      <md-tab id="tab-home" md-label="소개">
        <div id=desktop>
            <h1>천안 종합 휴양 관광지 소개</h1>
            <div class="md-layout">
                <div class="md-layout-item">
                    <div class="intro">
                        <i class="material-icons">event_note</i>
                        <p>
                            천안 종합 휴양 관광지는 천안 12경 중 제8경에 해당되며, 중부권 최대의 온천 관광지로 조성 중에 있다. 3만7,200㎡ 규모의 분수 공원과 워터 파크, 콘도미니엄이 건립되어 있다.
                        </p>
                    </div>
                </div>
                <div class="md-layout-item">  
                    <div class="phone">
                        <i class="material-icons">phone</i>
                        <p>041-906-7000</p>
                    </div>              
                    <div class="time">
                        <i class="material-icons">access_time</i>
                        <p>연중무휴</p>
                    </div>
                    <div class="park">
                        <i class="material-icons">local_parking</i>
                        <p>주차가능</p>
                    </div>
                    <div>
                        <i class="material-icons">pin_drop</i>
                        <p>충청남도 천안시 동남구 성남면 종합휴양지로 200</p>
                    </div>
                </div>
            </div>                
        </div>   
        <div id="tablet">
            <h1>천안 종합 휴양 관광지 소개</h1>
            <div class="phone">
                <i class="material-icons">phone</i>
                <p>041-906-7000</p>
            </div>
            <div class="time">
                <i class="material-icons">access_time</i>
                <p>연중무휴</p>
            </div>
            <div class="park">
                <i class="material-icons">local_parking</i>
                <p>주차가능</p>
            </div>
            <div>
                <i class="material-icons">pin_drop</i>
                <p>충청남도 천안시 동남구 성남면 종합휴양지로 200</p>
            </div>
            <hr>            
            <div class="intro">
                <i class="material-icons">event_note</i>
                <p>
                   천안 종합 휴양 관광지는 천안 12경 중 제8경에 해당되며, 중부권 최대의 온천 관광지로 조성 중에 있다. 3만7,200㎡ 규모의 분수 공원과 워터 파크, 콘도미니엄이 건립되어 있다. 
                </p>
            </div>

        </div>
        <div id="mobile">
            <h1>천안 종합 휴양 관광지 소개</h1> 
            <div class="phone">
                <i class="material-icons">phone</i>
                <p>041-906-7000</p>
            </div>           
            <div class="time">
                <i class="material-icons">access_time</i>
                <p>연중무휴</p>
            </div>
            <div class="park">
                <i class="material-icons">local_parking</i>
                <p>주차가능</p>
            </div>
            <div>
                <i class="material-icons">pin_drop</i>
                <p>충청남도 천안시 동남구 성남면 종합휴양지로 200</p>
            </div>
            <hr>            
            <div class="intro">
                <i class="material-icons">event_note</i>
                <p>
                    천안 종합 휴양 관광지는 천안 12경 중 제8경에 해당되며, 중부권 최대의 온천 관광지로 조성 중에 있다. 3만7,200㎡ 규모의 분수 공원과 워터 파크, 콘도미니엄이 건립되어 있다.
                </p>
            </div>
        </div>
      </md-tab>
      <md-tab id="tab-posts" md-label="전경">
          <imgv8></imgv8>
      </md-tab>
      <md-tab id="tab-favorites" md-label="방문후기">     
        <div id="desktop">
            <div class="md-layout">
                <div class="md-layout-item">
                    <h1>방명록</h1>
                    
                    <md-card md-with-hover>
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">천안 종합 휴양 관광지 다녀왔습니다.</div>
                        <div class="md-subhead">-10분 전</div>
                        </md-card-header>

                        <md-card-content>
                        천안 종합 휴양 관광지에서 아이들과 재밌게 놀다왔습니다. 아이들과 한 번 쯤 가볼만한 곳인 것 같습니다.
                        </md-card-content>

                        <md-card-actions>        
                            <md-badge class="md-primary" md-content="34">                
                            <md-button class="md-icon-button ">
                                <md-icon>thumb_up</md-icon>
                            </md-button>
                            </md-badge>
                        </md-card-actions>
                    </md-ripple>
                    </md-card>
                </div>
                <div class="md-layout-item">
                    <md-button class="md-fab md-mini md-plain">
                        <md-icon>edit</md-icon>
                    </md-button>
                    <h1>방명록 쓰기</h1>
                    <md-field>
                    <label>제목</label>
                    <md-input ></md-input>
                    </md-field>
                    <md-field>
                        <label>내용</label>
                        <md-textarea></md-textarea>
                    </md-field>
                </div>
            </div>          
        </div> 
        <div id="tablet">
            <md-button class="md-fab md-mini md-plain">
                <md-icon>edit</md-icon>
            </md-button>
            <h1>방명록 쓰기</h1>
            <md-field>
            <label>제목</label>
            <md-input ></md-input>
            </md-field>
            <md-field>
                <label>내용</label>
                <md-textarea></md-textarea>
            </md-field>
            <hr>
            <h1>방명록</h1>
            
            <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                <div class="md-title">천안 종합 휴양 관광지 다녀왔습니다.</div>
                <div class="md-subhead">-10분 전</div>
                </md-card-header>

                <md-card-content>
                천안 종합 휴양 관광지에서 아이들과 재밌게 놀다왔습니다. 아이들과 한 번 쯤 가볼만한 곳인 것 같습니다.
                </md-card-content>

                <md-card-actions>        
                    <md-badge class="md-primary" md-content="34">                
                    <md-button class="md-icon-button">
                        <md-icon>thumb_up</md-icon>
                    </md-button>
                    </md-badge>
                </md-card-actions>
            </md-ripple>
            </md-card>
        </div>
        <div id="mobile">
            <md-button class="md-fab md-mini md-plain">
                <md-icon>edit</md-icon>
            </md-button>
            <h1>방명록 쓰기</h1>
            <md-field>
            <label>제목</label>
            <md-input ></md-input>
            </md-field>
            <md-field>
                <label>내용</label>
                <md-textarea></md-textarea>
            </md-field>
            <hr>
            <h1>방명록</h1>
            
            <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                <div class="md-title">천안 종합 휴양 관광지 다녀왔습니다.</div>
                <div class="md-subhead">-10분 전</div>
                </md-card-header>

                <md-card-content>
                천안 종합 휴양 관광지에서 아이들과 재밌게 놀다왔습니다. 아이들과 한 번 쯤 가볼만한 곳인 것 같습니다.
                </md-card-content>

                <md-card-actions>        
                    <md-badge class="md-primary" md-content="34">                
                    <md-button class="md-icon-button ">
                        <md-icon>thumb_up</md-icon>
                    </md-button>
                    </md-badge>
                </md-card-actions>
            </md-ripple>
            </md-card>
        </div>        
      </md-tab>
    </md-tabs>
</template>

<script>
import imgv8 from '@/components/imgv8'
    export default {
          components: {
            'imgv8':imgv8,
        },
        data(){
              return {
                
              }
            },
        methods: {
            clicked: function () {
                
            }
        }
    }
</script>

<style scoped>
.md-button{
    float: right;
}
    
@media (max-width:799px){
  #desktop{
    display : none;
  }
  #tablet{
    display: none;
  }
  .md-badge{
    display: none;
  }
}
@media only screen and (min-width : 800px) and (max-width : 1023px){  
  #desktop{
    display : none;
  }
  #mobile{
    display : none;
  }  
}
@media only screen and (min-width : 1024px){

    #tablet{
        display: none;
    }
    #mobile{
        display : none;
    }  
    div p{
        display: inline-block;
    }
    .intro p{
        display: inline-block;
    }
    
}
</style>