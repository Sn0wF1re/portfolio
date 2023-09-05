<script setup>
import HeroSection from './components/HeroSection.vue'
import GallerySection from './components/GallerySection.vue'
import FaqSection from './components/FaqSection.vue'
import CallToAction from './components/CallToAction.vue'
import SocialSection from './components/SocialSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <GallerySection />
    <FaqSection />
    <CallToAction />
    <SocialSection />
    <FooterSection />
  </main>
</template>
<style>
main {
  width: 100%;
}
</style>
