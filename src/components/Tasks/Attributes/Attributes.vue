<template>
  <div class="labels">
    <date-string :date="this.date" class="dueDate"></date-string>
    <Label :label="this.label" class="label"></Label>
  </div>

</template>

<script>
import Label from "@/components/Tasks/Attributes/Label";
import DateString from "@/components/Tasks/Attributes/DateString";

export default {
  name: "Attributes",
  components: {DateString, Label},
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


</style>