<template>
<div>

  <nav class="mb-3 d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled':currentPage===1}">
        <a class="page-link" href="#" aria-label="Previous"
          @click.prevent="pageChange(currentPage-1)">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>

      <li class="page-item" v-for="page in totalPage" :key="page"
          :class="{'active':currentPage===page}">
          <a class="page-link" href="#" @click.prevent="pageChange(page)">{{page}}</a>
      </li>

      <li class="page-item" :class="{'disabled':currentPage===totalPage}">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="pageChange(currentPage+1)">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>

</div>
</template>

<script>
export default {
  props: ['currentPage', 'totalPage'],
  methods: {
    pageChange(currentPage) {
      this.$bus.$emit('currentPagePush', currentPage);
    },
  },
};
</script>
