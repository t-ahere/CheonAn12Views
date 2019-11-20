<template>
    <md-tabs>
      <md-tab id="tab-home" md-label="소개">
        <div id=desktop>
            <h1>천호지 야경 소개</h1>
            <div class="md-layout">
                <div class="md-layout-item">
                    <div class="intro">
                        <i class="material-icons">event_note</i>
                        <p>
                            단국대학교 천안캠퍼스 바로 앞에 위치한 천호지는 위치 때문에 '안서호' 혹은 '단대호수'라고 불리기도 한다. 천호지 생활체육공원은 안서동 천호지를 중심으로 조성된 공원으로 웰빙마라톤 코스, 분수, 현수교 등이 설치되어 있고, 벚꽃과 개나리, 무궁화 등이 심어져 있으며, 천호지 안에는 붕어, 잉어, 오리 등이 서식한다. 천호지의 야경은 천안 12경 중 하나이다.
                        </p>
                    </div>
                </div>
                <div class="md-layout-item">                
                    <div class="phone">
                        <i class="material-icons">phone</i>
                        <p>041-521-5173</p>
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
                        <p>충청남도 천안시 동남구 단대로 119 (안서동)</p>
                    </div>
                </div>
            </div>                
        </div>   
        <div id="tablet">
            <h1>천호지 야경 소개</h1>            
            <div class="phone">
                <i class="material-icons">phone</i>
                <p>041-521-5173</p>
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
                <p>충청남도 천안시 동남구 단대로 119 (안서동)</p>
            </div>
            <hr>            
            <div class="intro">
                <i class="material-icons">event_note</i>
                <p>
                    단국대학교 천안캠퍼스 바로 앞에 위치한 천호지는 위치 때문에 '안서호' 혹은 '단대호수'라고 불리기도 한다. 천호지 생활체육공원은 안서동 천호지를 중심으로 조성된 공원으로 웰빙마라톤 코스, 분수, 현수교 등이 설치되어 있고, 벚꽃과 개나리, 무궁화 등이 심어져 있으며, 천호지 안에는 붕어, 잉어, 오리 등이 서식한다. 천호지의 야경은 천안 12경 중 하나이다.
                </p>
            </div>

        </div>
        <div id="mobile">
            <h1>천호지 야경 소개</h1>            
            <div class="phone">
                <i class="material-icons">phone</i>
                <p>041-521-5173</p>
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
                <p>충청남도 천안시 동남구 단대로 119 (안서동)</p>
            </div>
            <hr>            
            <div class="intro">
                <i class="material-icons">event_note</i>
                <p>
                    단국대학교 천안캠퍼스 바로 앞에 위치한 천호지는 위치 때문에 '안서호' 혹은 '단대호수'라고 불리기도 한다. 천호지 생활체육공원은 안서동 천호지를 중심으로 조성된 공원으로 웰빙마라톤 코스, 분수, 현수교 등이 설치되어 있고, 벚꽃과 개나리, 무궁화 등이 심어져 있으며, 천호지 안에는 붕어, 잉어, 오리 등이 서식한다. 천호지의 야경은 천안 12경 중 하나이다.
                </p>
            </div>
        </div>
      </md-tab>
      <md-tab id="tab-posts" md-label="전경">
         <imgv12></imgv12> 
      </md-tab>
      <md-tab id="tab-favorites" md-label="방문후기">     
        <div id="desktop">
            <div class="md-layout">
                <div class="md-layout-item">
                    <h1>방명록</h1>
                    
                    <md-card md-with-hover>
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">천호지 야경 최고!</div>
                        <div class="md-subhead">-10분 전</div>
                        </md-card-header>

                        <md-card-content>
                        천호지가서 인생샷 건졌습니다! 다들 가서 인생샷 찍고 오세요~
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
                <div class="md-title">천호지 야경 최고!</div>
                <div class="md-subhead">-10분 전</div>
                </md-card-header>

                <md-card-content>
                천호지가서 인생샷 건졌습니다! 다들 가서 인생샷 찍고 오세요~
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
                <div class="md-title">천호지 야경 최고!</div>
                <div class="md-subhead">-10분 전</div>
                </md-card-header>

                <md-card-content>
                천호지가서 인생샷 건졌습니다! 다들 가서 인생샷 찍고 오세요~
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
import imgv12 from '@/components/imgv12'
    export default {
          components: {
            'imgv12':imgv12,
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