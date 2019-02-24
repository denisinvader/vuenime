<template>
  <div>
    <p>
      <label for="countInput">Value:</label>
      <input
        id="countInput"
        type="number"
        min="0"
        :value="count"
        @change="e => count = +e.target.value"
      />
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
    >
      <div slot-scope="count">
        <div>Width: {{count}}px</div>
        <div
          class="bar"
          :style="{ width: `${Math.max(0, count)}px` }"
        />
      </div>
    </vuenime>
  </div>
</template>

<script>
import { WithAnimationProps } from './utils.js';

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
  background-color: darkred;
}
</style>
