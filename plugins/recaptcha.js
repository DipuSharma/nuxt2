import { load } from "recaptcha-v3";

export default (context, inject) => {
  const recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY;

  if (!recaptchaSiteKey) {
    console.error("Missing reCAPTCHA site key in .env file");
    return;
  }
  load(recaptchaSiteKey)
    .then((recaptchaInstance) => {
      inject("recaptcha", recaptchaInstance);
    })
    .catch((err) => {
      console.error("Failed to load reCAPTCHA:", err);
    });
};
