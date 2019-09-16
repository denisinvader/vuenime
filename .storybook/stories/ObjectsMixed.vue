<template>
  <div>
    <p>
      <button @click="randomize">
        Randomize all
      </button>
      <button @click="randomizeRadius">
        Randomize radius
      </button>
      <button @click="randomizeFill">
        Randomize fill
      </button>
    </p>

    <svg viewBox="0 0 240 80">
      <vuenime
        :value="style"
        :duration="duration"
        :delay="delay"
        :endDelay="endDelay"
        :easing="easing"
        :round="round"
        :direction="direction"
        :loop="loop"
        v-slot="{radius, fill,}"
      >
        <g
          transform="translate(60, 30)"
          stroke="none"
        >
          <circle
            :fill="fill"
            :r="radius"
            cx="0"
            cy="0"
          />

          <text
            x="0"
            y="30"
            class="code"
            text-anchor="middle"
          >
            r: {{radius | fixed}}
          </text>
          <text
            x="0"
            y="36"
            class="code"
            text-anchor="middle"
          >
            fill: {{fill}}
          </text>
        </g>
      </vuenime>
    </svg>
  </div>
</template>

<script>
import { WithAnimationProps } from './utils';

const c = () => Math.round(Math.random() * 256);

export default {
  filters: {
    fixed: n => `0${n.toFixed(2)}`.substr(-5),
  },
  mixins: [WithAnimationProps],
  data () {
    return {
      style: {
        radius: 20,
        fill: 'rgba(83,185,131, 1)',
      },
    };
  },
  methods: {
    randomize () {
      this.randomizeRadius();
      this.randomizeFill();
    },
    randomizeRadius () {
      this.style = {
        ...this.style,
        radius: 3 + Math.random() * 17,
      };
    },
    randomizeFill () {
      this.style = {
        ...this.style,
        fill: `rgb(${c()}, ${c()}, ${c()})`,
      };
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
