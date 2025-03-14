<template>
    <DefaultHeader/>
    <main >
  
      <section class="">
        <EmbeddedSystems/>
      </section>

      <section class="">
        <EmbeddedFeatures/>
      </section>



      
      
  
    </main>
    <DefaultFooter/>

  </template>
  
  <script>
  import DefaultHeader from '@/components/headers/DefaultHeader.vue'
  import DefaultFooter from '@/components/footer/DefaultFooter.vue'
  import EmbeddedSystems from '@/components/ServicesPage/EmbeddedSystem/EmbeddedSystems.vue'
  import EmbeddedFeatures from '@/components/ServicesPage/EmbeddedSystem/EmbeddedFeatures.vue'

  
  export default {
    components: {
      DefaultHeader,
      DefaultFooter,
      EmbeddedSystems,
      EmbeddedFeatures
    },
  }
  </script>
  
  <style></style>
  