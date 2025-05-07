<template>
    <header class="fixed inset-x-0 z-50">
      <nav class="relative mx-auto flex h-16 max-w-screen-xl items-center px-4 duration-500 md:h-20">
        <!-- Logo -->
        <div class="mr-4 mt-1 shrink-0 self-start rounded-full outline-none duration-500 focus-visible:ring-2 focus-visible:ring-viking-400/50 lg:mr-8 md:mt-2">
          <a href="/"><img src="assets/logo.jpg" alt="Logo" class="aspect-square h-20 w-20 rounded-full duration-500 md:h-24 md:w-24" /></a>
        </div>
        
        <!-- Links -->
        <div class="mr-4 grow whitespace-nowrap md:flex md:items-center lg:mr-8 ml-auto flex justify-between items-center space-x-4 lg:space-x-8">
            <a href="/jobs" class="text-[#174c62] hover:text-[#58d9db] transition-colors duration-300">Les jobs</a> 
            <a href="https://paloouf.github.io/" class="text-[#174c62] hover:text-[#58d9db] transition-colors duration-300">Contact</a>
        </div>
      </nav>
    </header>
  </template>
  
  <style scoped>
    header {
        font-family: 'Gilroy', sans-serif;
        font-weight: 700;
        font-size: 1rem;
    }
  </style>
  