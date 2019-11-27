<template>
<div>
  <HomeNews/>
  <HomeTimeline/>
  <ProductlistProducts :showNumber="showNumber"></ProductlistProducts>
</div>
</template>

<script>
import HomeNews from '../components/HomeNews.vue';
import HomeTimeline from '../components/HomeTimeline.vue';
import ProductlistProducts from '../components/ProductlistProducts.vue';

export default {
  components: {
    HomeNews,
    HomeTimeline,
    ProductlistProducts,
  },
  data() {
    return {
      showNumber: 3,
    };
  },
};
</script>
