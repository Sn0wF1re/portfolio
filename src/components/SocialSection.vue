<template>
  <div class="socials" id="socials">
    <div class="socials-text">
      <h2>SOCIALIZE</h2>
      <p>
        Want to connect?
        Reach out to me on social media—let's collaborate
        and make great things happen!
      </p>
    </div>
    <div class="portals">
      <h3>PORTALS</h3>
      <a href="https://www.linkedin.com/in/clinton-mokaya/" target="_blank">LinkedIn</a>
      <a href="https://github.com/Sn0wF1re" target="_blank">GitHub</a>
      <a href="https://twitter.com/Sn0wF1re" target="_blank">X</a>
    </div>
  </div>
</template>

<style scoped>
.socials {
  padding: 6.25rem;
  background-color: black;
  width: 100%;
}
.socials-text {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
}
.portals {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
h2, h3 {
  font-family: 'Staatliches', sans-serif;
}
h2 {
  text-align: left;
  color: #0099ff;
}
p, a {
  font-family: 'Space Grotesk', sans-serif;
}
a {
  display: block;
}
@media (max-width: 768px) {
  .socials {
    padding: 2.5rem 1.25rem;
  }
}
</style>