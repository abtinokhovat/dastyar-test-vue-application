<template>
  <div :style="{color: getRGBColor()}" class="label">
    <svg height="12" viewBox="0 0 12 12" width="12"
         xmlns="http://www.w3.org/2000/svg">
      <path
          d="M9.357 1C10.264 1 11 1.736 11 2.643V6.07c0 .436-.173.854-.481 1.162L7.232 10.52a1.643 1.643 0 01-2.323 0L1.48 7.09c-.64-.64-.64-1.68.001-2.322L4.768 1.48C5.076 1.173 5.494 1 5.93 1h3.427zm-.07.91H5.93a.805.805 0 00-.569.235L2.145 5.362a.805.805 0 000 1.138L5.5 9.855a.805.805 0 001.138 0l3.217-3.217a.805.805 0 00.236-.569V2.713a.804.804 0 00-.804-.804zM7.364 3.726a.91.91 0 110 1.818.91.91 0 010-1.818z"
          fill="currentColor"></path>
    </svg>
    {{ this.label.name }}
  </div>
</template>

<script>
export default {
  name: "Label",
  props: ['label'],
  data() {
    return {
      colors: [
        {name: 'berryRed', code: 'rgb(184, 37, 95)'},
        {name: 'red', code: 'rgb(219, 64, 53)'},
        {name: 'orange', code: 'rgb(255, 153, 51)'},
        {name: 'yellow', code: 'rgb(250, 208, 0)'},
        {name: 'oliveGreen', code: 'rgb(175, 184, 59)'},
        {name: 'limeGreen', code: 'rgb(126, 204, 73)'},
        {name: 'green', code: 'rgb(41, 148, 56)'},
        {name: 'mintGreen', code: 'rgb(106, 204, 188)'},
        {name: 'teal', code: 'rgb(21, 143, 173)'},
        {name: 'skyBlue', code: 'rgb(20, 170, 245)'},
        {name: 'lightBlue', code: 'rgb(150, 195, 235)'},
        {name: 'blue', code: 'rgb(64, 115, 255)'},
        {name: 'grape', code: 'rgb(136, 77, 255)'},
        {name: 'violet', code: 'rgb(175, 56, 235)'},
        {name: 'lavender', code: 'rgb(235, 150, 235)'},
        {name: 'magenta', code: 'rgb(224, 81, 148)'},
        {name: 'salmon', code: 'rgb(255, 141, 133)'},
        {name: 'charcoal', code: 'rgb(128, 128, 128)'},
        {name: 'grey', code: 'rgb(184, 184, 184)'},
        {name: 'taupe', code: 'rgb(204, 172, 147)'},
      ]
    }
  },
  methods: {
    getRGBColor() {
      //get color of the label from label object
      const wantedColor = this.label.color;
      return this.colors.find((color) => color.name === wantedColor).code
    }
  }
}
</script>

<style scoped>

.label {
  color: rgb(20, 170, 245);
}

svg {
  position: relative;
  top: 2px;
}

</style>