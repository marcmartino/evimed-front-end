<template>
  <div>
    <div class="searchPage">
      <div class="bgOverlay">
        <evi-header class="invertedColor"></evi-header>

          <section class="searchInputs">
            <form>
              <label for="searchServiceInput">Service</label>
              <input id="searchServiceInput" type="text" placeholder="Clinic, service, doctor, etc">
              <label for="searchWhenInput">When</label>
              <input id="searchWhenInput" type="text" placeholder="Date">
              <button class="search" @click="login"><icon name="search"></icon></button>
            </form>
          </section>

          <section class="searchText">
            <h2>
              With <span class="accentText">evimed</span><br/>
              You can <span class="accentText">search</span><br/>
              For Doctors
            </h2>
            <div>Start by searching for doctors clinics or medical services you need</div>
          </section>


      </div>
      <evi-footer></evi-footer>
    </div>
  </div>
</template>

<script>
import EviHeader from './EviHeader'
import EviFooter from './EviFooter'

export default {
  components: {EviHeader, EviFooter},
  name: 'search',
  data () {
    return {
    }
  },
  methods: {
    login: function () {
      this.$router.push('/searchResults')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$breakpoint: 700px;
$largeBreakpoint: 1000px;
$darkBackground: #1B5982;

.searchPage {
  background-image: url('/static/clipboard_bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: $darkBackground;

  & > .bgOverlay {
    background-color: rgba(27,89,130,.8);
    display: grid;
    grid-template:
            'header'
            'search-text'
            'search-inputs';
    grid-row-gap: 30px;
    padding-bottom: 30px;
    grid-template-rows: minmax(50px, 15vh);

    @media (min-width: $breakpoint) {
      grid-template:
              'header header'
              'search-inputs search-text';
      grid-template-columns: 3fr 2fr;
      grid-column-gap: 50px;
      grid-template-rows: minmax(50px, 15vh);
    }
    @media (min-width: $largeBreakpoint) {
      grid-template:
              'header header header header'
              '. search-inputs search-text .';
      grid-template-columns: 1fr 3fr 3fr 1fr;
      grid-column-gap: 50px;
      grid-template-rows: minmax(50px, 15vh);
    }
  }
}

.searchText {
  grid-area: search-text;
  color: white;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding: 0 10%;
  h2 {
    text-transform: uppercase;
    color: white;
    font-size: 2.5em;
    margin: 0;
    line-height: 1.1em;
    @media (min-width: $breakpoint) {
      margin: 1em 0 0 0;
    }
  }
}

.searchInputs {
  grid-area: search-inputs;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  align-items: center;
  @media (min-width: $breakpoint) {
    align-items: flex-end;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    //max-width: 500px;
    padding: 0 20px;
  }
  input[type=text] {
    margin: 20px;
    width: 100%;
  }
  label {
    color: white;
    font-size: 1.2em;
  }
}
</style>
