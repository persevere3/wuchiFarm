<template>
<div>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide bgCover" :style="{backgroundImage :`url(${imgUrl[0]})`,}"></div>
        <div class="swiper-slide bgCover" :style="{backgroundImage :`url(${imgUrl[1]})`,}"></div>
        <div class="swiper-slide bgCover" :style="{backgroundImage :`url(${imgUrl[2]})`,}"></div>
      </div>
      <div class="swiper-pagination">
      </div>
    </div>
    <div class="textbackground p-2">
      <div class="textborder d-flex flex-column
                  align-items-start p-3">
        <h4 class="textfirst">After dinner sit a while,</h4>
        <h4 class="textsecond">after supper walk a mile.</h4>
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
        'img/0_1.jpg',
        'img/0_2.jpg',
        'img/0_3.jpg',
      ],
    };
  },
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  },
};
</script>

<style scoped>
.banner{
  position:relative;
}
.banner .swiper-container{
  height: 500px;
  z-index:4;
}

.banner .textbackground{
  background: rgba(var(--secondaryrgb), 0.6);

  position: absolute;
  top:60%;
  left: 50%;
  transform: translate(-50%, 0%);

  z-index:5;
}
.banner .textborder{
  border: 1px solid var(--maincolor);
}
.banner .textborder .textfirst{
  color:var(--maincolor);
  white-space: nowrap;
}
.banner .textborder .textsecond{
  color:var(--maincolor);
  white-space: nowrap;
}

@media screen and (max-width: 992px) {
  .banner .swiper-container{
    height: 450px;
  }
}
@media screen and (max-width: 767px) {
  .banner .swiper-container{
    height: 400px;
  }
}
@media screen and (max-width: 480px) {
  .banner .swiper-container{
    height: 350px;
  }
}
</style>
