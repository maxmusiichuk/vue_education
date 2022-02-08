<template>
  <div class="main-input--wrapper">
    <div class="header-title">TODO LIST</div>
    <input class="input-field" type="text" v-model="inputValue" @keyup.enter="onEnterKey">
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
  name: "Input",
  data() {
    return {
      inputValue: '',
      localValue: "",
      taskId: 0
    }
  },
  computed: {
    ...mapState({
      storeValue: state => state.main.storeValue
    })
  },
  created() {
    this.localValue = this.storeValue;
  },
  watch: {
    inputValue() {
      document.body.style.backgroundColor = this.inputValue;
    }
  },
  methods: {
    taskFormatter(data) {
      return {id: this.taskId, name: data, doneStatus: false}
    },
    onEnterKey() {
      if (this.inputValue.length >= 3) {
        this.$store.commit("main/setTask", this.taskFormatter(this.inputValue));
        this.taskId++;
        this.inputValue = "";
      }
    }
  }
}
</script>

<style scoped>
.input-field{
  margin-top: 20px;
  width: 350px;
  height: 40px;
  border: 3px solid #83a4c4;
  border-radius: 12px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: #81a9d4;
  padding: 10px;
}
.header-title{
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 50px;
  color: #81a9d4;
}
</style>