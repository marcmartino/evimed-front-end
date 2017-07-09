<template>
  <footer class="eviFooter">
    <div class="footerContent">
      <router-link to="/">
        <img class="evimedLogo" src='../assets/evimed.svg'>
      </router-link>
      <div class='footerNavigationLinks'>
        <router-link v-for="link in navLinks" v-bind:to="link.url">{{link.label}}</router-link>
      </div>
      <div class='footerSocialLinks'>
        <a v-for="link in socialLinks" v-bind:href="link.url"><icon v-bind:name="link.label"></icon></a>
      </div>
      <div class='footerBottomLinks'>
        <a v-for="link in bottomLinks" v-bind:href="link.url">{{link.label}}</a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'eviFooter',
    data () {
      return {
        navLinks: [
          {label: 'Home', url: '/'},
          {label: 'About', url: '/about'},
          {label: 'Sign Up', url: '/sign-up'},
          {label: 'Contact', url: '/contact-us'}
        ],
        socialLinks: [
          {label: 'twitter', url: 'http://twitter.com'},
          {label: 'facebook', url: 'http://facebook.com'},
          {label: 'google-plus', url: 'http://googleplus.com'}
        ],
        bottomLinks: [
          {label: 'Security', url: '/security'},
          {label: 'Privacy', url: '/privacy'},
          {label: 'Terms of Service', url: '/termsOfService'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $darkBackground: #1B5982;
  footer.eviFooter {
    padding: 30px 0;
    background-color: $darkBackground;
    grid-area: footer;
    a {
      color: white;
      text-decoration: none;
    }
    .evimedLogo {
      max-width: 150px;
    }
  }
  .footerContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;

    & > * {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .footerNavigationLinks {
      font-size: 0.9em;
      text-transform: uppercase;
      & > * {
        min-width: 75px;
      }
    }
    .footerSocialLinks {
      & > * {
        min-width: 25px;
      }
    }
    .footerBottomLinks {
      font-size: 0.85em;
      & > * {
        min-width: 65px;
      }
    }
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
