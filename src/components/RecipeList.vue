<template>
  <ul class="container">
    <li v-for="recipe in recipes" :key="recipe.RCP_SEQ">
      <div class="recipe_img">
        <div class="img_blur"></div>
        <img :src="recipe.ATT_FILE_NO_MAIN" alt="recipe_img" />
        <font-awesome-icon icon="fa-solid fa-star" class="icon_star" />
      </div>
      <span>{{ recipe.RCP_NM }}</span>
    </li>
  </ul>
</template>
<script>
import axios from 'axios'

export default {
  name: 'RecipeList',
  components: {},
  data() {
    return {
      recipes: [],
      options: {
        method: 'GET',
        url: `http://openapi.foodsafetykorea.go.kr/api/${process.env.VUE_APP_API_KEY}/COOKRCP01/json/1/30`
      }
    }
  },
  setup() {},
  created() {
    this.getRecipes()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getRecipes() {
      try {
        const response = await axios.request(this.options)
        this.recipes = [...response.data.COOKRCP01.row]
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  justify-content: center;
  padding: 3rem;

  li {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 8px;
    border-radius: 10px;

    .recipe_img {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .img_blur {
        display: none;
        position: absolute;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
      }

      img {
        position: relative;
        width: 100%;
        border-radius: 10px;
      }

      .icon_star {
        display: none;
        position: absolute;
        color: white;
        font-size: 24px;
        top: 10px;
        right: 10px;
        z-index: 2;
      }
    }

    span {
      color: $mainTextColor;
      padding: 8px 0;
    }

    &:hover {
      transform: scale(1.1) translateY(-10px);
      transition: 0.4s ease;

      .recipe_img {
        .icon_star,
        .img_blur {
          display: block;
        }
      }
    }
  }
}
</style>
