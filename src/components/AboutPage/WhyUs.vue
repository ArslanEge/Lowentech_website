<template>
    <div class="bg-pure-black px-4 sm:px-8 lg:px-32 pt-12">
      <div class="flex flex-col items-center text-center">
        <!-- "Why Us" Badge -->
        <div class="bg-soft-black text-white text-base font-medium inline-block px-4 py-2 rounded mb-5">
          Why Us
        </div>
  
        <!-- Title -->
        <div class="text-4xl sm:text-5xl font-semibold text-white mb-5">
          Expertise, Innovation, Connectivity
        </div>
  
        <!-- Description -->
        <div class="w-full sm:w-2/3 lg:w-1/2 text-gray text-lg font-normal pt-1">
          At Löwentech, our approach is based on open communication and collaboration, ensuring that every solution not only meets but exceeds your expectations. We innovate not just to solve, but to transform, making your business more efficient, adaptable, and ready for the future.
        </div>
      </div>
  
      <!-- Count-Up Section -->
      <div ref="countUpSection" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
        <!-- Item 1 -->
        <div class="text-center rounded-lg bg-soft-black px-6 py-8">
          <div class="flex items-center justify-center space-x-2">
            <vue-count-up v-if="startAnimation" :endVal="50" :duration="2" class="text-4xl font-bold text-white" />
            <span class="text-4xl font-bold text-white">+</span>
          </div>
          <p class="text-lg text-gray">Projects</p> 
        </div>
  
        <!-- Item 2 -->
        <div class="text-center rounded-lg bg-soft-black px-6 py-8">
          <div class="flex items-center justify-center space-x-2">
            <vue-count-up v-if="startAnimation" :endVal="2000" :duration="2" class="text-4xl font-bold text-white" />
            <span class="text-4xl font-bold text-white">+</span>
          </div>
          <p class="text-lg text-gray">Downloads</p>
        </div>
  
        <!-- Item 3 -->
        <div class="text-center rounded-lg bg-soft-black px-6 py-8">
          <div class="flex items-center justify-center space-x-2">
            <vue-count-up v-if="startAnimation" :endVal="85" :duration="2" class="text-4xl font-bold text-white" />
            <span class="text-4xl font-bold text-white">%</span>
          </div>
          <p class="text-lg text-gray">Efficiency Increase</p>
        </div>
  
        <!-- Item 4 -->
        <div class="text-center rounded-lg bg-soft-black px-6 py-8">
          <div class="flex items-center justify-center space-x-2">
            <vue-count-up v-if="startAnimation" :endVal="10" :duration="2" class="text-4xl font-bold text-white" />
            <span class="text-4xl font-bold text-white">+</span>
          </div>
          <p class="text-lg text-gray">Customer Care</p>
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
  