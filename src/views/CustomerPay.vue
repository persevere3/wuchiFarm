<template>
<div>

  <BaseLogoLoading :isLoading="isLoading" :key="isLoading"></BaseLogoLoading>

  <div class="container">

    <ShoppingCartStep :stepActive="stepActive" ></ShoppingCartStep>

    <div class="tableWrap d-flex">
      <div class="boxone"></div>
      <div class="boxtwo"></div>
      <table >
        <thead>
          <th class="name text-left p-2">品名</th>
          <th class="text-center p-2" width="50">數量</th>
          <th class="price text-right p-2" width="80">小計</th>
        </thead>
        <tbody>
          <tr class="p-1" v-for=" item in order.products " :key="item.id" >
            <td class="align-middle text-left bgCover p-1"
               :style="{backgroundImage :`url(${item.product.imageUrl})`,}">
              <div class="name bgCover p-1">{{item.product.title}}</div>
              <div class="name p-1"  v-if="item.coupon">已套用優惠券</div>
            </td>
            <td class="align-middle text-center">{{item.qty}}</td>
            <td class="price align-middle text-right">{{item.final_total | currency}}</td>
          </tr>
          <tr>
            <td colspan="3">
              <div class="text-right pt-3">
                <h6>總計 : <span>{{order.total | currency}}</span></h6>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="formWrap d-flex my-3 px-4">
      <div class="boxone"></div>
      <div class="boxtwo"></div>
      <form class="form p-3" @submit.prevent="payOrder">
        <table class="table">
          <tbody>
            <tr>
              <th width="200">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-danger">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right" v-if="order.is_paid === false">
          <button class="btn btn-success ">確認付款去</button>
        </div>
      </form>
    </div>

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
      order: {
        user: {},
      },
      orderId: '',
      stepActive: 'pay',
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.order = response.data.order;
        console.log(response);
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.getOrder();
        }
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
    this.$bus.$emit('pageActivePush', this.$route.path);
  },
};
</script>

<style scoped>
.tableWrap{
  width:60%;
  margin: 0 auto;
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
  background-color: linear-gradient(top, var(--secondarycolor) 0%,
              var(--secondarycolor) 50% ,white 100%);
  background: -ms-linear-gradient(top, var(--secondarycolor) 0%,
              var(--secondarycolor) 50% ,white 100%);
  background: -moz-linear-gradient(top, var(--secondarycolor) 0%,
              var(--secondarycolor) 50% ,white 100%);
  background: -webkit-linear-gradient(top, var(--secondarycolor) 0%,
              var(--secondarycolor) 50% ,white 100%);
  z-index:4;
}
.tableWrap .boxtwo{
  width:52%;
  height:100%;
  position:absolute;
  top:-2%;
  right:-2%;
  background-color: linear-gradient(top, var(--secondarycolor) 0%,
                    var(--secondarycolor) 50% ,white 100%);
  background: -ms-linear-gradient(top, var(--secondarycolor) 0%,
              var(--secondarycolor) 50% ,white 100%);
  background: -moz-linear-gradient(top, var(--secondarycolor) 0%,
              var(--secondarycolor) 50% ,white 100%);
  background: -webkit-linear-gradient(top, var(--secondarycolor) 0%,
              var(--secondarycolor) 50% ,white 100%);
  z-index:4;
}


.tableWrap th{
  font-size: 1rem;
}
.tableWrap td{
  font-size: 1rem;
  border-top:1px solid var(--maincolor);
}
.tableWrap .name{
  background-color:rgba(255,255,255,0.5);
}
button{
  white-space:nowrap;
}


.formWrap{
  width:60%;
  margin:0 auto;
  position:relative;
}
.formWrap .boxone{
  width:82%;
  height:100%;
  position:absolute;
  top:-1%;
  left:-2%;
  background-color: linear-gradient(top, var(--secondarycolor) 0%,
                    var(--secondarycolor) 50% ,white 100%);
  background: -ms-linear-gradient(top, var(--secondarycolor) 0%,
              var(--secondarycolor) 50% ,white 100%);
  background: -moz-linear-gradient(top, var(--secondarycolor) 0%,
              var(--secondarycolor) 50% ,white 100%);
  background: -webkit-linear-gradient(top, var(--secondarycolor) 0%,
              var(--secondarycolor) 50% ,white 100%);
  z-index:4;
}
.formWrap .boxone:before{
  content:"";
  width:2px;
  position:absolute;
  top:0;
  bottom:0;
  left:12px;
  transform:translateX(-50%);
  background-color: white;
  z-index:5;
}
.formWrap .boxtwo{
  width:82%;
  height:100%;
  position:absolute;
  bottom:-1%;
  right:-2%;
  background-color: linear-gradient(top, white, var(--secondarycolor) 50% ,
                    var(--secondarycolor) 100%);
  background: -ms-linear-gradient(top, white, var(--secondarycolor) 50% ,
              var(--secondarycolor) 100%);
  background: -moz-linear-gradient(top, white, var(--secondarycolor) 50% ,
              var(--secondarycolor) 100%);
  background: -webkit-linear-gradient(top, white, var(--secondarycolor) 50% ,
              var(--secondarycolor) 100%);
  z-index:4;
}
.formWrap .boxtwo:before{
  content:"";
  width:2px;
  position:absolute;
  top:0;
  bottom:0;
  right:12px;
  transform:translateX(50%);
  background-color: white;
  z-index:5;
}
.formWrap .form{
  width:100%;
  background-color:white;
  z-index:5;
}
@media screen and (max-width: 992px){
  .formWrap{
    width:80%;
  }
  .tableWrap{
    width:80%;
  }
}
@media screen and (max-width: 767px){
  .formWrap{
    width:100%;
  }
  .tableWrap{
    width:100%;
  }
}
</style>
