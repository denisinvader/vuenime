# Vuenime

A flexible [Vue](https://vuejs.org) wrapper for [Animejs](https://animejs.com)


```sh
npm install vuenime
# or
yarn add vuenime
```

[CodeSandbox examples](https://codesandbox.io/u/denisinvader/sandboxes)

## Usage

In a component:

```vue
<template>
  <div>
    <p>
      <label for="countInput">Value:</label>
      <input
        id="countInput"
        v-model.lazy="count"
        type="number"
        min="0"
      >
    </p>

    <vuenime
      :value="count"
      duration="1500"
      v-slot="theCount"
    >
      <div>
        <code>Width: {{theCount}}px</code>
        <div
          :style="{
            backgroundColor: 'green',
            width: `${theCount}px`,
          }"
        />
      </div>
    </vuenime>
  </div>
</template>

<script>
import { Vuenime } from 'vuenime';

export default {
  components: { Vuenime },
  data () {
    return {
      count: 42,
    };
  },
};
</script>
```

Global registration:

```js
import Vue from 'vue';
import Vuenime from 'vuenime';

Vue.use(Vuenime);
```


## Props

|Name|Type|Required||
|:---|:---|---:|:---|
|`value`|`Number` \| `String` \| `Array` \| `Object`|yes|[The animation target](https://animejs.com/documentation/#JSobject)|
|`render`|`Function`|no|Render function.<br/>Use this prop to avoid scoped slots definition in JSX.|

### Animation parameters

Cover Anime [property](https://animejs.com/documentation/#duration) and [animation](https://animejs.com/documentation/#direction) parameters.

|Name|Type|Default|
|:---|:---|:---|
|`duration`|`Number`|`1000`|
|`delay`|`Number`|`0`|
|`endDelay`|`Number`|`0`|
|`easing`|`String`|`"easeOutElastic(1, .5)"`|
|`round`|`Number`|`0`|
|`direction`|`String`|`"normal"`|
|`loop`|`Number` \| `Boolean`|`false`|
