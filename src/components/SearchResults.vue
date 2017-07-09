<template>
  <div>
    <div class="searchResults">
      <evi-header class="blueHeader invertedColor" ></evi-header>

      <div class='content'>
        <div v-if="resultsObj.length">

          <div class="searchResult" v-for="searchResult in resultsObj">

            <div class="businessName">
              <span>{{searchResult.businessName}}</span></div>
            <div class="businessImage">
              <div v-bind:style="{ backgroundImage: 'url(' + searchResult.image + ')' }"></div>
            </div>
            <div class="businessText">
              <h3>{{searchResult.drName}}</h3>
              <div class="businessRating">
                <span>Rating: </span>
                <span class="stars">
                  <icon v-for="n in searchResult.rating" name='star'></icon></span>
              </div>
              <div class="businessDescription">{{searchResult.description}}</div>
              <button @click="viewPage(searchResult.id)" class="eviButton">Read More</button>
            </div>
          </div>
        </div>
        <div v-else>
          no search results
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
  name: 'searchResults',
  data () {
    return {
      resultsObj: [
        {
          id: 10,
          image: '/static/drCarrasco.jpg',
          businessName: 'Clinic Tijuana',
          drName: 'Dr. Alexandra Patricia Morgan Carrasco',
          rating: 3,
          description: 'A person who is licensed to practice medicine and has trained at a school of medicine or a school of osteopathic medicine; a physician. A person who is licensed to practice medicine and has trained at a school of medicine or a school of osteopathic medicine; a physician.'
        },
        {
          id: 11,
          image: '/static/drPardo.png',
          businessName: 'Clinic Xolos',
          drName: 'Dr. Juan Carlos Nunez Pardo',
          rating: 5,
          description: 'A person who is licensed to practice medicine and has trained at a school of medicine or a school of osteopathic medicine; a physician. A person who is licensed to practice medicine and has trained at a school of medicine or a school of osteopathic medicine; a physician.'
        }
      ]
    }
  },
  methods: {
    viewPage: function (id) {
      this.$router.push(`/doctor/${id}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$breakpoint: 700px;
$largeBreakpoint: 1000px;
$darkBackground: #1B5982;
$yellowAccent: #ffC600;

.blueHeader {
  background-color: rgba(27,89,130,.8) !important;
}

.searchResults {
  display: grid;
  grid-template:
          "header"
          "contactMap"
          "messageUsForm"
          "footer";
  grid-template-rows: minmax(50px, 15vh);

  @media (min-width: $breakpoint) {
    grid-template:
            "header header"
            "messageUsForm contactMap"
            "footer footer";
    //grid-column-gap: 40px;
    grid-template-rows: minmax(50px, 15vh);
  }
  @media (min-width: $largeBreakpoint) {
    grid-template:
            "header header header header"
            ". messageUsForm contactMap ."
            "footer footer footer footer";
    grid-template-rows: minmax(50px, 15vh);
  }
}

.searchResult {
  display: flex;
  flex-direction: row;
  margin: 20px 10px 40px;
  justify-content: center;

}
.businessName {
  position: relative;
  width: 2.5em;
  & > span {
    transform: rotate(270deg);
    display: block;
    bottom: 0;
    position: absolute;
  }
}
.businessImage {
  $imgHeight: 300px;
  $imgWidth: 150px;
  height: $imgHeight;
  width: $imgWidth;
  border: 10px solid $darkBackground;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  margin: 0 50px 0 20px;
  & > div {
    height: $imgHeight;
    width: $imgWidth;
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: white;
    box-sizing: border-box;
  }
}
.businessText {
  max-width: 45%;
  h3 {
    text-transform: uppercase;
    margin: 20px 0;
  }
  .businessDescription {
    margin-bottom: 20px;
  }
}
.businessRating {
  margin-bottom: 10px;
}
.stars {
  color: $yellowAccent;

}

.searchResult:nth-of-type(even) {
  flex-direction: row-reverse;
  .businessImage {
    margin: 0 20px 0 50px;
    & > div {
      left: auto;
      right: 10px;
    }
  }
}

</style>
