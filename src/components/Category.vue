<template>
  <div class="category">
    <div class="category_classify">
      <span>조리방법</span>
      <ul>
        <li
          v-for="way in cookWay"
          :key="way.category"
          @click="clickCookWayHandler(way.category)"
          :class="way.isClicked ? 'clamp' : ''"
        >
          {{ way.category }}
        </li>
      </ul>
    </div>
    <div class="category_classify">
      <span>요리종류</span>
      <ul>
        <li
          v-for="type in cookType"
          :key="type.category"
          :class="type.isClicked ? 'clamp' : ''"
          @click="clickCookTypeHandler(type.category)"
        >
          {{ type.category }}
        </li>
      </ul>
    </div>
    <button @click="resetCategory">
      <font-awesome-icon
        icon="fa-solid fa-arrows-rotate"
        class="icon_reset"
      />초기화
    </button>
  </div>
</template>
<script>
import { COOK_WAY, COOK_TYPE } from '../../Config.js'

export default {
  name: 'Category',
  components: {},
  data() {
    return {
      cookWay: COOK_WAY.map((way) => ({ category: way, isClicked: false })),
      cookType: COOK_TYPE.map((way) => ({ category: way, isClicked: false }))
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    clickCookWayHandler(way) {
      this.cookWay = this.cookWay.map((cookway) =>
        cookway.category === way
          ? { ...cookway, isClicked: true }
          : { ...cookway, isClicked: false }
      )
      this.$store.commit('setCookWay', way)
    },
    clickCookTypeHandler(type) {
      this.cookType = this.cookType.map((cooktype) =>
        cooktype.category === type
          ? { ...cooktype, isClicked: true }
          : { ...cooktype, isClicked: false }
      )
      this.$store.commit('setCookType', type)
    },
    resetCategory() {
      this.cookType = this.cookType.map((type) => ({
        ...type,
        isClicked: false
      }))
      this.cookWay = this.cookWay.map((way) => ({
        ...way,
        isClicked: false
      }))
      this.$store.commit('setCookWay', '')
      this.$store.commit('setCookType', '')
    }
  }
}
</script>
<style lang="scss">
.category {
  width: 80%;
  margin: auto;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  padding-bottom: 1rem;
  border-radius: 10px;
  border: 3px solid $mainColor;

  .category_classify {
    display: flex;
    align-items: center;
    height: 80px;

    span {
      color: $mainColor;
      font-size: 20px;
      border-right: 3px solid $mainColor;
      padding-right: 1.5rem;
    }

    ul {
      display: flex;
      align-items: center;
      color: $mainTextColor;
      font-size: 20px;
      padding-left: 1.5rem;

      li {
        cursor: pointer;
        padding: 1rem;
        border-radius: 10px;

        &:hover {
          background-color: $subColor;
          color: white;
          transition: 0.3s ease;
        }
      }

      .clamp {
        background-color: $subColor;
        color: white;
      }
    }
  }

  button {
    cursor: pointer;
    margin-top: 10px;
    width: 130px;
    height: 45px;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    background: $subColor;
    border-radius: 30px;
    color: $mainTextColor;

    .icon_reset {
      margin-right: 5px;
    }

    &:hover {
      background-color: $mainColor;
      color: white;
      transition: 0.3s ease;
    }
  }
}
</style>
