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
@import '../styles/mixin.scss';

.input-section {
  @include input-section;
  &__title {
    @include font(var(--font-color), 1rem, 400);
    margin-bottom: 0.5rem;
  }

  &__section {
    @include flex(row, start, center);
    &__wrapper {
      @include flex(row, start, center);
      &__label {
        @include font(var(--font-color), 0.8rem, 400);
      }

      &__radio-input {
        margin-right: 1rem;
        cursor: pointer;
      }
    }
  }

  &__display {
    @include font(var(--font-color), 1rem, 700);
    margin-top: 2rem;
  }
}
</style>
