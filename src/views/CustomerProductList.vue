<template>
<div>

  <BaseLogoLoading :isLoading="isLoading" :key="isLoading"></BaseLogoLoading>

  <div class="container-fluid mt-5">
    <ul class="category d-flex justify-content-center">
      <li style="border-left:2px dotted var(--secondarycolor);">
        <a  @click.prevent="getFilterProducts('all')"
            class="px-2 px-md-3 py-md-2 d-flex flex-column flex-md-row
                   justify-content-center align-items-center"
            :class="{'active':category==='all'}">
          <i class="fas fa-leaf" ></i>
          <div class="categoryName d-flex flex-column flex-md-row
                      justify-content-center align-items-center">
              <p class="ml-md-1 en">All</p>
              <p class="ml-md-1">全部</p>
          </div>
        </a>
      </li>
      <li>
        <a  @click.prevent="getFilterProducts('米')"
            class=" px-2 px-md-3 py-md-2 d-flex flex-column flex-md-row
                    justify-content-center align-items-center"
            :class="{'active':category==='米'}">
          <i class="fas fa-leaf"></i>
          <div class="categoryName d-flex flex-column flex-md-row
                      justify-content-center align-items-center">
              <p class="ml-md-1 en">Rice</p>
              <p class="ml-md-1">米</p>
          </div>
        </a>
      </li>
      <li>
        <a  @click.prevent="getFilterProducts('番茄')"
            class=" px-2 px-md-3 py-md-2 d-flex flex-column flex-md-row
                    justify-content-center align-items-center"
            :class="{'active':category==='番茄'}">
          <i class="fas fa-leaf " ></i>
          <div class="categoryName d-flex flex-column flex-md-row
                      justify-content-center align-items-center">
            <p class="ml-md-1 en">Tomato</p>
            <p class="ml-md-1">番茄</p>
          </div>
        </a>
      </li>
      <li>
        <a  @click.prevent="getFilterProducts('草莓')"
            class=" px-2 px-md-3 py-md-2 d-flex flex-column flex-md-row
                    justify-content-center align-items-center"
            :class="{'active':category==='草莓'}">
          <i class="fas fa-leaf" ></i>
          <div class="categoryName d-flex flex-column flex-md-row
                      justify-content-center align-items-center">
            <p class="ml-md-1 en">Strawberry</p>
            <p class="ml-md-1">草莓</p>
          </div>
        </a>
      </li>
    </ul>
  </div>

  <div class="container mb-3">
    <div class="row">
      <div class="product col-md-6 col-lg-4 my-2"
        v-for="(item,key) in filterProducts" :key="key"
        v-show="key>=(currentPage-1)*showNumber&&key<currentPage*showNumber">
        <a @click.prevent="routerPush(item.id)">
          <p class="title text-primary">{{item.title}}</p>
          <div class="boxone bgCover "
              :style="{backgroundImage :`url(${item.imageUrl})`,}"></div>
          <div class="boxtwo bgCover "
              :style="{backgroundImage :`url(${item.imageUrl})`,}"></div>
          <div class="info py-2 d-flex flex-column">
            <div class="intro mb-auto">{{item.description}}</div>
            <div class="price d-flex justify-content-end align-items-end">
              <span class="original mr-2 ">{{item.origin_price | currency}}</span>
              <span class="special text-danger mr-2 ">{{item.price | currency}}</span>
            </div>
            <div class="button d-flex justify-content-end align-items-center">
              <button class="more btn mr-2 mt-2 btn-outline-success">more
              </button>
              <button class="btn btn-success cart mr-2 mt-2"
                     @click.stop="addtoCart(item.id)"
                     :disabled="item.id === status.loadingItem">
                <i class="fas fa-spinner fa-spin"
                   v-if="item.id === status.loadingItem"></i>
                <i class="fas fa-plus " v-else></i>
                加入購物車
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <ProductlistPagination
    :currentPage="currentPage" :totalPage="totalPage">
  </ProductlistPagination>

</div>
</template>

<script>
import ProductlistPagination from '../components/ProductlistPagination.vue';
import BaseLogoLoading from '../components/BaseLogoLoading.vue';

export default {
  props: ['showNumber'],
  components: {
    ProductlistPagination,
    BaseLogoLoading,
  },
  data() {
    return {
      products: [],
      filterProducts: [],
      category: '',

      currentPage: 0,
      totalPage: 0,

      carts: {},

      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.products = response.data.products;

        vm.filterProducts = response.data.products;
        vm.category = 'all';
        vm.currentPage = 1;
        vm.totalPage = Math.ceil(this.filterProducts.length / this.showNumber);
        vm.isLoading = false;
      });
    },
    getFilterProducts(category) {
      this.category = category;
      if (category === 'all') {
        this.filterProducts = this.products;
      } else {
        this.filterProducts = this.products.filter(item => item.category.match(category));
      }
      this.currentPage = 1;
      this.totalPage = Math.ceil(this.filterProducts.length / this.showNumber);
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
        // setTimeout(() => {
        //   vm.isDisabled=false;
        // }, 5000);
      });
    },
    routerPush(id) {
      this.$router.push(`/customerBase/customerProduct/${id}`);
    },
  },
  created() {
    this.getProducts();
    this.$bus.$emit('pageActivePush', this.$route.path);
    this.$bus.$on('currentPagePush', (currentPage) => {
      this.currentPage = currentPage;
    });
  },
};
</script>

<style scoped>
.category{
  width:100%;
  border-bottom:2px solid var(--secondarycolor);
}
.category li{
  border-right:2px dotted var(--secondarycolor);
}
.category li a{
  color:var(--maincolor);
}
.category li a:hover{
  color:black;
  background-color:var(--secondarycolor);
}
.category li .active{
  color:black;
  background-color:var(--secondarycolor);
}

.categoryName{
  font-size:1.25rem;
  white-space:nowrap;
}

@media screen and (max-width: 767px) {
  .category li a .en{
    display:none;
  }
}


.product{
  height:250px;
}
.product a {
  width:100%;
  height:100%;

  position: relative;

  overflow:hidden;

  box-shadow: 1px 1px 2px var(--maincolor);
  transition: 0.5s;
}
.product a:hover{
  box-shadow: 1px 1px 8px var(--maincolor);
  transition: 0.5s;
}


.product a .title{
  font-size: 1rem;
  padding: 2rem 1rem 2rem 1rem;
  writing-mode: vertical-lr;

  position: absolute;
  top: 0%;
  left: 5%;
}
.product a .boxone{
  width: 60%;
  height: 25%;

  position:absolute;
  top: 0%;
  right: 5%;
}
.product a .boxtwo{
  width: 60%;
  height: 70%;

  position:absolute;
  bottom:0%;
  right:5%;

  border-radius:5% 0% 0% 0%;
}

.product a .info{
  width:72%;
  height:100%;

  position:absolute;
  top:0%;
  right:-100%;

  background-color:rgba(255,255,255,0.8);
  transition: 0.8s;
}
.product a:hover .info{
  right:0%;
  transition: 0.8s;
}
.product a .intro{
  font-size: 1rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  line-height: 1.75rem;
}

.product a .original{
  font-size: 1.25rem;
  text-decoration: line-through;
}
.product a .special{
  font-size: 1.5rem;
}

@media screen and (max-width: 992px) {
  .product{
    height:250px;
  }
}
@media screen and (max-width: 768px) {
  .product{
    height:350px;
  }
  .product a .info{
    right:0%;
    background-color:rgba(255,255,255,0);
  }
  .product a .info .price{
    background-color:rgba(255,255,255,0.8);
  }
  .product a .info .button{
    background-color:rgba(255,255,255,0.8);
  }
  .product a .intro{
    opacity:0;
  }
}
@media screen and (max-width: 480px) {
  .product{
    height:250px;
  }
}
</style>
