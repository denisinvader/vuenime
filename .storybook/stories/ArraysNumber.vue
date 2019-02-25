<template>
  <div>
    <p>
      <button @click="randomize">Randomize</button>
    </p>

    <svg viewBox="0 0 240 80">
      <vuenime
        :value="sizes"
        :duration="duration"
        :delay="delay"
        :endDelay="endDelay"
        :easing="easing"
        :round="round"
        :direction="direction"
        :loop="loop"
      >
        <g
          slot-scope="sizes"
          transform="translate(30, 30)"
          fill="#53b983"
          stroke="none"
        >
          <circle
            v-for="(size, i) in sizes"
            :key="'circle-' + i"
            :r="size"
            :cx="i * 60"
            cy="0"
          />

          <text
            v-for="(size, i) in sizes"
            :key="'label-' + i"
            :x="i * 60"
            y="30"
            class="code"
            text-anchor="middle"
          >{{ size | fixed }}</text>
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
      sizes: [5, 10, 8, 12],
    };
  },
  filters: {
    fixed: n => `0${n.toFixed(2)}`.substr(-5),
  },
  methods: {
    randomize () {
      this.sizes = this.sizes.map(this.getRandomSize);
    },
    getRandomSize () {
      return 3 + Math.random() * 12;
    },
  },
};
</script>

<style scoped>
.code {
  font-family: monospace;
  font-size: 6px;
  fill: #343434;
}
</style>
