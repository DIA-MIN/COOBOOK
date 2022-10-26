<template>
  <div class="home">
    <Category />
    <Loader v-if="isLoading === true" />
    <RecipeList v-if="isLoading === false" :recipes="recipes" types="all" />
  </div>
</template>
<script>
import Category from '@/components/Category.vue'
import RecipeList from '@/components/RecipeList.vue'
import Loader from '@/components/Loader.vue'
import axios from 'axios'

export default {
  components: {
    Category,
    RecipeList,
    Loader
  },
  data() {
    return {
      isLoading: false,
      recipes: []
    }
  },
  setup() {},
  created() {
    this.isLoading = true
    this.getRecipes()
  },
  unmounted() {},
  methods: {
    async getRecipes() {
      try {
        this.isLoading = true
        const options = {
          method: 'GET',
          url: `https://openapi.foodsafetykorea.go.kr/api/${process.env.VUE_APP_API_KEY}/COOKRCP01/json/1/1000`
        }
        const response = await axios.request(options)
        this.recipes = response.data.COOKRCP01.row
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
