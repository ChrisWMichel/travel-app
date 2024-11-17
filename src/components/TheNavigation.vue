<template>
    <div id="nav">
        <app-link id="logo" to="/" exact>
            Travel App
        </app-link>
        <app-link 
            v-for="destination in destinations" 
                :key="destination.id"
                :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
            >
            {{ destination.name }}          
        </app-link>
        <app-link :to="{name: 'protected'}">Dashboard</app-link>
    </div>
</template>

<script>
import sourceData from '@/data/data.json';
import router from '@/router';
export default {
    name: 'TheNavigation',
    data() {
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>

<style scoped>
/* .active-link is defined in index.js */
    #nav .active-link {
        background-color: lightgreen;
        color: darkslategray;
        padding: 2px;
    }
    #logo {
        font-size: 1.5em;
        font-weight: bold;
        background-color: transparent !important;
        color: white !important; 
    }
</style>