<template>
  <div class="relative w-full h-[500px] sm:h-[600px]">
    <!-- Background Image -->

      <img
      class="w-full h-full object-cover"
      src="/images/about_image.jpg"
      alt="Background"
    />
    

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- Text Content -->
    <div class="absolute inset-0 flex flex-col items-center sm:items-start text-center sm:text-left pt-24 sm:pt-48 px-4 sm:px-8 lg:px-32">
      <!-- Badge -->
      <div class="bg-blue text-white text-sm 2xl:text-2xl font-medium px-3 py-1 rounded-md shadow-md mb-4">
        Welcome To Löwentech
      </div>
      
      <!-- Title -->
      <h1 class="text-3xl sm:text-5xl 2xl:text-6xl font-bold text-white">
        Your Reliable Tech <br class="hidden sm:block" /> Partner
      </h1>
      
      <!-- Subtitle -->
      <p class="text-lg sm:text-xl 2xl:text-2xl text-white mt-2">
        Innovative Solutions, Assured Success.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutWidget',
};
</script>
