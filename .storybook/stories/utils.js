import { text, boolean, number, select } from '@storybook/addon-knobs';

const animationGroup = 'Animation parameters';

const easingOptions = [
  'linear',

  'easeInQuad', 'easeOutQuad', 'easeInOutQuad',
  'easeInCubic', 'easeOutCubic', 'easeInOutCubic',
  'easeInQuart', 'easeOutQuart', 'easeInOutQuart',
  'easeInQuint', 'easeOutQuint', 'easeInOutQuint',
  'easeInSine', 'easeOutSine', 'easeInOutSine',
  'easeInExpo', 'easeOutExpo', 'easeInOutExpo',
  'easeInCirc', 'easeOutCirc', 'easeInOutCirc',
  'easeInBack', 'easeOutBack', 'easeInOutBack',

  'cubicBezier(.5, .05, .1, .3)', 'spring(1, 80, 10, 0)', 'steps(10)',

  'easeInElastic(1, .5)', 'easeOutElastic(1, .5)', 'easeInOutElastic(1, .5)',

  'custom',
];

export const withAnimationKnobs = (story, defaultValues = {}) => () => ({
  props: {
    duration: {
      type: Number,
      default: number('duration', 1000, { min: 0, step: 1 }, animationGroup),
    },
    delay: {
      type: Number,
      default: number('delay', 0, { min: 0, step: 1 }, animationGroup),
    },
    endDelay: {
      type: Number,
      default: number('endDelay', 0, { min: 0, step: 1 }, animationGroup),
    },
    easing: {
      type: String,
      default: select('easing', easingOptions, 'easeOutElastic(1, .5)', animationGroup),
    },
    customEasing: {
      type: String,
      default: text('Custom easing', '', animationGroup),
    },
    round: {
      type: Number,
      default: number('round', defaultValues.round || 1, { min: 0, step: 1 }, animationGroup),
    },
    direction: {
      type: String,
      default: select('direction', ['normal', 'reverse', 'alternate'], 'normal', animationGroup),
    },
    loop: {
      type: Boolean,
      default: boolean('loop', false, animationGroup),
    },
    loopTimes: {
      type: Number,
      default: number('Loop times', 0, { min: 0, step: 1 }, animationGroup),
    },
  },
  render (h) {
    let loopValue = false;
    let easing = this.easing;

    if (this.loop) {
      loopValue = this.loopTimes > 0
        ? this.loopTimes
        : true
      ;
    }

    if (easing === 'custom') {
      easing = this.customEasing;
    }

    return h(story, {
      props: {
        duration: this.duration,
        delay: this.delay,
        endDelay: this.endDelay,
        easing: this.easing,
        round: this.round,
        direction: this.direction,
        loop: loopValue,
      },
    });
  },
})

export const WithAnimationProps = {
  props: {
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
};
