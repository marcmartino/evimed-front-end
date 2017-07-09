<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <!--<label for='testInput'>Service</label>
    <input type='text' id='testInput' placeholder="testing">
    <button class="search"><icon name="search"></icon></button>-->
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
$borderThickness: 2px;
$darkBackground: #1B5982;
$inputRadius: 5px;// 30px;
$lightGray: #D8D8D8;
$darkGray: #9C9C9C;

body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;


  .accentText {
    color: rgb(17,255,222);
  }
  .tinyText {
    font-size: .75em;
  }
  .bgOverlay {
    color: white;
    a {
      color: white;
      text-decoration: none;
    }
  }
  input, textarea {
    &[type=text], &[type=password] {
      border-radius: $inputRadius;
      padding: 15px 20px;
      background-color: white;
      border: 1px solid $lightGray;
      &::placeholder {
        color: $darkGray;
      }
    }
  }
  .h1 {
    margin: 0;
  }
  .search {
    border-radius: 25px;
    height: 50px;
    width: 50px;
    border: $borderThickness solid white;
    background-color: rgba(143,100,65,.8);// rgba(204,35,34, .8);
    color: white;
    //box-shadow: 0 0 0 1px rgb(143, 100, 65);
    display: inline-block;
    .fa-icon {
      width: auto;
      height: 1.5em; /* or any other relative font sizes */
    }
  }
  .eviButton {
    border-radius: 30px;
    padding: 10px 30px;
    display: inline-block;
    background-color: rgba(143,100,65,.8);// rgba(204,35,34, .8);// white;
    border: $borderThickness solid white;
    text-transform: uppercase;
    //box-shadow: 0 0 0 1px rgb(143, 100, 65);
    cursor: pointer;
    color: white;
    font-weight: bold;
    &:hover {
      background-color: rgba(143,100,65,.9);
    }

  }

}
</style>
