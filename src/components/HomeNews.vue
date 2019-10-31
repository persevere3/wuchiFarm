<template>
<div>

  <div class="news bgCover"
      :style="{backgroundImage :`url(${imgUrl[newsActive]})`,}">
    <div class="mask"></div>
    <div class="display bgCover"
        :style="{backgroundImage :`url(${imgUrl[newsActive]})`,}">
    </div>
    <div class="listBackground bg-white d-flex
                justify-content-end align-items-center">
      <div class="box"></div>
      <ul class="list bg-white d-flex flex-column align-items-start">
        <li @mouseenter="newsActive=0" @click.prevent="">
          <a href="#" class="m-1 bg-white d-flex justify-content-center
                             align-items-center">
            <div  class="date d-flex flex-column justify-content-center
                         align-items-center flex-shrink-0"
                  :class="{'dateActive':newsActive===0}">
              <p>May</p>
              <h3 class="m-0">9</h3>
            </div>
            <div class="event  px-2  d-flex flex-column justify-content-center
                        align-items-start"
                :class="{'eventActive':newsActive===0}">
              <p>今日推出「午憩米」，香、Q、黏度適中且晶瑩剔透，口感絕佳。
              </p>
            </div>
          </a>
        </li>
        <li @mouseenter="newsActive=1" @click.prevent="">
          <a href="#" class=" m-1 bg-white d-flex justify-content-center
                              align-items-center">
            <div  class=" date d-flex flex-column justify-content-center
                          align-items-center flex-shrink-0"
                  :class="{'dateActive':newsActive===1}">
              <p>Sep</p>
              <h3 class="m-0">21</h3>
            </div>
            <div class="event d-flex px-2 flex-column justify-content-center
                        align-items-start "
                :class="{'eventActive':newsActive===1}">
              <p>
                2019｢我喜番你-鮮採番茄活動列車｣活動開始報名囉！
              </p>
            </div>
          </a>
        </li>
        <li @mouseenter="newsActive=2" @click.prevent="">
          <a href="#" class=" m-1 bg-white d-flex justify-content-center
                              align-items-center">
            <div  class=" date d-flex flex-column justify-content-center
                        align-items-center flex-shrink-0"
                  :class="{'dateActive':newsActive===2}">
              <p>Jan</p>
              <h3 class="m-0">18</h3>
            </div>
            <div class="event px-2 d-flex flex-column justify-content-center
                        align-items-start "
                :class="{'eventActive':newsActive===2}">
              <p>
                近日推出「甜心莓」及「純潔苺」，草莓美麗的外表下含豐富維生素C，是極佳的滋補果品，美觀又健康。
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      newshover: 'newsoneHover',
      newsActive: 0,
      imgUrl: [
        'img/1_1.jpg',
        'img/1_2.jpg',
        'img/1_3.jpg',
      ],
    };
  },
};
</script>

<style scoped>
.news{
  height:450px;
  position:relative;
}
.news .mask{
  width:100%;
  height:100%;

  position:absolute;
  left:0%;
  top:0%;

  background:rgba(255,255,255, 0.6);
}
.news .display{
  width:35%;
  height:90%;

  position:absolute;
  left:12.5%;
  top:0%;

  border-radius:0 0 2% 2%;
}
.news .listBackground{
  width:35%;
  height:90%;

  position:relative;
  left:52.5%;
  top:10%;

  border-radius:2% 2% 0 0 ;
}


.news .listBackground .box{
  width:35%;
  height:95%;

  position:absolute;
  left: 2%;

  border:1px solid var(--maincolor);
  z-index: 4;
}
.news .listBackground .list{
  width:95%;
  z-index: 5;
}

.news .listBackground .list a:hover{
  text-decoration: none;
}

.news .list .date{
  width: 3.75rem;
  height: 3.75rem;
  color: var(--maincolor);
  box-shadow: 1px 1px 2px var(--maincolor);
}
.news .list .date p{
  font-size: 1rem;
}
.news .list .date h3{
  font-size: 1.75rem;
}

.news .list .event{
  color: black;
}
.news .list .event p{
  font-size: 1rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height:1.25rem;
}

.dateActive {
  background-color: var(--maincolor);
  transition: 0.5s;
}
.dateActive p,.dateActive h3{
  color:white;
}
.eventActive{
  text-decoration: underline;
  transition: 0.5s;
}
.eventActive p{
  color: var(--maincolor);
}

@media screen and (max-width: 992px) {
  .news{
    height:400px;
    position:relative;
  }
}
@media screen and (max-width: 767px) {
  .news{
    height:350px;

    margin-bottom: 350px;
  }
  .news .display{
    width:50%;
    height:85%;

    position:absolute;
    left:25%;
    top:0%;
  }
  .news .listBackground{
    width:100%;
    height:100%;

    position:relative;
    top:100%;
    left:0%;
  }
  .news .listBackground .box{
    width:60%;
  }
}
@media screen and (max-width: 480px) {
  .news{
    height:300px;
    margin-bottom: 300px;
  }
}
</style>
