<template>
  <div>
    <Circular :progress="progress" displayValue="50" />
    <input
      type="range"
      min="0"
      max="100"
      v-model="progress"
      style="margin-top: 20px"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 70,
    };
  },
  methods: {
    redirectToSpecificUrl() {
      // Redirect to the desired URL
      window.location.href = "https://example.com"; // Replace with your URL
    },
    preventBackNavigation() {
      if (process.client) {
        // Push a dummy state into the history
        history.pushState(null, null, window.location.href);

        // Prevent navigating backward
        window.addEventListener("popstate", () => {
          this.redirectToSpecificUrl();
        });
      }
    },
  },
  mounted() {
    // Prevent back navigation only on the client-side
    this.preventBackNavigation();
  },
};
</script>

<style scoped>
div.grecaptcha-badge {
  display: none !important;
  width: 0 !important;
}
</style>
