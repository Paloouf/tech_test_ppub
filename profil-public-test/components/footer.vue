<template>
    <footer class=" text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; {{ new Date().getFullYear() }} Profil Public. All Rights Reserved.</p>
        <nav class="mt-2">
          <a href="https://www.linkedin.com/in/lo%C3%AFc-tressens/" class="text-blue-400 hover:underline mx-2">Contact</a>
        </nav>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  footer {
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    background-color: #0b3e53;
  }
  </style>
  