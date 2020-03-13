<template>
  <div class="card-form">
      <label class="card-form-label">CARD NUMBER </label>
      <input type="number" v-model="cardNr" v-on:keyup="fullCardNumber" class="input-field" placeholder="Card Number" maxlength="16"/>
      <label class="card-form-label">CARDHOLDER NAME</label>
      <input type="text" v-model="cardHolder" v-on:keyup="sendCardHolder" class="input-field" placeholder="Your Fullname"/>
      <figure class="small-input-fields">
        <div class="input-fields-fracture-left">
            <label class="fracture-input-field-label-left">VALID THRU</label>
            <input type="text" v-model="cardExp" v-on:keyup="sendCardExp" class="fracture-input-field-left" placeholder="00/00"/> 
        </div>
        <div class="input-fields-fracture-right">
            <label class="fracture-input-field-label-right">CCV</label>
            <input type="number" v-model="cardCcv" v-on:keyup="sendCardCcv" class="fracture-input-field-right" placeholder="CCV"/> 
        </div>
        </figure>
        <div class="vendor-dropdown">
            <span class=""> <i class="fas fa-caret-down"></i> </span>
            <div class="vendor-dropdown-content">
                <figure class="vendor-wrapper-figure">
                    <div v-on:click="sendCardVendor(cardVendor[0])" class="vendor-option bitcoin-bg"> 
                        <p class="vendor-name vendor-name-bitcoin">BITCOIN INC</p> <div> <img class="vendor-icon" v-bind:src="cardVendor[0].vendor" /> </div>
                    </div>
                </figure >
                <figure class="vendor-wrapper-figure">
                    <div v-on:click="sendCardVendor(cardVendor[1])" class="vendor-option ninja-bg"> 
                        <p class="vendor-name">NINJA BANK </p> <div> <img class="vendor-icon" v-bind:src="cardVendor[1].vendor"> </div> 
                    </div>
                </figure>
                <figure class="vendor-wrapper-figure">
                    <div v-on:click="sendCardVendor(cardVendor[2])" class="vendor-option evilcorp-bg"> 
                        <p class="vendor-name">EVIL CORP</p> <div> <img class="vendor-icon" v-bind:src="cardVendor[2].vendor"/> </div>
                    </div>
                </figure>
                <figure class="vendor-wrapper-figure">
                    <div v-on:click="sendCardVendor(cardVendor[3])" class="vendor-option block-chain-bg"> 
                        <p class="vendor-name">BLOCK CHAIN INC</p> <div> <img class="vendor-icon" v-bind:src="cardVendor[3].vendor"/> </div>
                    </div>
                </figure>
            </div>
        </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            array: [],    
            dateArray: [],
            placehold: '',        
            cardNr: Number,
            cardHolder: 'Yeah',
            cardExp: '',
            cardCcv: NaN,
            cardVendor: [
                {vendor: require('../assets/bitcoin.png'), bgcolor: '#FFAE34', textColor: '#000000'},
                {vendor: require('../assets/ninja.png'), bgcolor: '#222222', textColor: '#FFFFFF'},
                {vendor: require('../assets/evil.png'), bgcolor: '#F33355', textColor: '#FFFFFF'},
                {vendor: require('../assets/chain.png'), bgcolor: '#8B58F9', textColor: '#FFFFFF'}
                ],
        }
    },
    computed: {
    },
    methods: {
        sendCardHolder() {
            let letters = /^[A-Öa-ö]+$/;
            //let numbers = /^[0-9]+$/
            if (this.cardHolder.length > 25) {
                return alert('Maxium character amount preceded')
            }
            if (this.cardHolder.match(letters)) {
                //console.log('1: This is a letter')
                return this.$emit("sendCardHolder", this.cardHolder)
            }
            if (this.cardHolder.match(' ')) {
                //console.log('2: This isa blank space')
            }
            if (/\d/.test(this.cardHolder) == true) {
                //console.log('3: ')
                return alert("Your name can not contain number's");
            }
            return this.$emit("sendCardHolder", this.cardHolder)
        },
        sendCardExp() {
            let letters = /^[A-Öa-ö ]+$/;
            //var numbers = /^[0-9]+$/
            if (this.dateArray.length == 1) {
                if (this.cardExp.length == 2) {
                    if (this.cardExp.match(letters)) {
                        return alert("No letter's")
                    }
                    this.dateArray.push(this.cardExp)
                    this.$emit("sendCardExp", {date: this.dateArray.join('/')})
                    this.cardExp = '';
                    return this.dateArray =[]
                }
                return
            }
            if (this.cardExp > 12 || /*!this.cardExp.match(numbers) ||*/ this.cardExp.match(letters)) {
                return alert('Please enter a valid date')
            }
            if (this.cardExp.length == 2) {
                this.dateArray.push(this.cardExp)
                this.$emit("sendCardExp", this.cardExp)
                return this.cardExp = '';
            }
            
        },
        sendCardCcv() {
            //let letters = /^[A-Za-z]+$/;
            let numbers = /^[0-9]+$/
            if (!this.cardCcv.match(numbers)) {
                return alert("Your CCV can only contain number's")
            }
            else if (this.cardCcv.length > 3) {
                this.cardCcv = '';
                return alert ("Your CCV can only contain three number's")
            }
            return this.$emit("sendCardCcv", this.cardCcv)
        },
        sendCardVendor(param) {
            return this.$emit("sendCardVendor", param)
        },
        fullCardNumber() {
            let numbers = /^[0-9]+$/
            if (!this.cardNr.match(numbers)) {
                return alert("Your card number can only contain number's")
            }
            if (this.cardNr.length ==  4) {
                if (this.array.length == 4) {
                    this.$emit('sendCardNr', {number: this.array.join(' ')})
                    this.cardNr = ''
                    return this.array = []
                }
                this.array.push(this.cardNr) 
                this.cardNr = ''
                this.$emit('sendCardNr', {number: this.array.join(' ')})
            }
        }
    }
}
</script>

<style>
.card-form {
    height: 44vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
}

.card-form-label {
    font-size: 12px;
    align-self:flex-start;
    margin: 0px 0px 0px 15px;
}

.input-field {
    margin: 10px;
    margin-top: 0px;
    height: 30px;
    width: 90%;
    border: solid 2px;
    border-radius: 5px;
}

.card-form-label-bottom {
    /*font-size: 12px;
    align-self:flex-start;
    margin: 0px 40px -10px 0px;*/
}

.input-field-bottom {
    margin: 10px;
    margin-top: 10px;
    height: 30px;
    width: 90%;
    border: solid 2px;
    border-radius: 5px;
}

.small-input-fields {
    width: 92%;
    margin: 0px 2px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
}

.input-fields-fracture-left {
    display: flex;
    flex-wrap: wrap-reverse;
    width: 50%;
    flex-direction: column;
    justify-content: space-around;
}

.fracture-input-field-label-left {
    align-self: flex-end;
    font-size: 12px;
    margin: 0px 0px 0px 3px;
}

.fracture-input-field-left {
    display: flex;
    align-self: flex-end;
    height: 30px;
    width: 90%;
    border: solid 2px;
    border-radius: 5px;
}

.input-fields-fracture-right {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-around
}

.fracture-input-field-label-right {
    align-self: flex-start;
    font-size: 12px;
    margin: 0px 0px 0px 15px;
}

.fracture-input-field-right {
    display: flex;
    align-self: flex-end;
    height: 30px;
    width: 90%;
    border: solid 2px;
    border-radius: 5px;
}

.vendor-dropdown {
    position: relative;
    display: inline-block;
    margin-top: 20px;
    height: 30px;
    width: 90%;
    border: solid black 2px;
    border-radius: 5px;
    /*display: flex;
    height: auto;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    width: 92%;*/
}

.vendor-dropdown-content {
    display: none;
    position: absolute;
    background-color: none;
    min-width: 250px;
    border: solid black 2px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 0px;
    z-index: 1;
    margin-top: -18px;
}

.vendor-dropdown:hover .vendor-dropdown-content {
  display: block;
}

.vendor-wrapper-figure {
    /*margin: 0px;
    width: 30%;*/
    margin: 0px;
    margin-top: 0px;
}

.vendor-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28px;
    height: 30px;
    max-width: 100%;
    border:  2px;
    border-radius: 0px;
    color: white;
    
}

.vendor-name {
    font-size: 15px;
    font-weight: 900;
    color: white;
    margin-left: 10px;
}

.vendor-name-bitcoin {
    color: black
}


.evilcorp-bg {
    background-color: #F33355;
}

.ninja-bg {
    background-color: #222222;
}

.bitcoin-bg {
    background-color: #FFAE34;
}

.block-chain-bg {
    background-color: #8B58F9;
}

.bitcoin {
    color: black;
}

.vendor-icon {
    width: 15px;
    height: 20px;
    margin-right: 10px;
}

.vendor-icon-bitcoin {
    color: black;
}
</style>