<template>
<div>
  <div class="likeModalIcon">
    <a class="d-flex justify-content-center align-items-center"
      @click.prevent="showLikeModal" >
      <i class="fas fa-heart fa-2x">
      </i>
      <div class="cartLength d-flex justify-content-center align-items-center">
        {{likeProductsLength}}
      </div>
    </a>
  </div>
  <!--cartmodal-->
  <div class="modal fade modalExpand" id="likeModal">
    <div class="modal-dialog modal-dialogExpand">
      <div class="modal-content ">
        <div class="container mb-3" v-if="likeProductsLength">
          <div class="p-2"><h5>已加入最愛 :</h5></div>
          <div class="modalTableWrap d-flex">
            <div class="boxone"></div>
            <div class="boxtwo"></div>
            <table >
              <tbody>
                <tr class="p-1" v-for=" (item, key) in likeProducts " :key="key" >
                  <td width="200" class="align-middle text-left bgCover p-1"
                     :style="{backgroundImage :`url(${item.imageUrl})`,}">
                    <div class="name p-1"
                      @click.prevent=
                      "routerPush(`/customerBase/customerProduct/${item.id}`)">
                      {{item.title}}
                    </div>
                  </td>
                  <td class="align-middle text-center">
                    <i class="fas fa-heart fa-2x like p-1" aria-hidden="true"
                      :class="{'likeActive':true}"
                      @click.stop="removelikeItem(key)">
                    </i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="cartLength0  d-flex justify-content-center" v-else>
          <h5 class="py-2 px-3 ">最愛目前沒有商品喔!</h5>
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
      likeProducts: [],
      likeProductsLength: 0,
    };
  },
  methods: {
    getLikeProducts() {
      this.likeProducts = JSON.parse(localStorage.getItem('likeProducts')) || [];
      this.likeProductsLength = this.likeProducts.length;
    },
    removelikeItem(key) {
      this.likeProducts.splice(key, 1);
      localStorage.setItem('likeProducts', JSON.stringify(this.likeProducts));
      this.getLikeProducts();
      this.$bus.$emit('getFilterProducts');
      this.$bus.$emit('getHistoryProducts');
      this.$bus.$emit('getPopularProducts');
      this.$bus.$emit('getProduct');
    },

    showLikeModal() {
      $('#likeModal').modal('show');
    },
    routerPush(page) {
      $('#likeModal').modal('hide');
      if (page !== this.$route.path) {
        this.$router.push(page);
      }
    },
  },
  created() {
    this.getLikeProducts();
    this.$bus.$on('getLikeProducts', () => {
      this.getLikeProducts();
    });
  },
};
</script>

<style >
.likeModalIcon{
  width:60px;
  height:60px;
  position:fixed;
  right:20px;
  bottom:85px;
  z-index:51;
}
.likeModalIcon a{
  width:100%;
  height:100%;
  position:relative;

  border-radius:10%;
  border-left:2px solid var(--maincolor);
  background: rgba(255,255,255,0.8);
}
.likeLength{
  width:30px;
  height:30px;
  position:absolute;
  right:-10px;
  top:-10px;

  border-radius:50%;
  color:white;
  background:red;
}
.likeModalIcon i{
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
  height:100px;
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
