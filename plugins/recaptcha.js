import Vue from "vue";
import { VueReCaptcha } from "vue-recaptcha-v3";

export default ({ env }, inject) => {
  const siteKey =
    env.RECAPTCHA_SITE_KEY || "6LfTpaQqAAAAAHo7ax_C_K4OkIopH75t2IsQNtgY";

  if (!siteKey) {
    console.error("Missing reCAPTCHA site key.");
    return;
  }

  // Initialize VueReCaptcha plugin only on the client side
  if (process.client) {
    Vue.use(VueReCaptcha, {
      siteKey,
      loaderOptions: {
        useRecaptchaNet: true, // Optional, depending on your region
      },
    });

    // Ensure that $recaptcha is available before injecting it
    Vue.prototype.$recaptcha.onLoad(() => {
      // Inject the $recaptcha globally into Vue components
      inject("recaptcha", Vue.prototype.$recaptcha);
    });
  }
};
