<template>
    <div class="rate-your-visit">
      <h2>Rate Your Frosty Crunch Experience!</h2>
      <p>Your feedback helps us keep things frosty! Please share your thoughts.</p>
  
      <form @submit.prevent="submitRating" v-if="!submittedMessage">
        <div v-if="step === 1" class="input-group">
          <label for="receipt-number">Receipt Number:</label>
          <input type="text" id="receipt-number" v-model="receiptNumber" required>
          <button @click="nextStep" class="toggle">Next</button>
        </div>
  
        <div v-if="step === 2" class="input-group">
          <label for="staff-served">Staff Member Who Served You:</label>
          <select id="staff-served" v-model="staffServed" required>
            <option value="">Azida</option>
            <option value="Sarah">Azida</option>
            <option value="Alex">Francis</option>
            <option value="Emma">Braham</option>
          </select>
          <button @click="nextStep">Next</button>
        </div>
  
        <div v-if="step === 3" class="order-section">
          <h3>Your Order:</h3>
          <div class="order-item">
            <h4>Frozen Banana:</h4>
            <ul>
              <li v-for="option in bananaFlavors" :key="option" @click="selectOption('selectedBanana', option)">
                <button :class="{ active: selectedBanana === option }">{{ option }}</button>
              </li>
            </ul>
          </div>
          <button @click="nextStep">Next</button>
        </div>
  
        <div v-if="step === 4" class="order-section">
          <h3>Ice Cream (Optional):</h3>
          <div class="order-item">
            <h4>Ice Cream:</h4>
            <ul>
              <li v-for="option in iceCreamFlavors" :key="option" @click="selectOption('selectedIceCream', option)">
                <button :class="{ active: selectedIceCream === option }">{{ option }}</button>
              </li>
            </ul>
          </div>
          <button @click="nextStep">Next</button>
        </div>
  
        <div v-if="step === 5" class="rating-group">
          <h3>Rate Your Experience:</h3>
          <div class="rating-item">
            <label for="customer-service">Customer Service:</label>
            <div class="stars">
              <span v-for="n in 10" :key="n">
                <button @click="customerServiceRating = n" :class="{ active: customerServiceRating === n }">{{ n }}</button>
              </span>
            </div>
          </div>
          <button @click="nextStep">Next</button>
        </div>
  
        <div v-if="step === 6" class="rating-group">
          <h3>Rate Your Experience:</h3>
          <div class="rating-item">
            <label for="food-quality">Food Quality:</label>
            <div class="stars">
              <span v-for="n in 10" :key="n">
                <button @click="foodQualityRating = n" :class="{ active: foodQualityRating === n }">{{ n }}</button>
              </span>
            </div>
          </div>
          <button @click="nextStep">Next</button>
        </div>
  
        <div v-if="step === 7" class="rating-group">
          <h3>Rate Your Experience:</h3>
          <div class="rating-item">
            <label for="ambience">Ambiance:</label>
            <div class="stars">
              <span v-for="n in 10" :key="n">
                <button @click="ambienceRating = n" :class="{ active: ambienceRating === n }">{{ n }}</button>
              </span>
            </div>
          </div>
          <button @click="nextStep">Next</button>
        </div>
  
        <div v-if="step === 8" class="recommendation-section">
          <h3>Would you recommend Frosty Crunch?</h3>
          <div class="radio-buttons">
            <label for="recommend-yes">Yes!</label>
            <input type="radio" id="recommend-yes" name="recommend" value="yes" v-model="wouldRecommend" required>
            <label for="recommend-no">No</label>
            <input type="radio" id="recommend-no" name="recommend" value="no" v-model="wouldRecommend" required>
          </div>
          <button type="submit">Submit Rating</button>
        </div>
  
        <button v-if="step > 1" @click="prevStep" class="toggle">Previous</button>
      </form>
  
      <p v-if="submittedMessage">Thank you for your feedback!</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        receiptNumber: "",
        staffServed: "",
        selectedBanana: "",
        bananaFlavors: ["Chocolate", "Strawberry", "Peanut Butter", "More..."],
        selectedIceCream: "",
        iceCreamFlavors: ["Vanilla", "Chocolate", "Coffee", "None"],
        customerServiceRating: 0,
        foodQualityRating: 0,
        ambienceRating: 0,
        wouldRecommend: null,
        submittedMessage: false,
        step: 1,
      };
    },
    methods: {
      submitRating() {
        // Gather all the rating data
        const ratingData = {
          receiptNumber: this.receiptNumber,
          staffServed: this.staffServed,
          orderedBanana: this.selectedBanana,
          orderedIceCream: this.selectedIceCream,
          customerServiceRating: this.customerServiceRating,
          foodQualityRating: this.foodQualityRating,
          ambienceRating: this.ambienceRating,
          wouldRecommend: this.wouldRecommend,
        };
  
        // Send the rating data to your server for processing
        // (Replace this with your actual submission logic)
        fetch('/api/ratings', {
          method: 'POST',
          body: JSON.stringify(ratingData),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(response => {
            if (response.ok) {
              this.submittedMessage = true;
              this.resetForm(); // Clear the form after successful submission
            } else {
              // Handle errors
            }
          })
          .catch(error => {
            // Handle network errors
            console.log(error);
          });
      },
      resetForm() {
        // Reset all form fields to their initial values
        this.receiptNumber = "";
        this.staffServed = "";
        this.selectedBanana = "";
        this.selectedIceCream = "";
        this.customerServiceRating = 0;
        this.foodQualityRating = 0;
        this.ambienceRating = 0;
        this.wouldRecommend = null;
        this.submittedMessage = false;
        this.step = 1;
      },
      nextStep() {
        this.step += 1;
      },
      prevStep() {
        this.step -= 1;
      },
      selectOption(property, option) {
        this[property] = option;
        this.nextStep();
      },
    },
  };
  </script>
<style scoped>
/* Overall component styling */
.rate-your-visit {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  font-family: 'Roboto', sans-serif;
  color: #333;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
}

/* Headings */
h2 {
  font-weight: bold;
  color: #e70000;
  font-size: 30px;
  margin-bottom: 30px;
}

h3 {
  font-weight: bold;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

/* Step indicator (Optional) */
.step-indicator {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.step-indicator span {
  border: 2px solid #ddd;
  border-radius: 50%;
  padding: 10px;
  margin: 5px;
  font-size: 16px;
}

.step-indicator span.active {
  background-color: #f7921e;
  color: #333;
}

/* Input fields and labels */
.input-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input[type="text"],
select {
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 18px;
}

/* Order section */
.order-section {
  border-top: 1px solid #ddd;
  padding-top: 20px;
  margin-bottom: 20px;
}

.order-item {
  margin-bottom: 15px;
}

.order-item h4 {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.order-item ul {
  list-style: none;
  padding: 0;
}

.order-item li button {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  color: #333;
}

.order-item li button.active {
  background-color: #f7921e;
  color: #333;
}

/* Rating section */
.rating-group {
  border-top: 1px solid #ddd;
  padding-top: 20px;
}

.stars {
  display: flex;
  justify-content: space-between;
}

.stars button {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.2s ease-in-out;
}

.stars button:hover {
  background-color: #ddd;
}

.stars button.selected {
  background-color: #38a3a5;
  color: #fff;
}

.stars button.selected:hover {
  background-color: #2ec7c9;
}

/* Recommendation section */
.recommendation-section {
  margin-bottom: 20px;
}

.radio-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label {
  margin-bottom: 0;
}

input[type="radio"] {
  margin-right: 5px;
}

/* Action buttons */
.action-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

button {
  background-color: #e70000;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

button:hover {
  background-color: #c50000;
}


</style>