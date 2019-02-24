<script>
import anime from 'animejs';

export default {
  props: {
    value: {
      type: [Number, String],
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

      this.animationTarget = this;

      this.animation = anime({
        targets: this,
        target: this.value,
        ...this.animationParameters,
      });
    },
  },
  methods: {
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
    return this.$scopedSlots.default(this.target);
  },
};
</script>
