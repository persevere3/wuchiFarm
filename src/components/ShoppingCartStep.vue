<template>
<div>

    <div class="step my-5 d-flex justify-content-center">
      <ul class="d-flex">
        <li class="px-2 px-sm-3 d-flex flex-column justify-content-center align-items-center"
           :class="{'now':stepActive==='cart'}">
          <i class="fas fa-list-ol fa-3x d-flex
                    justify-content-center align-items-center">
          </i>
          <h2 class="mt-1">01</h2>
          <h5>確認訂單</h5>
        </li>
        <li class="px-2 px-sm-3 d-flex flex-column justify-content-center align-items-center"
           :class="{'now':stepActive==='data'}">
          <i class="fas fas fa-digital-tachograph fa-3x
                    d-flex justify-content-center align-items-center">
          </i>
          <h2 class="mt-1">02</h2>
          <h5>填寫資料</h5>
        </li>
        <li class="px-2 px-sm-3 d-flex flex-column justify-content-center align-items-center"
           :class="{'now':stepActive==='pay'}">
          <i class="far fa-money-bill-alt fa-3x d-flex
                    justify-content-center align-items-center">
          </i>
          <h2 class="mt-1">03</h2>
          <h5>完成付款</h5>
        </li>
      </ul>
    </div>

</div>
</template>

<script>
export default {
  props: ['stepActive'],
};
</script>

<style scoped>
.step{
  position:relative;
}
.step:before{
  content:"";
  position:absolute;
  left:0;
  right:0;
  height:2px;
  top:40px;
  transform:translateY(-50%);
  background: linear-gradient(left, rgba(213,213,213,0) 0%,
  rgb(var(--secondaryrgb)) 15%,
  rgb(var(--secondaryrgb)) 85%,
  rgba(213,213,213,0) 100%);
  background: -ms-linear-gradient(left, rgba(213,213,213,0) 0%,
  rgb(var(--secondaryrgb)) 15%,
  rgb(var(--secondaryrgb)) 85%,
  rgba(213,213,213,0) 100%);
  background: -moz-linear-gradient(left, rgba(213,213,213,0) 0%,
  rgb(var(--secondaryrgb)) 15%,
  rgb(var(--secondaryrgb)) 85%,
  rgba(213,213,213,0) 100%);
  background: -webkit-linear-gradient(left, rgba(213,213,213,0) 0%,
  rgb(var(--secondaryrgb)) 15%,
  rgb(var(--secondaryrgb)) 85%,
  rgba(213,213,213,0) 100%);
  z-index:4;
}
.step li{
  z-index:5;
}
.step i{
  width:80px;
  height:80px;

  color:var(--maincolor);
  background-color:white;
  border-radius:50%;
}
.step .now{
  color:var(--maincolor);
}
.step .now i{
  box-shadow:1px 1px 5px var(--maincolor);
}
.step h2{
  font-size:1.5rem;
}
.step h5{
  font-size:1rem;
}
</style>
