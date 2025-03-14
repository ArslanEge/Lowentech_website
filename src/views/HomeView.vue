<template>
  <DefaultHeader/>
  <main >

    <section class="">
      <WelcomeWidget/>
    </section>

    <section class="">
      <FeaturesWidget/>
    </section>
      
    <section>
      <ServicesWidget/>
    </section>

    <section>
      <WhyChooseUs/>
    </section>
  </main>
  <DefaultFooter/>
  
</template>

<script>
import DefaultHeader from '@/components/headers/DefaultHeader.vue'
import DefaultFooter from '@/components/footer/DefaultFooter.vue'
import WelcomeWidget from '@/components/HomePage/WelcomeWidget.vue'
import FeaturesWidget from '@/components/HomePage/FeaturesWidget.vue'
import ServicesWidget from '@/components/HomePage/ServicesWidget.vue'
import WhyChooseUs from '@/components/HomePage/WhyChooseUs.vue'


export default {
  components: {
    DefaultHeader,
    DefaultFooter,
    ServicesWidget,
    WelcomeWidget,
    FeaturesWidget,
    WhyChooseUs
  },
}
</script>

<style></style>
