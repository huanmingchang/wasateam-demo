<template>
  <div v-if="!isLoading" class="users">
    <h1 class="users__title">Companion</h1>
    <div class="users__cards">
      <div v-for="user in users" :key="user.index" class="users__cards__card">
        <div class="users__cards__card--name">
          {{ user.name }}
        </div>
        <div class="users__cards__card--city">
          {{ user.city }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from './../apis/users'

export default {
  name: 'Users',
  data() {
    return {
      users: [],
      isLoading: false,
    }
  },
  methods: {
    async getUsers() {
      try {
        this.isLoading = true
        const response = await usersAPI.getUsers()

        if (response.status !== 200) {
          throw new Error(response.statusText)
        }

        this.users = response.data
        this.isLoading = false
      } catch (error) {
        console.log(error)
        this.isLoading = false
        alert('現在無法載入資料，請稍後再試')
      }
    },
  },
  created() {
    this.getUsers()
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';

.users {
  @include flex(column, start, center);
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
  background: var(--background);
  &__title {
    @include font(var(--font-color), 1.5rem, 700);
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    text-align: center;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    width: 100%;
    &__card {
      @include flex(column, center, center);
      text-align: center;
      border: 1px solid var(--border);
      border-radius: 8px;
      height: 200px;
      width: 100%;
      background: var(--card);
      &:hover {
        border-color: #ff6600;
        transform: scale(1.05);
      }
      &--name {
        @include font(var(--font-color), 1.3rem, 700);
        margin-bottom: 0.5rem;
      }

      &--city {
        @include font(var(--secondary-font-color), 1rem, 400);
      }
    }
  }
}
</style>
