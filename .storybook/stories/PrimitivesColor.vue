<template>
  <div>
    <p>
      <label for="colorInput">Color:</label>
      <input
        id="colorInput"
        type="color"
        :value="color"
        @change="e => color = e.target.value"
      />
    </p>

    <vuenime
      :value="color"
      :duration="duration"
      :delay="delay"
      :endDelay="endDelay"
      :easing="easing"
      :round="round"
      :direction="direction"
      :loop="loop"
    >
      <div slot-scope="color">
        <code>Color: {{color}}</code>
        <div
          class="box"
          :style="{ color }"
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
      color: '#53b983',
    };
  },
};
</script>

<style scoped>
.box {
  background-color: currentColor;
  height: 100px;
  width: 100px;
}
</style>
