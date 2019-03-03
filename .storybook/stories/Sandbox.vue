<script>
import Vuenime from '../../src/Vuenime.vue';

export default {
  data () {
    return {
      color: '#53b983',
      size: 10,
      r: 0,
      items: [
        { id: '1', size: 5 },
        { id: '2', size: 12 },
        { id: '3', size: 8 },
      ],
      nextId: 4,
    };
  },
  computed: {
    animatingValue () {
      return {
        r: this.r,
        fill: this.color,
      };
    },

    itemSizes () {
      const result = {};

      for (let i = 0; i < this.items.length; i++) {
        const { id, size } = this.items[i];

        result[id] = size;
      }

      return result;
    },
  },
  methods: {
    getRandomSize () {
      return Math.round(5 + Math.random() * 15);
    },
    getRandomColor () {
      const c = () => Math.round(Math.random() * 256);

      return `rgb(${c()}, ${c()}, ${c()})`;
    },
    randomizeAll () {
      this.color = this.getRandomColor();
      this.r = this.getRandomSize();
    },

    randomizeItems () {
      this.items = this.items.map(({ id }) => ({
        id,
        size: this.getRandomSize(),
      }));
    },
    randomizeItem (itemId) {
      this.items = this.items.map(({ id, size }) => ({
        id,
        size: id === itemId
          ? this.getRandomSize()
          : size
        ,
      }));
    },
    push () {
      this.items = [
        ...this.items,
        { id: `${this.nextId++}`, size: this.getRandomSize() },
      ].slice(0, 10);
    },
    unshift () {
      this.items = [
        { id: `${this.nextId++}`, size: this.getRandomSize() },
        ...this.items,
      ].slice(0, 10);;
    },
    pop () {
      this.items = this.items.slice(0, this.items.length - 1);
    },
    shift () {
      this.items = this.items.slice(1, this.items.length);
    },
  },
  render () {
    return (
      <div>
        <p>
          <button onClick={this.randomizeItems}>randomizeItems</button>
          <button onClick={this.push}>push</button>
          <button onClick={this.unshift}>unshift</button>
          <button onClick={this.pop}>pop</button>
          <button onClick={this.shift}>shift</button>
        </p>

        <svg viewBox="0 0 600 80">
          <Vuenime
            value={this.itemSizes}
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
                  {this.items.map(({ id, size }, i) => (
                    <g
                      key={id}
                      transform={`translate(${i * 60}, 0)`}
                      onClick={() => this.randomizeItem(id)}
                    >
                      <circle
                        cx="0"
                        cy="0"
                        r={sizes[id]}
                      />
                      <text
                        x="0"
                        y="0"
                        text-anchor="middle"
                        dy=".35em"
                        font-size="10"
                        fill="#343434"
                      >{id}</text>
                    </g>
                  ))}
                </g>
              ),
            }}
          />
        </svg>

        <hr />

        <p>
          <button onClick={this.randomizeAll}>Randomize</button>
        </p>
        <svg viewBox={`0 0 60 60`}>
          <Vuenime
            value={this.animatingValue}
            duration={300}
            round={100}
            easing="easeInOutQuad"
            scopedSlots={{
              default: ({ r, fill }) => (
                <rect
                  x="10"
                  y="10"
                  width="40"
                  height="40"
                  rx={r}
                  ry={r}
                  fill={fill}
                />
              ),
            }}
          />
        </svg>
        <p>
          <code>{JSON.stringify(this.animatingValue, null, ' ')}</code>
        </p>
      </div>
    );
  },
};
</script>
