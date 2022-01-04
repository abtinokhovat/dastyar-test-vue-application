<template>
  <div class="labels">
    <!--    TODO:Make Date Status Component-->
    <div class="dueDate">
      <svg class="calendar_icon" height="12" viewBox="0 0 12 12" width="12">
        <path
            d="M9.5 1A1.5 1.5 0 0 1 11 2.5v7A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM8.5 4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
            fill="currentColor"
            fill-rule="nonzero"></path>
      </svg>
      Tomorrow

    </div>
    <Label :label="this.label" class="label"></Label>
  </div>

</template>

<script>
import Label from "@/components/Tasks/Attributes/Label";

export default {
  name: "Attributes",
  components: {Label},
  props: ['label', 'date'],
}
</script>

<style scoped>

.labels {
  display: flex;
}

.dueDate, .label {
  text-align: left;
  font-size: 11px;
  margin-right: 10px;
}

svg {
  position: relative;
  top: 2px;
}


</style>