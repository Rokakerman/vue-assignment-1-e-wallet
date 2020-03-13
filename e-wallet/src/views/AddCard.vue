<template>
  <div class="second-page">
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
      v-on:sendCardNr="displayCardNr"
      v-on:sendCardHolder="displayCardHolder" 
      v-on:sendCardExp="displayCardExp" 
      v-on:sendCardCcv="displayCardCcv" 
      v-on:sendCardVendor="displayCardVendor"  
      name="cardForm"
    />
    <footer class="second-page-footer">
      <router-link class="second-router-link" to="/home"> GO BACK </router-link>
      <button class="save-card" v-on:click="saveCard">  SAVE CARD  </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AddCard',
  components: {
  },
  data() {
    return {
      title: 'ADD A NEW CARD',
      cardNr: 'XXXX-XXXX-XXXX-XXXX',
      cardHolder: 'Your name',
      cardExp: 'MM/YY',
      cardCcv: 'CCV',
      cardVendor: '',
      cardColor: '',
      textColor: '',
      storage: '',
      stContent: ''
    }
  },
  methods: {
    saveCard() {
      if (this.cardNr.length == 19 && this.cardExp.length == 5 && this.cardCcv.length == 3 && this.cardVendor.length > 1) {
        this.storage = window.localStorage;
        this.stContent = JSON.parse(this.storage.getItem('cards'));
        if (this.stContent.length == 4) {
          return alert("You can only have a maximum of 4 card's")
        }
        this.stContent.push(
        {
          cardNumber: this.cardNr,
          cardHolder: this.cardHolder ,
          cardExp: this.cardExp,
          cardCcv: this.cardCcv,
          cardVendor: this.cardVendor,
          cardColor: this.cardColor,
          textColor: this.textColor
        });
        this.storage.setItem('cards', JSON.stringify(this.stContent));
        return alert('card added!')
      }
    },
    displayCardNr(obj) {
      return this.cardNr = obj.number
    },
    displayCardHolder(param) {
      return this.cardHolder = param
    },
    displayCardExp(obj) {
      return this.cardExp = obj.date
    },
    displayCardCcv(param) {
      return this.cardCcv = param
    },
    displayCardVendor(param) {
      this.cardVendor = param.vendor
      this.cardColor = param.bgcolor 
      this.textColor = param.textColor
      return
    }
  },
  mounted() {
   
  }
}
</script>

<style>
.second-page {
  max-width: 282px;
}

.second-page-footer {
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.save-card {
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

.second-router-link {
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