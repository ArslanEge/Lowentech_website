<template>
  <div class="relative w-full h-[500px] sm:h-[600px]">
    <!-- Background Image -->
    <img
      class="w-full h-full object-cover"
      src="/images/contactImage.jpg"
      alt="Background"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- Text Content -->
    <div class="absolute inset-0 flex flex-col items-center sm:items-start justify-center px-6 sm:px-12 lg:px-32 text-center sm:text-left">
      <!-- Badge -->
      <div class="bg-blue text-white text-sm font-medium px-4 py-2 rounded-md shadow-md mb-4">
        Contact
      </div>
      <!-- Title -->
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Let's get in touch
      </h1>
      <p class="text-lg sm:text-xl text-white mt-2">
        to meet your needs
      </p>
      <p class="text-base sm:text-xl lg:text-2xl text-white mt-4">
        For more: <a href="mailto:info@lowentech.de" class="underline">lowentech.dev@gmail.com</a>
      </p>
    </div>
  </div>
</template>
