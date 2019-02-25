<template>
  <div>
    <p>
      <button @click="randomize">Randomize</button>
    </p>

    <svg viewBox="0 0 240 80">
      <vuenime
        :value="colors"
        :duration="duration"
        :delay="delay"
        :endDelay="endDelay"
        :easing="easing"
        :round="round"
        :direction="direction"
        :loop="loop"
      >
        <g
          slot-scope="colors"
          transform="translate(30, 30)"
          stroke="none"
        >
          <circle
            v-for="(color, i) in colors"
            :key="'circle-' + i"
            :fill="color"
            :cx="i * 60"
            cy="0"
            r="20"
          />

          <text
            v-for="(color, i) in colors"
            :key="'label-' + i"
            :x="i * 60"
            y="30"
            class="code"
            text-anchor="middle"
          >{{ color }}</text>
        </g>
      </vuenime>
    </svg>
  </div>
</template>

<script>
import { WithAnimationProps } from './utils.js';

export default {
  mixins: [WithAnimationProps],
  data () {
    return {
      colors: ['rgba(83,185,131, 1)', 'rgba(83,185,131, 1)', 'rgba(83,185,131, 1)', 'rgba(83,185,131, 1)'],
    };
  },
  methods: {
    randomize () {
      this.colors = this.colors.map(this.getRandomColor);
    },
    getRandomColor () {
      const c = () => Math.round(Math.random() * 256);

      return `rgb(${c()}, ${c()}, ${c()})`;
    },
  },
};
</script>

<style scoped>
.code {
  font-family: monospace;
  font-size: 4px;
  fill: #343434;
}
</style>
