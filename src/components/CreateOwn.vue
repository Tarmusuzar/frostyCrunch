<template>
  <div class="popup">
    <button class="order-button cancel" @click="$emit('closeOptions')">Cancel</button>

    <div id="app">
  <div class="ice-cream-container">
    <h1 class="title">Make Your Own</h1>

    <!-- Step Navigation -->
    

    

    <!-- Step 2: Customize -->
    <div v-show="currentStep === 1">
      <label class="label">Select Flavor:</label>
      <div class="button-group">
        <button @click="selectFlavor('mango')" :class="{ active: selectedFlavor === 'mango' }"  class="optBtn">Mango</button>
        <button @click="selectFlavor('strawberry')" :class="{ active: selectedFlavor === 'strawberry' }" class="optBtn">Strawberry</button>
        <button @click="selectFlavor('cherry')" :class="{ active: selectedFlavor === 'cherry' }" class="optBtn">Cherry</button>
        <button @click="selectFlavor('vanilla')" :class="{ active: selectedFlavor === 'vanilla' }" class="optBtn">Vanilla</button>
        <button @click="selectFlavor('banana')" :class="{ active: selectedFlavor === 'banana' }" class="optBtn">Banana</button>
        <button @click="selectFlavor('pinacolada')" :class="{ active: selectedFlavor === 'pinacolada' }" class="optBtn">Pinacolada</button>
      </div>

      <label class="label">Choose Size:</label>
      <div class="button-group">
        <button @click="selectSize('small')" :class="{ active: selectedSize === 'small' }" class="optBtn">Small</button>
        <button @click="selectSize('large')" :class="{ active: selectedSize === 'large' }" class="optBtn">Large</button>
      </div>

      <label class="label">Pick a Dip:</label>
      <div class="button-group">
        <button @click="selectDip('milkChocolate')" :class="{ active: selectedDip === 'milkChocolate' }" class="optBtn">Milk Chocolate 🍫</button>
        <button @click="selectDip('white')" :class="{ active: selectedDip === 'white' }" class="optBtn">White 🍦</button>
        <button @click="selectDip('dark')" :class="{ active: selectedDip === 'dark' }" class="optBtn">Dark 🍫</button>
        <button @click="selectDip('peanutButter')" :class="{ active: selectedDip === 'peanutButter' }" class="optBtn">Peanut Butter 🥜</button>
        <button @click="selectDip('saltedCaramel')" :class="{ active: selectedDip === 'saltedCaramel' }" class="optBtn">Salted Caramel 🍯</button>
      </div>
    </div>

    <!-- Step 3: Review -->
    <div v-show="currentStep === 3" class="order-summary">
      <h3>Your Delicious Creation:</h3>
      <p>🍦 Treat: {{ selectedSize }} {{ selectedFlavor }} {{ selectedTreat }}</p>
      <p>🍫 Dip: {{ selectedDip }}</p>
      <p>🎉 Toppings: {{ selectedToppings.join(', ') || 'None' }}</p>
      <p>🌈 Drizzle: {{ selectedDrizzle === 'none' ? 'None' : selectedDrizzle + ' (AED 4 extra)' }}</p>
      <h3>Total Price: AED {{ totalPrice.toFixed(2) }}</h3>
    </div>

    <!-- Next/Place Order Button -->
    <button  @click="$emit('closeOptions')" class="order-button" :disabled="currentStep === 3">{{ currentStep === 3 ? 'Place Order' : 'Next' }}</button>
  </div>
</div>
  </div>
</template>

<script>
export default {
  emit:['closeOptions'],
  data() {
    return {
      currentStep: 1,
      selectedTreat: 'frozenBanana',
      selectedFlavor: 'mango',
      selectedSize: 'small',
      selectedDip: 'milkChocolate',
      selectedToppings: [],
      selectedDrizzle: 'none',
      totalPrice: 19, // Default price for frozen banana
    };
  },
  methods: {
    addToCart(){

    },
    setStep(step) {
      this.currentStep = step;
    },
    selectTreat(treat) {
      this.selectedTreat = treat;
    },
    selectFlavor(flavor) {
      this.selectedFlavor = flavor;
    },
    selectSize(size) {
      this.selectedSize = size;
    },
    selectDip(dip) {
      this.selectedDip = dip;
    },
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      } else {
        this.placeOrder();
      }
    },
    placeOrder() {
      console.log('Order Placed:', {
        Treat: this.selectedSize + ' ' + this.selectedFlavor + ' ' + this.selectedTreat,
        Dip: this.selectedDip,
        Toppings: this.selectedToppings,
        Drizzle: this.selectedDrizzle === 'none' ? 'None' : this.selectedDrizzle,
        TotalPrice: 'AED ' + this.totalPrice.toFixed(2),
      });

      // Reset selections after placing the order
      this.resetSelections();
    },
    resetSelections() {
      this.currentStep = 1;
      this.selectedTreat = 'frozenBanana';
      this.selectedFlavor = 'mango';
      this.selectedSize = 'small';
      this.selectedDip = 'milkChocolate';
      this.selectedToppings = [];
      this.selectedDrizzle = 'none';
      this.totalPrice = 19; // Reset price to default for frozen banana
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

</style>
