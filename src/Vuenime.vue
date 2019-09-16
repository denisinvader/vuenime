<script>
import anime from 'animejs';
import { isArray, isObject } from './utils';

export default {
  props: {
    value: {
      type: [Number, String, Array, Object],
      required: true,
    },

    duration: {
      type: Number,
      default: 1000,
    },
    delay: {
      type: Number,
      default: 0,
    },
    endDelay: {
      type: Number,
      default: 0,
    },
    easing: {
      type: String,
      default: 'easeOutElastic(1, .5)',
    },
    round: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'reverse', 'alternate'].includes(value),
    },
    loop: {
      type: [Number, Boolean],
      default: false,
    },
  },
  data () {
    return {
      target: this.value,
      animationTarget: null,
      animation: null,
    };
  },
  computed: {
    animationParameters () {
      const {
        duration,
        delay,
        endDelay,
        easing,
        round,
        direction,
        loop,
      } = this;

      return { duration, delay, endDelay, easing, round, direction, loop };
    },
  },
  watch: {
    value () {
      this.resetAnimation();

      if (isArray(this.value)) {
        this.animateArray();
      } else if (isObject(this.value)) {
        this.animateObject();
      } else {
        this.animatePrimitive();
      }
    },
  },
  methods: {
    animatePrimitive () {
      this.animationTarget = this;

      this.animation = anime({
        targets: this,
        target: this.value,
        ...this.animationParameters,
      });
    },
    animateArray () {
      const { target, value } = this;
      const valueLength = value.length;
      const targetLength = target.length;

      if (targetLength < valueLength) {
        // enter
        this.target = [...target, value.slice(targetLength)];
      } else if (targetLength > valueLength) {
        // exit
        this.target = target.slice(0, valueLength);
      }

      if (valueLength > 0) {
        // update
        const updatingTarget = {};
        const updateValues = {};

        for (let i = 0; i < valueLength; i += 1) {
          updatingTarget[i] = this.target[i];
          updateValues[i] = this.value[i];
        }

        this.animationTarget = updatingTarget;

        this.animation = anime({
          targets: this.animationTarget,
          ...updateValues,
          ...this.animationParameters,
          update: () => {
            this.target = Object.values(updatingTarget);
          },
        });
      }
    },
    animateObject () {
      const currentKeys = Object.keys(this.target);
      const nextKeys = Object.keys(this.value);
      const currentKeysLength = currentKeys.length;
      const nextKeysLength = nextKeys.length;
      const enterKeys = [];
      const leaveKeys = [];
      const updateKeys = [];

      for (let i = 0; i < nextKeysLength; i += 1) {
        const key = nextKeys[i];

        if (currentKeys.includes(key)) {
          updateKeys.push(key);
        } else {
          enterKeys.push(key);
        }
      }

      for (let i = 0; i < currentKeysLength; i += 1) {
        const key = currentKeys[i];

        if (!nextKeys.includes(key)) {
          leaveKeys.push(key);
        }
      }

      const enterKeysLength = enterKeys.length;
      const leaveKeysLength = leaveKeys.length;
      const updateKeysLength = updateKeys.length;

      // enter
      for (let i = 0; i < enterKeysLength; i += 1) {
        const key = enterKeys[i];

        this.target[key] = this.value[key];
      }

      // levae
      for (let i = 0; i < leaveKeysLength; i += 1) {
        delete this.target[leaveKeys[i]];
      }

      // update
      if (updateKeysLength > 0) {
        const animatingObject = {};
        const animationValues = {};

        for (let i = 0; i < updateKeysLength; i += 1) {
          const key = updateKeys[i];

          animatingObject[key] = this.target[key];
          animationValues[key] = this.value[key];
        }

        this.animationTarget = animatingObject;

        this.animation = anime({
          targets: this.animationTarget,
          ...animationValues,
          ...this.animationParameters,
          update: () => {
            this.target = {
              ...this.target,
              ...animatingObject,
            };
          },
        });
      }
    },

    resetAnimation () {
      if (this.animation) {
        this.animation.pause();
      }

      if (this.animationTarget) {
        anime.remove(this.animationTarget);
      }
    },
  },
  render () {
    const renderFunction = this.$scopedSlots.default;

    return typeof renderFunction === 'function'
      ? renderFunction(this.target)
      : null;
  },
};
</script>
