<template>
  <div class="input-section">
    <div class="input-section__title">Next destination</div>
    <div class="input-section__selections">
      <select
        name="continents"
        class="input-section__selections__continents"
        v-model="selectedContinent"
      >
        <option
          class="input-section__selections__continents--options"
          value=""
          selected
          disabled
          hidden
        >
          Continents
        </option>
        <option
          v-for="continent in continents"
          :key="continent.index"
          class="input-section__selections__continents--options"
          :value="continent"
        >
          {{ continent }}
        </option>
      </select>
      <select
        v-if="selectedContinent === ''"
        name="countries"
        class="input-section__selections__countries"
      >
        <option
          class="input-section__selections__countries--options"
          value=""
          selected
          disabled
          hidden
        >
          Country
        </option>
      </select>
      <select
        v-if="selectedContinent === 'Asia'"
        name="countries"
        class="input-section__selections__countries"
        v-model="selectedCountry"
      >
        <option
          class="input-section__selections__countries--options"
          value=""
          selected
          disabled
          hidden
        >
          Country
        </option>
        <option
          v-for="country in asiaCountries"
          :key="country.index"
          class="input-section__selections__countries--options"
          :value="country"
        >
          {{ country }}
        </option>
      </select>
      <select
        v-if="selectedContinent === 'Europe'"
        name="countries"
        class="input-section__selections__countries"
        v-model="selectedCountry"
      >
        <option
          class="input-section__selections__countries--options"
          value=""
          selected
          disabled
          hidden
        >
          Country
        </option>
        <option
          v-for="country in europeCountries"
          :key="country.index"
          class="input-section__selections__countries--options"
          :value="country"
        >
          {{ country }}
        </option>
      </select>
      <select
        v-if="selectedContinent === 'America'"
        name="countries"
        class="input-section__selections__countries"
        v-model="selectedCountry"
      >
        <option
          class="input-section__selections__countries--options"
          value=""
          selected
          disabled
          hidden
        >
          Country
        </option>
        <option
          v-for="country in americaCountries"
          :key="country.index"
          class="input-section__selections__countries--options"
          :value="country"
        >
          {{ country }}
        </option>
      </select>
    </div>
    <button class="input-section__button" @click.stop.prevent="showResult">
      Submit
    </button>
    <div v-if="isShown" class="input-section__display">
      I wanna to go {{ selectedCountry }} in {{ selectedContinent }}
    </div>
    <div v-if="isShown" class="input-section__actual">
      No, you should go to WasaTeam instead
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectInput',
  data() {
    return {
      continents: ['Asia', 'America', 'Europe'],
      asiaCountries: [
        'Indonesia',
        'Japan',
        'Korea',
        'Malaysia',
        'Philippine',
        'Taiwan',
        'Thailand',
        'Vietnam',
      ],
      europeCountries: [
        'Britain',
        'Czech Republic',
        'Denmark',
        'France',
        'Germany',
        'Italy',
        'Spain',
        'Swiss',
      ],
      americaCountries: [
        'Brazil',
        'Canada',
        'Chile',
        'Mexico',
        'Panama',
        'Peru',
        'United States',
      ],
      selectedContinent: '',
      selectedCountry: '',
      isShown: false,
    }
  },
  methods: {
    showResult() {
      this.isShown = true
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
  &__title {
    font-size: 1rem;
    font-weight: 400;
    color: var(--font-color);
    margin-bottom: 0.5rem;
  }

  &__selections {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    &__continents {
      margin-right: 2rem;
      padding: 0.5rem;
      width: 150px;
      height: 40px;
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--font-color);
      border: 1px solid var(--border);
      border-radius: 4px;
      background: var(--background);
    }

    &__countries {
      padding: 0.5rem;
      width: 150px;
      height: 40px;
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--font-color);
      border: 1px solid var(--border);
      border-radius: 4px;
      background: var(--background);
    }
  }

  &__button {
    margin-top: 2rem;
    font-size: 0.5rem;
    color: var(--font-color);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #ff6600;
      color: #ff6600;
    }
  }

  &__display {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--font-color);
  }

  &__actual {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 0.5rem;
    font-weight: 400;
    color: var(--secondary-font-color);
  }
}
</style>
