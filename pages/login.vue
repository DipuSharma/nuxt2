<template>
  <div>
    <h2 class="text-3xl">Verify reCAPTCHA</h2>
    <button @click="executeRecaptcha">Verify</button>
  </div>
</template>

<script>
import { load } from "recaptcha-v3";

export default {
  async mounted() {
    const siteKey = process.env.RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      console.error("Missing reCAPTCHA site key in .env file");
      return;
    }

    this.recaptcha = await load(siteKey);
  },
  data() {
    return {
      recaptcha: null,
    };
  },
  methods: {
    async executeRecaptcha() {
      try {
        if (!this.recaptcha) {
          console.error("reCAPTCHA not initialized");
          return;
        }
        const token = await this.recaptcha.execute("submit_action");
        console.log("reCAPTCHA token:", token);
        await this.$axios.post("/api/verify-recaptcha", { token });
      } catch (error) {
        console.error("reCAPTCHA error:", error);
      }
    },
  },
};
</script>
