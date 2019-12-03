import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // loading
    isLoading: false,
    loadingItem: '',
    // like
    likeProducts: [],
    // carts
    carts: [],
    cartsLength: 0,
    // messages
    messages: [],
  },
  // 非同步 : AJAX, setTimeout
  actions: {
    // loading ------------------------------------------------------------
    updateLoading(context, payload) {
      context.commit('LOADING', payload);
    },
    // like ------------------------------------------------------------
    getLikeProducts(context) {
      const array = JSON.parse(localStorage.getItem('likeProducts')) || [];
      context.commit('LIKEPRODUCTS', array);
    },
    updateLikeProducts(context, item) {
      let i;
      const array = [];
      for (i = 0; i < context.state.likeProducts.length; i += 1) {
        array[i] = context.state.likeProducts[i];
      }
      for (i = 0; i < array.length; i += 1) {
        if (array[i].id === item.id) {
          break;
        }
      }
      if (i === array.length) {
        array.push(item);
      } else {
        array.splice(i, 1);
      }
      context.commit('LIKEPRODUCTS', array);
      localStorage.setItem('likeProducts', JSON.stringify(array));
    },
    // carts ------------------------------------------------------------
    getCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      axios.get(api).then((response) => {
        context.commit('CARTS', response.data.data);
        context.commit('CARTSLENGTH', response.data.data.carts.length);
      });
    },
    addToCart(context, { item, qty }) {
      let i = 0;
      let q = 0;
      let mergeQty = 0;
      // for出同id取出數量後刪除該筆
      for (i = 0; i < context.state.carts.carts.length; i += 1) {
        if (item.id === context.state.carts.carts[i].product_id) {
          q = context.state.carts.carts[i].qty;
          context.dispatch('removeCartItem', context.state.carts.carts[i]);
        }
      }
      mergeQty = qty + q;
      // 合併後新增至購物車
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADINGITEM', item.id);
      const cart = {
        product_id: item.id,
        qty: mergeQty,
      };
      axios.post(api, { data: cart }).then(() => {
        context.commit('LOADINGITEM', '');
        context.dispatch('getCart');
        context.dispatch('updateMessage', { message: '已加入購物車', item });
      });
    },
    removeCartItem(context, payload) {
      context.commit('LOADINGITEM', payload.id);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${payload.id}`;
      axios.delete(url).then(() => {
        context.dispatch('getCart');
        context.commit('LOADINGITEM', '');
      });
    },
    // messages ------------------------------------------------------------
    updateMessage(context, { message }) {
      const timestamp = Math.floor(new Date() / 1000);
      const newMessage = {
        message,
        timestamp,
      };
      context.commit('PUSHMESSAGE', newMessage);
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.state.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            context.commit('SPLICEMESSAGE', i);
          }
        });
      }, 5000);
    },
  },
  // 同步
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    LOADINGITEM(state, payload) {
      state.loadingItem = payload;
    },
    LIKEPRODUCTS(state, payload) {
      state.likeProducts = [];
      state.likeProducts = payload;
    },
    CARTS(state, payload) {
      state.carts = payload;
    },
    CARTSLENGTH(state, payload) {
      state.cartsLength = payload;
    },
    PUSHMESSAGE(state, payload) {
      state.messages.push(payload);
    },
    SPLICEMESSAGE(state, payload) {
      state.messages.splice(payload, 1);
    },
  },
});
