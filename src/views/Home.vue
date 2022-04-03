<template>
  <div>
    <div class="home__router">
      <router-link to="/users" class="home__router--companion"
        >Companion</router-link
      >
      <router-link to="/input" class="home__router--input">Options</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home {
  &__router {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    &--companion,
    &--input {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 30px;
      font-size: 1rem;
      font-weight: 400;
      color: var(--font-color);
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        text-decoration-color: #ff6600;
        color: #ff6600;
      }
    }

    &--companion {
      margin-right: 2rem;
    }
  }
}
</style>
