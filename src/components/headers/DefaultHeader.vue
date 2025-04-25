<template>
  <header class="bg-header-gray">
    <div class="container mx-auto px-4 py-6">
      <div id="navbar" class="flex items-center justify-between">
        
        <!-- Left Side: Logo -->
        <img src="/images/logo.png" class="w-[50px] sm:w-[60px] md:w-[90px]" alt="Responsive Image" />
        
        <!-- Mobile Menu Button -->
        <button class="md:hidden text-black" @click="toggleMobileMenu">
          <i class="pi pi-bars text-2xl"></i>
        </button>
        
        <!-- Mobile Navigation using PrimeVue Menu -->
        <PrimeMenu ref="mobileMenu" :model="mobileMenuItems" :popup="true" class="md:hidden bg-white shadow-lg rounded-md p-2 mt-2" />
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex justify-between items-center space-x-4 sm:space-x-8 md:space-x-12">
          <router-link to="/" class="text-black text-lg font-medium hover:text-blue 2xl:text-2xl">Home</router-link>
          <router-link to="/about" class="text-black text-lg font-medium hover:text-blue 2xl:text-2xl">About</router-link>
          
          <!-- Service Dropdown Menu -->
          <div class="hover:text-blue" @mouseenter="openMenu" @mouseleave="menuControl">
            <button class="text-black text-lg font-medium hover:text-blue 2xl:text-2xl">Services</button>
            <i class="pi pi-chevron-down ml-2 text-xs"></i>
            <PrimeMenu ref="menu" :model="services" :popup="true" class="bg-white text-lg 2xl:text-2xl shadow-lg rounded-md p-2 mt-2"
              @mouseenter="enteredMenu = true" @mouseleave="closeMenu" />
          </div>
          
          <router-link to="/contact" class="text-black text-lg 2xl:text-2xl font-medium hover:text-blue w:text-xl">Contact</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import PrimeMenu from 'primevue/menu';

export default {
  components: {
    PrimeMenu
  },
  data() {
    return {
      mobileMenuOpen: false,
      enteredMenu: false,
      services: [
        {
          label: 'Vehicle Diagnostic',
          command: () => this.$router.push('/vehicle-diagnostic')
        },
        {
          label: 'App Development',
          command: () => this.$router.push('/app-development')
        },
        {
          label: 'Embedded System',
          command: () => this.$router.push('/embedded-system')
        }
      ],
      mobileMenuItems: [
        {
          label: 'Home',
          command: () => this.$router.push('/')
        },
        {
          label: 'About',
          command: () => this.$router.push('/about')
        },
        {
          label: 'Services',
          items: [
            { label: 'Vehicle Diagnostic', command: () => this.$router.push('/vehicle-diagnostic') },
            { label: 'App Development', command: () => this.$router.push('/app-development') },
            { label: 'Embedded System', command: () => this.$router.push('/embedded-system') }
          ]
        },
        {
          label: 'Contact',
          command: () => this.$router.push('/contact')
        }
      ]
    };
  },
  methods: {
    toggleMobileMenu(event) {
      if (this.$refs.mobileMenu) {
        this.$refs.mobileMenu.show(event);
      }
    },
    openMenu(event) {
      if (this.$refs.menu) {
        this.$refs.menu.show(event);
      }
    },
    closeMenu() {
      setTimeout(() => {
        if (this.$refs.menu) {
          this.enteredMenu = false;
          this.$refs.menu.hide();
        }
      }, 50);
    },
    menuControl() {
      setTimeout(() => {
        if (!this.enteredMenu) {
          this.closeMenu();
        }
      }, 50);
    }
  }
};
</script>

<style>
/* Adjust styling for PrimeVue menu */
</style>