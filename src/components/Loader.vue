<template>
  <div class="container">
    <div class="loader"></div>
  </div>
</template>
<script>
export default {
  name: 'Loader',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  height: 350px;
  .loader {
    margin: auto;
    border: 7px solid $subColor;
    border-top: 7px solid $mainColor;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spinner 4s linear infinite;
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>
