<template>
  <div class="home">
    <Header />
    <Banner />
    <Category />
    <Loader v-if="isLoading === true" />
    <RecipeList v-if="isLoading === false" :recipes="recipes" />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Category from '@/components/Category.vue'
import RecipeList from '@/components/RecipeList.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  components: {
    Header,
    Banner,
    Category,
    RecipeList,
    Loader,
    Footer
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
  mounted() {},
  unmounted() {},
  methods: {
    async getRecipes() {
      try {
        this.isLoading = true
        const options = {
          method: 'GET',
          url: `http://openapi.foodsafetykorea.go.kr/api/${process.env.VUE_APP_API_KEY}/COOKRCP01/json/1/1000`
        }
        const response = await axios.request(options)
        this.recipes = [...response.data.COOKRCP01.row]
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
