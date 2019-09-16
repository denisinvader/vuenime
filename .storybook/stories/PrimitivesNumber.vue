<template>
  <div>
    <p>
      <label for="countInput">Value:</label>
      <input
        id="countInput"
        :value="count"
        @change="e => count = +e.target.value"
        type="number"
        min="0"
      >
    </p>

    <vuenime
      :value="count"
      :duration="duration"
      :delay="delay"
      :endDelay="endDelay"
      :easing="easing"
      :round="round"
      :direction="direction"
      :loop="loop"
      v-slot="theCount"
    >
      <div>
        <code>Width: {{theCount}}px</code>
        <div
          :style="{width: `${Math.max(0, theCount)}px`,}"
          class="bar"
        />
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
      count: 42,
    };
  },
};
</script>

<style scoped>
.bar {
  height: 40px;
  background-color: #53b983;
}
</style>
