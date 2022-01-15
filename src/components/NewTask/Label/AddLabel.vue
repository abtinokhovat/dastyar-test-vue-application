<template>
  <span class="svg-button" @click="togglePopper">
    <svg data-svgs-path="sm1/label_outline.svg"
         height="24"
         viewBox="0 0 24 24"
         width="24"
         xmlns="http://www.w3.org/2000/svg">
      <path
          d="M3.914 11.086l6.5-6.5A2 2 0 0 1 11.828 4H18a2 2 0 0 1 2 2v6.172a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0l-6.172-6.172a2 2 0 0 1 0-2.828zm.707.707a1 1 0 0 0 0 1.414l6.172 6.172a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-6.5 6.5zM14.75 10.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
          fill="currentColor">
      </path>
    </svg>
  </span>
  <add-label-context v-if="popper"></add-label-context>
</template>

<script>
import AddLabelContext from "@/components/NewTask/Label/AddLabelContext";

export default {
  name: "AddLabel",
  components: {AddLabelContext},
  methods: {
    //toggle popper visibility
    togglePopper() {
      this.$store.commit('togglePopper', 'label')
    }
  },
  computed: {
    popper: {
      get() {
        return this.$store.getters.getPoppers('label')
      }
    }
  }
}
</script>

<style scoped>

span {
  margin-left: 10px;
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: white;
}

span:hover {
  border-radius: 0.25rem;
  background-color: var(--buttonHover);
}
</style>