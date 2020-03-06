<template>
    <section class="card-view">
        <article class="card">
            <header class="card-header">
                <section class="header-left-section"></section>
                <section class="header-right-section"> <p class="header-vendor"> {{cardVendor}} </p> </section>
            </header>
            <main class="card-main"> {{cardNr}} </main>
            <footer class="card-footer">
                <div class="card-owner">
                    <h3 class="card-holder-title">CARDHOLDER NAME</h3>
                    <h3 class="card-exp-title">VALID THRU</h3>
                </div>
                <div class="card-owner2">
                    <h4 class="card-holder-name"> {{cardHolder}} </h4>
                    <h4 class="card-exp-date"> {{cardExp}} </h4>
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
        card: Object,
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
}

.card {
    height: 170px;
    border-radius: 5px;
    border: solid black 1px;
    background: white;
}

.card-header {
    height: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr)
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