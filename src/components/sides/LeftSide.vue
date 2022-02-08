<template>
  <div class="side-wrapper">
<!--    <h1>Need to do</h1>-->
    <ul class="task-list-wrapper">
<!--      <li v-for="(item,index) in tasksOutput" :key="item.id" @click="removeItem(index)">-->
      <li class="task-list--item" v-for="(item,index) in tasksOutput" :key="item.id" >
        <span class="checkbox-item"><input class="checkbox-switch" type="checkbox" @click="removeItem(item)" ></span>
        <p :class="['task-id', 'dynamic-class-'+item.id]" style="text-align: left">
        {{ item.name }}. Status: {{ item.doneStatus }}</p>
      </li>
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
      itemId.doneStatus = !itemId.doneStatus;
      // this.$store.commit("main/removeTask", itemId);
    },
    consoleItem(item) {
      console.log(item)
    },
  }
}
</script>

<style scoped>
.task-id{
  padding-left: 15px;
  font-family: 'Work Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  color: #81a9d4;
}
.side-wrapper{
  border-radius: 10px;
  background-color: #fff;
  width: 700px;
  margin-top: 25px;
}
.task-list-wrapper{
  list-style: none;
  padding: 0;
  margin: 0;
}
.task-list--item{
  display: flex;
  align-items: center;
  width: 700px;
  height: 55px;
  border-bottom: 1px solid #81a9d4;
}
.checkbox-item{
  border-right: 1px solid #81a9d4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
}
.checkbox-switch{
  cursor: pointer;
  border: #81a9d4;
  height: 20px;
  width: 20px;
}
</style>