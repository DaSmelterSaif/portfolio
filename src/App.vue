<script lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSec from './components/HeroSec.vue';
import AboutMeSec from './components/AboutMeSec.vue';
import ProjectsSec from './components/ProjectsSec.vue';
import AboutWebsiteSec from './components/AboutWebsiteSec.vue';
import SkillsSec from './components/SkillsSec.vue';
import ContactUsSec from './components/ContactUsSec.vue';
import FooterSec from './components/FooterSec.vue';

export default {
  data() {
    return {
      warning: false,
      warningMessage: "",
    };
  },
  components: {
    NavBar,
    HeroSec,
    AboutMeSec,
    ProjectsSec,
    AboutWebsiteSec,
    SkillsSec,
    ContactUsSec,
    FooterSec
  },
  methods: {
    handleWarning(msg: string) {
      this.warning = true;
      this.warningMessage = msg;
      setTimeout(this.closeWarning, 10000);
    },
    closeWarning() {
      this.warning = false;
      this.warningMessage = "";
    }
  }
}
</script>

<template>
  <!-- TODO - Fix the size and the style of the error box. -->
  <div v-if="warning" class="fixed top-2 left-1/2 -translate-x-1/2 rounded-2xl w-100 h-50 p-10 bg-danger z-99">
    <p class="font-bold font-roboto-flex inline-block">Warning</p>
    <p class="font-robot-flex mt-1">{{ warningMessage }}</p>
  </div>
  <NavBar />
  <HeroSec />
  <AboutMeSec />
  <ProjectsSec />
  <AboutWebsiteSec />
  <SkillsSec />
  <ContactUsSec @warning-message="handleWarning" />
  <FooterSec />
</template>

<style scoped></style>
