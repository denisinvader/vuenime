import { text, boolean, number, select } from '@storybook/addon-knobs';

const animationGroup = 'Animation parameters';

export const withAnimationKnobs = story => () => ({
  props: {
    duration: {
      type: Number,
      default: number('Duration', 1000, { min: 0, step: 1 }, animationGroup),
    },
    delay: {
      type: Number,
      default: number('Delay', 0, { min: 0, step: 1 }, animationGroup),
    },
    endDelay: {
      type: Number,
      default: number('endDelay', 0, { min: 0, step: 1 }, animationGroup),
    },
    easing: {
      type: String,
      default: text('Easing', 'easeOutElastic(1, .5)', animationGroup),
    },
    round: {
      type: Number,
      default: number('round', 0, { min: 0, step: 1 }, animationGroup),
    },
    direction: {
      type: String,
      default: select('Direction', ['normal', 'reverse', 'alternate'], 'normal', animationGroup),
    },
    loop: {
      type: Boolean,
      default: boolean('Loop', false, animationGroup),
    },
    loopTimes: {
      type: Number,
      default: number('Loop times', 0, { min: 0, step: 1 }, animationGroup),
    },
  },
  render (h) {
    let loopValue = false;

    if (this.loop) {
      loopValue = loopTimes > 0
        ? loopTimes
        : true
      ;
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
