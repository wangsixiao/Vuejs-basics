<template>
  <div class="hello">
  	<h1 v-text="msg"></h1>
  	<h2>{{componentinfo}}</h2>
  	<button v-on:click="childfun">childfun</button>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      msg: 'hello form componentA'
    }
  },
  props: ['componentinfo'],
  methods: {
    childfun: function () {
      this.$emit('father-tell-child', this.msg)
    }
  }
}
</script>