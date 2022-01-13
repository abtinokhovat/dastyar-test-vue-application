<template>
  <div v-show="dateData.isValid" :style="{color:dateData.color}" class="dueDate">
    <svg class="calendar_icon" height="12" viewBox="0 0 12 12" width="12">
      <path
          d="M9.5 1A1.5 1.5 0 0 1 11 2.5v7A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM8.5 4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
          fill="currentColor"></path>
    </svg>
    {{ dateData.text }}

  </div>
</template>

<script>
export default {
  name: "DateString",
  props: ["date"],
  data() {
    return {
      dateData: {},
    }
  },
  methods: {
    setDateData() {
      this.dateData = this.getDateData();
    },
    getDateData() {
      const dueDate = this.date;
      const dueDateFormatted = new Date(this.date);
      //don't have due date
      if (!dueDate)
        return {isValid: 0, text: '', color: ''}
      //due date time exceeded
      else if (this.isGone(dueDateFormatted))
        return {isValid: 1, text: this.makeDateString(dueDateFormatted), color: '#D1443B'}
      //due date is for today
      else if (this.isToday(dueDate))
        return {isValid: 1, text: 'Today', color: '#048527'}
      //due date is for tomorrow
      else if (this.isTomorrow(dueDate))
        return {isValid: 1, text: 'Tomorrow', color: '#AD6200'}
      // due date is between now and seven earlier days
      else if (this.isSevenDaysLater(dueDateFormatted))
        return {isValid: 1, text: this.makeLongDayDataString(dueDateFormatted), color: '#692FC2'}
      return {isValid: 1, text: this.makeDateString(dueDateFormatted), color: '#808080'}

    },
    //if the task time is exceeded the status would br is gone
    isGone(date) {
      const todayDate = new Date();
      return todayDate > date && todayDate.toLocaleDateString() !== date.toLocaleDateString();
    },
    //if the task due date is today
    isToday(date) {
      const todayDate = new Date().toLocaleDateString();
      return date === todayDate;
    },
    //if the task due date is tomorrow
    isTomorrow(date) {
      const tomorrowDate = new Date(Date.now() + 24 * 60 * 60 * 1000)
          .toLocaleDateString()
      return date === tomorrowDate
    },
    //if the task date is between tomorrow and seven days later
    isSevenDaysLater(date) {
      const sevenDaysLaterDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      return date <= sevenDaysLaterDate
    },
    makeDateString(date) {
      const currentYear = new Date().getFullYear();
      return (date.getFullYear() === currentYear) ?
          //return name of month and day if year was equal to current year
          date.toLocaleDateString('en-us', {day: "numeric", month: "short"}) :
          //return name of month and day and year if year was greater or lower to current year
          date.toLocaleDateString('en-us', {day: "numeric", month: "short", year: "numeric"})

    },
    makeLongDayDataString(date) {
      //get full day name
      return date.toLocaleDateString('en-us', {weekday: 'long'})
    }

  }
  , mounted() {
    this.setDateData()
  }
}
</script>

<style scoped>
svg {
  position: relative;
  top: 2px;
}

</style>