<template>
  <div class="card-form">
      <label class="card-form-label">CARD NUMBER</label>
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
        <article class="vendor-wrapper">
            <figure class="vendor-wrapper-figure">
                <label class="card-form-label-bottom">VENDOR</label>
                <div v-on:click="sendCardVendor(cardVendor[0])" class="vendor-option"> {{cardVendor[0]}} </div>
            </figure >
            <figure class="vendor-wrapper-figure">
                <label class="card-form-label-bottom">VENDOR</label>
                <div v-on:click="sendCardVendor(cardVendor[1])" class="vendor-option"> {{cardVendor[1]}} </div>
            </figure>
            <figure class="vendor-wrapper-figure">
                <label class="card-form-label-bottom">VENDOR</label>
                <div v-on:click="sendCardVendor(cardVendor[2])" class="vendor-option"> {{cardVendor[2]}} </div>
            </figure>
        </article>
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
            cardVendor: ['$', '£', '#']
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
                console.log('1: This is a letter')
                return this.$emit("sendCardHolder", this.cardHolder)
            }
            if (this.cardHolder.match(' ')) {
                console.log('2: This isa blank space')
            }
            if (/\d/.test(this.cardHolder) == true) {
                console.log('3: ')
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
            console.log(param)
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
                console.log(this.array.join(' '))  
                console.log(this.array.length)  
            }
        }
    }
}
</script>

<style>
.card-form {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    font-size: 12px;
    align-self:flex-start;
    margin: 0px 40px -10px 0px;
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

.vendor-wrapper {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    width: 92%;
}

.vendor-wrapper-figure {
    margin: 0px;
    width: 30%;
}

.vendor-option {
    display: flex;
    justify-content: center;
    font-size: 28px;
    height: 30px;
    max-width: 95%;
    border: solid black 2px;
    border-radius: 5px;
}
</style>