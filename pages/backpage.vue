<template>
  <div>
    <h1>Welcome to the No Back Page</h1>
    <p>The browser's back button is disabled on this page.</p>
  </div>
</template>

<script>
export default {
  name: "NoBackPage",
  mounted() {
    // Prevent navigating back when the component is mounted
    this.disableBackButton();
  },
  methods: {
    disableBackButton() {
      // Function to prevent back navigation
      function noBack() {
        window.history.forward();
      }

      noBack(); // Initial call to disable back navigation

      // Add event listeners for relevant events
      window.onload = noBack;
      window.onpageshow = function (evt) {
        if (evt.persisted) noBack(); // Handle cached pages
      };
    },
  },
};
</script>

<style scoped>
/* Optional: Add styling here */
</style>
