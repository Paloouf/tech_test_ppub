<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      <div class="mx-auto max-w-screen-xl px-4 py-12">
        <div class="-m-4 flex flex-wrap items-center">
          <!-- Loop through valid jobs -->
          <div v-for="job in jobs" :key="job.id" class="w-full p-4 rounded">
            <!-- div link complete (img+text+sector) -->
            <a class="group flex flex-col rounded-xl drop-shadow-md duration-300 hover:drop-shadow-xl md:flex-row" :href="`https://profilpublic.fr/jobs/${job?.slug}`" target="_blank" rel="noopener noreferrer">
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
                <!-- div ville+region (null,unid bug) -->
                <div class="flex flex-col justify-between space-y-2 pt-4 md:flex-row md:space-y-0">
                  <div class ="flex items-center space-x-3">
                    <div class="flex items-center space-x-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
                      <span>{{ (job?.locations[0]?.city || '') + (job?.locations[0]?.region?.name ? ', ' + job?.locations[0]?.region?.name : '') || 'Location Non spécifiée' }}</span>
                    </div>
                  </div>
                  <span>il y a {{ timeSincePosted(job?.validatedAt) }}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAsyncData } from '#app';
import { computed } from 'vue';
import { timeSincePosted } from './utils.js';

const { data: jobs } = useAsyncData('jobs', async () => {
  const res = await $fetch('https://app.staging.profilpublic.fr/api/jobs?fields[0]=moderated&populate[sectors][fields][0]=name&fields[1]=slug&fields[2]=title&fields[3]=type&fields[4]=validatedAt&filters[published]=true&populate[employer][fields][0]=name&populate[employer][populate][cover][fields][0]=url&populate[employer][populate][logo][fields][0]=url&populate[header][fields][0]=title&populate[header][populate][cover][fields][0]=url&populate[locations][fields][0]=*&populate[locations][populate][region][fields][0]=name&populate[locations][populate][region][fields][1]=slug&populate[speaker][fields][0]=firstName&populate[speaker][fields][1]=lastName&populate[speaker][populate][photo][fields][0]=url&populate[categories][fields][0]=name&populate[categories][fields][1]=slug&pagination[limit]=25&pagination[start]=7&sort[0][imported]=asc&sort[1][validatedAt]=desc', {
  });

  console.log('Fetched Jobs:', res.data);
  return res.data || [];
});

const baseUrl = 'https://app.staging.profilpublic.fr';
</script>
