<template>
  <div class="header">
    <router-link to="/"><h1>COOBOOK</h1></router-link>
    <ul class="menu">
      <li>
        <font-awesome-icon icon="fa-solid fa-star" class="icon-star" />
        <span>스크랩</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Headaer',
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
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 3.5rem;

  h1 {
    display: inline-block;
    color: $mainColor;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      font-size: 18px;
      cursor: pointer;

      span {
        color: $mainTextColor;
        margin-left: 5px;

        &:hover {
          color: $mainColor;
          transition: 0.3s ease;
        }
      }

      .icon-star {
        color: $subColor;
      }
    }
  }
}
</style>
