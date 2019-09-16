<template>
  <div>
    <p>
      <button @click="randomize">
        Randomize all
      </button>
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
        v-slot="theColors"
      >
        <g
          transform="translate(30, 30)"
          stroke="none"
        >
          <circle
            v-for="(color, i) in theColors"
            :key="'circle-' + i"
            :data-index="i"
            :fill="color"
            :cx="i * 60"
            @click="randomizeAtIndex(i)"
            cy="0"
            r="20"
          />

          <text
            v-for="(color, i) in theColors"
            :key="'label-' + i"
            :x="i * 60"
            y="30"
            class="code"
            text-anchor="middle"
          >
            {{color}}
          </text>
        </g>
      </vuenime>
    </svg>
  </div>
</template>

<script>
import { WithAnimationProps } from './utils';

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
    randomizeAtIndex (index) {
      this.colors = [
        ...this.colors.slice(0, index),
        this.getRandomColor(),
        ...this.colors.slice(index + 1),
      ];
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
