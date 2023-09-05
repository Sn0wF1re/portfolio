<template>
  <div class="footer">
    <div class="container">
      <div class="navigate">
        <h3>Navigate</h3>
        <a href="#projects">Projects</a>
        <a href="#socials">Socials</a>
        <a href="#resume">Resume</a>
      </div>
      <div class="magic">
        <h3>Magic</h3>
        <a href="https://mo-dalle.netlify.app" target="_blank">AI Image Generator</a>
        <a href="https://alxmovieapp.tech" target="_blank">Movie catalogue</a>
        <a href="https://manageexpenses.netlify.app" target="_blank">Expense Tracker</a>
      </div>
      <div class="contact">
        <h3>Contact</h3>
        <a href="https://www.linkedin.com/in/clinton-mokaya/" target="_blank">LinkedIn</a>
        <a href="">Telepathy</a>
      </div>
    </div>
    <div class="bottom">
      <span class="like-m"><IconLikeM /></span>
      <a href="https://github.com/Sn0wF1re" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
      <p>Copyright &copy; {{ year }}, Sn0wFire.</p>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import IconLikeM from './icons/IconLikeM.vue';
export default {
  components: {
    IconLikeM
  },
  setup () {
    const year = ref(null)
    year.value = new Date().getFullYear();

    return { year }
  }
}
</script>

<style scoped>
  .footer {
    font-family: 'Space Grotesk';
    background: #000;
    padding: 100px 100px 30px 100px;
    width: 100%;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .magic .content .navigate {
    display: flex;
    flex-direction: column;
  }
  a {
    display: block;
  }
  .magic a {
    color: white;
  }
  .magic a:hover {
    background-color: black;
  }
  h3 {
    font-weight: bold;
  }
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 6.25rem;
    margin-bottom: 0;
  }
  .bottom a {
    color: white;
  }
  .bottom a:hover {
    background-color: black;
  }
  @media (max-width: 768px) {
    .footer {
      padding: 2.5rem 1.25rem;
    }
    .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  }
</style>