<template>
 <div class="login">
        <h1>Login</h1>
        <p>Enter any email and password to login (It'll work!)</p>
        <form @submit.prevent="login" class="form">
            <div class="input">
                <label for="form">Email</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button class="btn" type="submit">Login</button>
        </form>
 </div>   
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const email = ref('');
const password = ref('');

const redirect = route.query.redirect || '/protected';


const login = () => {
    window.user = email.value;
    router.push({ path: redirect });
}
</script>