<template>
  <div class="home">
    <router-view v-bind:title="title"/>
    <router-view 
      v-bind:cardNr="cardNr"
      v-bind:cardHolder="cardHolder"
      v-bind:cardExp="cardExp"
      v-bind:cardCcv="cardCcv"
      v-bind:cardVendor="cardVendor"
      name="card"
    />
    <router-view 
      v-bind:stContent="stContent"
      v-on:active-card="displayCard"
      name="cardStack"
    />
    <footer class="main-footer">
    <router-link class="router-link" to="/addcard/create"> NEW CARD </router-link>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      title: 'E-WALLET',
      cardNr: 'XXXX-XXXX-XXXX-XXXX',
      cardHolder: 'Your name',
      cardExp: 'xxxx-xx-xx',
      cardCcv: 'CCV',
      cardVendor: '',
      storage: '',
      stContent: '',
    }
  },
  methods: {
    loadList() {
      this.storage = window.localStorage;
      this.stContent = JSON.parse(this.storage.getItem('cards'))
      this.card = this.stContent[0]
      if (!this.storage) {
        this.stContent = [];
        this.storage.setItem("cards", JSON.stringify(this.stContent));
        console.log('local storage created')
      } 
    },
    displayCard(index) {
      const stContent = JSON.parse(localStorage.getItem('cards'))
      this.cardNr = stContent[index].cardNumber
      this.cardHolder = stContent[index].cardHolder
      this.cardExp = stContent[index].cardExp
      this.cardCcv = stContent[index].cardCcv
      this.cardVendor = stContent[index].cardVendor
    },
    activeCard() {
      console.log('catching')
    }
  },
  mounted() {
    this.loadList()
  }
}
</script>

<style>
.home {
  min-width: 282px;
}

.main-footer {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.router-link {
  display: flex;
  padding: 0px;
  width: 120px;
  height: 40px;
  margin: 0px;
  margin-top: -10px;
  background: black;
  border: 0px;
  color: white;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 900;
  text-decoration: none;
}
</style>