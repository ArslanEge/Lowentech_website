<template>
  <div class="bg-header-gray px-4 sm:px-8 lg:px-32 pt-12">
    <!-- "Our Team" Badge -->
    <div class="bg-light-blue text-text-blue text-sm font-medium inline-block px-3 py-1 rounded mb-5">
      Our Team
    </div>

    <!-- Main Content -->
    <div class="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-6 lg:space-y-0">
      <!-- Left Text -->
      <div class="w-full lg:w-1/2 text-3xl sm:text-4xl font-semibold text-black leading-tight">
        The Team Behind Your<br /> Technological Success
      </div>

      <!-- Right Text -->
      <div class="w-full lg:w-1/2">
        <p class="text-soft-black text-lg font-normal max-w-lg mx-auto lg:mx-0">
          Our team boasts a proven track record of success and is dedicated to helping you achieve technological innovation and operational excellence.
        </p>
      </div>
    </div>

    <!-- Team Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
      <!-- Card 1 -->
      <div class="bg-gradient-to-b from-gray-300 to-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <img class="max-w-full h-auto rounded-full" src="@/assets/doruk.png" alt="Doruk Arslan" />
        <h3 class="text-2xl font-semibold mt-4 text-pure-black">Doruk Arslan</h3>
        <p class="text-lg font-normal mt-2 text-text-gray">Computer Engineer</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-gradient-to-b from-gray-300 to-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <img class="max-w-full h-auto object-contain rounded-full" src="@/assets/ege.png" alt="Ege Arslan" />
        <h3 class="text-2xl font-semibold mt-4 text-pure-black">Ege Arslan</h3>
        <p class="text-lg font-normal mt-2 text-text-gray">Software Engineer</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-gradient-to-b from-gray-300 to-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <img class="max-w-full h-autoobject-contain rounded-full" src="@/assets/sarp.png" alt="Sarp Arslan" />
        <h3 class="text-2xl font-semibold mt-4 text-pure-black">Sarp Arslan</h3>
        <p class="text-lg font-normal mt-2 text-text-gray">Computer Engineer</p>
      </div>
    </div>
  </div>
</template>
