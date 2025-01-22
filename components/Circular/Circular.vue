<template>
  <div class="circular-progress" :style="{ backgroundColor: bgColor }">
    <svg
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      class="circular-chart"
    >
      <path
        class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        class="circle"
        :stroke-dasharray="`${progress}, 100`"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
    <div class="progress-text">
      <slot>{{ displayValue }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0 && value <= 100,
    },
    bgColor: {
      type: String,
      default: "#e0f7fa",
    },
    displayValue: {
      type: String,
      default: "<50",
    },
  },
};
</script>

<style scoped>
.circular-progress {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circular-chart {
  transform: rotate(0deg);
  width: 100%;
  height: 100%;
}
.circle-bg {
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 4;
}
.circle {
  fill: none;
  stroke: #28e003;
  stroke-width: 4;
  /* stroke-linecap: round; */
  transition: stroke-dasharray 0.3s ease;
}
.progress-text {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  color: #007c91;
}
</style>
