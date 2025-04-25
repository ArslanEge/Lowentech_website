<template>
  <div class="bg-header-gray px-4 sm:px-8 lg:px-32 py-8">

    <!-- "Our Services" Title -->
    <div class="text-black text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-center sm:text-left">
      Grup Bul
    </div>

    <!-- Description -->
    <p class="text-base sm:text-lg font-normal text-text-gray mb-6 text-center sm:text-left leading-relaxed">
      Discover your perfect musical match with our cross-platform app, designed for musicians seeking bandmates and bands looking for that missing piece. 
      Whether you’re a band short of one key member or a talented musician looking to join a group, our app bridges the gap. 
      Easily post and search for opportunities by specifying genre, city, and position. 
      Tailor your search with filters for instruments and genres to find your ideal band or bandmate. 
      Connect instantly using our real-time chat feature and stay updated with handy notifications. 
      It’s time to turn your musical dreams into reality – join our community and find your musical soulmate today!
    </p>

    <!-- Tech Stack -->
    <div class="text-base sm:text-lg font-normal text-text-gray space-y-4 mb-6">
      <div class="flex flex-col sm:flex-row items-center sm:items-start">
        <span class="font-bold pr-2 text-softer-black">Frontend:</span>
        <span>Flutter, Provider, Firebase Cloud Messaging</span>
      </div>
      <div class="flex flex-col sm:flex-row items-center sm:items-start">
        <span class="font-bold pr-2 text-softer-black">Backend:</span>
        <span>FastAPI, Docker, MongoDB, GraphQL, WebSockets (Custom Real-Time Chat), Redis, Firebase Storage</span>
      </div>
      <div class="flex flex-col sm:flex-row items-center sm:items-start">
        <span class="font-bold pr-2 text-softer-black">Cloud & CI/CD:</span>
        <span>AWS, GitHub Actions, GitHub</span>
      </div>
    </div>

    <!-- Responsive Images Section -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      <img 
        src="/images/grupBul-1.png" 
        alt="Image 1" 
        class="w-full h-auto rounded-lg"
      />
      <img 
        src="/images/grupBul-2.png" 
        alt="Image 2" 
        class="w-full h-auto rounded-lg"
      />
      <img 
        src="/images/grupBul-3.png" 
        alt="Image 3" 
        class="w-full h-auto rounded-lg"
      />
      <img 
        src="/images/grupBul-4.png" 
        alt="Image 4" 
        class="w-full h-auto rounded-lg"
      />
      <img 
        src="/images/grupBul-5.png" 
        alt="Image 5" 
        class="w-full h-auto rounded-lg"
      />
    </div>

  </div>
</template>
