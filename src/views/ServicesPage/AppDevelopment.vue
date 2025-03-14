<template>
    <DefaultHeader/>
    <main >
  
      <section class="">
        <AppDevelopmentImage/>
      </section>

      <section class="">
        <GrupBul/>
      </section>

      <section class="">
        <SpyCall/>
      </section>

      <section class="">
        <PassGuard/>
      </section>

      <section class="">
        <LearnFlow/>
      </section>

      <section class="">
        <DieDerDas/>
      </section>

      
      
  
    </main>
    <DefaultFooter/>

  </template>
  
  <script>
  import DefaultHeader from '@/components/headers/DefaultHeader.vue'
  import DefaultFooter from '@/components/footer/DefaultFooter.vue'
  import AppDevelopmentImage from '@/components/ServicesPage/AppDevelopment/AppDevelopmentImage.vue'
  import GrupBul from '@/components/ServicesPage/AppDevelopment/GrupBul.vue'
  import SpyCall from '@/components/ServicesPage/AppDevelopment/SpyCall.vue'
  import PassGuard from '@/components/ServicesPage/AppDevelopment/PassGuard.vue'
  import LearnFlow from '@/components/ServicesPage/AppDevelopment/LearnFlow.vue'
  import DieDerDas from '@/components/ServicesPage/AppDevelopment/DieDerDas.vue'

  
  export default {
    components: {
      DefaultHeader,
      DefaultFooter,
      AppDevelopmentImage,
      GrupBul,
      SpyCall,
      PassGuard,
      LearnFlow,
      DieDerDas
    },
  }
  </script>
  
  <style></style>
  