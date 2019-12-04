<template>
<div>

  <loading :active.sync="isLoading">
    <div class="logoLoadingWrap d-flex flex-column
                justify-content-center align-items-center">
      <div class="logo bgCover" style="background-image:url(img/logo.png)">
      </div>
      <div class="loading d-flex justify-content-center align-items-center">
        <div class="boxone"></div>
        <div class="boxtwo"></div>
      </div>
    </div>
  </loading>

</div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>

<style scoped>
.logoLoadingWrap{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,0.5);
  z-index: 50;
}
.logoLoadingWrap .logo{
  width:160px;
  height:86px;
}
.logoLoadingWrap .loading{
  width:80px;
  height:80px;
  position:relative;
}
.logoLoadingWrap .loading .boxone{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);

  border-radius:50%;
  border:3px solid #4F5318;
  animation: loadingAnimation 1s infinite;
}
.logoLoadingWrap .loading .boxtwo{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);

  border-radius:50%;
  border:3px solid var(--logocolor);
  animation: loadingAnimation 2s infinite;
}
@keyframes loadingAnimation {
  0% {
    width:0%;
    height:0%;
    opacity:1;
  }
  100% {
    width:100%;
    height:100%;
    opacity:0;
  }
}
</style>
