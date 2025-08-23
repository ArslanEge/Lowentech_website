<template>
  <footer class="bg-pure-black text-white py-16 px-6 sm:px-12 lg:px-32">
    <!-- Main Content -->
    <div class="flex flex-col items-center">
      <!-- Title -->
      <div class="text-center mb-12 px-4">
        <h2 class="text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-bold text-gray leading-tight">
          The software solution you <br class="hidden sm:block" /> need is just a click away.
        </h2>
      </div>

      <!-- Contact Button -->
      <button
        class="mb-16 px-6 py-3 bg-darker-blue hover:bg-text-blue text-white rounded-lg flex items-center space-x-2 text-lg 2xl:text-2xl font-medium"
        @click="$router.push({ name: 'contact' })">
        Contact now
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      <!-- Links Section -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-20 mt-8 text-center sm:text-left">
        <!-- Logo -->
        <div class="flex justify-center sm:justify-start items-center">
          <img src="/images/logo.png" class="w-[50px] sm:w-[60px] md:w-[90px] lg:w-[110px] 2xl:w-[130px]" alt="Logo" />
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg 2xl:text-2xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul class="space-y-2 text-lg 2xl:text-2xl">
            <li><a href="/" class="hover:underline text-gray">Home</a></li>
            <li><a href="/about" class="hover:underline text-gray">About</a></li>
            <li><a href="/vehicle-diagnostic" class="hover:underline text-gray">Services</a></li>
          </ul>
        </div>

        <!-- Help & Support -->
        <div>
          <h4 class="text-lg 2xl:text-2xl font-semibold mb-4 text-white">Help & Support</h4>
          <ul class="space-y-2 text-lg 2xl:text-2xl">
            <li><a href="/contact" class="hover:underline text-gray">FAQ</a></li>
            <li><a href="/contact" class="hover:underline text-gray">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
