<template>
  <div class="gallery" id="projects">
    <h2>Projects</h2>

    <article v-for="repo in pinnedRepos" :key="repo.id">
      <h3><a :href="repo.url" target="_blank">{{ repo.name }}</a></h3>
      <p>
        {{ repo.description }}
        <!-- <span v-if="article.showMore">{{ article.additionalText }}</span> -->
        <!-- <a @click.prevent="toggleText(article)">{{ article.showMore ? 'show less' : 'show more' }}</a> -->
      </p>
    </article>

    <a class="github" href="https://github.com/Sn0wF1re" target="_blank">View More</a>
    <!-- <h2>MAGICAL CREATIONS</h2>

    <article v-for="article in articles" :key="article.id">
      <h3><a :href="article.link" target="_blank">{{ article.title }}</a></h3>
      <p>
        {{ article.content }}
        <span v-if="article.showMore">{{ article.additionalText }}</span>
        <a @click.prevent="toggleText(article)">{{ article.showMore ? 'show less' : 'show more' }}</a>
      </p>
    </article> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useReposStore } from '../stores/repos';
import { storeToRefs } from 'pinia';

const reposStore = useReposStore();
const { pinnedRepos } = storeToRefs(reposStore);
const articles = ref([
  {
    id: 1,
    title: 'AI Image Generator',
    content: "This project harnesses the power of OpenAI's DALL-E API to generate captivating images",
    showMore: ref(false),
    link: 'https://mo-dalle.netlify.app',
    additionalText: "based on user prompts and fosters community sharing of these creations.\
    The backend leverages Express and MongoDB for robust functionality, \
    while the frontend is built using React to provide an engaging user experience."
  },
  {
    id: 2,
    title: 'Movie Catalogue',
    content: "This is a user-friendly web application that showcases a curated selection of movies",
    showMore: ref(false),
    link: 'https://alxmovieapp.tech',
    additionalText: "retrieved from RapidAPI. Access to the movie catalogue is restricted to registered users,\
    ensuring a secure and personalized experience. \
    The application was built using Django as the fullstack framework, \
    employing Redis for efficient caching, and sqlite as the database, \
    ensuring a robust and reliable foundation for the system."
  },
  {
    id: 3,
    title: 'Expense Tracker',
    content: "Designed and implemented scalable RESTful APIs using the Express framework",
    showMore: ref(false),
    link: 'https://manageexpenses.netlify.app',
    additionalText: "to seamlessly interact with MongoDB, facilitating efficient data retrieval \
    and manipulation.Utilized Vue.js as the frontend UI framework to dynamically present and manipulate data sourced \
    from the backend, ensuring a responsive and user-friendly interface."
  },
  {
    id: 4,
    title: 'Pixel Morans',
    content: "The Pixel Morans website needed a revamp to better identify",
    showMore: ref(false),
    link: 'https://pixelmorans.com',
    additionalText: "with the community members. The result was a highly responsive website \
    with vibrant brand colours that any of the community members would find easy to relate with."
  },
])

function toggleText(article) {
  article.showMore = !article.showMore;
}

onMounted(async () => {
  await reposStore.fetchPinnedRepos();
});
</script>

<style scoped>
.gallery {
  font-family: 'Staatliches', sans-serif;
  background-color: black;
  padding: 6.25rem;
  width: 100%;
  height: auto;
  gap: 60px;

  .github {
    display: block;
    text-decoration: underline;
    text-align: center;
    font-size: 1.2rem;
    margin-top: 1.2rem;
  }
}
h2 {
  text-align: left;
}
article {
  padding: 1rem;
}
h3, p {
  font-family: 'Space Grotesk', sans-serif;
}
@media (max-width: 768px) {
  .gallery {
    padding: 60px 20px;
  }
}
@media (min-width: 768px) {
  article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>