<template>
<div>

  <div class="timeLine pt-3">
    <div class="container">

      <div class="row justify-content-center align-item-center">
        <div class="flagTime col-md-5 my-2 d-flex flex-column
                    justify-content-center align-items-center">
          <div class="flag mb-3 text-primary">午憩。非米不可</div>
          <div class=" content text-center text-primary mb-2">
            ｢非米不可-米食料理競賽｣<br>
            午憩辦理競賽推動「食米教育」的理念，透過健康飲食教育，讓民眾具體認識及瞭解稻米文化、稻米營養觀念，並發揮創意製作多樣化米食。
          </div>
          <div class="time text-primary">September 07 2018</div>
        </div>
        <div class="picture col-md-6 mb-3">
          <div class="box"></div>
          <div class="carousel d-flex justify-content-center
                      align-items-center">
            <div class="swiper-container swiper-container2">
              <div class="swiper-wrapper">
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[0]})`,}"></div>
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[1]})`,}"></div>
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[2]})`,}"></div>
              </div>
              <div class="swiper-pagination "></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row flex-row-reverse flex-row-reverse-expand
                  d-flex justify-content-center align-item-center" >
        <div class="flagTime col-md-5 my-2 d-flex flex-column
                    justify-content-center align-items-center">
          <div class="flag mb-3 text-primary">午憩。我喜番你</div>
          <div class=" content text-center text-primary mb-2">
            ｢我喜番你-鮮採番茄活動列車｣<br>
            午憩安排接駁車供報名民眾乘座，並配有隨車人員進行活動解說，讓參與民眾親自接觸土壤，親手摘採番茄，實際體驗大自然的風情。
          </div>
          <div class="time text-primary">December 07 2018</div>
        </div>
        <div class="picture col-md-6 mb-3">
          <div class="box"></div>
          <div class="carousel d-flex justify-content-center align-items-center">
            <div class="swiper-container swiper-container3">
              <div class="swiper-wrapper">
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[3]})`,}"></div>
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[4]})`,}"></div>
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[5]})`,}"></div>
              </div>
              <div class="swiper-pagination "></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row d-flex justify-content-center align-item-center" >
        <div class="flagTime col-md-5 my-2 d-flex flex-column
                    justify-content-center align-items-center">
          <div class="flag mb-3 text-primary">午憩。最莓麗</div>
          <div class="content text-center text-primary mb-2">
            ｢最苺麗-新鮮草莓甜點DIY｣<br>
            午憩提供舒適的環境，專業的器具及食材、並由專業指導老師帶著您不用高昂的學費，只要有顆童趣的心，就可以跟著我們動手做，體會手做烘培的美好與樂趣，讓您可以快樂學烘焙、愛上做烘培！
          </div>
          <div class="time text-primary">December 25 2018 </div>
        </div>
        <div class="picture col-md-6 ">
          <div class="box"></div>
          <div class="carousel d-flex justify-content-center align-items-center">
            <div class="swiper-container swiper-container4">
              <div class="swiper-wrapper">
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[6]})`,}"></div>
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[7]})`,}"></div>
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[8]})`,}"></div>
              </div>
              <div class="swiper-pagination "></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

export default {
  data() {
    return {
      imgUrl: [
        'img/2_1_1.jpg',
        'img/2_1_2.jpg',
        'img/2_1_3.jpg',
        'img/2_2_1.jpg',
        'img/2_2_2.jpg',
        'img/2_2_3.jpg',
        'img/2_3_1.jpg',
        'img/2_3_2.jpg',
        'img/2_3_3.jpg',
      ],
    };
  },
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper2 = new Swiper('.swiper-container2', {
      pagination: '.swiper-pagination',
    });
    /* eslint-disable no-unused-vars */
    const swiper3 = new Swiper('.swiper-container3', {
      pagination: '.swiper-pagination',
    });
    /* eslint-disable no-unused-vars */
    const swiper4 = new Swiper('.swiper-container4', {
      pagination: '.swiper-pagination',
    });
  },
};
</script>

<style scoped>
.timeLine .flagTime .flag{
  padding: 6px 10px;

  background: white;
  border-radius: 5px;
  box-shadow: 1px 1px 2px var(--maincolor);

  font-size: 1.25rem;

  white-space:nowrap;
  flex-shrink:0;
}
.timeLine .flagTime .time{

  background: white;

  font-size: 1rem;

  white-space:nowrap;
  flex-shrink:0;
}
.timeLine .flagTime .content{
  width:90%;
}

.timeLine .picture{
  height:400px;
  position:relative;
}
.timeLine .picture .box{
  width:90%;
  height:100%;
  position:absolute;
  top:0%;
  right:0%;

  background-color:var(--maincolor);
}
.timeLine .flex-row-reverse-expand .box{
  left:0%;
}
.timeLine .picture .carousel{
  width:92%;
  height:92%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);

  border:1px solid white;
  transition:0.5s;
}
.timeLine .picture .carousel:hover{
  border:1px solid var(--maincolor);
}

.timeLine .swiper-container{
  width:98%;
  height:98%;
  background-color:white;
}

@media screen and (max-width: 992px) {
  .timeLine .picture{
    height:300px;
  }
}

@media screen and (max-width: 767px) {
  .timeLine .picture{
    height:350px;
    position:relative;
  }
}

@media screen and (max-width: 480px) {
  .timeLine .picture{
    height:300px;
    position:relative;
  }
}
</style>
