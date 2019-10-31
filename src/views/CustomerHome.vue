<template>
<div>
  <HomeNews/>
  <HomeTimeline/>
  <CustomerProductList :showNumber="showNumber"></CustomerProductList>
</div>
</template>

<script>
import HomeNews from '../components/HomeNews.vue';
import HomeTimeline from '../components/HomeTimeline.vue';
import CustomerProductList from './CustomerProductList.vue';

export default {
  components: {
    HomeNews,
    HomeTimeline,
    CustomerProductList,
  },
  data() {
    return {
      showNumber: 3,
    };
  },
};
</script>
