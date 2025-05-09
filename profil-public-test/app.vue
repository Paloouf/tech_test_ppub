<template>
  <div>
    <Navbar />
    <NuxtRouteAnnouncer />
    <div>
      <div class="mx-auto max-w-screen-xl px-4 py-12">
        <div class="-m-4 flex flex-wrap items-center">
          <!-- Loop jobs -->
          <div v-for="job in jobs" :key="job.id" class="w-full p-4 rounded">
            <!-- div link complete (img+text+sector) -->
            <JobCard :job="job" :baseUrl="baseUrl"/>
          </div>
          <!-- test doomscrolling -->
          <div v-if="isLoading" class="text-center my-4">
            <span>Loading...</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useAsyncData } from '#app';
import Navbar from '~/components/navbar.vue'
import JobCard from './components/job-card.vue';
import Footer from './components/footer.vue';

const { data: jobs } = useAsyncData('jobs', async () => {
  const res = await $fetch('https://app.staging.profilpublic.fr/api/jobs?fields=*&fields[0]=moderated&populate[sectors][fields][0]=name&fields[1]=slug&fields[2]=title&fields[3]=type&fields[4]=validatedAt&filters[published]=true&populate[employer][fields][0]=name&populate[employer][populate][cover][fields][0]=url&populate[employer][populate][logo][fields][0]=url&populate[header][fields][0]=title&populate[header][populate][cover][fields][0]=url&populate[locations][fields][0]=*&populate[locations][populate][region][fields][0]=name&populate[locations][populate][region][fields][1]=slug&populate[speaker][fields][0]=firstName&populate[speaker][fields][1]=lastName&populate[speaker][populate][photo][fields][0]=url&populate[categories][fields][0]=name&populate[categories][fields][1]=slug&pagination[limit]=25&pagination[start]=7&sort[0][validatedAt]=desc', {
  });

  console.log('Fetched Jobs:', res.data);
  return res.data || [];
});

const baseUrl = 'https://app.staging.profilpublic.fr';
</script>
