<template>
  <form @submit.prevent="onSubmit">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  mounted() {
    // Ensure that reCAPTCHA is loaded
    if (this.$recaptcha) {
      console.log("reCAPTCHA is ready");
    } else {
      console.error("reCAPTCHA is not loaded properly");
    }
  },
  methods: {
    async onSubmit() {
      try {
        if (!this.$recaptcha) {
          console.error("$recaptcha is not available");
          return;
        }

        // Execute reCAPTCHA with an action name
        const token = await this.$recaptcha.execute("homepage"); // "homepage" is the action name

        console.log("reCAPTCHA token:", token);

        // Send token to your backend for validation
        await this.submitToBackend(token);
      } catch (error) {
        console.error("reCAPTCHA error:", error);
      }
    },
    async submitToBackend(token) {
      console.log("Token to backend:", token);
      // Replace this with your actual API call
      try {
        // Example API call to submit the token
        const response = await this.$axios.post("/api/verify-recaptcha", {
          token,
        });
        console.log("Backend response:", response);
      } catch (error) {
        console.error("Error sending token to backend:", error);
      }
    },
  },
};
</script>
