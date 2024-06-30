<template>
<main>
    <h4>Fahim</h4>
    <p>{{ clickTimes }}</p>
    <button @click="increment">increment+</button>
    <button @click="decrement">decrement_</button>
</main>
</template>

<script setup>
import {
    ref
} from "vue";
const clickTimes = ref(0);
const increment = () => {
    clickTimes.value = clickTimes.value + 1
    console.log(clickTimes.value);
    console.log("hello world");
}
const decrement = () => {
    if (clickTimes.value > 0) {

        clickTimes.value = clickTimes.value - 1
    }
}
</script>
