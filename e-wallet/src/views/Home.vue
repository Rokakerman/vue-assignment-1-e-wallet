<template>
  <div class="home">
    <router-view v-bind:title="title"/>
    <label class="active-card-label"> ACTIVE CARD </label>
    <router-view 
      v-bind:cardNr="cardNr"
      v-bind:cardHolder="cardHolder"
      v-bind:cardExp="cardExp"
      v-bind:cardCcv="cardCcv"
      v-bind:cardVendor="cardVendor"
      v-bind:cardColor="cardColor"
      v-bind:textColor="textColor"
      name="card"
    />
    <router-view 
      v-on:active-card="displayCard"
      v-bind:storage="storage"
      name="cardStack"
    />
    <footer class="main-footer">
    <button class="remove-card" v-on:click="remove(index)">  REMOVE CARD  </button>
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
      index: '',
      cardNr: 'XXXX-XXXX-XXXX-XXXX',
      cardHolder: 'Your name',
      cardExp: 'xxxx-xx-xx',
      cardCcv: 'CCV',
      cardVendor: '',
      cardColor: '',
      textColor: '',
      storage: []
    }
  },
  computed: {
  },
  methods: {
    loadList() {
      this.storage =  JSON.parse(localStorage.getItem('cards'))
      if (!this.storage) {
        const stContent = [];
        localStorage.setItem("cards", JSON.stringify(stContent));
        this.storage = JSON.parse(localStorage.getItem('cards'))
        console.log('local storage created')
        return
      } 
      return this.card = this.storage[0]
    },
    displayCard(index) {
      this.storage = JSON.parse(localStorage.getItem('cards'))
      this.index = index
      this.cardNr = this.storage[index].cardNumber
      this.cardHolder = this.storage[index].cardHolder
      this.cardExp = this.storage[index].cardExp
      this.cardCcv = this.storage[index].cardCcv
      this.cardVendor = this.storage[index].cardVendor
      this.cardColor = this.storage[index].cardColor
      this.textColor = this.storage[index].textColor
    },
    activeCard() {
      console.log('catching')
    },
    remove(index) {
      const list = this.storage;
      this.$delete(list, index);
      localStorage.setItem('cards', JSON.stringify(list));
      return this.loadList()
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

.active-card-label {
    font-size: 12px;
    -ms-flex-item-align: start;
    align-self: flex-start;
    margin: 0px 0px 0px 0px;
}

.main-footer {
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.remove-card {
  padding: 0px;
  width: 120px;
  height: 40px;
  margin: 0px;
  border: 0px;
  background: black;
  color: white;
  font-weight: 900;
  font-size: 13px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.router-link {
  display: flex;
  padding: 0px;
  width: 120px;
  height: 40px;
  margin: 0px;
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