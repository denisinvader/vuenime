<script>
import anime from 'animejs';

export default {
  props: {
    value: {
      type: [Number, String],
      required: true,
    },
  },
  data () {
    return {
      target: this.value,
    };
  },
  watch: {
    value () {
      anime({
        targets: this,
        target: this.value,
      });
    },
  },
  render () {
    return this.$scopedSlots.default(this.target);
  },
};
</script>
