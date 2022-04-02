<template>
  <div class="input">
    <h1 class="input__title">Input</h1>
    <div class="input__section">
      <label for="" class="input__section__label">Text</label>
      <input
        type="radio"
        name="type"
        class="input__section__input text"
        checked
        value="text"
        v-model="inputType"
      />
      <label for="" class="input__section__label">Radio</label>
      <input
        type="radio"
        name="type"
        class="input__section__input radio"
        value="radio"
        v-model="inputType"
      />
      <label for="" class="input__section__label">Select</label>
      <input
        type="radio"
        name="type"
        class="input__section__input"
        value="select"
        v-model="inputType"
      />
    </div>
    <TextInput v-if="inputType === 'text'" />
    <RadioInput v-if="inputType === 'radio'" />
    <SelectInput v-if="inputType === 'select'" />
  </div>
</template>

<script>
import TextInput from './../components/TextInput.vue'
import RadioInput from './../components/RadioInput.vue'
import SelectInput from './../components/SelectInput.vue'

export default {
  name: 'Input',
  components: {
    TextInput,
    RadioInput,
    SelectInput,
  },
  data() {
    return {
      inputType: 'text',
    }
  },
}
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
  background: var(--background);
  &__title {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--font-color);
  }

  &__section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    label {
      font-size: 0.8rem;
      color: var(--font-color);
    }

    input {
      margin-left: 0.5rem;
      cursor: pointer;
    }

    .radio,
    .text {
      margin-right: 2rem;
    }
  }
}
</style>
