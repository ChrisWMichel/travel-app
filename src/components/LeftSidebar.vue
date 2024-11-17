<template>
    <div class="left-sidebar">
        <router-link :to="{ name: 'protected' }">Dashboard</router-link>
        <router-link :to="{ name: 'invoices' }">Invoices</router-link>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter(); 
</script>

<style scoped>
    .left-sidebar {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    a {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 0.25rem;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        text-decoration: none;
        width: 20%;
    }
</style>