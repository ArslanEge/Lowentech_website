<template>
    <DefaultHeader/>
    <main >
  
      <section class="">
        <ContactImage/>
      </section>

      <section class="">
        <ContactCard/>
      </section>

      <section class="">
        <ContactUs/>
      </section>

  



      
      
  
    </main>
    <DefaultFooter/>

  </template>
  
  <script>
  import DefaultHeader from '@/components/headers/DefaultHeader.vue'
  import DefaultFooter from '@/components/footer/DefaultFooter.vue'
  import ContactImage from '@/components/ContactPage/ContactImage.vue'
  import ContactCard from '@/components/ContactPage/ContactCard.vue'
  import ContactUs from '@/components/ContactPage/ContactUs.vue'


  
  export default {
    components: {
      DefaultHeader,
      DefaultFooter,
      ContactImage,
      ContactCard,
      ContactUs
    },
  }
  </script>
  
  <style></style>
  