<template>
<div>
  <div class="cartModalIcon">
    <a class="d-flex justify-content-center align-items-center"
      @click.prevent="showCartModal" >
      <i class="fas fa-shopping-cart fa-2x">
      </i>
      <div class="cartLength d-flex justify-content-center align-items-center">
        {{cartLength}}
      </div>
    </a>
  </div>
  <!--cartmodal-->
  <div class="modal fade modalExpand" id="CartModal">
    <div class="modal-dialog modal-dialogExpand">
      <div class="modal-content">
        <div class="container" v-if="cartLength">
          <div class="p-2"><h5>已加入購物車 :</h5></div>
          <div class="modalTableWrap d-flex">
            <div class="boxone"></div>
            <div class="boxtwo"></div>
            <table >
              <tbody>
                <tr class="p-1" v-for=" item in carts.carts " :key="item.id" >
                  <td width="200" class="align-middle text-left bgCover p-1"
                     :style="{backgroundImage :`url(${item.product.imageUrl})`,}">
                    <div class="name p-1">{{item.product.title}}</div>
                  </td>
                  <td class="align-middle text-center" width="30">{{item.qty}}</td>
                  <td class="align-middle text-center" width="30">
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

          <div class="pt-2 d-flex justify-content-between align-items-end"
              :class="{'lineThrough':carts.total!==carts.final_total}" >
            <h5>總計 :</h5>
            <h5 > {{carts.total | currency}}</h5>
          </div>
          <div class="pt-2 d-flex text-danger justify-content-between
                      align-items-end" v-if="carts.total!==carts.final_total">
            <h5>優惠價 :</h5>
            <h5 > {{carts.final_total | currency}}</h5>
          </div>

          <div class="couponBox  my-1">
            <button class="btn btn-success" type="button"
                    @click.prevent="routerPush('/customerBase/customerShoppingCart')">
              結帳去
            </button>
          </div>
        </div>
        <div class="cartLength0  d-flex justify-content-center" v-else>
          <h5 class="py-2 px-3 ">購物車目前沒有商品喔!</h5>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      carts: {},
      cartLength: 0,
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
      this.$http.get(api).then((response) => {
        vm.carts = response.data.data;
        vm.cartLength = response.data.data.carts.length;
      });
    },
    showCartModal() {
      $('#CartModal').modal('show');
    },
    removeCartItem(id) {
      const vm = this;
      vm.status.loadingItem = id;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      this.$http.delete(url).then(() => {
        vm.getCart();
        vm.status.loadingItem = '';
      });
    },
    routerPush(page) {
      $('#CartModal').modal('hide');
      this.$router.push(`${page}`);
    },
  },
  created() {
    this.getCart();
    this.$bus.$on('getCartEmit', () => {
      this.getCart();
    });
  },
};
</script>

<style>
.cartModalIcon{
  width:60px;
  height:60px;
  position:fixed;
  right:20px;
  bottom:20px;
  z-index:51;
}
.cartModalIcon a{
  width:100%;
  height:100%;
  position:relative;

  border-radius:10%;
  border-left:2px solid var(--maincolor);
  background: rgba(255,255,255,0.8);
}
.cartLength{
  width:30px;
  height:30px;
  position:absolute;
  right:-10px;
  top:-10px;

  border-radius:50%;
  color:white;
  background:red;
}
.cartModalIcon i{
  color:var(--maincolor);
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
}


.modal-dialogExpand{
  width:300px;
  position:absolute;
  right:3px;
  bottom:80px;
}
.modalTableWrap {
  position:relative;
}
.modalTableWrap .boxone{
  width:53%;
  height:100%;
  position:absolute;
  top:-3%;
  left:-3%;
  background-color: linear-gradient(top, var(--secondarycolor) 0%,
                    var(--secondarycolor) 50% ,white 100%);
  background: -ms-linear-gradient(top, var(--secondarycolor) 0%,
                    var(--secondarycolor) 50% ,white 100%);
  background: -moz-linear-gradient(top, var(--secondarycolor) 0%,
                    var(--secondarycolor)50% ,white 100%);
  background: -webkit-linear-gradient(top, var(--secondarycolor) 0%,
                    var(--secondarycolor) 50% ,white 100%);
  z-index:4;
}
.modalTableWrap .boxtwo{
  width:53%;
  height:100%;
  position:absolute;
  top:-3%;
  right:-3%;
  background-color: linear-gradient(top, var(--secondarycolor) 0%,
                    var(--secondarycolor) 50% ,white 100%);
  background: -ms-linear-gradient(top, var(--secondarycolor) 0%,
                    var(--secondarycolor) 50% ,white 100%);
  background: -moz-linear-gradient(top, var(--secondarycolor) 0%,
                    var(--secondarycolor)50% ,white 100%);
  background: -webkit-linear-gradient(top, var(--secondarycolor) 0%,
                    var(--secondarycolor) 50% ,white 100%);
  z-index:4;
}
.modalTableWrap table{
  display:block;
  height:130px;
  overflow-y:scroll;

  width:100%;
  background-color:white;
  z-index:5;
}
.modalTableWrap td{
  font-size: 1rem;
  border-bottom:1px solid var(--maincolor);
}
.modalTableWrap .name {
  background-color:rgba(255,255,255,0.5);
}
.modalExpand button {
  width:100%;
  white-space:nowrap;
}

.lineThrough{
  text-decoration:line-through;
}


.cartLength0{
  padding:25px 0px 25px 0px;
}
.cartLength0 h5{
  border-left:5px solid var(--maincolor);
  box-shadow:1px 1px 3px var(--maincolor);
}
</style>
