<template>
  <div class="input-section">
    <label for="" class="input-section__label">What do you prefer?</label>
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
@import '../styles/mixin.scss';

.input-section {
  @include input-section;
  &__label {
    @include font(var(--font-color), 1rem, 400);
    margin-bottom: 0.5rem;
  }

  &__text-input {
    @include font(var(--font-color), 1rem, 400);
    padding: 0.5rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: var(--background);
    &::placeholder {
      @include font(var(--secondary-font-color), 0.8rem, 400);
    }
    &:hover,
    &:focus {
      border-color: #ff6600;
    }
  }

  &__display {
    @include display;
  }

  &__computed {
    @include remark;
  }
}

.button {
  @include button;
}
</style>
