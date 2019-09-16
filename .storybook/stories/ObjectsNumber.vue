<template>
  <div>
    <p>
      <button @click="randomize">
        Randomize all
      </button>
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
        v-slot="theSizes"
      >
        <g
          transform="translate(30, 30)"
          fill="#53b983"
          stroke="none"
        >
          <circle
            v-for="(size, key, i) in theSizes"
            :key="'circle-' + key"
            :r="Math.max(0, size)"
            :cx="i * 60"
            @click="randomizeAtKey(key)"
            cy="0"
          />

          <text
            v-for="(size, key, i) in theSizes"
            :key="'label-' + key"
            :x="i * 60"
            y="30"
            class="code"
            text-anchor="middle"
          >
            {{key}}: {{size | fixed}}
          </text>
        </g>
      </vuenime>
    </svg>
  </div>
</template>

<script>
import { WithAnimationProps } from './utils';

export default {
  filters: {
    fixed: n => `0${n.toFixed(2)}`.substr(-5),
  },
  mixins: [WithAnimationProps],
  data () {
    return {
      sizes: { a: 20, b: 20, c: 20, d: 20 },
    };
  },
  methods: {
    randomize () {
      this.sizes = Object.keys(this.sizes).reduce((acc, key) => ({
        ...acc,
        [key]: this.getRandomSize(),
      }), {});
    },
    randomizeAtKey (key) {
      this.sizes = {
        ...this.sizes,
        [key]: this.getRandomSize(),
      };
    },
    getRandomSize () {
      return 3 + Math.random() * 17;
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
