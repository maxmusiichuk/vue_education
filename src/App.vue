<template>
  <div id="app">
    <Todo/>
  </div>
</template>

<script>
import Todo from "@/components/kernel/Todo";

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Todo,
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap');
html{
  background:#ffc600;
}
#app {
}
</style>
