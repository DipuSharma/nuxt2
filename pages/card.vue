<template>
  <div class="w-full h-screen bg-cover bg-center relative">
    <!-- Card Container -->
    <div class="backgourd-image">Data</div>
    <div
      class="absolute flex flex-wrap gap-5 items-center justify-center transform -translate-y-1/2 w-full"
    >
      <!-- Card 1 -->
      <div
        class="bg-white p-6 shadow-lg rounded-lg text-center transition-all duration-300 hover:shadow-xl w-full sm:w-2/3 md:w-1/3 lg:w-1/4 card"
      >
        <h3 class="text-lg font-semibold">Card 1</h3>
        <p class="text-gray-600">Description here</p>
      </div>
      <!-- Card 2 -->
      <div
        class="bg-white p-6 shadow-lg rounded-lg text-center transition-all duration-300 hover:shadow-xl w-full sm:w-2/3 md:w-1/3 lg:w-1/4 card"
      >
        <h3 class="text-lg font-semibold">Card 2</h3>
        <p class="text-gray-600">Description here</p>
      </div>
      <!-- Card 3 -->
      <div
        class="bg-white p-6 shadow-lg rounded-lg h-8/12 text-center transition-all duration-300 hover:shadow-xl w-full sm:w-2/3 md:w-1/3 lg:w-1/4 card"
      >
        <h3 class="text-lg font-semibold">Card 3</h3>
        <p class="text-gray-600">Description here</p>
      </div>
    </div>
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
      window.location.href = "https://example.com"; // Replace with your URL
    },
    preventBackNavigation() {
      if (process.client) {
        history.pushState(null, null, window.location.href);
        window.addEventListener("popstate", () => {
          this.redirectToSpecificUrl();
        });
      }
    },
  },
  mounted() {
    this.preventBackNavigation();
  },
};
</script>

<style scoped>
div.grecaptcha-badge {
  display: none !important;
  width: 0 !important;
}

.backgourd-image {
  background-image: url("https://picsum.photos/200/300");
  height: 700px;
  width: 100%;
  background-size: cover;
  background-position: center;
}

.card {
  height: 400px;
}
</style>
