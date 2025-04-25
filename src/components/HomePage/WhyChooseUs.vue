<template>
    <div class="bg-header-gray rounded-none px-4 py-12 sm:px-8 lg:px-32 2xl:py-24">
      <!-- "Why Choose Us" Badge -->
      <div class="bg-light-blue text-text-blue text-sm 2xl:text-2xl font-medium inline-block px-3 py-1 rounded mb-5">
        Why Choose Us
      </div>
  
      <!-- Main Content -->
      <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start pt-5 text-center sm:text-left">
        <!-- Left Text -->
        <div class="w-full sm:w-1/2 text-3xl sm:text-4xl font-semibold text-black">
          Your Technological Success,<br />Our Top Commitment
        </div>
  
        <!-- Right Text -->
        <div class="w-full sm:w-1/2 sm:ml-10 mt-4 sm:mt-0">
          <div class="text-soft-black text-lg 2xl:text-3xl font-normal pt-1 max-w-lg">
            We know that every organization has unique technological challenges, which is why we offer customized software solutions tailored to your specific needs.
          </div>
        </div>
      </div>
  
      <!-- Count Up Section -->
      <div ref="countUpSection"
        class="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-0 py-10 2xl:py-20">
        
        <!-- Item 1 -->
        <div class="w-1/2 sm:w-auto flex-1 text-center">
          <div class="flex items-center justify-center space-x-2">
            <vue-count-up v-if="startAnimation" :endVal="2000" :duration="2" class="text-4xl font-bold" />
            <span class="text-4xl font-bold">+</span>
          </div>
          <p class="text-lg">Downloads</p>
        </div>
  
        <!-- Divider (Hidden on Mobile) -->
        <div class="hidden sm:block h-16 w-px bg-black"></div>
  
        <!-- Item 2 -->
        <div class="w-1/2 sm:w-auto flex-1 text-center">
          <div class="flex items-center justify-center space-x-2">
            <vue-count-up v-if="startAnimation" :endVal="85" :duration="2" class="text-4xl font-bold" />
            <span class="text-4xl font-bold">%</span>
          </div>
          <p class="text-lg">Efficiency Increase</p>
        </div>
  
        <!-- Divider (Hidden on Mobile) -->
        <div class="hidden sm:block h-16 w-px bg-black"></div>
  
        <!-- Item 3 -->
        <div class="w-1/2 sm:w-auto flex-1 text-center">
          <div class="flex items-center justify-center space-x-2">
            <vue-count-up v-if="startAnimation" :endVal="24" :duration="2" class="text-4xl font-bold" />
            <span class="text-4xl font-bold">/7</span>
          </div>
          <p class="text-lg">Customer Care</p>
        </div>
  
        <!-- Divider (Hidden on Mobile) -->
        <div class="hidden sm:block h-16 w-px bg-black"></div>
  
        <!-- Item 4 -->
        <div class="w-1/2 sm:w-auto flex-1 text-center">
          <div class="flex items-center justify-center space-x-2">
            <vue-count-up v-if="startAnimation" :endVal="10" :duration="2" class="text-4xl font-bold" />
            <span class="text-4xl font-bold">+</span>
          </div>
          <p class="text-lg">Projects</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import VueCountUp from "vue-countup-v3";
  
  export default {
    components: {
      VueCountUp,
    },
    data() {
      return {
        startAnimation: false,
      };
    },
    mounted() {
      this.observeSection();
    },
    methods: {
      observeSection() {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
              this.startAnimation = true;
              observer.disconnect();
            }
          },
          {
            root: null,
            threshold: 0.5,
          }
        );
  
        observer.observe(this.$refs.countUpSection);
      },
    },
  };
  </script>
  