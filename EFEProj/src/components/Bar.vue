<template>
  <div class="title">Bar</div>
</template>

<script>
export default {
  name: "Bar",
  components: {},
  props: {
    // store: {
    //   type: Object,
    //   default: {}
    // }
  },
  data() {
    return {
      sharedState: this.$store.state.bar
    };
  },
  methods: {},
  computed: {},
  mounted() {
    this.$store.commit('bar/increment');
    console.log('Bar = ', this.sharedState.count); // -> 1
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.title {
  font-size: 14px;
  font-weight: bold;
}
</style>
