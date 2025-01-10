<template>
  <form @submit.prevent="onSubmit">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  methods: {
    async onSubmit() {
      try {
        const token = await this.executeRecaptcha("submit");
        console.log("reCAPTCHA token:", token);

        // Send the token to your backend
        // await this.submitToBackend(token);
      } catch (error) {
        console.error("Error during reCAPTCHA execution:", error);
      }
    },
    async executeRecaptcha(action) {
      return new Promise((resolve, reject) => {
        if (typeof grecaptcha !== "undefined") {
          grecaptcha.ready(() => {
            grecaptcha
              .execute("6LfTpaQqAAAAAHo7ax_C_K4OkIopH75t2IsQNtgY", { action })
              .then(resolve)
              .catch(reject);
          });
        } else {
          reject("reCAPTCHA is not loaded");
        }
      });
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
