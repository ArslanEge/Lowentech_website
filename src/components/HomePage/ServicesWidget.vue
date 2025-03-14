<template>
  <div class="bg-header-gray rounded-none px-4 sm:px-8 lg:px-32 pt-12">
    <!-- "Our Services" Badge -->
    <div class="bg-light-blue text-text-blue text-sm font-medium inline-block px-3 py-1 rounded mb-5">
      Our Services
    </div>

    <!-- Main Content -->
    <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start pt-5 text-center sm:text-left">
      <!-- Left Text -->
      <div class="w-full sm:w-1/2 text-3xl sm:text-4xl font-semibold text-black">
        Empowering Innovation <br /> Enhancing Efficiency
      </div>

      <!-- Right Text -->
      <div class="w-full sm:w-1/2 sm:ml-10 mt-4 sm:mt-0">
        <div class="text-soft-black text-lg font-normal pt-1 max-w-lg">
          Revolutionizing your operations, one solution at a time. Let Löwentech be your dedicated partner
          in navigating the complexities of technology.
        </div>
      </div>
    </div>
    

    <!-- Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
      <!-- Card 1 -->
      <Card class="bg-pure-black p-4">
        <template #content>
          <div class="flex flex-col justify-center items-start h-[280px]">
            <img class="w-128 h-auto" src="@/assets/polestar-4-side-profile-removebg-preview.png" alt="Polestar" />
          </div>

          <div class="text-white text-center text-2xl mt-12">
            Tailor-made vehicle diagnostic solutions
          </div>

          <div class="flex items-center justify-between w-full mt-8">
            <!-- Tags -->
            <div class="flex space-x-2">
              <div class="bg-black text-white text-sm font-medium px-3 py-1 rounded">CAN-Bus</div>
              <div class="bg-black text-white text-sm font-medium px-3 py-1 rounded">Cloud Diagnostic</div>
            </div>

            <!-- Arrow Button -->
            <button class="w-10 h-10 bg-blue rounded-full flex items-center justify-center" @click="$router.push({ name: 'vehicle-diagnostic' })">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 12h14" />
              </svg>
            </button>
          </div>
        </template>
      </Card>

      <!-- Card 2 -->
      <Card class="bg-gradient-to-b from-[#3566EB] via-[#60B0F6] to-[#3667EC] p-4">
        <template #content>
          <div class="flex flex-col justify-center items-center h-[280px]">
            <img class="w-48 h-auto" src="@/assets/iphone.png" alt="iPhone" />
          </div>

          <div class="text-white text-center text-2xl mt-12">
            Full stack cross-platform Mobile and Web applications
          </div>

          <div class="flex items-center justify-between w-full mt-8">
            <div class="flex space-x-2">
              <div class="bg-black text-white text-sm font-medium px-3 py-1 rounded">Mobile</div>
              <div class="bg-black text-white text-sm font-medium px-3 py-1 rounded">Full Stack</div>
            </div>

            <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center" @click="$router.push({ name: 'app-development' })">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 12h14" />
              </svg>
            </button>
          </div>
        </template>
      </Card>

      <!-- Card 3 -->
      <Card class="bg-gradient-to-b from-[#cccccc] to-[#FFFFFF] p-4">
        <template #content>
          <div class="flex flex-col justify-center items-center h-[280px]">
            <img class="w-96 h-auto" src="@/assets/ttcontrol.png" alt="Embedded System" />
          </div>

          <div class="text-black text-center text-2xl mt-12">
            Custom embedded system and IoT solutions
          </div>

          <div class="flex items-center justify-between w-full mt-8">
            <div class="flex space-x-2">
              <div class="bg-black text-white text-sm font-medium px-3 py-1 rounded">Embedded</div>
              <div class="bg-black text-white text-sm font-medium px-3 py-1 rounded">IoT</div>
            </div>

            <button class="w-10 h-10 bg-blue rounded-full flex items-center justify-center" @click="$router.push({ name: 'embedded-system' })">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 12h14" />
              </svg>
            </button>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "primevue/card";

export default {
  components: {
    Card,
  },
};
</script>
