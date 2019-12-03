<template>
<div>

  <div class="container" v-if="getCartsLength">

    <ShoppingCartStep :stepActive="stepActive" ></ShoppingCartStep>

    <div class="tableWrap d-flex m-1">
      <div class="boxone"></div>
      <div class="boxtwo"></div>
      <table >
        <thead>
          <th class="pictureTd p-2"></th>
          <th class="name text-left p-2">品名</th>
          <th class="text-center p-2" width="50">數量</th>
          <th class="price text-right p-2" width="80">單價</th>
          <th class="text-center p-2" width="50">移除</th>
        </thead>
        <tbody>
          <tr class="p-1" v-for=" item in carts.carts " :key="item.id" >
            <td class="pictureTd align-middle text-center" width="90px" height="90px">
              <div class="picture bgCover m-1"
                  :style="{backgroundImage :`url(${item.product.imageUrl})`,}">
              </div>
            </td>
            <td class="align-middle text-left bgCover p-1"
               :style="{backgroundImage :`url(${item.product.imageUrl})`,}">
              <div class="name bgCover p-2"
                @click.prevent="routerPush(`/customerBase/customerProduct/${item.product.id}`)">
                {{item.product.content}}{{item.product.title}}
              </div>
              <div class="text-danger p-1"  v-if="item.coupon">已套用優惠券</div>
            </td>
            <td class="align-middle text-center">{{item.qty}}
            </td>
            <td class="price align-middle text-right">{{item.product.price | currency}}</td>
            <td class="align-middle text-center">
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item)"
                :disabled="item.id === getLoadingItem">
                <i class="fas fa-spinner fa-spin" v-if="item.id === getLoadingItem"></i>
                <i class="far fa-trash-alt" v-else></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="text-right pt-2" :class="{'lineThrough':carts.total!==carts.final_total}">
      <h5>總計 : <span>{{carts.total | currency}}</span></h5>
    </div>
    <div class="text-right pt-1 text-danger" v-if="carts.total!==carts.final_total">
      <h5>折扣價 : <span>{{carts.final_total | currency}}</span></h5>
    </div>

    <div class="input-group mt-2">
      <input type="text" class="form-control" v-model="coupon_code" placeholder="輸入good80，享8折">
      <div class="input-group-append">
        <button class="btn btn-outline-success" type="button" @click="addCouponCode">套用優惠碼</button>
      </div>
    </div>
    <div class="d-flex justify-content-center my-2">
      <button class="btn btn-success px-5" type="button"
            @click.prevent="routerPush('/customerBase/customerData')">
        下一步，填寫資料
      </button>
    </div>

  </div>

  <div class="cartLength0  d-flex justify-content-center" v-else>
    <h5 class="py-2 px-3 ">購物車目前沒有商品喔!</h5>
  </div>

  <ProductlistHistory></ProductlistHistory>
  <ProductlistPopular></ProductlistPopular>

</div>
</template>

<script>
import ShoppingCartStep from '../components/ShoppingCartStep.vue';
import ProductlistHistory from '../components/ProductlistHistory.vue';
import ProductlistPopular from '../components/ProductlistPopular.vue';

export default {
  components: {
    ShoppingCartStep,
    ProductlistHistory,
    ProductlistPopular,
  },
  data() {
    return {
      stepActive: 'cart',
      coupon_code: '',
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    carts() {
      return this.$store.state.carts;
    },
    getCartsLength() {
      return this.$store.state.cartsLength;
    },
    getLoadingItem() {
      return this.$store.state.loadingItem;
    },
  },
  methods: {
    getCart() {
      this.$store.dispatch('getCart');
    },
    removeCartItem(item) {
      this.$store.dispatch('removeCartItem', item);
      this.$store.dispatch('updateMessage', { message: '從購物車刪除', item });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = { code: vm.coupon_code };
      vm.$store.dispatch('updateLoading', true);
      this.$http.post(url, { data: coupon }).then((response) => {
        if (response.data.success) {
          vm.getCart();
          vm.$store.dispatch('updateMessage', { message: '已套用優惠券' });
        } else {
          vm.$store.dispatch('updateMessage', { message: response.data.message });
        }
        vm.$store.dispatch('updateLoading', false);
      });
    },
    routerPush(page) {
      this.$router.push(page);
    },
  },
  created() {
    this.getCart();
    this.$bus.$emit('pageActivePush', this.$route.path);
  },
};
</script>

<style scoped>
.tableWrap{
  width:100%;
  position:relative;
}
.tableWrap table{
  width:100%;
  background-color:white;
  z-index:5;
}
.tableWrap .boxone{
  width:52%;
  height:100%;
  position:absolute;
  top:-2%;
  left:-2%;
  background-color: linear-gradient(top, rgb(var(--secondaryrgb)) 0%,
                    rgb(var(--secondaryrgb)) 50% ,rgb(255,255,255) 100%);
  background: -ms-linear-gradient(top, rgb(var(--secondaryrgb)) 0%,
              rgb(var(--secondaryrgb)) 50% ,rgb(255,255,255) 100%);
  background: -moz-linear-gradient(top, rgb(var(--secondaryrgb)) 0%,
              rgb(var(--secondaryrgb)) 50% ,rgb(255,255,255) 100%);
  background: -webkit-linear-gradient(top, rgb(var(--secondaryrgb)) 0%,
              rgb(var(--secondaryrgb)) 50% ,rgb(255,255,255) 100%);
  z-index:4;
}
.tableWrap .boxtwo{
  width:52%;
  height:100%;
  position:absolute;
  top:-2%;
  right:-2%;
  background-color: linear-gradient(top, rgba(var(--mainrgb),1) 0%,
                    rgba(var(--mainrgb),1) 50% ,rgb(255,255,255) 100%);
  background: -ms-linear-gradient(top, rgba(var(--mainrgb),1) 0%,
              rgba(var(--mainrgb),1) 50% ,rgb(255,255,255) 100%);
  background: -moz-linear-gradient(top, rgba(var(--mainrgb),1) 0%,
              rgba(var(--mainrgb),1) 50% ,rgb(255,255,255) 100%);
  background: -webkit-linear-gradient(top, rgba(var(--secondaryrgb),1) 0%,
              rgba(var(--secondaryrgb),1) 50% ,rgb(255,255,255) 100%);
  z-index:4;
}
.tableWrap th{
  font-size: 1rem;
  border-bottom:2px solid var(--maincolor);
}
.tableWrap td{
  font-size: 1rem;
  border-bottom:1px solid var(--maincolor);
}
.tableWrap .pictureTd{
  border-bottom:0px solid var(--maincolor);
}
.tableWrap .picture {
  width:80px;
  height:50px;
}
.tableWrap .name {
  background-color:rgba(255,255,255,0.5);
}
.tableWrap .name:hover {
  background-color:rgba(255,255,255,0.8);
  cursor:pointer;
}
.lineThrough{
  text-decoration:line-through;
}
.couponBox button {
  white-space:nowrap;
}
.cartLength0{
  padding:100px 0px 100px 0px;
}
.cartLength0 h5{
  border-left:5px solid var(--maincolor);
  box-shadow:1px 1px 3px var(--maincolor);
}
@media screen and (max-width: 480px){
  table .pictureTd{
    display:none;
  }
  table .price{
    display:none;
  }
}
</style>
