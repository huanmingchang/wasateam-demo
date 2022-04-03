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
    <div v-if="isShown" class="input-section__display">
      I wanna to go {{ selectedCountry }} in {{ selectedContinent }}
    </div>
    <div v-if="isShown" class="input-section__actual">
      No, you should go to WasaTeam instead
    </div>
    <button class="input-section__button" @click.stop.prevent="showResult">
      Submit
    </button>
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
      if (!this.selectedContinent || !this.selectedCountry) {
        alert('Please select continent and country first!')
        return
      }
      this.isShown = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';

.input-section {
  @include input-section;
  &__title {
    @include font(var(--font-color), 1rem, 400);
    margin-bottom: 0.5rem;
  }

  &__selections {
    @include flex(row, center, start);
    width: 100%;
    &__continents {
      @include selection;
      margin-right: 2rem;
    }

    &__countries {
      @include selection;
    }
  }

  &__button {
    @include button;
  }

  &__display {
    @include display;
  }

  &__actual {
    @include remark;
  }
}
</style>
