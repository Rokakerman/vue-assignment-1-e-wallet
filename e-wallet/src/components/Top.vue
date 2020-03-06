<template>
  <header class=top>
      <h1 class="top-h1"> {{ title }} </h1>
  </header>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style>
.top {
    height: 10vh;
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.top-h1 {
    font-size: 28px;
    margin: 0px;
}
</style>
