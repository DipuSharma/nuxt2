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
    async onSubmit() {
      try {
        console.log("Executing reCAPTCHA...");
      } catch (error) {
        console.error("Error during reCAPTCHA execution:", error);
      }
    },
    async submitToBackend(token) {
      try {
        const response = await fetch("/api/verify-recaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) throw new Error("Backend verification failed");

        const data = await response.json();
        console.log("Backend response:", data);
      } catch (error) {
        console.error("Error sending token to backend:", error);
      }
    },
  },
};
</script>

<style scoped>
div.grecaptcha-badge {
  display: none !important;
  width: 0 !important;
}
</style>
