<template>
  <header class="container">
    <router-link to="/"><h1>COOBOOK</h1></router-link>
    <ul class="menu">
      <li>
        <font-awesome-icon icon="fa-solid fa-star" class="icon-star" />
        <router-link to="/scrap"><span>스크랩</span></router-link>
      </li>
    </ul>
  </header>
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

<style lang="scss" scoped>
.container {
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

@media screen and (max-width: 500px) {
  .container {
    padding: 0 2rem;

    h1 {
      font-size: 24px;
    }

    ul {
      li {
        font-size: 14px;
      }
    }
  }
}
</style>
