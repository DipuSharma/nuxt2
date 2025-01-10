<template>
  <div>
    <h1>Verify reCAPTCHA</h1>
    <button @click="executeRecaptcha">Verify</button>
  </div>
</template>

<script>
import { load } from 'recaptcha-v3';

export default {
  async mounted() {
    const siteKey = process.env.RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      console.error('Missing reCAPTCHA site key in .env file');
      return;
    }

    // Load reCAPTCHA for this page only
    this.recaptcha = await load(siteKey);
  },
  data() {
    return {
      recaptcha: null, // Store reCAPTCHA instance locally
    };
  },
  methods: {
    async executeRecaptcha() {
      try {
        if (!this.recaptcha) {
          console.error('reCAPTCHA not initialized');
          return;
        }

        const token = await this.recaptcha.execute('submit_action');
        console.log('reCAPTCHA token:', token);

        // Send token to your server for verification
        await this.$axios.post('/api/verify-recaptcha', { token });
      } catch (error) {
        console.error('reCAPTCHA error:', error);
      }
    },
  },
};
</script>
