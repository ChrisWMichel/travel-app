<template>
    <section v-if="experience" class="experience" >
        <h1>{{ experience.name }}</h1>
        <div class="experience-detail">
            <img :src="`/images/${experience.image}`" :alt="experience.name" />
            <p>{{ experience.description }}</p>
        </div>
    </section>
</template>

<script setup>
import sourceData from '@/data/data.json';
import { computed, defineProps } from "vue";
const props = defineProps({ 
    id:{
        type: Number, 
        required: true
    },
    slug: String,
    experienceSlug: String
});
 const destination = computed(() => {
    return sourceData.destinations.find(
    (destination) => destination.id === props.id
    );
});
const experience = computed(() => {
    return destination.value.experiences.find(
    (experience) => experience.slug === props.experienceSlug
    );
});
</script>