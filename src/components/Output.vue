<template>
  <div class="main-output--wrapper">
    <LeftSide/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import LeftSide from "@/components/sides/LeftSide";

export default {
  components: {LeftSide},
  props: ['apiData'],
  name: "Output",
  data() {
    return {
      outputData: ""
    }
  },
  computed: {
    ...mapState({
      outputLocal: state => state.main.storeValue
    })
  },
  watch: {
    outputLocal() {
      this.outputData = this.outputLocal;
    }
  }
}
</script>

<style scoped>
.main-output--wrapper{
  display: flex;
  justify-content: space-around;
}
</style>