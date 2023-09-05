<template>
  <div class="faq">
    <div class="rows">
        <span class="sun"><IconSun /></span>
        <h2>The code conjurer</h2>
    </div>
    <div class="skills">
      <article>
        <h3>Supreme Sorcery</h3>
        <p>Magically morphing ideas into enchanting software.</p>
      </article>
      <article>
        <h3>Spellbinding Skills</h3>
        <p>Wielding a wide array of techno wizardry.</p>
      </article>
      <article>
        <h3>Mystical Mastery</h3>
        <p>An ethereal explorer of ever-evolving tech realms.</p>
      </article>
      <article>
        <h3>Charismatic Code</h3>
        <p>Translating thoughts and dreams into digital reality.</p>
      </article>
      <article>
        <h3>Enigmatic Energy</h3>
        <p>Summoning unwavering passion in every project.</p>
      </article>
      <article>
        <h3>Illustrious Impact</h3>
        <p>Striving to leave an indelible mark on the world.</p>
      </article>
    </div>
  </div>
</template>

<script>
import IconSun from './icons/IconSun.vue'

export default {
  components: {
    IconSun
  }
}
</script>

<style scoped>
.faq {
  background-color: black;
  min-height: 50vh;
  width: 100%;
  height: auto;
  padding: 6.25rem;
}
.rows {
  display: flex;
  flex-direction: column;
}
h2 {
  font-family: 'Staatliches';
}

h3 {
  padding-bottom: 0.25rem;
  font-weight: bold;
}
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
}
article {
  font-family: 'Space Grotesk';
  padding: 1rem;
}
@media (max-width: 768px) {
  .faq {
    padding: 1.25rem;
  }
  .skills {
    display: flex;
    flex-direction: column;
  }
}
</style>