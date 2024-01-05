<template>
  <div class="rate-your-visit-container">
    <main-loading :loading="loading"></main-loading>

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
      <div class="rating-option">
        <p class="rating-label">Flavor Tested</p>
        <div>
          <button class="flavor" :class="{ 'selected-flavor': ratings.flavor === 'Milk Chocolate' }" @click="selectFlavor('Milk Chocolate')">Milk Chocolate</button>
          <button class="flavor" :class="{ 'selected-flavor': ratings.flavor === 'White Chocolate' }" @click="selectFlavor('White Chocolate')">White Chocolate</button>
          <button class="flavor" :class="{ 'selected-flavor': ratings.flavor === 'Dark Chocolate' }" @click="selectFlavor('Dark Chocolate')">Dark Chocolate</button>
          <button class="flavor" :class="{ 'selected-flavor': ratings.flavor === 'Salted Caramel' }" @click="selectFlavor('Salted Caramel')">Salted Caramel</button>
          <button class="flavor" :class="{ 'selected-flavor': ratings.flavor === 'Peanut Butter' }" @click="selectFlavor('Peanut Butter')">Peanut Butter</button>
        </div>
        <p class="selected-rating" :style="{ color: getRatingColor(ratings.service) }">Selected Flavor: {{ ratings.flavor }}</p>

      </div>
    </div>

    <button @click="submitRating" class="submit-button">Submit Rating</button>
  </div>
</template>

<script>
import MainLoading from './Reusables/MainLoading.vue';
export default {
  components:{MainLoading},
  data() {
    return {
      loading:false,
      ratings: {
        foodQuality: 0,
        service: 0,
        flavor: '',
      },
    };
  },
  methods: {
    selectRating(category, rating) {
      this.ratings[category] = rating;
    },
    selectFlavor(selectedFlavor) {
      this.ratings.flavor = selectedFlavor;
    },
    submitRating() {
      if (
        this.ratings.foodQuality === 0 ||
        this.ratings.service === 0 ||
        this.ratings.flavor === ''
      ) {
        alert('Please complete all fields before submitting.');
      } else {
        this.loading=true

        // Perform actions with the ratings and flavor (e.g., send to the server)
        fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/ruv.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.ratings),
        }).then(() => {
          setTimeout(() => {
            this.$router.go('/');
          }, 1000);
        });
      }
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

.selected-flavor {
  background-color: green;
  color: #ffffff;
  border: 1px solid white;
}

.selected-flavor {
  background-color: green;
  color: #ffffff;
  border: 1px solid white;
}

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
  background-color: green;
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
.flavor{
  font-size: 1rem;
  margin: .3rem;
  padding: .5rem;
  border:1px solid rgb(156, 154, 154);
  border-radius:5px;
}

@media screen and (max-width: 768px) {
  .rating-option {
    flex: 1 0 100%;
  }
}
</style>

