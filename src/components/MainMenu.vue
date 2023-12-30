<template>
  <section style="  margin-top: -20px;">
    <!-- Header Section -->
    <div class="header">
      <h2 style="margin-left: 0; flex: 1;" class="label head"> Menu</h2>
      <button style="flex:1;" class="make" @click="$router.push('/createOwn')">Make Your Own</button>
    </div>

    <!-- Cart Icon -->
    <div class="cart-icon" @click="openCartDialog">
      <i class="fas fa-shopping-cart"></i>
      <span class="cart-counter">{{ cart.length }}</span>
    </div>

    <!-- Menu Section with Custom Scrollbar -->
    <div class="menu-container">
      <ul class="menu-list">
        <li v-for="category in menu" :key="category.title" class="cat">
          <h3 class="label">{{ category.title }}</h3>
          <div class="menu-items">
            <li v-for="item in category.products" :key="item.id" class="menu-item">
              <img :src="require(`@/assets/${item.image}`)" alt="Banana" />
              <div class="item-details">
                <h4>{{ item.name }}</h4>
                <p>{{ item.description }}</p>
                <p class="price">Dhs {{ item.price.toFixed(2) }}</p>
                <button @click="addToCart(item)">Add to Cart</button>
              </div>
            </li>
          </div>
        </li>
      </ul>
    </div>

    <!-- Cart Dialog -->
    <dialog v-show="isCartDialogOpen">
      <div class="cart-dialog">
        <h2>Order Summary</h2>
        <div class="cart-items">
          <div v-for="(item, index) in cart" :key="index" class="cart-item">
            <img :src="require(`@/assets/${item.image}`)" alt="Banana" />
            <div class="cart-item-details">
              <h4>{{ item.name }}</h4>
              <p>Quantity: {{ item.quantity }}</p>
              <p class="price">Dhs {{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>
            <div class="cart-item-controls">
              <button @click="increaseQuantity(index)">+</button>
              <button @click="deleteCartItem(index)">-</button>
            </div>
          </div>
        </div>
        <div class="lastSection">
          <button @click="closeCartDialog">Close</button>
          <button @click="closeCartDialog">Checkout</button>
        </div>
      </div>
    </dialog>
  </section>
</template>

<script>
export default {
  components:{
    
  },
  data() {
    return {
      menu: [
        {
          title: 'Frosted Bananas',
          products: [
            { id: 1, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            { id: 1, name: 'White Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            { id: 1, name: 'Salted Caramel', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            { id: 1, name: 'Peanut Butter', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            { id: 1, name: 'Dark Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            // ... (other products)
          ],
        },
        {
          title: 'Popsicle Icecreams',
          products: [
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
           
          ],
        },
        {
          title: 'Cone Icecreams',
          products: [
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
           
          ],
        },
        {
          title: 'Cup Icecreams',
          products: [
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
           
          ],
        },
        {
          title: 'Milkshakes',
          products: [
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
           
          ],
        },
        {
          title: 'Fresh Juices',
          products: [
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
           
          ],
        },
        {
          title: 'Coffee',
          products: [
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
           
          ],
        },
        {
          title: 'Beverages',
          products: [
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
            { id: 5, name: 'Milk Chocolate', description: 'The classic frozen banana', price: 19, image: 'classic.png' },
           
          ],
        },
        // ... (other categories)
      ],
      cart: [],
      isCartDialogOpen: false,
    };
  },
  methods: {
    addToCart(item) {
      this.cart.push({ ...item, quantity: 1 });
    },
    openCartDialog() {
      this.isCartDialogOpen = true;
    },
    closeCartDialog() {
      this.isCartDialogOpen = false;
    },
    deleteCartItem(index) {
      this.cart.splice(index, 1);
    },
    increaseQuantity(index) {
      this.cart[index].quantity++;
    },
  },
};
</script>

<style scoped>
  /* General Styles */
  body {
    font-family: 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    color: #333; /* Dark gray text */
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffcc00;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  /* Header Styles */

  .cat{
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    justify-content: space-between;
    max-width: 86%;
    margin: 1rem 0.4rem;
  }

  /* Cart Icon Styles */
  .cart-icon {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    color: #333; /* Dark gray cart icon */
  }

  .cart-icon i {
    font-size: 2em;
  }

  .cart-counter {
    background-color: #ffcc00; /* McDonald's yellow */
    color: #333; /* Dark gray text */
    border-radius: 50%;
    padding: 5px 10px;
    position: absolute;
    top: -5px;
    right: -5px;
    font-size: 12px;
  }

  /* Menu Container Styles */
  .menu-container {
    overflow-x: hidden; 
    display: flex;
    flex-direction: column;
    width: 100%;
    
    /* Enable horizontal scrolling */
  }

  /* Menu List Styles */
  .menu-list {
    overflow-x: auto;
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap; /* Each menu list on a separate row */
    gap: 20px; 
    width: 100%;
    /* Add gap between menu lists */
  }

  .menu-items {
    display: flex;
    gap: 20px; /* Add gap between menu items */
  }

  .menu-item {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    flex: 1;
    min-width: 5rem;
    display: flex;
    min-height: 10rem;
    flex-direction: column;
    align-items: center;
  }

  .menu-item img {
    width: 8rem;
    border-radius: 8px;
  }

  .item-details {
    margin-top: 10px;
  }

  .price {
    font-weight: bold;
    color: #333; /* Dark gray price text */
  }

  button {
    background-color: #4caf50; /* Green add to cart button */
    color: #fff; /* White text */
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #45a049; /* Darker green on hover */
  }

  /* Cart Dialog Styles */
  dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart-dialog {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-height: 90vh;
    overflow-y: scroll;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 20px; /* Add gap between cart items */
  }

  .cart-item {
    display: flex;
    gap: 20px;
  }

  .cart-item img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    margin-right: 20px;
  }

  .cart-item-details {
    flex-grow: 1;
  }

  .cart-item-controls {
    display: flex;
    gap: 10px;
  }

  .lastSection {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .lastSection button {
    background-color: #007bff; /* Blue checkout button */
    color: #fff; /* White text */
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  .lastSection button:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  h2 {
    margin: 1rem ;
  }

  li {
    list-style-type: none;
  }

  .make {
    margin: 1rem;
    
    
  }

  .label{
    text-align: left;
    padding-bottom: 1rem;
    margin-right: auto;
    

    
  }
  .head{
                font-size: 1.9rem;
            max-width: 600px;
            font-weight: 600;
  }
  
</style>
