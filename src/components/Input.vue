<template>
  <div class="main-input--wrapper">
    <input type="text" v-model="inputValue" @keyup.enter="onEnterKey">
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

</style>