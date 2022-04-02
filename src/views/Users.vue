<template>
  <div class="users">
    <h1 class="users__title">Users API</h1>
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
    }
  },
  methods: {
    async getUsers() {
      try {
        const response = await usersAPI.getUsers()

        if (response.status !== 200) {
          throw new Error(response.statusText)
        }

        this.users = response.data
      } catch (error) {
        console.log(error)
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
.users {
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
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    width: 100%;
    &__card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
        margin-bottom: 0.5rem;
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--font-color);
      }

      &--city {
        font-size: 1rem;
        font-weight: 400;
        color: var(--secondary-font-color);
      }
    }
  }
}
</style>
