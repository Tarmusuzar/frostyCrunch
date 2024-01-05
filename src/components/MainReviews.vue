<template>
  <div class="flavor-votes-container">
    <h1 class="title">Customer Feedback</h1>
    <div class="flavor-chart">
      <div v-for="flavor in flavors" :key="flavor" class="flavor-bar">
        <p class="flavor-label">{{ flavor }}</p>
        <div class="bar" :style="{ width: getPercentage(flavor) + '%', backgroundColor: getBarColor(flavor) }"></div>
        <p class="vote-count">{{ getVoteCount(flavor) }} votes</p>
      </div>
      <div class="flavor-bar">
        <p class="flavor-label">Customer Service</p>
        <div class="bar" :style="{ width: getPercentage(serviceTotal) + '%', backgroundColor: getServiceBarColor() }"></div>
        <p class="vote-count">{{ getVoteCount(serviceTotal) }} votes</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
      flavors: ["Milk Chocolate", "Dark Chocolate", "White Chocolate", "Peanut Butter", "Salted Caramel"],
      serviceTotal: 0,
    };
  },
  methods: {
    getVoteCount(item) {
      const flavorReviews = this.reviews.filter((review) => review.flavor === item);
      return flavorReviews.length;
    },
    getAverageFoodQuality(flavor) {
      const flavorReviews = this.reviews.filter((review) => review.flavor === flavor);
      const totalFoodQuality = flavorReviews.reduce((acc, review) => acc + review.foodQuality, 0);
      return flavorReviews.length === 0 ? 0 : totalFoodQuality / flavorReviews.length;
    },
    getPercentage(flavor) {
      return this.getAverageFoodQuality(flavor) * 10; // Convert to percentage
    },
    getBarColor(flavor) {
      const averageFoodQuality = this.getAverageFoodQuality(flavor);
      if (averageFoodQuality < 5) {
        return 'red';
      } else if (averageFoodQuality >= 5 && averageFoodQuality <= 7) {
        return 'orange';
      } else {
        return 'green';
      }
    },
    getServiceBarColor() {
      if (this.serviceTotal < 5) {
        return 'red';
      } else if (this.serviceTotal >= 5 && this.serviceTotal <= 7) {
        return 'orange';
      } else {
        return 'green';
      }
    },
  },
  beforeCreate() {
    fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/ruv.json')
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
      })
      .then((info) => {
        let arr = [];
        arr.push(info);
        arr.forEach((item) => {
          Object.values(item).forEach((item) => {
            this.reviews.push(item);
            this.serviceTotal = this.reviews.reduce((accumulator, currentValue) => accumulator + currentValue.service, 0);
          });
        });
      });
  },
};
</script>

<style scoped>
.flavor-votes-container {
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

.flavor-chart {
  display: flex;
  flex-direction: column;
}

.flavor-bar {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.flavor-label {
  flex: 1;
  margin-right: 10px;
}

.bar {
  flex: 5;
  height: 20px;
  background-color: #3498db; /* Blue color for the bars */
}

.vote-count {
  flex: 1;
  margin-left: 10px;
  text-align: right;
  color: #333;
}
</style>
