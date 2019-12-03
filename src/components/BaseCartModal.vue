<template>
<div>
  <div class="cartModalIcon">
    <a class="d-flex justify-content-center align-items-center"
      @click.prevent="showCartModal" >
      <i class="fas fa-shopping-cart fa-2x">
      </i>
      <div class="cartLength d-flex justify-content-center align-items-center">
        {{getCartsLength}}
      </div>
    </a>
  </div>
  <!--cartmodal-->
  <div class="modal fade modalExpand" id="CartModal">
    <div class="modal-dialog modal-dialogExpand">
      <div class="modal-content">
        <div class="container" v-if="getCartsLength">
          <div class="p-2"><h5>已加入購物車 :</h5></div>
          <div class="modalTableWrap d-flex">
            <div class="boxone"></div>
            <div class="boxtwo"></div>
            <table >
              <tbody>
                <tr class="p-1" v-for=" item in carts.carts " :key="item.id" >
                  <td width="200" class="align-middle text-left bgCover p-1"
                     :style="{backgroundImage :`url(${item.product.imageUrl})`,}">
                    <div class="name p-1"
                      @click.prevent=
                      "routerPush(`/customerBase/customerProduct/${item.product.id}`)">
                      {{item.product.content}}{{item.product.title}}
                    </div>
                  </td>
                  <td class="align-middle text-center" width="30">{{item.qty}}</td>
                  <td class="align-middle text-center" width="30">
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

          <div class="couponBox  mb-2 mt-2">
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
  computed: {
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
    showCartModal() {
      $('#CartModal').modal('show');
    },
    routerPush(page) {
      $('#CartModal').modal('hide');
      if (page !== this.$route.path) {
        this.$router.push(page);
      }
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style >
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
  width:310px;
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
  background: linear-gradient(top, var(--secondarycolor) 0%,
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
  background: linear-gradient(top, var(--secondarycolor) 0%,
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
}
.modalTableWrap .name {
  background-color:rgba(255,255,255,0.5);
}
.modalTableWrap .name:hover{
  background-color:rgba(255,255,255,0.8);
  cursor: pointer;
}
.modalExpand button {
  width:100%;
  white-space:nowrap;
}
.modalTableWrap .like{
  color: rgba(229,57,53,0.6);
  transition: 0.3s;
}
.modalTableWrap .like:hover{
  transform: scale(1.2);
  transition: 0.3s;
}
.modalTableWrap .likeActive{
  color: red;
  transition: 0.3s;
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
