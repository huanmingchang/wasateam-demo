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
@import '../styles/mixin.scss';

.home {
  &__router {
    @include flex(row, center, center);
    margin: 2rem auto;
    &--companion,
    &--input {
      @include flex(row, center, center);
      @include font(var(--font-color), 1rem, 400);
      width: 60px;
      height: 30px;
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
