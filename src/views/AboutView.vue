<template>
    <DefaultHeader/>
    <main >
        <section class="">
            <AboutImage/>
          </section>
          
          <section class="">
            <HowWeWork/>
          </section>

          <section class="">
            <WhyUs/>
          </section>

          <section class="">
            <OurTeam/>
          </section>
  
  
      
    </main>
    <DefaultFooter/>
    
  </template>
  
  <script>
  import DefaultHeader from '@/components/headers/DefaultHeader.vue'
  import DefaultFooter from '@/components/footer/DefaultFooter.vue'
  import AboutImage from '@/components/AboutPage/AboutImage.vue'
  import HowWeWork from '@/components/AboutPage/HowWeWork.vue'
  import WhyUs from '@/components/AboutPage/WhyUs.vue'
  import OurTeam from '@/components/AboutPage/OurTeam.vue'
  
  export default {
    components: {
      DefaultHeader,
      DefaultFooter,
      AboutImage,
      HowWeWork,
      WhyUs,
      OurTeam
    },
  }
  </script>
  
  <style></style>
  