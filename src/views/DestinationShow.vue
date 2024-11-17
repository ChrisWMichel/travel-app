<template>
    <div>
    <section v-if="destination" class="destination">
            <h1>{{ destination.name }}</h1>
            <go-back/>
            <div class="destination-detail">
                <img :src="`/images/${destination.image}`" :alt="destination.name" />
                <p>{{ destination.description }}</p>
            </div>
        </section>
        <section class="experiences">
            <h2>Top Experiences in {{ destination.name }}</h2>
            <div class="cards">
                <router-link 
                    v-for="experience in destination.experiences" 
                    :key="experience.slug"
                    :to="{ name: 'experience.show', params: {experienceSlug: experience.slug } }"
                >
                    <experience-card :experience="experience" />
                </router-link>
            </div>
            <router-view />
        </section>
    </div>
</template>

<script setup>
import sourceData from '@/data/data.json';
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import experienceCard from '@/components/ExperienceCard.vue';
import GoBack from '@/components/GoBack.vue';

const route = useRoute();
const props = defineProps({ 
    id:{
        type: Number, 
        required: true
    }
});


const destination = computed(() => {
    return sourceData.destinations.find(
    (destination) => destination.id === props.id
    );
});








// export default {
//     name: 'DestinationShow',
//     data() {
//         return {
//             destination: null
//         }
//     },
//     computed: {
//         destinationID() {
//             return parseInt(this.$route.params.id);
//         },
//         destination(){
//             return sourceData.destinations.find(destination => destination.id === this.destinationID);
//         }
//     },
// }
</script>