<template>
  <button id="schedule">
    <svg data-svgs-path="sm1/calendar_small.svg" height="16" viewBox="0 0 16 16" width="16"
         xmlns="http://www.w3.org/2000/svg">
      <path
          d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"
          fill="currentColor">
      </path>
    </svg>
    <label
        style="position:relative; bottom: 3px;padding-left: 3px;color: #5F5F5F;cursor: pointer"
    >Schedule
    </label>
  </button>
</template>

<script>
export default {
  name: "Schedule"
}
</script>

<style scoped>

button {
  cursor: pointer;
  background-color: white;
  border: 1px solid;
  border-color: var(--borderColor);
  border-radius: 0.25rem;
  padding: 5px;
}

button:hover {
  background-color: var(--buttonHover);
}

</style>