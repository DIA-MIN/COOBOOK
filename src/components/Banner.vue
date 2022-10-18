<template>
  <div class="banner">
    <h1>원하는 레시피를 한눈에!</h1>
    <div class="search">
      <input type="text" placeholder="찾으실 레시피를 입력해주세요." />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="icon_search"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
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

<style lang="scss">
.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  height: 160px;
  background: linear-gradient(to right, $mainColor, $subColor);

  h1 {
    color: white;
  }

  .search {
    width: 400px;
    position: relative;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      height: 40px;
      padding: 0 1.25rem;
      font-size: 14px;
      background-color: white;
      border-radius: 20px;
      color: $mainTextColor;
    }

    .icon_search {
      cursor: pointer;
      position: absolute;
      color: $mainColor;
      right: 1.25rem;
      font-size: 18px;

      &:hover {
        transform: scale(1.2);
        transition: 0.4s ease;
      }
    }
  }
}
</style>
