<template>
  <div>
    <p>
      <label for="colorInput">Color:</label>
      <input
        id="colorInput"
        :value="color"
        @change="e => color = e.target.value"
        type="color"
      >
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
      v-slot="theColor"
    >
      <div>
        <code>
          Color: {{theColor}}
        </code>
        <div
          :style="{color: theColor,}"
          class="box"
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
