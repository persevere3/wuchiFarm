import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/customerBase',
  },
  {
    path: '/customerBase',
    name: 'CustomerBase',
    component: () => import('../views/CustomerBase.vue'),
    children: [
      {
        path: '',
        name: 'CustomerHome',
        component: () => import('../views/CustomerHome.vue'),
      },
      {
        path: 'customerProductList',
        name: 'CustomerProductList',
        component: () => import('../views/CustomerProductList.vue'),
        props: { showNumber: 10 },
      },
      {
        path: 'customerProduct/:id',
        name: 'CustomerProduct',
        component: () => import('../views/CustomerProduct.vue'),
      },
      {
        path: 'customerShoppingCart',
        name: 'CustomerShoppingCart',
        component: () => import('../views/CustomerShoppingCart.vue'),
      },
      {
        path: 'customerData',
        name: 'CustomerData',
        component: () => import('../views/CustomerData.vue'),
      },
      {
        path: 'customerPay/:orderId',
        name: 'CustomerPay',
        component: () => import('../views/CustomerPay.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/AdminDashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/AdminProducts.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/AdminOrders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/AdminCoupons.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
