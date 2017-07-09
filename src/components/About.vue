<template>
  <div>
    <div class="aboutPage">
      <div class="bgOverlay">
        <evi-header class="invertedColor"></evi-header>

        <div class="aboutContainer">
          <div class="tinyText">INTRODUCING</div>
          <img src='./../assets/evimed.svg' alt="Evimed"
               class="giantLogo" width="50%">
          <div class="aboutBlurb tinyText">We will help you to find the doctor, service, or medical procedure that you are looking for, it is an easy,
            low cost, and premium quality experience</div>
          <router-link class="eviButton" to="/about-cont">Know More</router-link>
        </div>

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
    name: 'about',
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

  .aboutPage {
    background-image: url('/static/clipboard_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: $darkBackground;

    & > .bgOverlay {
      background-color: rgba(27,89,130,.8);
      display: grid;
      grid-template:
              'header'
              'about-container';
      grid-row-gap: 0px;
      padding-bottom: 30px;
      grid-template-rows: minmax(50px, 15vh) minmax(200px, 60vh);

      @media (min-width: $breakpoint) {
        grid-template:
                'header header header'
                '. about-container .';
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: minmax(50px, 15vh);
        grid-column-gap: 50px;
      }
      @media (min-width: $largeBreakpoint) {
        grid-template-columns: 2fr 5fr 2fr;
        grid-template-rows: minmax(50px, 15vh);
      }
    }
  }


  .aboutContainer {
    grid-area: about-container;
    flex-direction: column;
    display: flex;
    align-items: center;

    & > * {
      margin-bottom: 20px;
    }
    .aboutBlurb {
      max-width: 40%;
      text-align: center;
    }
    .eviButton {
      margin-top: 15px;
    }
  }
</style>
