<template>
    <div>
      <Card class="bg-pure-black text-white p-6 md:p-10 xl:p-12 2xl:p-20 rounded-none">
        <template #content>
          <div class="flex flex-col md:flex-row justify-between w-full">
            <!-- Left Section (Features List) -->
            <div class="flex flex-col flex-none justify-between items-start space-y-3 md:space-y-0 mb-2 md:mb-0">
                <div class="border-[1px] border-text-gray rounded-lg px-4 py-2 text-sm font-light w-fit">
                  Custom-Crafted
                </div>
                <div class="border-[1px] border-text-gray rounded-lg px-4 py-2 text-sm font-light w-fit">
                  Reliable Performance
                </div>
                <div class="border-[1px] border-text-gray rounded-lg px-4 py-2 text-sm font-light w-fit">
                  Client-Centric Development
                </div>
                <div class="border-[1px] border-text-gray rounded-lg px-4 py-2 text-sm font-light w-fit">
                  Affordable Price
                </div>
                <div class="border-[1px] border-text-gray rounded-lg px-4 py-2 text-sm font-light w-fit">
                  Cross-Platform Compatibility
                </div>
                <div class="border-[1px] border-text-gray rounded-lg px-4 py-2 text-sm font-light w-fit">
                  Advanced Analytics
                </div>
            </div>
  
            <!-- Right Section (Text) -->
            <div class="w-full md:w-3/4 text-left">
              <p class="text-text-gray text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-normal">
                Welcome to <strong class="text-header-gray">Löwentech</strong>, where we are passionately dedicated to your
                technological success. Our expert team specializes in creating tailor-made software solutions, leveraging our
                extensive experience in IoT, embedded systems, and mobile application development to meet your unique
                business needs.
              </p>
              <p class="text-text-gray text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-normal mt-4">
                At Löwentech, we commit substantial time and expertise to customize every solution, ensuring
                it aligns perfectly with your specific needs. Join us as we transform your ideas into
                innovative, efficient, and effective technological solutions that drive real results. Let’s
                start creating together.
              </p>
            </div>
          </div>
        </template>
      </Card>
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
  