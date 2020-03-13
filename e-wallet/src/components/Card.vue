<template>
    <section class="card-view">
        <article class="card" v-bind:style="{background: cardColor}">
            <header class="card-header">
                <section class="header-left-section"> 
                </section>
                <section class="header-right-section"> 
                    <figure class="header-vendor"> <img v-bind:src="cardVendor"/> </figure> 
                </section>
            </header>
            <main class="card-main" v-bind:style="{color: textColor}"> {{cardNr}} </main>
            <footer class="card-footer">
                <div class="card-owner">
                    <h3 class="card-holder-title" v-bind:style="{color: textColor}">CARDHOLDER NAME</h3>
                    <h3 class="card-exp-title" v-bind:style="{color: textColor}">VALID THRU</h3>
                </div>
                <div class="card-owner2">
                    <h4 class="card-holder-name" v-bind:style="{color: textColor}"> {{cardHolder}} </h4>
                    <h4 class="card-exp-date" v-bind:style="{color: textColor}"> {{cardExp}} </h4>
                </div>
            </footer>
        </article>
    </section>
</template>

<script>
export default {
    data() {
        return {
            array: Array,
        }
    },
    props: {
        cardNr: String,
        cardHolder: String,
        cardExp: String,
        cardCcv: NaN,
        cardVendor: String,
        cardColor: String,
        textColor: String,
        card: Object,
        bin: Boolean,
        index: Number
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style>
.card-view {
    height: 30vh;
    width: 100%;
}

.card {
    height: 170px;
    border-radius: 5px;
    border: solid black 1px;
    background: white;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}

.card-header {
    height: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr)
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
    margin: 0px 0px 50px 5px;
}

.header-vendor {
    font-size: 50px;
    font-weight: 900;
    margin: 10px 0px 0px 70px;
}

.card-main {
    font-size: 24px;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-footer {
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center
}

.card-owner {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-owner2 {
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: space-between;
}

.card-exp {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
}

h3 {
    font-size: 12px;
} 

.card-holder-name {
    margin: 0px;
    margin-left: 20px;
}

.card-holder-title {
    margin: 0px;
    margin-top: 20px;
    margin-left: 20px;
}

.card-exp-title {
    margin: 0px;
    margin-top: 20px;
    margin-right: 20px
}

.card-exp-date {
    margin: 0px;
    margin-right: 22px;
}
</style>