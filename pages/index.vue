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
      window.location.href = "https://example.com";
    },
    preventBackNavigation() {
      history.pushState(null, null, window.location.href);
    },
    handlePopState() {
      this.redirectToSpecificUrl();
    },
  },
  mounted() {
    this.preventBackNavigation();
    window.addEventListener("popstate", this.handlePopState);
  },
  beforeDestroy() {
    window.removeEventListener("popstate", this.handlePopState);
  },
};
</script>

<style scoped>
div.grecaptcha-badge {
  display: none !important;
  width: 0 !important;
}
</style>
