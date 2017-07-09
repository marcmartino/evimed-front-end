<template>
  <div>
    <div class="contactUsPage">
      <evi-header class="contactUsHeader" ></evi-header>

        <div class="contactMap" v-bind:style="{ backgroundImage: 'url(/static/contactUsMap.png)' }"></div>
        <form class="messageUsForm">
            <div class="messageUsFormPositioner">
                <h1>Send Us <span class="blueText">A Message</span></h1>
                <label for="contactUsName">Name</label>
                <input id="contactUsName" type="text" placeholder="Write your name">
                <label for="contactUsSubject">Subject</label>
                <input id="contactUsSubject" type="text" placeholder="Message Subject">
                <label for="contactUsMessage">Name</label>
                <textarea id="contactUsMessage" placeholder="Write your message"></textarea>
            <button class="eviButton" >Send</button>
            </div>
        </form>

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

.contactUsHeader {
  background: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));
}

.blueHeader {
  background-color: rgba(27,89,130,.8) !important;
}

.contactUsPage {
  display: grid;
  grid-template:
    "header"
    "contactMap"
    "messageUsForm"
    "footer";
  grid-template-rows: minmax(50px, 15vh) minmax(100px, 50vh);

  @media (min-width: $breakpoint) {
    grid-template:
      "header header"
      "messageUsForm contactMap"
      "footer footer";
    grid-column-gap: 40px;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: minmax(50px, 15vh);
    h1 {
        margin-top: 0;
    }
  }
  @media (min-width: $largeBreakpoint) {
    grid-template:
       "header header header header"
       ". messageUsForm contactMap ."
       "footer footer footer footer";
    grid-template-columns: 1fr 3fr 3fr 1fr;
    grid-column-gap: 50px;
    grid-template-rows: minmax(50px, 15vh);
  }
}

.messageUsForm {
  margin: 10px 0;
  grid-area: messageUsForm;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (min-width: $breakpoint) {
    justify-content: flex-end;
  }
  .messageUsFormPositioner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.contactMap {
  grid-area: contactMap;
  background-position: center;
  background-size: cover;

}

</style>
