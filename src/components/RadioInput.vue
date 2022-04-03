<template>
  <div class="input-section">
    <div class="input-section__title">My favorite language</div>
    <div class="input-section__section">
      <div
        v-for="language in languages"
        :key="language.index"
        class="input-section__section__wrapper"
      >
        <label for="" class="input-section__section__wrapper__label">{{
          language
        }}</label>
        <input
          type="radio"
          name="radio-input"
          class="input-section__section__wrapper__radio-input"
          :value="language"
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
      languages: ['Javascript', 'Python', 'C++', 'Java', 'Ruby'],
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
        font-size: 1rem;
        font-weight: 400;
        color: var(--font-color);
      }

      &__radio-input {
        margin-right: 1rem;
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
