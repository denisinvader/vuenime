<template>
  <div>
    <p>
      <label for="heightInput">Amplitude:</label>

      <input
        id="heightInput"
        :value="height"
        @change="e => height = +e.target.value"
        type="range"
        min="20"
        max="180"
      >
    </p>


    <vuenime
      :value="path"
      :duration="duration"
      :delay="delay"
      :endDelay="endDelay"
      :easing="easing"
      :round="round"
      :direction="direction"
      :loop="loop"
      v-slot="d"
    >
      <div>
        <svg viewBox="0 0 600 400">
          <path
            :d="d"
            stroke="#53b983"
            stroke-width="2"
            fill="none"
          />
        </svg>
        <code>Path: {{d}}</code>
      </div>
    </vuenime>
  </div>
</template>

<script>
import { WithAnimationProps } from './utils';

export default {
  mixins: [WithAnimationProps],
  data () {
    return {
      height: 150,
    };
  },
  computed: {
    path () {
      const { height } = this;

      return [
        'M0,200',
        `C33.33,${133.33 + height} 83.33,${200 + height} 150,${200 + height}`,
        `C250,${200 + height} 350,${200 - height} 450,${200 - height}`,
        `C516.67,${200 - height} 566.67,${266.66 - height} 600,200`,
      ].join(' ');
    },
  },
  methods: {
    randomize () {
      this.height = Math.round(150 * Math.random() + 20);
    },
  },
};
</script>
