<template>
    <section class="card-stack">
        <card
            v-for="(card, index) in storage" 
            v-bind:key="index"
            v-bind:index="index"
            v-bind:cardNr="card.cardNumber"
            v-bind:cardHolder="card.cardHolder"
            v-bind:cardExp="card.cardExp"
            v-bind:cardCcv="card.cardCcv"
            v-bind:cardVendor="card.cardVendor" 
            v-bind:cardColor="card.cardColor"
            v-bind:textColor="card.textColor"
            v-bind:bin="bin"
            v-on:click.native="activeCard(index)"
        />
    </section>
</template>

<script>
import card from '../components/Card'

export default {
    components: {
        card
    },
    data() {
        return {
            //storage: window.localStorage,
            //stContent: JSON.parse(localStorage.getItem('cards')),
            bin: true
        }
    },
    props: {
        storage: Array
    },
    methods: {
        activeCard(index) {
            this.$emit('active-card', index) 
        },
    },
    computed: {

    },
    mounted() {
    
    }
}
</script>

<style>
.card-stack{
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: grid;
    grid-auto-rows: 10px;
    grid-gap: 1rem;
    width: 100%;
    height: 44vh;
    margin-top: 20px;
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

</style>