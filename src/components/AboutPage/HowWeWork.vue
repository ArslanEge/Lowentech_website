<template>
  <div class="bg-header-gray rounded-none px-4 sm:px-8 lg:px-32 pt-12">
    <!-- "How We Work" Badge -->
    <div class="bg-light-blue text-text-blue text-sm font-medium inline-block px-3 py-1 rounded mb-5">
      How We Work
    </div>

    <!-- Main Content -->
    <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start pt-5 text-center sm:text-left">
      <!-- Left Text -->
      <div class="w-full sm:w-1/2 text-3xl sm:text-4xl font-semibold text-black">
        Our Seamless Process
      </div>

      <!-- Right Text -->
      <div class="w-full sm:w-1/2 sm:ml-10 mt-4 sm:mt-0 text-center sm:text-left flex justify-center sm:justify-start">
        <div class="text-soft-black text-lg font-normal pt-1 max-w-lg">
          Experience the journey from concept to completion with our clear and efficient workflow, designed to ensure your project’s success at every stage.
        </div>
      </div>
    </div>

    <!-- Timeline Section -->
    <div class="relative mt-12 pb-12">
      <!-- Vertical Line (Hidden on Mobile) -->
      <div class="absolute left-1/2 transform -translate-x-1/2 inset-y-0 w-[2px] bg-text-gray hidden sm:block"></div>

      <div class="flex flex-col gap-y-16 sm:gap-y-8">
        <!-- Step 1 -->
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-x-10">
          <div class="w-full sm:w-1/2 flex justify-center sm:justify-start px-4 sm:px-0">
            <img class="w-[300px] sm:w-[450px] h-auto rounded-lg shadow-md" src="/images/meeting.jpg" alt="Initial Consultation" />
          </div>
          <div class="w-full sm:w-1/2 px-4 sm:px-0 mt-6 sm:mt-0">
            <div class="bg-gray text-black font-medium px-3 py-1 rounded-md mb-4 inline-block">
              1
            </div>
            <h3 class="text-2xl sm:text-4xl font-bold mb-2 text-pure-black">Initial Consultation</h3>
            <p class="text-black text-lg">
              <span class="font-semibold text-xl sm:text-2xl">Connect & Define:</span> Reach out to discuss your project idea and goals, ensuring we fully understand your needs.
            </p>
          </div>
        </div>

        <!-- Step 2 (Flipped for Larger Screens) -->
        <div class="flex flex-col sm:flex-row-reverse items-center sm:items-start text-center sm:text-left gap-x-10">
          <div class="w-full sm:w-1/2 flex justify-center sm:justify-start px-4 sm:px-0">
            <img class="w-[300px] sm:w-[450px] h-auto rounded-lg shadow-md" src="/images/code.jpg" alt="Development & Delivery" />
          </div>
          <div class="w-full sm:w-1/2 px-4 sm:px-0 mt-6 sm:mt-0">
            <div class="bg-gray text-black font-medium px-3 py-1 rounded-md mb-4 inline-block">
              2
            </div>
            <h3 class="text-2xl sm:text-4xl font-bold mb-2 text-pure-black">Development & Delivery</h3>
            <p class="text-black text-lg">
              <span class="font-semibold text-xl sm:text-2xl">Create & Implement:</span> Our developers get to work, transforming your ideas into a functional product within the agreed timeline.
            </p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-x-10">
          <div class="w-full sm:w-1/2 flex justify-center sm:justify-start px-4 sm:px-0">
            <img class="w-[300px] sm:w-[450px] h-auto rounded-lg shadow-md" src="/images/work.jpg" alt="Final Delivery" />
          </div>
          <div class="w-full sm:w-1/2 px-4 sm:px-0 mt-6 sm:mt-0">
            <div class="bg-gray text-black font-medium px-3 py-1 rounded-md mb-4 inline-block">
              3
            </div>
            <h3 class="text-2xl sm:text-4xl font-bold mb-2 text-pure-black">Final Delivery</h3>
            <p class="text-black text-lg">
              <span class="font-semibold text-xl sm:text-2xl">Launch & Support:</span> We deliver the final version and provide ongoing support to ensure your continued success.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
