<template>
  <div class="cta" id="resume">
    <span class="like-m"><IconLikeM /></span>
    <h2>BEHOLD, MY RESUME</h2>
    <p>
      Ready to dive into the rabbit hole of my mystical feats?
      Dare to download my resume and witness the real-world sorcery I've conjured.        
    </p>
    <div class="resume-button">
      <a href="https://flowcv.com/resume/02lwi1wip6" target="_blank" download>
        Download Resume
      </a>
    </div>
  </div>
</template>

<script>
import IconLikeM from './icons/IconLikeM.vue';
export default {
  components: {
    IconLikeM
  }
}
</script>

<style scoped>
  .cta {
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 6.25rem;
    gap: 20px;
  }
  .resume-button {
    font-family: 'Space Grotesk', sans-serif;
    background-color: white;
    border-radius: 0.25rem;
    max-width: 10rem;
    padding: 5px;
  }
  a {
    color: black;
  }
  a:hover {
    background-color: hsl(0, 0%, 100%);
  }
  h2 {
    font-family: 'Staatliches', sans-serif;
  }
  p {
    text-align: center;
    font-family: 'Space Grotesk', sans-serif;
  }
  @media (max-width: 768px) {
    .cta {
      padding: 1.25rem;
    }
  }
</style>