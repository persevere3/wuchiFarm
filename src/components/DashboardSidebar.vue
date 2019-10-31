<template>
<div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center
                   px-3 mt-4 mb-1 text-muted">
            <span>管理員</span>
            <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
            </a>
        </h6>
        <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <router-link to="/admin/products" class="nav-link">
              <i class="fas fa-tshirt"></i>
              產品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/orders" class="nav-link">
              <i class="fas fa-list-alt"></i>
              訂單列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/coupons" class="nav-link">
              <i class="fas fa-ticket-alt"></i>
              優惠券
              </router-link>
            </li>
        </ul>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center
                   px-3 mt-4 mb-1 text-muted">
            <span>使用者</span>
            <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
            </a>
        </h6>
        <ul class="nav flex-column mb-2">
            <li class="nav-item">
            <router-link to="/" class="nav-link">
            <i class="fa fa-home " ></i>
            首頁
            </router-link>
            </li>
        </ul>
        </div>
    </nav>
</div>
</template>

<style lang="scss" scoped>
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }

  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
      position: -webkit-sticky;
      position: sticky;
    }
  }

  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }

  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #999;
  }

  .sidebar .nav-link.active {
    color: #007bff;
  }

  .sidebar .nav-link:hover .feather,
  .sidebar .nav-link.active .feather {
    color: inherit;
  }

  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }
</style>
