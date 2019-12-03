<template>
  <div class="message-alert">
    <div class="alert alertExpand"
      v-for="(item, i) in getMessages" :key="i">
      {{ item.message }}
<!--      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getMessages() {
      return this.$store.state.messages;
    },
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  right: 20px;
  top: 50px;
  z-index: 50;
}
.alertExpand{
  border:0px;
  border-radius:0;
  background-color:rgba(255,255,255,1);
  border-left:5px solid var(--maincolor);
  box-shadow:1px 1px 3px var(--maincolor);
  padding:12px 20px 12px 20px;
}
</style>
