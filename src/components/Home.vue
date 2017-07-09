<template>
  <div>
    <div class="homePage">
      <div class="pageContent">
        <evi-header class=""></evi-header>

        <div class="homeCont">
          <h2>What is <span class="accentText">Evimed?</span></h2>
          <div class="separator">
            <icon name="circle" scale=".75"></icon>
            <icon name="circle" scale=".75"></icon>
            <icon name="circle" scale=".75"></icon>
          </div>
          <div id="homeDesc">Evimed is a platform that connects people that are looking to get healthcare services, or trying to improve their wellness. We also offer additional services such as lodging, private transportation, and local tourism.</div>
          <router-link to="/search" id="searchCTA">
            <div>
              <icon name="search" scale="3"></icon>
            </div>
            <div>Search Evimed Now</div>
          </router-link>


        </div>
        <div id="aboutVidCont"><img src="/static/aboutVideo.png" alt="About Us"></div>
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
    name: 'home',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $breakpoint: 700px;
  $largeBreakpoint: 1000px;
  $darkBackground: #1B5982;
  $yellowAccent: #ffC600;

  .homePage {

    & > .pageContent {
      display: grid;
      grid-template:
        'header'
        'about-cont'
        'about-vid';
      grid-row-gap: 0px;
      padding-bottom: 30px;
      grid-template-rows: minmax(50px, 15vh);

      @media (min-width: $breakpoint) {
        grid-template:
          'header header header'
          '. about-cont .'
          'about-vid about-vid about-vid';
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: minmax(50px, 15vh);
        grid-column-gap: 50px;
      }
      @media (min-width: $largeBreakpoint) {
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: minmax(50px, 15vh);
      }
    }
  }

  #aboutVidCont {
    grid-area: about-vid;
    text-align: center;
    img {
      max-width: 100%;
    }
  }

  .homeCont {
    grid-area: about-cont;
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;

    #homeDesc {
      width: 75%;

    }
    .separator {
      font-size: 1em;
      color: $yellowAccent;

      .fa-icon {
        font-size: 1em;
      }
    }

    & > * {
      margin-bottom: 35px;
    }
    h2 {
      text-transform: uppercase;
      font-size: 1.8em;
      margin-top: 0;
      .accentText {
        color: $darkBackground !important;
      }
    }
    #searchCTA {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 3px solid black;
      border-radius: 50px;
      padding: 20px;
      color: $darkBackground;
      text-decoration: none;

    }


  }
</style>
