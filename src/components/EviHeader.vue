<template>
  <header class="eviHeader">
    <!--<div class="headerContent">-->
      <router-link to="/" class="headerLogo">
        <img class="evimedLogo light" src='../assets/evimed.svg'>
        <img class="evimedLogo dark" src="../assets/evimed.dark.svg">

      </router-link>

      <div class="headerRight">
        <div v-if="menuOpen" class="hiddenHeaderLinks">

          <router-link v-for="link in socialLinks" v-bind:to="link.url"><icon v-bind:name="link.label"></icon></router-link>
          <router-link v-for="link in navLinks" v-bind:to="link.url">{{link.label}}</router-link>

        </div>
        <span class="menuToggle" @click="headerLinksToggle">
          <icon v-if="!menuOpen" name='align-left'></icon>
          <icon v-if="menuOpen" name='close'></icon></span>
      </div>
    <!--</div>-->
  </header>
</template>

<script>
  export default {
    name: 'eviHeader',
    data () {
      return {
        menuOpen: false,
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
        ]
      }
    },
    methods: {
      headerLinksToggle: function () {
        this.menuOpen = !this.menuOpen
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $darkBackground: #1B5982;

  header.eviHeader.invertedColor {
    a, .fa-icon {
      color: white;
    }
    .headerLogo {
      background-color: transparent;
    }
    .evimedLogo {
      &.light {
        display: inline-block;
      }
      &.dark {
        display: none;
      }
    }
  }
  .evimedLogo {
    &.light {
      display: none;
    }
  }
  header.eviHeader {
    //padding: 30px 0;
    background-color: transparent;
    grid-area: header;
    a, .fa-icon {
      color: $darkBackground;
      text-decoration: none;
    }
    .evimedLogo {
      //width: 150px;
    }
  }
  .eviHeader {
    display: flex;
    flex-direction: row;
    padding: 0 30px;
    align-items: center;
    //height: 75px;

    .headerLogo {
      //justify-self: flex-;
      //flex-grow: 1;
    }

    .headerRight {
      flex-grow: 4;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .hiddenHeaderLinks {
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      flex-grow: 1;
      max-width: 450px;
      text-wrap: normal;
      &> a {

      }
    }
    .headerNavigationLinks {
      font-size: 0.9em;
      text-transform: uppercase;
      & > * {
        min-width: 75px;
      }
    }
    .headerSocialLinks {
      & > * {
        min-width: 25px;
      }
    }
  }
</style>
