<script >
// import NavbarSection from './components/NavbarSection.vue';
// import { mapWritableState } from "pinia";
// import { useCuisineStore } from "./stores/cuisine";
// export default {
//   components: {
//     NavbarSection
//   },
//   computed: {
//     ...mapWritableState(useCuisineStore, ['hasLogin'])
//   },
//   created () {
//     const token=localStorage.getItem("access_token")
//     if (token) {
//       this.hasLogin=true
//     } else {
//       this.hasLogin=false
//     }
//   },
// }
// </script>

<template>
  <h1>Hi</h1>
  {/*
  <NavbarSection v-if="this.$route.path !== '/login' && this.$route.path !== '/register'" /> */}
  <router-view />
</template>