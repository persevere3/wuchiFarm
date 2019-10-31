<template>
<div>
    <DashboardNavbar></DashboardNavbar>
    <BaseAlert></BaseAlert>
    <div class="container-fluid">
      <div class="row">
        <DashboardSidebar></DashboardSidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
</div>
</template>

<script>
import DashboardSidebar from '../components/DashboardSidebar.vue';
import DashboardNavbar from '../components/DashboardNavbar.vue';
import BaseAlert from '../components/BaseAlert.vue';

export default {
  components: {
    DashboardNavbar,
    DashboardSidebar,
    BaseAlert,
  },
};
</script>

<style lang="scss" scoped>
body {
  font-size: .875rem;
}
.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}
[role="main"] {
  padding-top: 133px;
}
@media (min-width: 768px) {
  [role="main"] {
    padding-top: 48px;
  }
}
</style>
