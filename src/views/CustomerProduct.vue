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
        <input  disabled class="text-center border-0"
                type="text" size="5" id="num" v-model="buyNum">
        <button type="button" class="btn btn-secondary"
                @click.prevent="changeNum(1)"
                :class="{'disabled':buyNum>9}">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="total py-2 px-2 d-flex">小計 :
        <span>{{ buyNum * product.price | currency }}</span>
      </div>
      <div class="d-flex">
        <i class="fas fa-heart fa-2x like mr-1 py-3" aria-hidden="true"
                  :class="{'likeActive':isLike}"
                  @click.stop="updateLikeProducts()">
        </i>
        <button class="cart btn btn-success my-2 mx-1" @click.prevent="addtoCart(product.id,buyNum)"
            :disabled="product.id === status.loadingItem">
          <i class="fas fa-spinner fa-spin mr-1" v-if="product.id === status.loadingItem"></i>
          <i class="fas fa-plus mr-1" v-else></i>加入購物車
        </button>
      </div>
    </div>
    <div class="introduction my-2 my-md-4 pt-2 pt-md-4">
      <div class="mb-2 text-primary" style="font-size:1.5rem">商品介紹</div>
        {{product.description}}
      </div>
    </div>
  </div>

  <ProductlistHistory></ProductlistHistory>
  <ProductlistPopular></ProductlistPopular>
</div>
</template>

<script>
import BaseLogoLoading from '../components/BaseLogoLoading.vue';
import ProductlistHistory from '../components/ProductlistHistory.vue';
import ProductlistPopular from '../components/ProductlistPopular.vue';


export default {
  components: {
    BaseLogoLoading,
    ProductlistHistory,
    ProductlistPopular,
  },
  data() {
    return {
      id: '',
      product: {},
      carts: [],
      buyNum: 1,
      historyProducts: [],
      likeProducts: [],
      isLike: false,
      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  watch: {
    $route: ['getProduct'],
  },
  methods: {
    getProduct() {
      const vm = this;
      vm.id = vm.$route.params.id;
      vm.buyNum = 1;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.id}`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.product = response.data.product;
        vm.updateHistoryProducts();
        vm.updatePopularProducts();
        vm.isLoading = false;
        vm.updateIsLike();
      });
    },
    updateIsLike() {
      this.isLike = false;
      this.likeProducts = JSON.parse(localStorage.getItem('likeProducts')) || [];
      for (let i = 0; i < this.likeProducts.length; i += 1) {
        if (this.likeProducts[i].id === this.product.id) {
          this.isLike = true;
        }
      }
    },
    updateLikeProducts() {
      this.isLike = !this.isLike;
      if (this.isLike === true) {
        this.likeProducts.push(this.product);
      } else {
        for (let i = 0; i < this.likeProducts.length; i += 1) {
          if (this.product.id === this.likeProducts[i].id) {
            this.likeProducts.splice(i, 1);
          }
        }
      }
      localStorage.setItem('likeProducts', JSON.stringify(this.likeProducts));
      this.$bus.$emit('getLikeProducts');
      this.$bus.$emit('getHistoryProducts');
      this.$bus.$emit('getPopularProducts');
    },
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      this.$http.get(api).then((response) => {
        vm.carts = response.data.data;
      });
    },
    changeNum(i) {
      if ((this.buyNum + i) > 0 && (this.buyNum + i) < 11) this.buyNum = this.buyNum + i;
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      let i = 0;
      let q = 0;
      let mergeQty = 0;
      // for出同id取出數量後刪除該筆
      for (i = 0; i < vm.carts.carts.length; i += 1) {
        if (id === vm.carts.carts[i].product.id) {
          q = vm.carts.carts[i].qty;
          vm.removeCartItem(vm.carts.carts[i].id);
        }
      }
      mergeQty = qty + q;
      // 合併後新增至購物車
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: mergeQty,
      };
      this.$http.post(api, { data: cart }).then(() => {
        vm.$bus.$emit('getCartEmit');
        vm.status.loadingItem = '';
        vm.$bus.$emit('messagePush', '已加入購物車');
        vm.getCart();
      });
    },
    removeCartItem(id) {
      const vm = this;
      vm.status.loadingItem = id;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      this.$http.delete(url).then(() => {
        vm.status.loadingItem = '';
      });
    },
    updateHistoryProducts() {
      this.historyProducts = JSON.parse(localStorage.getItem('historyProducts')) || [];
      for (let i = 0; i < this.historyProducts.length; i += 1) {
        if (this.product.id === this.historyProducts[i].id) {
          const r = this.historyProducts[i];
          for (let j = i; j < this.historyProducts.length - 1; j += 1) {
            this.historyProducts[j] = this.historyProducts[j + 1];
          }
          this.historyProducts[this.historyProducts.length - 1] = r;
          localStorage.setItem('historyProducts', JSON.stringify(this.historyProducts));
          return;
        }
      }
      if (this.historyProducts.length === 3) {
        for (let i = 1; i < this.historyProducts.length; i += 1) {
          this.historyProducts[i - 1] = this.historyProducts[i];
        }
        this.historyProducts.pop();
        this.historyProducts.push(this.product);
      } else {
        this.historyProducts.push(this.product);
      }
      localStorage.setItem('historyProducts', JSON.stringify(this.historyProducts));
    },
    updatePopularProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.product.id}`;
      vm.product.unit = (+vm.product.unit) + 1;
      this.$http.put(api, { data: vm.product }).then(() => {
      });
    },
  },
  created() {
    this.getProduct();
    this.getCart();
    this.$bus.$emit('pageActivePush', this.$route.path);
    this.$bus.$on('getProduct', () => {
      this.updateIsLike();
    });
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
.like{
  color: rgba(229,57,53,0.6);
  transition: 0.3s;
}
.like:hover{
  transform: scale(1.2);
  transition: 0.3s;
}
.likeActive{
  color: red;
  transition: 0.3s;
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
