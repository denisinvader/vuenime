<template>
  <div>
    <p>
      <button @click="randomize">
        Randomize all
      </button>
      <button @click="push">
        Push
      </button>
      <button @click="pop">
        Pop
      </button>
    </p>

    <svg viewBox="0 0 600 80">
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
            v-for="(size, i) in theSizes"
            :key="'circle-' + i"
            :r="Math.max(0, size)"
            :cx="i * 60"
            @click="randomizeAtIndex(i)"
            cy="0"
          />

          <text
            v-for="(size, i) in theSizes"
            :key="'label-' + i"
            :x="i * 60"
            y="30"
            class="code"
            text-anchor="middle"
          >
            {{size | fixed}}
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
    fixed: n => `0${Number(n).toFixed(2)}`.substr(-5),
  },
  mixins: [WithAnimationProps],
  data () {
    return {
      sizes: [20, 20, 20, 20],
    };
  },
  methods: {
    randomize () {
      this.sizes = this.sizes.map(this.getRandomSize);
    },
    push () {
      this.sizes = [
        ...this.sizes,
        20,
      ].slice(0, 10);
    },
    pop () {
      this.sizes = this.sizes.slice(0, this.sizes.length - 1);
    },
    randomizeAtIndex (index) {
      this.sizes = [
        ...this.sizes.slice(0, index),
        this.getRandomSize(),
        ...this.sizes.slice(index + 1),
      ];
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
  font-size: 8px;
  fill: #343434;
}
</style>
