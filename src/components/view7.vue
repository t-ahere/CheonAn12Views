<template>
    <md-tabs>
      <md-tab id="tab-home" md-label="소개">
        <div id=desktop>
            <h1>광덕산 설경 소개</h1>
            <div class="md-layout">
                <div class="md-layout-item">
                    <div class="intro">
                        <i class="material-icons">event_note</i>
                        <p>
                            광덕산은 충청남도 아산시 송악면과 천안시 동남구 광덕면 광덕리의 경계에 있는 천안에서 가장 높은 해발 699m의 산이다. 예로부터 산이 크고 풍후(豊厚)하여 덕이 있는 산이라 하였다. 명산으로서 나라에 전란이 일어나거나 불길한 일이 있으면 산이 운다는 전설이 전해져 온다.
                        </p>
                    </div>
                </div>
                <div class="md-layout-item">  
                    <div class="phone">
                        <i class="material-icons">phone</i>
                        <p>041-521-2420</p>
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
                        <p>충청남도 천안시 동남구 광덕면</p>
                    </div>
                </div>
            </div>                
        </div>   
        <div id="tablet">
            <h1>광덕산 설경 소개</h1>
            <div class="phone">
                <i class="material-icons">phone</i>
                <p>041-521-2420</p>
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
                <p>충청남도 천안시 동남구 광덕면</p>
            </div>
            <hr>            
            <div class="intro">
                <i class="material-icons">event_note</i>
                <p>
                   광덕산은 충청남도 아산시 송악면과 천안시 동남구 광덕면 광덕리의 경계에 있는 천안에서 가장 높은 해발 699m의 산이다. 예로부터 산이 크고 풍후(豊厚)하여 덕이 있는 산이라 하였다. 명산으로서 나라에 전란이 일어나거나 불길한 일이 있으면 산이 운다는 전설이 전해져 온다. 
                </p>
            </div>

        </div>
        <div id="mobile">
            <h1>광덕산 설경 소개</h1> 
            <div class="phone">
                <i class="material-icons">phone</i>
                <p>041-521-2420</p>
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
                <p>충청남도 천안시 동남구 광덕면</p>
            </div>
            <hr>            
            <div class="intro">
                <i class="material-icons">event_note</i>
                <p>
                    광덕산은 충청남도 아산시 송악면과 천안시 동남구 광덕면 광덕리의 경계에 있는 천안에서 가장 높은 해발 699m의 산이다. 예로부터 산이 크고 풍후(豊厚)하여 덕이 있는 산이라 하였다. 명산으로서 나라에 전란이 일어나거나 불길한 일이 있으면 산이 운다는 전설이 전해져 온다.
                </p>
            </div>
        </div>
      </md-tab>
      <md-tab id="tab-posts" md-label="전경">
          <imgv7></imgv7>
      </md-tab>
      <md-tab id="tab-favorites" md-label="방문후기">     
        <div id="desktop">
            <div class="md-layout">
                <div class="md-layout-item">
                    <h1>방명록</h1>
                    
                    <md-card md-with-hover>
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">광덕산 설경 보고왔습니다.</div>
                        <div class="md-subhead">-10분 전</div>
                        </md-card-header>

                        <md-card-content>
                        광덕산 설경 너무 아름다웠습니다.
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
                <div class="md-title">광덕산 설경 보고왔습니다.</div>
                <div class="md-subhead">-10분 전</div>
                </md-card-header>

                <md-card-content>
                광덕산 설경 너무 아름다웠습니다.
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
                <div class="md-title">광덕산 설경 보고왔습니다.</div>
                <div class="md-subhead">-10분 전</div>
                </md-card-header>

                <md-card-content>
                광덕산 설경 너무 아름다웠습니다.
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
 import imgv7 from '@/components/imgv7'
    export default {
          components: {
            'imgv7':imgv7,
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