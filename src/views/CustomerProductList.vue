<template>
<div>

  <ProductlistProducts :showNumber="showNumber"></ProductlistProducts>
  <ProductlistHistory></ProductlistHistory>
  <ProductlistPopular></ProductlistPopular>

</div>
</template>

<script>
import ProductlistProducts from '../components/ProductlistProducts.vue';
import ProductlistHistory from '../components/ProductlistHistory.vue';
import ProductlistPopular from '../components/ProductlistPopular.vue';

export default {
  components: {
    ProductlistProducts,
    ProductlistHistory,
    ProductlistPopular,
  },
  data() {
    return {
      showNumber: 6,
    };
  },
};
</script>
