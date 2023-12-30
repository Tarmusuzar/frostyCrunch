<template>
  <div class="rate-your-visit-container">
    <h1 class="title">Rate Your Visit</h1>

    <div class="rating-section">
      <div class="rating-option">
        <p class="rating-label">Food Quality</p>
        <div class="star-rating" :class="{ 'below-five': ratings.foodQuality < 5, 'average': ratings.foodQuality >= 5 && ratings.foodQuality <= 7, 'excellent': ratings.foodQuality > 7 }">
          <span v-for="star in 10" :key="star" @click="selectRating('foodQuality', star)" :class="{ 'filled': star <= ratings.foodQuality, 'star-below-five': ratings.foodQuality < 5, 'star-average': ratings.foodQuality >= 5 && ratings.foodQuality <= 7, 'star-excellent': ratings.foodQuality > 7 }">&#9733;</span>
        </div>
        <p class="selected-rating" :style="{ color: getRatingColor(ratings.foodQuality) }">Selected Rating: {{ ratings.foodQuality }}</p>
      </div>

      <div class="rating-option">
        <p class="rating-label">Service</p>
        <div class="star-rating" :class="{ 'below-five': ratings.service < 5, 'average': ratings.service >= 5 && ratings.service <= 7, 'excellent': ratings.service > 7 }">
          <span v-for="star in 10" :key="star" @click="selectRating('service', star)" :class="{ 'filled': star <= ratings.service, 'star-below-five': ratings.service < 5, 'star-average': ratings.service >= 5 && ratings.service <= 7, 'star-excellent': ratings.service > 7 }">&#9733;</span>
        </div>
        <p class="selected-rating" :style="{ color: getRatingColor(ratings.service) }">Selected Rating: {{ ratings.service }}</p>
      </div>
    </div>

    <button @click="submitRating" class="submit-button">Submit Rating</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratings: {
        foodQuality: 0,
        service: 0,
      },
    };
  },
  methods: {
    selectRating(category, rating) {
      this.ratings[category] = rating;
    },
    submitRating() {
      // Perform actions with the ratings (e.g., send to the server)
      console.log('Submitted Ratings:', this.ratings);
      // You can also add a thank you message or redirect the user to another page
    },
    getRatingColor(rating) {
      if (rating < 5) {
        return 'red';
      } else if (rating >= 5 && rating <= 7) {
        return 'orange';
      } else {
        return 'green';
      }
    },
  },
};
</script>

<style scoped>
.rate-your-visit-container {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
}

.title {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.rating-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.rating-option {
  text-align: center;
  flex: 1 0 45%;
  margin: 10px;
}

.rating-label {
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
}

.star-rating {
  font-size: 24px;
  cursor: pointer;
}

.star-rating span {
  margin: 0 5px;
  color: #ccc; /* Unfilled star color */
}

.star-rating span.filled {
  color: #ffcc00; /* Filled star color */
}

.star-rating span.star-below-five.filled {
  color: red; /* Filled star color for below 5 */
}

.star-rating span.star-average.filled {
  color: orange; /* Filled star color for 5 to 7 */
}

.star-rating span.star-excellent.filled {
  color: green; /* Filled star color for above 7 */
}

.selected-rating {
  font-size: 16px;
  margin-top: 5px;
}

.submit-button {
  background-color: #4caf50;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049;
}

@media screen and (max-width: 768px) {
  .rating-option {
    flex: 1 0 100%;
  }
}
</style>
