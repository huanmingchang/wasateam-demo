<template>
  <div class="input-section">
    <label for="" class="input-section__label">Example</label>
    <input
      type="text"
      class="input-section__text-input"
      placeholder="Type something..."
      v-model="input"
    />
    <div class="input-section__display">{{ input }}</div>
    <div class="input-section__computed">{{ inputLength | letters }}</div>
    <button class="button" @click.stop.prevent="clear">Clear</button>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  data() {
    return {
      input: '',
    }
  },
  methods: {
    clear() {
      this.input = ''
    },
  },
  computed: {
    inputLength: function () {
      return this.input.length
    },
  },
  filters: {
    letters: function (value) {
      return value + ' letters'
    },
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

  &__label {
    font-size: 1rem;
    font-weight: 400;
    color: var(--font-color);
    margin-bottom: 0.5rem;
  }

  &__text-input {
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--font-color);
    border: 1px solid var(--border);
    border-radius: 4px;
    background: var(--background);
    &::placeholder {
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--secondary-font-color);
    }
  }

  &__display {
    width: 80%;
    height: 80%;
    margin-top: 1rem;
    color: var(--font-color);
    background: var(--background);
  }

  &__computed {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.5rem;
    color: var(--font-color);
  }
}

.button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 0.5rem;
  color: var(--font-color);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #ff6600;
    color: #ff6600;
  }
}
</style>
