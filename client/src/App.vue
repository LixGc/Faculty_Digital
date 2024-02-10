<script>
import SidebarSection from './components/SidebarSection.vue';
import { mapWritableState } from "pinia";
import { useAuthStore } from "./stores/auth";

export default {
  components: {
    SidebarSection
  },
  computed: {
    ...mapWritableState(useAuthStore, ['hasLogin']),
    isNotLoginOrRegister () {
      const currentPath=this.$route.path.toLowerCase();
      return currentPath!=='/login'&&currentPath!=='/register';
    }
  },
  created () {
    const token=localStorage.getItem("access_token")
    if (token) {
      this.hasLogin=true
    } else {
      this.hasLogin=false
    }
  },
}
</script>

<template>
  <div>
    <SidebarSection v-if="isNotLoginOrRegister" />
    <router-view />
  </div>
</template>
