<template>
    <DefaultHeader/>
    <main >
  
      <section class="">
      <DiagnosticImage/>
      </section>

      <section class="">
        <DiagnosticFeatures/>
        </section>

        <section class="">
            <HowDoesItWork/>
            </section>
      
  
    </main>
    <DefaultFooter/>

    
  </template>
  
  <script>
  import DefaultHeader from '@/components/headers/DefaultHeader.vue'
  import DefaultFooter from '@/components/footer/DefaultFooter.vue'
  import DiagnosticImage from '@/components/ServicesPage/VehicleDiagnostic/DiagnosticImage.vue'
  import DiagnosticFeatures from '@/components/ServicesPage/VehicleDiagnostic/DiagnosticFeatures.vue'
  import HowDoesItWork from '@/components/ServicesPage/VehicleDiagnostic/HowDoesItWork.vue'

  
  export default {
    components: {
      DefaultHeader,
      DefaultFooter,
      DiagnosticImage,
      DiagnosticFeatures,
      HowDoesItWork
    },
  }
  </script>
  
  <style></style>
  