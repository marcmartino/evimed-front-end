<template>
  <div>
    <div class="searchPage">
      <div class="bgOverlay">
        <evi-header class="invertedColor"></evi-header>

        <div class="signUpForm">
          <h1>Join Us</h1>

          <form id="joinInputs">
            <label for="joinFirstName">Full Name</label>
            <input type="text" id="joinFirstName">
            <label for="joinEmail">User/Email</label>
            <input type="text" id="joinEmail">
            <div id="passwordInputs">
              <div><label for="joinPass">Password</label>
                <input id="joinPass" type="text"></div>
              <div>
                <label for="joinPassAgain">Confirm Password</label><input id="joinPassAgain" type="text"></div>
            </div>
            <router-link to="/" class="eviButton" id="signUpButton">Sign Up</router-link>
            <div class="tinyText" id="joinDisclaimer">By clicking Create Account, you agree to our
              <router-link to="/terms-of-service">Terms</router-link>
              and that you have read our <router-link to="/data-policy">Data Policy</router-link>,
              including our <router-link to="/cookie-use">Cookie Use</router-link>.
            </div>
          </form>
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
    name: 'signUpEmail',
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

    label, input, a {
      margin-bottom: 15px;
    }

    .buttonSeparator {
      margin: 20px 0;
    }

    #joinInputs {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #passwordInputs {
      display: flex;
      flex-direction: row;
      align-content: space-between;
      margin-bottom: 15px;
      &> div {
        margin: 0 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    h1 {
      font-size: 5em;
      margin: 0;
      text-transform: uppercase;
    }
    #joinDisclaimer {
      max-width: 50%;
      text-align: center;
      margin-top: 15px;
    }
    #goToSignin {
      margin-top: 40px;
      @media (min-width: $breakpoint) {
        margin-top: 150px;
      }
    }
  }
</style>
