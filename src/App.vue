<template>
  <div id="app" class="home" :class="{ theme_dark: mode === 'dark' }">
    <h1 class="home__title">Wasateam Demo</h1>
    <div class="home__subtitle">This is the demo page</div>
    <div class="home__toggle">
      <label for="light-mode" class="home__toggle__light">Light</label>
      <input
        type="radio"
        name="mode"
        class="home__toggle__light-input"
        checked
        value="light"
        v-model="mode"
      />
      <label for="dark-mode" class="home__toggle__light">Dark</label>
      <input
        type="radio"
        name="mode"
        class="home__toggle__dark-input"
        value="dark"
        v-model="mode"
      />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 'light',
    }
  },
}
</script>

<style lang="scss">
@import './styles/mixin.scss';

#app {
  width: 100vw;
  height: 100vh;
  background: var(--background);
}

.home {
  @include flex(column, start, center);
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
  background: var(--background);
  &__title {
    @include font(var(--font-color), 2rem, 700);
    width: 100%;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  &__subtitle {
    @include font(var(--secondary-font-color), 1rem, 400);
    width: 100%;
    text-align: center;
  }

  &__toggle {
    @include flex(row, center, center);
    margin-top: 1rem;

    label {
      @include font(var(--font-color), 0.8rem, 400);
    }

    &__light-input,
    &__dark-input {
      margin-left: 0.5rem;
      cursor: pointer;
    }
    &__light-input {
      margin-right: 2rem;
    }
  }
}
</style>
