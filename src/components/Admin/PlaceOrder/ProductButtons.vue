<template>
    <check-out v-if="showModal" :showModal="showModal" @closeModal="placeOrder" @done ="$emit('done')" :grandTotal="grandTotal"></check-out>
    <div class="product-buttons">
      <ul class="mini-nav">
        <!-- Display mini navigation here -->
        <li v-if="currentCategory != ''" @click="resetCurrentCategories">Back</li>
        <button class="place-order-btn" @click="placeOrder">Place Order</button>
      </ul>
      <ul class="categories" v-if="this.currentCategory == ''">
        <!-- Display main categories here -->
        <li class="category" v-for="category in categories" :key="category" @click="categoryChosen(category.categoryItems, category.categoryPrice)">
          {{ category.categoryName }}
        </li>
      </ul>
      <ul class="categories" v-if="this.currentCategory!=''">
        <!-- Display subcategories/items here -->
        <li class="category" v-for="item in chosenCategory" :key="item" @click="selectItem(item, categoryPrice)">
          <div class="pricing">
            <p>{{ item }}</p>
          <p class="price">{{ categoryPrice }} AED</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import CheckOut from './CheckOut/CheckOut.vue'
  export default {
    components:{
      CheckOut
    },
    data(){
      return{
      showModal:false,
        categoryPrice:'',
        currentCategory: '',
      chosenCategory: [],
      selectedItems:[],
      grandTotalArr:[],
      grandTotal:0,
      categories: [
      {categoryName:'Frozen Bananas', categoryPrice:19, categoryItems:[
                    'Milk Chocolate',
                    'White Chocolate',
                    'Salted Caramel',
                    'Dark Chocolate',
                    'Peanut Butter',
                    
                ]},
                {categoryName:'Icecream Small', categoryPrice:13, categoryItems:[
                    'Strawberry',
                    'Mango',
                    'Pinacolada',
                    'Chestnut & Vanilla',
                    'Banana',
                    'Cherry'
                    
                ]},
                {categoryName:'Icecream Big', categoryPrice:13, categoryItems:[
                    'Strawberry',
                    'Mango',
                    'Pinacolada',
                    'Chestnut & Vanilla',
                    'Banana',
                    'Cherry'
                    
                ]},
                {categoryName:'Cup Icecream Small', categoryPrice:13, categoryItems:[
                    'Strawberry',
                    'Mango',
                    'Plain Vanilla',
                   
                ]},
                {categoryName:'Cup Icecream Big', categoryPrice:25, categoryItems:[
                    'Strawberry',
                    'Mango',
                    'Plain Vanilla',
                    
                
                ]},
                {categoryName:'Milk Shakes', categoryPrice:28, categoryItems:[
                    'Strawberry',
                    'Mango',
                    'Banana',
                    'Oreo',
                    'Peanut Butter'
                    
                ]},
                {categoryName:'Juices', categoryPrice:12, categoryItems:[
                    'Orange',
                    'Watermelon',
                    
                    
                ]},
                
                {categoryName:'Beverages', categoryPrice:4, categoryItems:[
                    'Water',
                    
                    
                    
                ]},
                {categoryName:'Drizzles', categoryPrice:4, categoryItems:[
                    'Lotus',
                    'Caramel',
                    'Dark Chocolate'
                    
                    
                    
                
                ]},
                {categoryName:'Coffee', categoryPrice:4, categoryItems:[
                    'Espresso',
                    'Americano',
                    'Spanish Latte',
                    'Double Shot'
                    
                    
                    
                ]}
                
      ],
      }
    },
    
    methods: {
      categoryChosen(category,price){ 
        this.categoryPrice = price
        this.currentCategory = 'selected'
        category.forEach(item => {
          this.chosenCategory.push(item)

          
        });
        
      },
      resetCurrentCategories(){
        this.currentCategory = ''
        this.chosenCategory = []

      },
      selectItem(item,price){
        this.grandTotalArr.push(price)
        let sum = 0;
        this.grandTotalArr.forEach(item => {
        sum += item;
        });
        this.grandTotal=sum
        this.$emit('itemsSelected', item, price)
      },
      placeOrder(){
      this.showModal =! this.showModal
      
    }
    },
    
    emits:['itemsSelected','done' ],
    
  };
  </script>
  
  <style scoped>
  /* Add product buttons styles */
  .product-buttons {
    border-left: 1px solid gray;
    flex: 2;
    margin-top: -20px;
    color: black;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .product-button {
    background-color: #fff;
    color: #4CAF50; /* Green */
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .product-button:hover {
    background-color: #e7e7e7;
  }
  
  /* Mini navigation styles */
  .mini-nav {
    margin-top: 20px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    background-color: #e7e7e7;
    
  }
  .mini-nav>button{
    min-width: 100%;
    font-size: 1.2rem;
  }
  
  button {
    background-color: #4CAF50; /* Green */
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #45a049; /* Darker Green */
  }
  
  .categories {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    
  }
  
  .category {
    background-color: rgb(221, 216, 216);
    padding: 1rem;
    margin: .4rem;
    box-shadow: 2px 4px 2px 1px rgb(214, 211, 211);
    border-radius: 5px;
    font-size: 1.3rem;
    min-width: 10rem;
    max-width: auto;
    flex: 1;
    
  }
  .price{
    font-size: 1.2rem;
    color: #302d2d;
  }
  .pricing{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .category:hover {
    background-color: rgb(255, 217, 0);
  }
  </style>
  