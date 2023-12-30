<template>
    <section id="menu" class="menu-section">
      <h2>Our Menu</h2>
      <div class="menu-container">
        <div class="menu-items">
          <div v-for="item in menu" :key="item.id" class="menu-card">
            <div class="menu-item">
                <img :src="require(`@/assets/${item.image}`)" alt="Banana" />
              <div class="item-details">
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
                <p class="price">Dhs {{ item.price.toFixed(2) }}</p>
                <!-- <button @click="addToCart(item)" class="cta-button">Add to Cart</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="btnDiv">      <button class="orderBtn">Order Now</button>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menu: [
          { id: 1, name: 'Classic Banana', description: 'High end Dark Chocolate with granola', price: 19, image: 'classic.png' },
          { id: 2, name: 'Best Seller', description: 'Drippy white chocolate with yummy sprinkles', price: 19, image: 'best.png' },
          { id: 3, name: 'Kiddies ', description: 'Highly demanded salted caramel with peanuts', price: 19, image: 'kids.png' },
          { id: 3, name: 'Frosted Darkness', description: 'Yummy peanut butter with oreo crumbles', price: 19, image: 'chocolate.png' },
          { id: 3, name: 'Special Banana', description: 'Famous Valrhona Milk chocolate with M $ Ms', price: 19, image: 'special.png' },
        
        ],
      };
    },
    methods: {
     
    },
  };
  </script>

  
  
  <style scoped>
  ::-webkit-scrollbar {
  width: 12px; /* Set the width of the scrollbar */
}

/* Handle (thumb) styles */
::-webkit-scrollbar-thumb {
  background-color: #ffcc00; /* Set the color of the scrollbar handle */
  border-radius: 6px; /* Round the corners of the handle */
}

/* Track (the area on which the handle moves) styles */
::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Set the color of the scrollbar track */
}

/* Make the scrollbar buttons (arrows) transparent */
::-webkit-scrollbar-button {
  display: none;
}
  .menu-section {
    overflow-x: auto;
  }
  
  .menu-container {
    width: 100%;
    overflow-x: scroll;
    position: relative;
  }
  
  .menu-items {
    display: flex;
    align-items: center;
    transition: transform 0.5s ease;
    padding-bottom: 20px; /* Add some bottom padding to create space for the quarter-visible item */
  }
  
  .menu-card {
    width: calc(33.33% - 10px); /* Adjust the card width and margin as needed */
    margin-right: 10px;
    box-sizing: border-box;
    min-width: 40%;
    max-width:12rem;
  }
  
  .menu-item {
    width: 100%;
    box-sizing: border-box;
  }
  
  .menu-item img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .item-details {
    padding: 10px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 23px;
    margin-top: 34px;
  }
  
  .price {
    margin-top: 5px;
    font-weight: bold;
  }
  
  .cta-button {
    background-color: orange;;
    color: #333;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #dbb300;
  }
  .btnDiv{
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2rem;

  }

  .orderBtn {

  background-color: #fbb03b; /* McDonald's yellow */
  color: rgb(36, 34, 34); /* McDonald's red */
  padding: 14px 28px;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
    margin: 2rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.orderBtn:hover {
  background-color: #d8232a; /* Darker red on hover */
  color: #fff; /* White text on hover */
}

  </style>
  