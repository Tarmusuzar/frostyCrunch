<template>
  <section class="hero-section">
    <div class="hero-image">
      <img src="@/assets/MainImage.png" alt="Frozen Banana Stand" />
    </div>
    <div class="hero-text">
      <h2>Indulge in Frosty Delights</h2>
      <p>Experience the perfect blend of sweetness and chilliness in every bite. Our frozen bananas are a treat for your senses.</p>
      <a @click="$router.push('/menu')"  class="cta-button">Discover More</a>
    </div>
  </section>
</template>

<style scoped>
/* Add your custom styles here */

.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #fff; /* White background */
}

.hero-image img {
  max-width: 100%;
  border-radius: 8px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}

.hero-text {
  max-width: 500px;
  color: #000; /* Black text */
}

h2 {
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #000; /* Black text */
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #444; /* Darker text color */
}

.cta-button {
  background-color: #ffcc00; /* Yellow button */
  color: #252424; /* Black text */
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2em;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.cta-button:hover {
  cursor: pointer;
  background-color: #dbb300; /* Darker yellow on hover */
}

  .hero-section {
    flex-direction: column;
    text-align: center;
  }

  .hero-text {
    margin-top: 20px;
    margin-bottom: 4rem;
  }

  .cta-button {
    margin-top: 20px;
  }

</style>
