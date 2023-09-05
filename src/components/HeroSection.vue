<template>
  <div class="hero">
    <nav>
      <span class="seal"><IconSeal /></span>
      <a href="#projects">Projects</a>
      <a href="#socials">Socials</a>
      <a href="#resume">Resume</a>
    </nav>
    <h1>HI, I'M CLINTON. <br />A SOFTWARE ENGINEER</h1>
  </div>
</template>

<script>
import IconSeal from './icons/IconSeal.vue';
export default {
  components: {
    IconSeal
  }
}
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6.25rem;
  gap: 0.625rem;
  width: 100%;
  height: 50rem;
  background-image: url('./icons/asterisk-icon.svg');
  background-size: 43.75rem;
  background-repeat: no-repeat;
  background-position: center;
}

nav {
  font-family: 'Space Grotesk';
  display: flex;
  justify-content: space-between;
  width: 1fr;
  height: auto;
}
h1 {
  color: #3A015C;
  font-family: 'staatliches';
  font-weight: 500;
  font-size: 2.6rem;
  margin-bottom: 5.5rem;
  width: 100%;
  height: auto;
  overflow: visible;
  text-align: center;
  animation: slideIn 1s ease-in-out;
}

a {
  color: #80ccff;
}
a:hover {
  background-color: hsla(204, 100%, 75%, 0.2);
}

@media (max-width: 768px) {
  .hero {
    padding: 1.25rem;
    background-size: 25rem;
  }
  nav {
    padding: 0;
  }
  h1 {
    margin-bottom: 15.5rem;
  }
}
</style>
