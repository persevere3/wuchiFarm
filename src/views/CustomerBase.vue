<template>
<div>

  <BaseNavbar class="sticky-top" :pageActive="pageActive" :key="pageActive"></BaseNavbar>
  <BaseAlert></BaseAlert>
  <BaseBanner/>

  <router-view></router-view>

  <BaseLogoLoading :isLoading="isLoading" :key="isLoading"></BaseLogoLoading>
  <BaseLikeModal
    v-if="pageActive!=='/customerBase/customerShoppingCart'&&
          pageActive!=='/customerBase/customerData'">
  </BaseLikeModal>
  <BaseCartModal
    v-if="pageActive!=='/customerBase/customerShoppingCart'&&
          pageActive!=='/customerBase/customerData'">
  </BaseCartModal>
  <BaseFooter/>

</div>
</template>

<script>
import BaseNavbar from '../components/BaseNavbar.vue';
import BaseAlert from '../components/BaseAlert.vue';
import BaseBanner from '../components/BaseBanner.vue';
import BaseLogoLoading from '../components/BaseLogoLoading.vue';
import BaseLikeModal from '../components/BaseLikeModal.vue';
import BaseCartModal from '../components/BaseCartModal.vue';
import BaseFooter from '../components/BaseFooter.vue';

export default {
  components: {
    BaseNavbar,
    BaseAlert,
    BaseBanner,
    BaseLogoLoading,
    BaseLikeModal,
    BaseCartModal,
    BaseFooter,
  },
  data() {
    return {
      pageActive: '',
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    this.$bus.$on('pageActivePush', (pageActive) => {
      this.pageActive = pageActive;
    });
  },
};
</script>

<style>
*,*:before,*:after{
  --maincolor:#48667B;
  --secondarycolor:#E2DBD3;
  --logocolor:#4F5318;
  --mainrgb:72,102,123;
  --secondaryrgb:226,219,211;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
ul,p,h1,h2,h3,h4,h5,h6{
  list-style: none;
  padding:0;
  margin:0;
}
a{
  display:inline-block;
  text-decoration: none;
  cursor: pointer;
}
.bgCover{
  background-size: cover;
  background-position: center center;
}
</style>
