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
          <input
            type="text"
            step="1"
            value={this.color}
            onChange={e => this.color = e.target.value}
          />
        </p>

        <Vuenime
          value={this.color}
          scopedSlots={{
            default: color => (
              <h1 style={{ color: color }}>Text color</h1>
            ),
          }}
        />
      </div>
    );
  },
};
</script>
