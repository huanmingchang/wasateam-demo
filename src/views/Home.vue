<template>
  <div class="home" :class="{ theme_dark: mode === 'dark' }">
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
    <div class="home__router">
      <router-link to="/users" class="home__router--users">Users</router-link>
      <router-link to="" class="home__router--input">Input</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      mode: 'light',
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
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
    margin-bottom: 0.5rem;
    font-size: 2rem;
    font-weight: 700;
    color: var(--font-color);
  }

  &__subtitle {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    color: var(--secondary-font-color);
  }

  &__toggle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    label {
      font-size: 0.8rem;
      color: var(--font-color);
    }

    &__light-input,
    &__dark-inpout {
      margin-left: 0.5rem;
    }
    &__light-input {
      margin-right: 2rem;
    }
  }

  &__router {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    &--users,
    &--input {
      font-size: 1rem;
      font-weight: 400;
      color: var(--font-color);
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }

    &--users {
      margin-right: 2rem;
    }
  }
}
</style>
