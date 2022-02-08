<template>
  <div class="side-wrapper">
    <ul class="task-list-wrapper">
      <li class="task-list--item" v-for="(item,index) in tasksOutput" :key="item.id">
        <div class="inside-items">
        <span class="checkbox-item">
          <input class="checkbox-switch" type="checkbox" :value="item.id" @click="setTaskStatus(item)">
        </span>
          <p :class="['task-id',  {'done-task': item.doneStatus}]" style="text-align: left">
            {{ item.name }}</p>
        </div>
        <div class="outside-items" @click="removeItem(index)"><p style="color: #81a9d4">X</p></div>
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
    setTaskStatus(itemId){
      itemId.doneStatus = !itemId.doneStatus;
    },
    removeItem(itemId) {
      this.$store.commit("main/removeTask", itemId);
    },
  }
}
</script>

<style scoped>
.done-task {
  /*color: red !important;*/
  text-decoration: line-through;
}

.task-id {
  padding-left: 15px;
  font-family: 'Work Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  color: #81a9d4;
}

.side-wrapper {
  border-radius: 10px;
  background-color: #fff;
  width: 700px;
  margin-top: 25px;
}

.task-list-wrapper {
  list-style: none;
  padding: 0;
  margin: 0;
}
.outside-items{
  width: 27px;
  margin-left: -27px;
  cursor: pointer;
}
.task-list--item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #81a9d4;
}
.task-list--item:last-child{
  border-bottom: none;
}
.inside-items {
  display: flex;
  align-items: center;
  width: 700px;
  height: 55px;
}

.checkbox-item {
  border-right: 1px solid #81a9d4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
}

.checkbox-switch {
  cursor: pointer;
  border: #81a9d4;
  height: 20px;
  width: 20px;
}
</style>