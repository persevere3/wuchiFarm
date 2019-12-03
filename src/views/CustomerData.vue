<template>
<div>

  <div class="container">

    <ShoppingCartStep :stepActive="stepActive" ></ShoppingCartStep>

    <div class="formWrap d-flex my-3 px-4">
      <div class="boxone"></div>
      <div class="boxtwo"></div>

      <form class="form p-3" @submit.prevent="createOrder">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input type="email" class="form-control" name="email" id="useremail"
            :class="{'is-invalid': errors.has('email')}"
            v-validate="'required|email'"
            v-model="form.user.email" placeholder="請輸入Email">
          <span class="text-danger" v-if="errors.has('email')">
            {{ errors.first('email') }}
          </span>
        </div>

        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input type="text" class="form-control" name="name" id="username"
            :class="{'is-invalid': errors.has('name')}"
            v-validate="'required'" v-model="form.user.name"  placeholder="請輸入姓名">
          <span class="text-danger" v-if="errors.has('name')">
            請輸入姓名
          </span>
        </div>

        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <input type="tel" class="form-control" name="regex" id="usertel"
            :class="{'is-invalid': errors.has('regex')}"
            v-validate="{ required: true, regex: /^([0-9]+)$/ }"
            v-model="form.user.tel" placeholder="請輸入電話">
          <span class="text-danger" v-if="errors.has('regex')">
            請輸入電話
          </span>
        </div>

        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <input type="address" class="form-control" name="address"
            :class="{'is-invalid': errors.has('address')}"
            id="useraddress" v-model="form.user.address" v-validate="'required'"
            placeholder="請輸入地址">
          <span class="text-danger" v-if="errors.has('address')">請輸入地址</span>
        </div>

        <div class="form-group">
          <label for="feedback">留言</label>
          <textarea name="" id="feedback" class="form-control"
                    cols="30" rows="5" v-model="form.message">
          </textarea>
        </div>

        <div class="text-right">
          <button class="btn btn-success" >送出訂單</button>
        </div>
      </form>
    </div>

  </div>

</div>
</template>


<script>
import ShoppingCartStep from '../components/ShoppingCartStep.vue';

export default {
  components: {
    ShoppingCartStep,
  },
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      stepActive: 'data',
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      this.$validator.validate().then((result) => {
        if (result) {
          this.$http.post(url, { data: order }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`customerPay/${response.data.orderId}`);
              vm.$store.dispatch('getCart');
            }
          });
        }
      });
    },
  },
  created() {
    this.$bus.$emit('pageActivePush', this.$route.path);
  },
};
</script>

<style scoped>
.formWrap{
  width:50%;
  margin:0 auto;
  position:relative;
}
.formWrap .boxone{
  width:82%;
  height:100%;
  position:absolute;
  top:-1%;
  left:-2%;
  background: linear-gradient(top, var(--secondarycolor) 0%,
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
  background: linear-gradient(top, white 0%, var(--secondarycolor) 50% ,
                    var(--secondarycolor) 100%);
  background: -ms-linear-gradient(top, white 0%, var(--secondarycolor) 50% ,
              var(--secondarycolor) 100%);
  background: -moz-linear-gradient(top, white 0%, var(--secondarycolor) 50% ,
              var(--secondarycolor) 100%);
  background: -webkit-linear-gradient(top, white 0%, var(--secondarycolor) 50% ,
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
  width:70%;
  }
}
@media screen and (max-width: 767px){
  .formWrap{
  width:100%;
  }
}
</style>
