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
            v-for="(color, key, i) in theColors"
            :key="'circle-' + key"
            :data-index="i"
            :fill="color"
            :cx="i * 60"
            @click="randomizeAtKey(key)"
            cy="0"
            r="20"
          />

          <text
            v-for="(color, key, i) in theColors"
            :key="'label-' + key"
            :x="i * 60"
            y="30"
            class="code"
            text-anchor="middle"
          >
            {{key}}: {{color}}
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
      colors: {
        a: 'rgba(83,185,131, 1)',
        b: 'rgba(83,185,131, 1)',
        c: 'rgba(83,185,131, 1)',
        d: 'rgba(83,185,131, 1)',
      },
    };
  },
  methods: {
    randomize () {
      this.colors = Object.keys(this.colors).reduce((acc, key) => ({
        ...acc,
        [key]: this.getRandomColor(),
      }), {});
    },
    randomizeAtKey (key) {
      this.colors = {
        ...this.colors,
        [key]: this.getRandomColor(),
      };
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
