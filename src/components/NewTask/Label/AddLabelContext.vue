<template>
  <div class="contextmenu">
    <ul>
      <li id="input">
        <input v-model="label" placeholder="Type a label" type="text" @keyup="filterLabel">
      </li>
      <li v-for="label in labels" :key="label.name">
        <svg-label-filled :color="label.color" class="svg-label"></svg-label-filled>
        <div class="label-name" style="width: 172px">{{ label.name }}</div>
        <add-label-check-box :id="label.id" @click="toggleActive(label)"></add-label-check-box>
      </li>
    </ul>
  </div>

</template>

<script>
import SvgLabelFilled from "@/components/Svg/SvgLabelFilled";
import AddLabelCheckBox from "@/components/NewTask/Label/AddLabelCheckBox";

export default {
  name: "AddLabelContext",
  components: {AddLabelCheckBox, SvgLabelFilled},
  data() {
    return {
      label: ''
    }
  },
  methods: {
    toggleActive(label) {
      (Object.keys(
              //if the there was no selected checkbox select the clicked checkbox
              this.$store.state.selectedLabel).length === 0
          //if a checkbox was selected and the checkbox is going to change to another checkbox
          || this.$store.state.selectedLabel.name !== label.name)
          ? this.selectLabel(label)
          //when you want to deselect a checkbox
          : this.selectLabel({})
    },
    selectLabel(label) {
      this.$store.commit('selectLabel', label)
    }
  },
  mounted() {
    //get labels on loading context box
    this.$store.dispatch('getLabels')
  },
  computed: {
    labels: {
      get() {
        return this.$store.getters.getLabels
      }
    }
  }
}
</script>

<style scoped>

.contextmenu {
  padding: 0;
  position: absolute;
  margin-right: 10px;
  background-color: white;
  min-width: 200px;
  width: auto;
  height: auto;
  border: 1px solid;
  border-color: var(--borderColor);
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
}

ul {
  padding: 0;
  list-style: none;
}

li {
  padding: 5px;
  display: flex;
  border-bottom: 1px solid;
  border-color: var(--borderColor);
}

li:hover {
  background-color: var(--buttonHover);
  cursor: pointer;
}

.svg-label {
  position: relative;
  top: 3px;
}

.label-name {
  padding: 5px;
}

ul li div {
  flex-grow: 1;
  padding: 2px 0 0 5px;
  font-size: 13px;
}

input {
  padding: 5px;
  border: 0;
}

.active {
  display: none;
}

.de-active {
  /*display: none;*/
}


#input:hover {
  background-color: white;
}


</style>