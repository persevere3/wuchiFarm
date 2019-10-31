<template>
  <div class="message-alert">
    <div class="alert alertExpand"
      v-for="(item, i) in messages" :key="i">
      {{ item.message }}
<!--      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp,
      });
      this.removeMessageWithTiming(timestamp);
    },
    /* removeMessage(num) {
        this.messages.splice(num, 1);
       }, */
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
  },
  created() {
    const vm = this;
    // 自定義名稱 'messsage:push'
    // 參數message: 訊息
    // 參數status: 樣式
    vm.$bus.$on('messagePush', (message, status) => {
      vm.updateMessage(message, status);
    });
    // vm.$bus.$emit('message:push');
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 50;
}
.alertExpand{
  border:0px;
  border-radius:0;
  background-color:rgba(255,255,255,0.8);
  border-left:5px solid var(--maincolor);
  box-shadow:1px 1px 3px var(--maincolor);
  padding:12px 20px 12px 20px;
}
</style>
