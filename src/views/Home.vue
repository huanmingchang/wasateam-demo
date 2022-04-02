<template>
  <div>
    <div class="home__router">
      <router-link to="/users" class="home__router--users">Users</router-link>
      <router-link to="" class="home__router--input">Input</router-link>
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
    &--users,
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
      border: 1px solid var(--border);
      border-radius: 4px;
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
