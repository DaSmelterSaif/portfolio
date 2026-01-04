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
    return {};
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
  }
}
</script>

<template>
  <NavBar />
  <HeroSec />
  <AboutMeSec />
  <ProjectsSec />
  <AboutWebsiteSec />
  <SkillsSec />
  <ContactUsSec />
  <FooterSec />
</template>

<style scoped></style>
