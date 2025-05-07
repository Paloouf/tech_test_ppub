<template>
    <div @click="toggleExpand" class=" job-card group flex flex-col rounded-xl drop-shadow-md duration-300 hover:drop-shadow-xl md:flex-row" :href="`https://profilpublic.fr/jobs/${job?.slug}`" target="_blank" rel="noopener noreferrer">
        <img :src="`${baseUrl}${job?.employer?.cover?.url}`" alt="Employer cover" class="rounded-t-xl object-cover md:h-[200px] md:w-[270px] md:rounded-xl" />
        <!-- Div texte a droite-->
        <div class="relative w-full rounded-b-xl bg-white p-4 pl-6 duration-300 md:my-4 md:rounded-l-none md:rounded-r-xl">
            <div class="flex justify-between items-center">
            <!-- Image et employeur a gauche -->
            <div class ="flex items-center space-x-2">
                <img :src="`${baseUrl}${job?.employer?.logo?.url}`" alt="Employer logo" class="size-8 rounded-full bg-zinc-300 bg-cover bg-center" />
                <span class="line-clamp-1">{{ job?.employer?.name || 'Employeur Non spécifié' }}</span>
            </div>
            
            <!-- Secteur a droite -->
            <span class="line-clamp-1">{{ job?.sectors[0]?.name || 'Secteur Non spécifié' }}</span>
            </div>
        
        <div id="job-title" class="tline-clamp-2 pt-2 text-xl md:line-clamp-1 md:text-lg">{{ job?.title || 'Job non spécifié' }}</div>
        <!-- div ville+region-->
        <div class="flex flex-col justify-between space-y-2 pt-4 md:flex-row md:space-y-0">
            <div class ="flex items-center space-x-3">
            <div class="flex items-center space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
                <span>{{ (job?.locations[0]?.city || '') + (job?.locations[0]?.region?.name ? ', ' + job?.locations[0]?.region?.name : '') || 'Location Non spécifiée' }}</span>
            </div>
            </div>
            
            <span>il y a {{ timeSincePosted(job?.validatedAt) }}</span>
        </div>
        <div class="flex items-center justify-center mt-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cursor-pointer text-gray-600 transform transition-transform duration-300"
            :class="{ 'rotate-180': isExpanded }"
            viewBox="0 0 24 24"
            >
            <path d="M6 9l6 6 6-6" />
            </svg>
        </div>
        <!-- Expand de la jobcard -->
        <div v-if="isExpanded" class="mt-4 overflow-hidden transition-all duration-500 bg-gray-100 p-4 rounded-xl">
            <p class="font-special text-lg font-bold md:text-xl">🎯 Résumé du poste</p>
            <p class="mb-4 text-gray-900 leading-relaxed">{{ job?.answer1 }}</p>
            <p class="font-special text-lg font-bold md:text-xl">👩‍💻 Compétences souhaitées</p>
            <p class="mb-4 text-gray-900 leading-relaxed">{{ job?.answer3 }}</p>
            <a href="/" class="flex mx-auto w-fit items-center justify-center mt-4 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105">Je postule</a>
        </div>
        </div>
    </div>
</template>

<script>
import { timeSincePosted } from '../utils.js';

export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
    baseUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    timeSincePosted,
  },
};
</script>

<style scoped>
.job-card {
  transition: all 0.3s ease-in-out;
}
</style>