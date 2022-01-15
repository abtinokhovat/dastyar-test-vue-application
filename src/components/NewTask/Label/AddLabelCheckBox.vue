<template>
  <div class="checkbox">
    <svg v-if="toggleCheckBox" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M18 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm0 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
          fill="currentColor"
          fill-rule="nonzero"></path>
    </svg>
    <svg v-else height="24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M18 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm-2.457 4.293l-5.293 5.293-1.793-1.793a1 1 0 1 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l6-6a1 1 0 1 0-1.414-1.414z"
          fill="#808080"
          fill-rule="nonzero"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "AddLabelCheckBox",
  props: ['id'],
  computed: {
    toggleCheckBox() {
      return this.$store.state.selectedLabel.id !== this.id
    }
  }
}
</script>

<style scoped>

</style>