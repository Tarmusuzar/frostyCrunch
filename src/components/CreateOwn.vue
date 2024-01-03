<template>
  <div class="popup">
    <button class="order-button cancel" @click="$emit('closeOptions')">Cancel</button>

    <div id="app">
      <div class="ice-cream-container">
        <h1 class="title">Make Your Own</h1>

        <!-- Step Navigation -->
        <div class="step-navigation">
          <button @click="setStep(1)" :disabled="currentStep === 1" class="step-button" v-if="!twoStep">Size</button>
          <button @click="setStep(2)" :disabled="currentStep === 2" class="step-button" v-if=" showToppingStep">Topping</button>
          <button @click="setStep(2)" :disabled="currentStep === 2" class="step-button" v-if=" showDrizzleStep">Drizzle</button>
          <button @click="setStep(2)" :disabled="currentStep === 2" class="step-button" v-if="twoStep && !threeStep">Review</button>
          <button @click="setStep(3)" :disabled="currentStep === 3" class="step-button" v-if="!twoStep ">Review</button>
        </div>

        <!-- Step 1: Select Size -->
        <div v-show="currentStep === 1" v-if="!twoStep">
          <label class="label">Choose Size:</label>
          <div class="button-group">
            <button @click="selectSize('small')" :class="{ active: selectedSize === 'small' }" class="optBtn">Small</button>
            <button @click="selectSize('regular')" :class="{ active: selectedSize === 'regular' }" class="optBtn">Regular</button>
          </div>
        </div>

        <!-- Step 2: Customize -->
        <div v-show="currentStep === 2">
          <label class="label">Choose Toppings:</label>
          <div class="button-group">
            <!-- Add your topping options here -->
            <!-- Example: -->
            <button @click="toggleTopping('m&m')" :class="{ active: isToppingSelected('m&m') }" class="optBtn">M&M</button>
            <button @click="toggleTopping('oreo')" :class="{ active: isToppingSelected('oreo') }" class="optBtn">Oreo</button>
            <button @click="toggleTopping('hazelnuts')" :class="{ active: isToppingSelected('hazelnuts') }" class="optBtn">Hazelnuts</button>
            <button @click="toggleTopping('gingerOatCookies')" :class="{ active: isToppingSelected('gingerOatCookies') }" class="optBtn">Ginger Oat Cookies</button>
            <button @click="toggleTopping('peanuts')" :class="{ active: isToppingSelected('peanuts') }" class="optBtn">Peanuts</button>
            <!-- Visual indication of topping limit -->
            <p v-if="selectedToppings.length >= 2" class="limit-indicator">You can only select up to two toppings.</p>
          </div>

          <label class="label">Choose Drizzle (AED 4 extra):</label>
          <div class="button-group">
            <!-- Add your drizzle options here -->
            <!-- Example: -->
            <button @click="selectDrizzle('lotus')" :class="{ active: selectedDrizzle === 'lotus' }" class="optBtn">Lotus (AED 4 extra)</button>
            <button @click="selectDrizzle('strawberry')" :class="{ active: selectedDrizzle === 'strawberry' }" class="optBtn">Strawberry (AED 4 extra)</button>
            <button @click="selectDrizzle('darkchocolate')" :class="{ active: selectedDrizzle === 'darkchocolate' }" class="optBtn">Dark Chocolate (AED 4 extra)</button>
            <button @click="selectDrizzle('strawberry')" :class="{ active: selectedDrizzle === 'strawberry' }" class="optBtn">Strawberry (AED 4 extra)</button>
            <!-- Visual indication of extra charge -->
            <p v-if="selectedDrizzle !== 'none'" class="extra-charge-indicator">Drizzle selected: AED 4 extra</p>
          </div>
        </div>

        <!-- Step 3: Review -->
        <div v-show="currentStep === 3" class="order-summary">
          <h3>Your Delicious Creation:</h3>
          <p>🍦 Size: {{ selectedSize }}</p>
          <p>🍫 Toppings: {{ selectedToppings.join(', ') || 'None' }}</p>
          <p>🌈 Drizzle: {{ selectedDrizzle === 'none' ? 'None' : selectedDrizzle }}</p>
          <h3>Total Price: AED {{ totalPrice.toFixed(2) }}</h3>
        </div>

        <!-- Next/Place Order Button -->
        <button @click="nextStep" class="order-button" :disabled="currentStep === 3">{{ currentStep === 3 ? 'Add to Cart' : 'Next' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['twoStep', 'threeStep'],
  emit: ['closeOptions'],
  data() {
    return {
      selectedToppings: [],
      currentStep: this.twoStep? 2:1,
      selectedSize: 'small',
      selectedDrizzle: 'none',
      totalPrice: 19, // Default price for frozen banana
    };
  },
  computed: {
    showToppingStep() {
      // Show the topping step for all treats except drinks, shakes, coffee, and juices
      return !['drink', 'shake', 'coffee', 'juice'].includes(this.selectedTreat);
    },
    showDrizzleStep() {
      // Show the drizzle step for all treats except drinks, shakes, coffee, and juices
      return !['drink', 'shake', 'coffee', 'juice'].includes(this.selectedTreat);
    },
  },
  methods: {
    setStep(step) {
      this.currentStep = step;
    },

    // ... (unchanged methods)

    toggleTopping(topping) {
      const index = this.selectedToppings.indexOf(topping);

      if (index === -1 && this.selectedToppings.length < 2) {
        // Topping not in the list, and limit not reached, add it
        this.selectedToppings.push(topping);
      } else if (index !== -1) {
        // Topping already in the list, remove it
        this.selectedToppings.splice(index, 1);
      }
    },

    isToppingSelected(topping) {
      return this.selectedToppings.includes(topping);
    },

    selectSize(size) {
      this.selectedSize = size;
    },

    selectDrizzle(drizzle) {
      if (this.selectedDrizzle === drizzle) {
      // If the same drizzle is clicked again, unselect it
      this.selectedDrizzle = 'none';
    } else {
      // Otherwise, select the new drizzle
      this.selectedDrizzle = drizzle;
    }
    },

    // Add other methods for selecting toppings and drizzles
    nextStep() {
  if (this.currentStep === 1) {
    // If stepTwo is true, directly go to the last step (Review)
    // Otherwise, proceed to step 2 (Toppings/Drizzle)
    this.setStep(this.stepTwo ? 3 : 2);
  } else if (this.currentStep === 2 && this.showToppingStep) {
    // If stepTwo is true and it's the second step, and Toppings/Drizzle are shown, proceed to Review
    // Otherwise, proceed to the next step (Step 3)
    this.setStep(this.stepTwo ? 3 : 3);
  } else if (this.currentStep === 3) {
    // If it's the last step, add to cart
    this.addToCart();
  }
},
    // Add to cart functionality
    addToCart() {
      // const orderDetails = {
      //   treat: `${this.selectedSize} ${this.selectedFlavor} ${this.selectedTreat}`,
      //   dip: this.selectedDip,
      //   toppings: this.selectedToppings,
      //   drizzle: this.selectedDrizzle,
      //   totalPrice: this.totalPrice.toFixed(2),
      // };

      alert()
    },
  },
};
</script>


<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(22, 22, 22, 0.95);

  z-index: 1000;
  overflow: scroll;
}
#app {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:2rem auto;
  min-width: 15px;

  
}
.limit-indicator {
  color: red; /* Adjust the color as needed */
}

.extra-charge-indicator {
  color: blue; /* Adjust the color as needed */
}

.ice-cream-container {
  width: 100%;
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  color: #ff1f1f;
  font-size: 24px;
  margin-bottom: 20px;
}

.label {
  color: #333;
  margin-bottom: 5px;
}

.select-box {
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 2px solid #ff1f1f;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
}

.button-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.button-group button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.step-navigation {
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
}

.step-navigation button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.step-navigation button.active {
  background-color: #ff1f1f;
  color: #fff;
}

.step-navigation button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.order-summary {
  margin-top: 20px;
  text-align: left;
  color: #333;
}

.order-summary h3 {
  color: #ff1f1f;
  margin-top: 20px;
}

.order-button {
  background-color: #ff1f1f;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.order-button:hover {
  background-color: #e60000;
}

.optBtn{
  color: rgb(56, 55, 55);
  border: 1px solid gray;
  border-radius: 5px;
  background-color: rgb(235, 232, 232);
}
.active{
  background-color: green;
  color: white;
}
.cancel{
  margin: .4rem 0;
}
@media screen and (max-width: 550px) {
  .step-navigation button {
    padding: 4px 7px; /* Adjust the padding as needed */
    font-size: 14px;

     /* Adjust the font size as needed */
  }
}

</style>
