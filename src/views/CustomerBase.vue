<template>
<div>

  <BaseNavbar class="sticky-top" :pageActive="pageActive" :key="pageActive"></BaseNavbar>
  <BaseAlert></BaseAlert>
  <BaseBanner/>

  <router-view></router-view>

  <BaseLogoLoading></BaseLogoLoading>
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
  created() {
    this.$bus.$on('pageActivePush', (pageActive) => {
      this.pageActive = pageActive;
    });
  },
};
/*
// pageActivePush ------------------------------------------------------------
CustomerBase :
this.$bus.$on('pageActivePush', (pageActive) => {
  this.pageActive = pageActive;
});
ProductlistProducts :
this.$bus.$emit('pageActivePush', this.$route.path);
CustomerData :
this.$bus.$emit('pageActivePush', this.$route.path);
CustomerPay :
this.$bus.$emit('pageActivePush', this.$route.path);
CustomerProduct :
this.$bus.$emit('pageActivePush', this.$route.path);
CustomerShoppingCart :
this.$bus.$emit('pageActivePush', this.$route.path);

// getHistoryProducts ------------------------------------------------------------
ProductlistHistory :
this.$bus.$on('getHistoryProducts', () => {
  this.getHistoryProducts();
});
CustomerProduct :
vm.$bus.$emit('getHistoryProducts');

// getPopularProducts ------------------------------------------------------------
ProductlistPopular :
this.$bus.$on('getPopularProducts', () => {
  this.getPopularProducts();
});
CustomerProduct :
vm.$bus.$emit('ProductlistPopular');

// currentPagePush ------------------------------------------------------------
ProductlistProducts :
this.$bus.$on('currentPagePush', (currentPage) => {
  this.currentPage = currentPage;
});
ProductlistPagination :
this.$bus.$emit('currentPagePush', currentPage);

// props ------------------------------------------------------------
BaseNavbar :
props: ['pageActive'],

AdminPagination :
props: ['pages'],

ProductlistProducts :
props: ['showNumber'],
ProductlistPagination :
props: ['currentPage', 'totalPage'],

ShoppingCartStep :
props: ['stepActive'],
*/
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
