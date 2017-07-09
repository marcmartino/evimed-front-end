<template>
  <div>
    <div class="signInPage">
      <div class="bgOverlay">
        <evi-header class="invertedColor"></evi-header>

        <form class="signInForm">
          <h1>Sign In</h1>
          <label for="loginEmail">Username/Email</label>
          <input type="text" id="loginEmail">
          <label for="loginPassword">Password</label>
          <input type="password" id="loginPassword">
          <button class="eviButton">Log In</button>
          <router-link to="/forgot-password" id="goToForgotPassword">Forgot your password?</router-link>
          <router-link id="goToSignUp" to="/sign-up">Sign Up Now</router-link>
        </form>

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
    name: 'signIn',
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

  .signInPage {
    background-image: url('/static/clipboard_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: $darkBackground;

    & > .bgOverlay {
      background-color: rgba(27,89,130,.8);
      display: grid;
      grid-template:
              'header'
              'sign-in-form';
      grid-row-gap: 0px;
      padding-bottom: 30px;
      grid-template-rows: minmax(50px, 15vh);

      @media (min-width: $breakpoint) {
        grid-template:
                'header header header'
                '. sign-in-form .';
        grid-template-columns: 1fr 3fr 1fr;
        grid-column-gap: 50px;
      }
      @media (min-width: $largeBreakpoint) {
        grid-template-columns: 2fr 3fr 2fr;
      }
    }
  }


  .signInForm {
    grid-area: sign-in-form;
    flex-direction: column;
    display: flex;
    align-items: center;

    label, input, button {
      margin-bottom: 15px;
    }
    #loginPassword {
      margin-bottom:30px;
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
    #goToSignUp {
      margin-top: 40px;
      @media (min-width: $breakpoint) {
        margin-top: 150px;
      }
    }
  }
</style>
