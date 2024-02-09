<script >
import SidebarSection from './components/SidebarSection.vue';
export default {
  components: {
    SidebarSection
  }
}
</script>

<template>
  <SidebarSection />
  <router-view />
</template>