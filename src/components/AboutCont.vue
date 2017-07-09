<template>
  <div>
    <div class="aboutContPage">
      <div class="pageContent">
        <evi-header class=""></evi-header>

        <div class="aboutContContainer">
          <h2>We <span class="accentText">Connect</span><br />
            People</h2>
          <div id="aboutContBlurb">Evimed is a platform that connects people that are looking
            to get better healthcare, or are trying to improve their wellness, we also offer additional services- such as
            lodging, private transport and local tourism.</div>
          <div id="aboutContGraphic">
            <div class="portraitCont"><img src="/static/aboutPatient.jpg" alt="User">
              <span class="tinyText">Users</span></div>
            <div class="vCheckPortrait"><img class="vCheck" src="../assets/vCheck.svg" alt="Evimed Connects Users and Doctors">
              <span class="tinyText">Connecting</span></div>
            <div class='portraitCont'><img src="/static/aboutDoctor.png" alt="Doctor/Clinic Medical Service">
              <span class="tinyText">Medical Service</span></div>
          </div>
          <button id="aboutMore" class='search'>
            <icon name="angle-down"></icon></button>

          <h2>Our Advantages, are your <div class="accentText">Experience</div></h2>

          <div id="aboutContPoints">
            <div class="point">
              <icon class="pointIcon" name="star"></icon>
              <div class="pointName">Quality</div>
              <div class="tinyText">Our doctors and clinics are certified by the international laws of healthcare</div>
            </div>
            <div class="point">
              <icon class="pointIcon" name="tag"></icon>
              <div class="pointName">Price</div>
              <div class="tinyText">You can save up to 65% of the price just by coming to Tijuana,
              with no change in cuality of care or service</div>
            </div>
            <div class="point">
              <icon class="pointIcon" name="thumbs-o-up"></icon>
              <div class="pointName">Safe</div>
              <div class="tinyText">We will take care of you- picking you up at the airport, transport to your
                accommodations as well as to the best local spots</div>
            </div>
            <div class="point">
              <icon class="pointIcon" name="wrench"></icon>
              <div class="pointName">Support</div>
              <div class="tinyText">If you have any questions, you can always contact us and we will be there for you</div>
            </div>
          </div>

          <div id="aboutVidCont"><img src="/static/aboutVideo.png" alt="About Us"></div>

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
    name: 'aboutCont',
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

  .aboutContPage {
    background-image: url('/static/cloudBg.png');
    background-size: 50%;
    background-repeat: repeat-x;


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
    img {
      max-width: 100%;
    }
  }

  .aboutContContainer {
    grid-area: about-cont;
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;


    & > * {
      margin-bottom: 15px;
    }
    h2 {
      text-transform: uppercase;
      font-size: 1.8em;
      margin-top: 0;
    }

    #aboutContBlurb {
      max-width: 75%;
      @media (min-width: $breakpoint) {
        max-width: auto;
      }
    }
    .portraitCont img {
      width: 100%;
      border-radius: 500px;
    }
    .vCheck {
      width: 100%;
    }
    #aboutContGraphic {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-items: center;
      justify-content: space-between;


      img {
        margin-bottom: 10px;
      }
      & > div {
        justify-content: center;
        display: flex;
        flex-direction: column;
      }
      .portraitCont {
        width: 38%;
        max-width: 200px;
      }
      .vCheckPortrait {
        width: 20%;
        max-width: 100px;
      }
    }

    #aboutContPoints {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 55px;

      .point > * {
        margin-bottom: 5px;
      }
      .pointIcon {
        font-size: 2em;
      }
      .pointName {
        text-transform: uppercase;
      }
      & > div {
        max-width: 23.5%;
        min-width: 175px;
      }
    }
  }
</style>
