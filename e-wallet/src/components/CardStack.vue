<template>
    <section class="card-stack">
        <ul>
            <li 
                v-for="(card, index) in stContent" 
                v-bind:key="index"
                v-bind:index="index"
            >
                <header class="card-header">
                    <section class="header-left-section" v-on:click="activeCard(index)"> <p v-on:click="remove(index)" class="remove">X</p> </section>
                    <section class="header-right-section" v-on:click="activeCard(index)"> <p class="header-vendor"> {{ card.cardVendor }} </p> </section>
                </header>
                <main class="card-main" v-on:click="activeCard(index)"> {{ card.cardNumber }} </main>
                <footer v-on:click="activeCard(index)" class="card-footer">
                    <div class="card-owner">
                        <h3 class="card-holder-title">CARDHOLDER NAME</h3>
                        <h3 class="card-exp-title">VALID THRU</h3>
                    </div>
                    <div class="card-owner2">
                        <h4 class="card-holder-name"> {{card.cardHolder}} </h4>
                        <h4 class="card-exp-date"> {{card.cardExp}} </h4>
                    </div>
                </footer>
            </li>
        </ul>
    </section>
</template>

<script>
//import card from '../components/Card'

export default {
    components: {
      
    },
    data() {
        return {
            storage: window.localStorage,
            stContent: JSON.parse(localStorage.getItem('cards')),
        }
    },
    props: {
 
    },
    methods: {
        activeCard(index) {
            this.$emit('active-card', index) 
        },
        remove(index) {
            const storage = window.localStorage
            const list = JSON.parse(storage.getItem('cards'))
            this.$delete(list, index);
            storage.setItem('cards', JSON.stringify(list));
            return this.stContent =  JSON.parse(localStorage.getItem('cards'))
        }
    },
    computed: {

    },
    mounted() {
    
    }
}
</script>

<style>
.card-stack{
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: grid;
    grid-auto-rows: 10px;
    grid-gap: 1rem;
    width: 100%;
    height: 100%;
    margin-bottom: auto;
}

li {
    display: flex;
    flex-direction: column;
    justify-self: center;
    justify-content: center;
    border: solid 1px;
    border-radius: 5px;
    background: rgb(211, 208, 208);
    height: 170px;
    min-width: 100%;
    border: solid black 1px;
    background: white;
}

p {
    margin: 0px;
}

.card-nr {
    font-size: 12px;
}
.header-left-section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.remove {
    font-weight: 900;
    font-size: 18px;
    justify-self: start;
    margin: 0px 0px 60px 5px;
}
</style>