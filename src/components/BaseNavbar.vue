<template>
<div>

  <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
    <div class="container">
      <a class="ml-2 navbar-brand navbar-brandExpand bgCover" href="#"
        :style="{backgroundImage :`url(${imgUrl})`,}"
        @click.prevent="routerPush('/customerBase')">
        <h1>午憩農場</h1>
      </a>
      <h5 class="text-info align-self-end ">午憩農場</h5>
      <button class="navbar-toggler ml-auto mr-2" type="button"
              data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item " :class="{'active':pageActive==='/customerBase'}" >
          <a class="nav-link" @click.prevent="routerPush('/customerBase')">
            <span class="navbarTc">首頁</span>
            <span class="navbarEn">Home</span>
            <i class="fa fa-home " ></i>
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item" :class="{'active':pageActive==='/customerBase/customerProductList'}">
          <a class="nav-link" @click.prevent="routerPush('/customerBase/customerProductList')">
            <span class="navbarTc">產品列表</span>
            <span class="navbarEn">Products</span>
            <i class="fas fa-gift "></i>
          </a>
        </li>
        <li class="nav-item" :class="{'active':pageActive==='/customerBase/customerShoppingCart'}">
          <a class="nav-link" @click.prevent="routerPush('/customerBase/customerShoppingCart')">
            <span class="navbarTc">購物車</span>
            <span class="navbarEn">Shopping Cart</span>
            <i class="fas fa-shopping-cart "></i>
          </a>
        </li>
        </ul>
      </div>
    </div>
  </nav>

</div>
</template>

<script>
export default {
  props: ['pageActive'],
  data() {
    return {
      imgUrl: 'img/logo.png',
    };
  },
  methods: {
    routerPush(page) {
      if (page !== this.$route.path) {
        this.$router.push(`${page}`);
      }
    },
  },
};
</script>

<style scoped>
.navbar{
  border-top:3px solid var(--secondarycolor);
}
.navbar .navbar-brandExpand{
  width:80px;
  height:43px;
  transition:0.5s;
}
.navbar .navbar-brandExpand:hover{
  opacity:0.6;
}
.navbar .navbar-brandExpand h1{
  text-indent:101%;
  overflow:hidden;
  white-space:nowrap;
}
</style>
