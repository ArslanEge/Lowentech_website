<template>
  <div class="bg-header-gray px-4 sm:px-8 lg:px-32 py-12">
    <Card class="w-full bg-gradient-to-b from-[#e0e0e0] to-[#FFFFFF] p-6 sm:p-10 rounded-lg">
      <template #content>
        <!-- Title Section -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-medium text-black text-center mb-16">
          Let's create the <br class="hidden sm:block" /> project you need <br class="hidden sm:block" /> together!
        </h1>

        <!-- FAQ Badge -->
        <div class="bg-light-blue text-text-blue text-sm font-medium px-4 py-2 rounded-md shadow-md mb-6 text-center w-fit mx-auto">
          FAQ
        </div>

        <!-- FAQ Title -->
        <h1 class="text-2xl sm:text-4xl font-semibold text-black text-center mb-6">
          Frequently Asked Questions
        </h1>

        <!-- FAQ Subtitle -->
        <p class="text-base sm:text-lg font-normal text-text-gray text-center mb-8 leading-relaxed">
          We are passionate about helping our customers. We are here to answer <br class="hidden sm:block" /> any questions you may have!
        </p>

        <!-- FAQ Panels -->
        <div class="space-y-6">
          <Panel header="What is Löwentech?" toggleable :collapsed="collapsedPanels[0]"
              @update:collapsed="togglePanel(0)" :class="{ 'active-panel': !collapsedPanels[0] }">
            <p class="py-6 px-4 sm:px-8 text-sm sm:text-lg leading-relaxed">
              Löwentech is a family-owned technology company comprised of a dynamic team of two computer engineers, 
              one software developer, and a system engineer. We specialize in creating tailor-made software development 
              and integration solutions that cater to a variety of needs across different sectors.
            </p>
          </Panel>

          <Panel header="Why should I choose Löwentech?" toggleable :collapsed="collapsedPanels[1]"
              @update:collapsed="togglePanel(1)" :class="{ 'active-panel': !collapsedPanels[1] }">
            <p class="py-6 px-4 sm:px-8 text-sm sm:text-lg leading-relaxed">
              Choosing Löwentech means opting for precision, customization, and a dedicated partnership. 
              Our team is committed to delivering tailor-made software solutions that perfectly match your specific requirements.
            </p>
          </Panel>

          <Panel header="How much does Löwentech's service cost?" toggleable :collapsed="collapsedPanels[2]"
              @update:collapsed="togglePanel(2)" :class="{ 'active-panel': !collapsedPanels[2] }">
            <p class="py-6 px-4 sm:px-8 text-sm sm:text-lg leading-relaxed">
              The cost of our services is determined by various factors, including project complexity and required technology. 
              We offer transparent pricing after a detailed consultation to understand your specific needs.
            </p>
          </Panel>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "primevue/card";
import Panel from 'primevue/panel';

export default {
    components: {
        Card,
        Panel
    },
    data() {
        return {
            collapsedPanels: [true, true, true] // Default: all panels are collapsed
        };
    },
    methods: {
        togglePanel(index) {
            this.collapsedPanels[index] = !this.collapsedPanels[index];
        }
    }
};
</script>

<style>
.p-panel-content {
    background-color: #ffffff !important;
    padding: 6px;
}

.p-panel-header {
    padding: 16px 20px;
    background-color: #e1e0e0;
    transition: background-color 0.3s ease;
    border-radius: 12px;
}

.p-panel-title {
    color: #343333 !important;
    font-size: 20px !important;
    font-weight: 500;
    transition: color 0.3s ease;
}

.p-panel {
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    background-color: #e1e0e0;
    border-radius: 12px;
}

/* Active Panel */
.active-panel .p-panel-header {
    background-color: black !important;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}

.active-panel .p-panel-title {
    color: white !important;
}
</style>
