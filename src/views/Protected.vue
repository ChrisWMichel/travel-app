<template>
   
    <div class="container">
        <div class="center">
            <p>Greetings, {{ username }}</p>
            <h1>Protected Page</h1>
            <p>This is a protected page. You can only see this if you are logged in.</p>
            <div class="buttons02">
                <button @click="logout">Logout</button> 
                <router-link :to="{name:'invoices'}">
                    <button>Invoices</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LeftSidebar from '@/components/LeftSidebar.vue';

const username = ref(window.user);
const router = useRouter();

const logout = () => {
    window.user = '';
    router.push({ name: 'home', query: { logout: null }});
    //router.replace({ name: 'home', query: { logout: null }});
}
</script>

<style scoped>
    .container {
        display: flex;
        gap: 1rem;
    }
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 0.25rem;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        margin-left: 10px;
    }
</style>