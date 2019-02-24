<script>
import Vuenime from '../../src/Vuenime.vue';

export default {
  data () {
    return {
      count: 42,
      color: '#000000',
    };
  },
  render () {
    return (
      <div>
        <p>
          <label for="colorInput">Color&nbsp;&nbsp;</label>
          <input
            id="colorInput"
            type="color"
            value={this.color}
            onChange={e => this.color = e.target.value}
          />
        </p>

        <Vuenime
          value={this.color}
          duration={500}
          easing="easeInCubic"
          scopedSlots={{
            default: color => (
              <h1 style={{ color: color }}>Text color</h1>
            ),
          }}
        />

        <p>
          <label for="numberInput">Number&nbsp;&nbsp;</label>
          <input
            id="numberInput"
            type="number"
            step="1"
            value={this.count}
            onChange={e => this.count = +e.target.value}
          />
        </p>

        <Vuenime
          value={this.count}
          duration={2000}
          easing="steps(10)"
          round={1}
          scopedSlots={{
            default: count => (
              <div style={{
                height: '40px',
                lineHeight: '40px',
                color: '#ffffff',
                backgroundColor: 'darkred',
                padding: '0 10px',
                width: `${count}px`,
              }}>{count}</div>
            ),
          }}
        />
      </div>
    );
  },
};
</script>
