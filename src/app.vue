<template>
  <div>
    <h1>{{ msg }}</h1>
    <img src="./img/logo.png">
    <input type="text" v-model="msg">
  </div>
</template>

<script>

export default {
    name: "app",
    data() {
        return {
            msg: "Welcome to Your Vue.js",
        };
    },
    created() {
    },
    methods: {
    },
};
</script>

<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;

        h1 {
            color: green;
        }
    }
</style>
