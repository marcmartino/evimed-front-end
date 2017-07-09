<template>
  <div>
    <div class="viewDrResults">
      <evi-header class="blueHeader invertedColor" ></evi-header>

          <div class="drDetailDescription">
            <h1 class="businessName">
              {{doctorDetails.businessName}}
            </h1>

            <div class="businessText">
              <h3>{{doctorDetails.drName}}</h3>
              <div class="businessRating">
                <span>Rating: </span>
                <span class="stars">
                  <icon v-for="n in doctorDetails.rating" name='star'></icon></span>
              </div>
              <div class="businessDescription">{{doctorDetails.description}}</div>
              <button @click="viewPage(doctorDetails.id)" class="eviButton">Book an Appointment</button>
            </div>
          </div>

          <div class="drDetailImage" v-bind:style="{ backgroundImage: 'url(' + doctorDetails.largeImage + ')' }"></div>

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
      doctorDetails: {
        10: {
          id: 10,
          image: '/static/drCarrasco.jpg',
          largeImage: '/static/drCarrasco.expanded.jpg',
          businessName: 'Clinic Tijuana',
          drName: 'Dr. Alexandra Patricia Morgan Carrasco',
          rating: 3,
          description: 'A person who is licensed to practice medicine and has trained at a school of medicine or a school of osteopathic medicine; a physician. A person who is licensed to practice medicine and has trained at a school of medicine or a school of osteopathic medicine; a physician.'
        },
        11: {
          id: 11,
          image: '/static/drPardo.png',
          businessName: 'Clinic Xolos',
          drName: 'Dr. Juan Carlos Nunez Pardo',
          rating: 5,
          description: 'A person who is licensed to practice medicine and has trained at a school of medicine or a school of osteopathic medicine; a physician. A person who is licensed to practice medicine and has trained at a school of medicine or a school of osteopathic medicine; a physician.'
        }
      }[this.$route.params.id]
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

.blueHeader {
  background-color: rgba(27,89,130,.8) !important;
}

.viewDrResults {
  display: grid;
  grid-template:
          "header header"
          "doctorDescription doctorImage"
          "footer footer";
  grid-column-gap: 40px;
  grid-template-columns:
          3fr 2fr;
  grid-template-rows: minmax(50px, 15vh);
  @media (min-width:$largeBreakpoint) {
    grid-template:
            "header header header header"
            ". doctorDescription doctorImage ."
            "footer footer footer footer";
    grid-template-columns: 1fr 3fr 3fr 1fr;
    grid-column-gap: 50px;
    grid-template-rows: minmax(50px, 15vh);
  }
}

.drDetailDescription {
  padding: 100px 0 100px 60px;
  grid-area: doctorDescription;
}
.drDetailImage {
  grid-area: doctorImage;
  background-position: center;
  background-size: cover;

}





.businessText {
  //max-width: 45%;
  h3 {
    text-transform: uppercase;
    margin: 20px 0;
  }
  .businessDescription {
    margin-bottom: 20px;
  }
  .eviButton {
    background-color: $darkBackground !important;
    color: white;
  }
}
.businessName {
  margin: 0;
  font-size: 4em;
  line-height: .8em
}
.businessRating {
  margin-bottom: 10px;
}
.stars {
  color: $yellowAccent;
}

</style>
