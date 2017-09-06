<template>
  <div id="app">
    <router-view></router-view>
    <input type="text" v-model="newitem" v-on:keyup.enter="additem(newitem)" name="">
    <ul>
      <li v-for="item in items" v-bind:class="{'finish':item.isfinished}" v-on:click="togglefinish(item)">
        {{item.label}}
      </li>
    </ul>
    <ol>
      <li v-for="item in store1">
        {{item.label}}
      </li>
    </ol>
    <p>child tell me :{{childmsg}}</p>
    <componentA componentinfo="test" v-on:father-tell-child="listenchild"></componentA>
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/ComponentA'
export default {
  name: 'app',
  data () {
    return {
      items: [
        {
          label: 'coding',
          isfinished: false
        },
        {
          label: 'study',
          isfinished: true
        }
      ],
      newitem: '',
      store1: Store.fetch(),
      childmsg: ''
    }
  },
  methods: {
    togglefinish: function (item) {
      item.isfinished = !item.isfinished
    },
    additem: function () {
      this.items.push({
        label: this.newitem,
        isfinish: false
      })
      this.newitem = ''
    },
    listenchild: function (msg) {
      this.childmsg = msg
    }
  },
  // 组件链接
  components: {ComponentA},
  watch: {
    items: {
      handler: function (val, oldval) {
        Store.save(this.items)
      },
      deep: true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finish{
  text-decoration:underline;
}
</style>
