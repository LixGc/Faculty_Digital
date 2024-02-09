<script>
import SidebarSection from './components/SidebarSection.vue';

export default {
  components: {
    SidebarSection
  },
  created () {
    console.log('Current route path:', this.$route.path);
  },
  computed: {
    isNotLoginOrRegister () {
      const currentPath=this.$route.path.toLowerCase();
      return currentPath!=='/login'&&currentPath!=='/register';
    }
  }
}
</script>

<template>
  <div>
    <SidebarSection v-if="isNotLoginOrRegister" />
    <router-view />
  </div>
</template>
