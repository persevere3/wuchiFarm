<template>
<div>

  <BaseLogoLoading :isLoading="isLoading" :key="isLoading"></BaseLogoLoading>
  <div class="container" v-if="cartsLength">

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
              <div class="name bgCover p-1">{{item.product.title}}</div>
              <div class="name text-danger p-1"  v-if="item.coupon">已套用優惠券</div>
            </td>
            <td class="align-middle text-center">{{item.qty}}</td>
            <td class="price align-middle text-right">{{item.product.price | currency}}</td>
            <td class="align-middle text-center">
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item.id)"
                :disabled="item.id === status.loadingItem">
                <i class="fas fa-spinner fa-spin" v-if="item.id === status.loadingItem"></i>
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

</div>
</template>

<script>
import BaseLogoLoading from '../components/BaseLogoLoading.vue';
import ShoppingCartStep from '../components/ShoppingCartStep.vue';

export default {
  components: {
    BaseLogoLoading,
    ShoppingCartStep,
  },
  data() {
    return {
      carts: {},
      coupon_code: '',
      cartsLength: 0,
      stepActive: 'cart',
      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.carts = response.data.data;
        vm.cartsLength = response.data.data.carts.length;
        vm.isLoading = false;
      });
    },
    removeCartItem(id) {
      const vm = this;
      vm.status.loadingItem = id;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      this.$http.delete(url).then(() => {
        vm.getCart();
        vm.$bus.$emit('getCartEmit');
        vm.$bus.$emit('messagePush', '已從購物車移除');
        vm.status.loadingItem = '';
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = { code: vm.coupon_code };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        if (response.data.success) {
          vm.getCart();
          vm.$bus.$emit('getCartEmit');
          vm.$bus.$emit('messagePush', '已套用優惠券');
        } else {
          vm.$bus.$emit('messagePush', response.data.message);
        }
        vm.isLoading = false;
      });
    },
    routerPush(page) {
      this.$router.push(`${page}`);
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
