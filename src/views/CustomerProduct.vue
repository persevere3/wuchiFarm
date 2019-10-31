<template>
<div>

  <BaseLogoLoading :isLoading="isLoading" :key="isLoading"></BaseLogoLoading>

  <div class="container">

    <div class="product d-md-flex flex-md-wrap align-items-md-end">
      <div class="picture">
      <div class="boxone rounded"></div>
      <div class="boxtwo rounded"></div>
      <div class="boxthree rounded"></div>
      <div class="boxmain rounded  bgCover"
          :style="{backgroundImage :`url(${product.imageUrl})`,}">
      </div>
    </div>

    <div class="info bg-white px-3 d-flex flex-column justify-content-center align-items-start">
    <div class="name text-primary p-2">{{product.title}}</div>
    <div class="price p-2 d-flex justify-content-start align-items-end">
      <span class="original mr-2">{{product.origin_price | currency}}</span>
      <span class="special text-danger mr-2">{{product.price | currency}}</span>
    </div>


    <label for="num" class="pt-2 px-2">請選購數量:</label>
    <div class="btn-group" role="group" aria-label="First group">
      <button type="button" class="btn btn-secondary"
              @click.prevent="changeNum(-1)"
              :class="{'disabled':buyNum<2}">
        <i class="fas fa-minus"></i>
      </button>
      <input  disabled class="text-center border-0" type="text" size="5" id="num" v-model="buyNum">
      <button type="button" class="btn btn-secondary"
              @click.prevent="changeNum(1)"
              :class="{'disabled':buyNum>9}">
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <div class="total py-2 px-2">小計 : <span>{{ buyNum * product.price | currency }}</span></div>
      <button class="cart btn btn-success my-2 mx-1" @click.prevent="addtoCart(product.id,buyNum)"
          :disabled="product.id === status.loadingItem">
        <i class="fas fa-spinner fa-spin mr-1" v-if="product.id === status.loadingItem"></i>
        <i class="fas fa-plus mr-1" v-else></i>加入購物車
      </button>
    </div>

    <div class="introduction my-2 my-md-4 pt-2 pt-md-4">
      <div class="mb-2 text-primary" style="font-size:1.5rem">商品介紹</div>
      {{product.description}}
    </div>

    </div>
  </div>

</div>
</template>

<script>
import BaseLogoLoading from '../components/BaseLogoLoading.vue';

export default {
  components: {
    BaseLogoLoading,
  },
  data() {
    return {
      id: '',
      product: {},
      carts: {},
      buyNum: 1,
      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.id}`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.product = response.data.product;
        vm.isLoading = false;
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then(() => {
        vm.$bus.$emit('getCartEmit');
        vm.status.loadingItem = '';
        vm.$bus.$emit('messagePush', '已加入購物車');
      });
    },
    changeNum(i) {
      if ((this.buyNum + i) > 0 && (this.buyNum + i) < 11) this.buyNum = this.buyNum + i;
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getProduct();
    this.$bus.$emit('pageActivePush', this.$route.path);
  },
};
</script>

<style scoped>
.picture{
  width:60%;
  height:400px;
  transform:translateX(3%);
  position: relative;
}
.boxone{
  width:90%;
  height:90%;
  position: absolute;
  bottom:0%;
  right:0%;

  transform:translate(-30px,-30px);

  background-color: var(--secondarycolor);
}
.boxtwo{
  width:90%;
  height:90%;
  position: absolute;
  bottom:0%;
  right:0%;

  transform:translate(-15px,-15px);

  border-bottom:2px solid var(--secondarycolor);
  border-right:2px solid var(--secondarycolor);
  z-index:5;
}
.boxthree{
  width:90%;
  height:90%;
  position: absolute;
  bottom:0%;
  right:0%;

  transform:translate(-15px,-15px);

  border-top:2px solid white;
  border-left:2px solid white;
  z-index:5;
}
.boxmain{
  width:90%;
  height:90%;
  position: absolute;
  bottom:0%;
  right:0%;
  z-index:4;
}


.info{
  width:40%;
  transform:translate(-9%,0px);
  border-left:5px solid var(--secondarycolor);
}
.name{
  width:100%;
  font-size: 1.5rem;
  border-bottom:1px dotted var(--maincolor);
}
.price{
  width:100%;
  border-bottom:1px dotted var(--maincolor);
}
.original{
  font-size: 1rem;
  text-decoration: line-through;
}
.special{
  font-size: 1.25rem;
}
.total{
  width:100%;
  font-size: 1rem;
  border-bottom:1px dotted var(--maincolor);
}
.cart{
  font-size: 1rem;
}


.introduction{
  width:100%;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.5rem;
  border-top:1px dotted var(--maincolor);
}
@media screen and (max-width: 992px) {
  .picture{
    height:350px;
  }
}

@media screen and (max-width: 767px) {
  .picture{
    width:97%;
    height:350px;
    transform:translateX(0%);
  }
  .info{
    width: 90%;
    margin:0 auto;
    transform:translate(0%,0px);
    border-left:0px solid var(--secondarycolor);
  }
  .introduction{
    width:90%;
  }
}

@media screen and (max-width: 480px) {
  .picture{
    height:280px;
  }
}
</style>
