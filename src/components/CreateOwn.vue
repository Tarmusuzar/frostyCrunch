<template>
    <div id="app">
      <div class="ice-cream-container">
        <h1 class="title"> Make Your Own</h1>
  
        <div class="selection-group">
          <label class="label">Choose Your Treat:</label>
          <select v-model="selectedTreat" class="select-box">
            <option value="frozenBanana">Frozen Banana</option>
            <option value="popsicle">Popsicle Ice Cream</option>
            <option value="cup">Cup Ice Cream</option>
            <option value="cone">Cone Ice Cream</option>
          </select>
        </div>
  
        <div class="selection-group" v-if="selectedTreat !== 'frozenBanana'">
          <label class="label">Select Flavor:</label>
          <select v-model="selectedFlavor" class="select-box">
            <option value="mango">Mango</option>
            <option value="strawberry">Strawberry</option>
            <option value="cherry">Cherry</option>
            <option value="vanilla">Vanilla</option>
            <option value="banana">Banana</option>
            <option value="pinacolada">Pinacolada</option>
          </select>
        </div>
  
        <div class="selection-group">
          <label class="label">Choose Size:</label>
          <select v-model="selectedSize" class="select-box">
            <option value="small">Small</option>
            <option value="large">Large</option>
          </select>
        </div>
  
        <div class="selection-group">
          <label class="label">Pick a Dip:</label>
          <select v-model="selectedDip" class="select-box">
            <option value="milkChocolate">Milk Chocolate 🍫</option>
            <option value="white">White 🍦</option>
            <option value="dark">Dark 🍫</option>
            <option value="peanutButter">Peanut Butter 🥜</option>
            <option value="saltedCaramel">Salted Caramel 🍯</option>
          </select>
        </div>
  
        <div class="selection-group">
          <label class="label">Add Toppings:</label>
          <select v-model="selectedToppings" multiple class="select-box">
            <option value="granola">Granola 🌰</option>
            <option value="peanuts">Peanuts 🥜</option>
            <option value="coloredSprinkles">Colored Sprinkles 🌈</option>
            <option value="mms">M&Ms 🍫</option>
            <option value="oreo">Oreo 🍪</option>
            <option value="lotus">Lotus 🍪</option>
            <option value="pretzels">Pretzels 🥨</option>
          </select>
        </div>
  
        <div class="selection-group">
          <label class="label">Add Drizzle (AED 4 extra):</label>
          <select v-model="selectedDrizzle" class="select-box">
            <option value="strawberry">Strawberry 🍓</option>
            <option value="caramel">Caramel 🍯</option>
            <option value="lotus">Lotus 🍪</option>
            <option value="none">None</option>
          </select>
        </div>
  
        <div class="order-summary">
          <h3>Your Delicious Creation:</h3>
          <p>🍦 Treat: {{ selectedSize }} {{ selectedFlavor }} {{ selectedTreat }}</p>
          <p>🍫 Dip: {{ selectedDip }}</p>
          <p>🎉 Toppings: {{ selectedToppings.join(', ') || 'None' }}</p>
          <p>🌈 Drizzle: {{ selectedDrizzle === 'none' ? 'None' : selectedDrizzle + ' (AED 4 extra)' }}</p>
          <h3>Total Price: AED {{ totalPrice.toFixed(2) }}</h3>
        </div>
  
        <button @click="placeOrder" class="order-button">Place Order</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
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
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
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
  
  </style>
  