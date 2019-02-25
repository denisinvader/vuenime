<script>
import Vuenime from '../../src/Vuenime.vue';

export default {
  data () {
    return {
      sizes: [5, 10, 20, 15],
    };
  },
  methods: {
    getRandomSize () {
      return Math.round(5 + Math.random() * 15);
    },
    randomize () {
      this.sizes = this.sizes.map(this.getRandomSize);
    },
    push () {
      this.sizes = [
        ...this.sizes,
        this.getRandomSize(),
      ];
    },
    pop () {
      this.sizes = this.sizes.slice(0, this.sizes.length - 1);
    },
  },
  render () {
    return (
      <div>
        <p>
          <button onClick={this.randomize}>Randomize</button>
          <button onClick={this.push}>Push</button>
          <button onClick={this.pop}>Pop</button>
        </p>
        <svg viewBox={`0 0 ${10 * 60} 60`}>
          <Vuenime
            value={this.sizes}
            duration={300}
            round={100}
            easing="easeInOutQuad"
            scopedSlots={{
              default: sizes => (
                <g
                  transform="translate(30, 30)"
                  fill="#53b983"
                  stroke="none"
                >
                  {sizes.map((r, i) => (
                    <circle
                      key={'c_' + i}
                      cx={i * 60}
                      cy="0"
                      r={r}
                    />
                  ))}
                </g>
              ),
            }}
          />
        </svg>
        <p>
          <code>Sizes: {JSON.stringify(this.sizes)}</code>
        </p>
      </div>
    );
  },
};
</script>
