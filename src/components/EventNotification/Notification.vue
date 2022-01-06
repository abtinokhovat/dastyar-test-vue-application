<template>
  <div v-if="activeNotification().happened" :class="activeNotification().type" class="notification">
    <div style="font-weight: bold">{{ activeNotification().type }}</div>
    <div>{{ activeNotification().message }}</div>
  </div>
</template>

<script>


export default {
  name: "ErrorSpan",
  computed: {
    activeNotification() {
      return this.$store.state.error
    }
  },
  mounted() {
    /*console.log(this.computed.activeNotification())*/
  }
}
</script>

<style scoped>
div {
  position: relative;
  padding: 5px;
}

.notification {
  position: fixed;
  bottom: 80px;
  left: 50px;
  padding: 5px;
  border-radius: 5px;
  min-width: 300px;
  max-width: 500px;
  text-align: left;
  border-left: 7px solid;
}

.Error {
  border-color: #FF8A64;
  background-color: #FFE7E0;
}

.Warning {
  border-color: #FFBA4E;
  background-color: #FFF1DC;
}

.Success {
  border-color: #83C886;
  background-color: #E7F5E7;
}

.Information {
  border-color: #61ADEE;
  background-color: #E0EFFC;
}

</style>