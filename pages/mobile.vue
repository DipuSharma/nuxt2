<template>
  <div>
    <h1 :class="{ 'tex-color': isMobile }">Mobile View</h1>
  </div>
</template>

<script>
export default {
  layout: "mobile",

  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    },
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
  },
};
</script>

<style scoped>
.tex-color {
  color: red;
  font-size: 72px;
}
</style>
