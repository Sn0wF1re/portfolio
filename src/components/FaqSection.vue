<template>
  <div class="faq">
    <div class="rows">
        <span class="sun"><IconSun /></span>
        <h2>Expertise</h2>
    </div>
    <div class="skills">
      <article>
        <h3>End-to-End Expertise</h3>
        <p>Crafting seamless software solutions from concept to deployment.</p>
      </article>
      <article>
        <h3>API Design & Development</h3>
        <p>Creating efficient, scalable, and secure APIs that power robust applications.</p>
      </article>
      <article>
        <h3>Frontend Development</h3>
        <p>Delivering responsive, user-centric designs using the latest frontend technologies.</p>
      </article>
      <article>
        <h3>Backend Architecture</h3>
        <p>Building reliable and scalable server-side logic to support complex applications.</p>
      </article>
      <article>
        <h3>Database Management</h3>
        <p>Designing and optimizing databases for performance, security, and scalability.</p>
      </article>
      <article>
        <h3>DevOps & Deployment</h3>
        <p>Ensuring smooth, automated deployments and continuous integration to maintain high-quality software.</p>
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
  font-family: 'Staatliches', sans-serif;
}

h3 {
  padding-bottom: 0.25rem;
  font-weight: bold;
  color: #0099ff;
}
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
}
article {
  font-family: 'Space Grotesk', sans-serif;
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