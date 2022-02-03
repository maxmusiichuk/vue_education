<template>
  <div id="app">
    <Input/>
    <Output :api-data="dataForOutput"/>
  </div>
</template>

<script>
import Input from "./components/Input";
import Output from "./components/Output";
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      dataForOutput: "",
    }
  },
  components: {
    Input,
    Output
  },
  created() {
    // this.getApiData();
  },
  methods: {
    getApiData() {
      axios
          .get("https://swapi.dev/api/people/1/")
          .then((response) => {
            console.log(response);
            this.dataForOutput = response.data;
          })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
