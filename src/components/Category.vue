<template>
  <div class="category_wrapper">
    <div class="category">
      <div class="category_classify">
        <span>조리방법</span>
        <ul class="list_category">
          <li
            v-for="way in cookWay"
            :key="way.category"
            @click="clickCookWayHandler(way.category)"
            :class="way.isClicked ? 'clamp' : ''"
          >
            {{ way.category }}
          </li>
        </ul>
        <select
          :value="setSelectWay"
          @change="cookWayChangeHandler"
          class="list_category select"
        >
          <option value="">선택해주세요.</option>
          <option
            v-for="way in cookWay"
            :key="way.category"
            :value="way.category"
          >
            {{ way.category }}
          </option>
        </select>
      </div>
      <div class="category_classify">
        <span>요리종류</span>
        <ul class="list_category">
          <li
            v-for="type in cookType"
            :key="type.category"
            :class="type.isClicked ? 'clamp' : ''"
            @click="clickCookTypeHandler(type.category)"
          >
            {{ type.category }}
          </li>
        </ul>
        <select
          :value="setSelectType"
          @change="cookTypeChangeHandler"
          class="list_category select"
        >
          <option value="">선택해주세요.</option>
          <option
            v-for="type in cookType"
            :key="type.category"
            :value="type.category"
          >
            {{ type.category }}
          </option>
        </select>
      </div>
      <button @click="resetCategory">
        <font-awesome-icon
          icon="fa-solid fa-arrows-rotate"
          class="icon_reset"
        />초기화
      </button>
    </div>
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
      cookType: COOK_TYPE.map((way) => ({ category: way, isClicked: false })),
      setSelectWay: '',
      setSelectType: ''
    }
  },
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
      this.$store.commit('setRest', true)
      this.setSelectWay = ''
      this.setSelectType = ''
    },
    cookWayChangeHandler(event) {
      this.setSelectWay = event.target.value
      this.$store.commit('setCookWay', event.target.value)
    },
    cookTypeChangeHandler(event) {
      this.setSelectType = event.target.value
      this.$store.commit('setCookType', event.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
.category_wrapper {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  padding: 0 3rem;

  .category {
    width: 100%;
    padding: 0 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
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

      .list_category {
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

      .list_category.select {
        display: none;
        cursor: pointer;
        height: 30px;
        border: 2px solid $mainColor;
        border-radius: 5px;
        font-size: 16px;
        margin-left: 1.5rem;
        padding: 0 5px;

        &:focus {
          outline: none;
        }

        &:active,
        &:hover {
          border: 2px solid $subColor;
        }
      }
    }
    button {
      cursor: pointer;
      margin: 10px 0;
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
}

@media screen and (max-width: 768px) {
  .category_wrapper {
    padding: 0 1.5rem;

    .category {
      padding: 0 1.5rem;
      .category_classify {
        span {
          font-size: 16px;
        }

        .list_category {
          font-size: 16px;

          li {
            padding: 12px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .category_wrapper {
    padding: 0 1.5rem;

    .category {
      padding: 0 1.5rem;
      .category_classify {
        .list_category {
          display: none;
        }
        .list_category.select {
          display: block;
        }
      }
    }
  }
}
</style>
