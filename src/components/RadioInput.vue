<template>
  <div class="input-section">
    <div class="input-section__title">What's your favorite food?</div>
    <div class="input-section__section">
      <div
        v-for="food in dishes"
        :key="food.index"
        class="input-section__section__wrapper"
      >
        <label for="" class="input-section__section__wrapper__label">{{
          food
        }}</label>
        <input
          type="radio"
          name="radio-input"
          class="input-section__section__wrapper__radio-input"
          :value="food"
          v-model="input"
        />
      </div>
    </div>
    <div class="input-section__display">
      {{ input }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioInput',
  data() {
    return {
      dishes: ['Steak', 'Pasta', 'Fried noodle', 'Dumpling', 'Salad'],
      input: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.input-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 1rem;
  &__title {
    font-size: 1rem;
    font-weight: 400;
    color: var(--font-color);
    margin-bottom: 0.5rem;
  }

  &__section {
    display: flex;
    flex-direction: row;
    align-items: center;
    &__wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      &__label {
        font-size: 0.8rem;
        font-weight: 400;
        color: var(--font-color);
      }

      &__radio-input {
        margin-right: 1rem;
        cursor: pointer;
      }
    }
  }

  &__display {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--font-color);
  }
}
</style>
