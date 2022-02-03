<template>
  <div class="side-wrapper">
    <h1>Need to do</h1>
    <ul v-for="(item,index) in tasksOutput" :key="item.id">
      <li @click="removeItem(index)"><p :class="['task-id-'+item.id]" style="text-align: left">{{ item.name }} -
        {{ item.id }}</p></li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";

export default {
  name: "LeftSide",
  data() {
    return {
      tasksOutput: "",
      storeTask: {}
    }
  },
  computed: {
    ...mapState({
      task: state => state.main.tasks
    }),
    ...mapGetters({
      // allTasks: state =>
    })
  },
  created() {
    this.tasksOutput = this.$store.getters["main/getTasks"];
    console.log(this.tasksOutput);
  },
  watch: {
    task() {
      console.log(this.task);
      this.tasksOutput = this.task;
    }
  },
  methods: {
    removeItem(itemId) {
      this.$store.commit("main/removeTask", itemId);
    },
    consoleItem(item) {
      console.log(item)
    },
  }
}
</script>

<style scoped>

</style>