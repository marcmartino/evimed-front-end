<template>
  <div>
    <div class="searchPage">
      <div class="bgOverlay">
        <evi-header class="invertedColor"></evi-header>

        <div class="signUpForm">
          <h1>Join Us</h1>
          <div id="joinInstructions">Choose one of the following sign<br/>up methods</div>
          <div id="joinButtons">
            <div id="socialJoinButtons">
              <button class="eviButton">
                <icon name="facebook"></icon>Facebook
              </button>
              <button class="eviButton">
                <icon name="twitter"></icon>Twitter
              </button>
            </div>
            <div class="buttonSeparator">Or</div>
            <router-link id="joinWithEmail" to="/sign-up-email" class="eviButton">Email</router-link>
          </div>
          <router-link id="goToSignin" to="/sign-in">Already have an account? Sign In</router-link>
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
    name: 'signUp',
    data () {
      return {
      }
    },
    methods: {
      loginWithEmail: function () {
        this.$router.push('/sign-up-email')
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
              'sign-up-form';
      grid-row-gap: 0px;
      padding-bottom: 30px;
      grid-template-rows: minmax(50px, 15vh);

      @media (min-width: $breakpoint) {
        grid-template:
                'header header header'
                '. sign-up-form .';
        grid-template-columns: 1fr 3fr 1fr;
        grid-column-gap: 50px;
      }
      @media (min-width: $largeBreakpoint) {
        grid-template-columns: 2fr 3fr 2fr;
      }
    }
  }


  .signUpForm {
    grid-area: sign-up-form;
    flex-direction: column;
    display: flex;
    align-items: center;

    #joinInstructions {
      text-align: center;
      margin-bottom: 30px;
      font-size: .8em;
    }

    .buttonSeparator {
      margin: 20px 0;
    }

    #joinButtons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      font-size: 5em;
      margin: 0;
      text-transform: uppercase;
    }
    #goToSignin {
      margin-top: 40px;
      @media (min-width: $breakpoint) {
        margin-top: 150px;
      }
    }
    #joinWithEmail {
      //display: block;
    }
  }
</style>
