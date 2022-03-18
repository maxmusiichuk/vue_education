<template>
<div class="todo-app">
  <Input/>
  <Output :api-data="dataForOutput"/>
</div>
</template>

<script>
import Input from "@/components/todo/Input";
import Output from "@/components/todo/Output";
export default {
  name: "Todo",
  data(){
    return{
      dataForOutput: "",
    }
  },
  components: {
    Input,
    Output
  },
}
</script>

<style scoped>
html{
  background:#ffc600;
}
.todo-app{
  background-color: #ffc600;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>