<template>
  <div class="bg-pure-black px-4 sm:px-8 lg:px-32 py-8">
    <!-- Title -->
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-soft-gray mb-6 text-center">
      Key Features of CloudDiagnostix
    </h1>

    <!-- Description -->
    <p class="text-base sm:text-lg text-gray my-6 sm:my-8 px-4 sm:px-12 lg:px-32 text-center leading-relaxed">
      Explore the essential features that make CloudDiagnostix a powerful tool for real-time diagnostics and proactive vehicle management. 
      Tailored to meet your specific needs, our solution ensures comprehensive data collection, efficient analysis, and instant alerts, 
      keeping you informed and in control at all times.
    </p>

    <!-- Feature List -->
    <div class="space-y-8 mb-16">
      <!-- Feature 1 -->
      <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0">
        <div class="text-white text-2xl rounded-full bg-darker-blue p-3 flex items-center justify-center w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="sm:ml-4">
          <h2 class="text-xl sm:text-2xl font-bold text-soft-gray mb-2">Tailor-Made Solutions</h2>
          <p class="text-sm sm:text-base text-gray">
            Users define their specific requirements, and CloudDiagnostix customizes the data collection process to accurately gather necessary 
            information from the vehicle. This ensures precise implementation tailored to each user's needs.
          </p>
        </div>
      </div>

      <!-- Feature 2 -->
      <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0">
        <div class="text-white text-2xl rounded-full bg-darker-blue p-3 flex items-center justify-center w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="sm:ml-4">
          <h2 class="text-xl sm:text-2xl font-bold text-soft-gray mb-2">Comprehensive Data Integration</h2>
          <p class="text-sm sm:text-base text-gray">
            As long as the vehicle provides the data, CloudDiagnostix can capture and analyze it, including data from different CAN bus lines, 
            analog, and digital signals. This comprehensive approach ensures that all relevant vehicle data is utilized for thorough diagnostics.
          </p>
        </div>
      </div>

      <!-- Feature 3 -->
      <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0">
        <div class="text-white text-2xl rounded-full bg-darker-blue p-3 flex items-center justify-center w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="sm:ml-4">
          <h2 class="text-xl sm:text-2xl font-bold text-soft-gray mb-2">Efficient Time-Based Queries</h2>
          <p class="text-sm sm:text-base text-gray">
            With Grafana integration, users can query vehicle data over specific time intervals, making the diagnosis process more efficient. 
            This feature is particularly useful for analyzing test results and identifying patterns.
          </p>
        </div>
      </div>

      <!-- Feature 4 -->
      <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0">
        <div class="text-white text-2xl rounded-full bg-darker-blue p-3 flex items-center justify-center w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="sm:ml-4">
          <h2 class="text-xl sm:text-2xl font-bold text-soft-gray mb-2">Cross Platform Mobile Application</h2>
          <p class="text-sm sm:text-base text-gray">
            Users can access real-time vehicle data directly from the mobile application. This allows for continuous monitoring of vehicle 
            performance, providing immediate insights and updates.
          </p>
        </div>
      </div>

      <!-- Feature 5 -->
      <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0">
        <div class="text-white text-2xl rounded-full bg-darker-blue p-3 flex items-center justify-center w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="sm:ml-4">
          <h2 class="text-xl sm:text-2xl font-bold text-soft-gray mb-2">Custom Alerts and Notifications</h2>
          <p class="text-sm sm:text-base text-gray">
            Users can set custom alert values and receive real-time notifications on their mobile devices if defined thresholds are exceeded. 
            This feature ensures immediate awareness and quick response to potential issues, enhancing vehicle safety and operational efficiency.
          </p>
        </div>
      </div>
    </div>

    <!-- Responsive Image -->
    <div class="flex justify-center">
      <img class="w-full h-auto rounded-lg shadow-lg" src="/images/grafana.png" alt="Responsive Image" />
    </div>
  </div>
</template>
