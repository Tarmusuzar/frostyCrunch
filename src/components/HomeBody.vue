<template>
    <div id="app">
      <create-own v-if="selectOptions" @closeOptions="selectOptions=false"></create-own>
      <pop-up @itemSelected="selectOptions=true" v-if="selectedCategory" :selectedCategory="selectedCategory" @closePopup="closePopup"></pop-up>
      <div class="main-menu">
        <div v-for="category in categories" :key="category.id" class="category" @click="showPopup(category)">
          <div class="category-image" :style="{ backgroundColor: category.backgroundColor }">
            <img :src="require(`@/assets/${category.image}`)" alt="Category Image" />
          </div>
          <div class="category-info">
            <p class="category-name">{{ category.name }}</p>
            <p class="category-description">{{ category.description }}</p>
          </div>
        </div>
      </div>
  
      
    </div>
  </template>
  
  <script>
  import CreateOwn from './CreateOwn.vue';
  import PopUp from './Reusables/PopUp.vue';
  export default {
    components:{
      PopUp, 
      CreateOwn
    },
    data() {
      return {
        selectOptions:false,
        categories: [
          { id: 1, image:'kids.png', name: 'Dark Chocolate', description: 'Delicious frozen banana treats.', backgroundColor: '#ffcc29', 
          items: [
            {
              id: 1,
              name: 'White Chocolate',
              description: 'The classic frozen banana',
              price: 19,
              image: 'kids.png'
},
            {
              id: 1,
              name: 'Milk Chocolate',
              description: 'The classic frozen banana',
              price: 19,
              image: 'special.png'
},
            {
              id: 1,
              name: 'Peanut Butter',
              description: 'The classic frozen banana',
              price: 19,
              image: 'classic.png'
},
            {
              id: 1,
              name: 'Salted Caramel',
              description: 'The classic frozen banana',
              price: 19,
              image: 'best.png'
},
       
            {
              id: 1,
              name: 'Plain',
              description: 'The classic frozen banana',
              price: 19,
              image: 'special.png'
},
] },
          { id: 2, image:'popsicle.png', name: 'Popsicle Ice Cream', description: 'Colorful and refreshing popsicles.', backgroundColor: '#ffcc29', items: [] },
          { id: 3, image:'cup.png', name: 'Cup Ice Cream', description: 'Creamy ice cream in cups.', backgroundColor: '#ffcc29', items: [] },
          { id: 4, image:'cone.png', name: 'Cone Ice Cream', description: 'Classic cone ice cream delights.', backgroundColor: '#ffcc29', items: [] },
          { id: 5, image:'shakes.png', name: 'Milkshakes', description: 'Thick and tasty milkshakes.', backgroundColor: '#ffcc29', items: [] },
          { id: 6, image:'juice.png', name: 'Fresh Juices', description: 'Healthy and refreshing fruit juices.', backgroundColor: '#ffcc29', items: [] },
          { id: 7, image:'coffee.png', name: 'Coffee', description: 'Rich and aromatic coffee beverages.', backgroundColor: '#ffcc29', items: [] },
          { id: 8, image:'water.png', name: 'Beverages', description: 'Various beverages to quench your thirst.', backgroundColor: '#ffcc29', items: [] },
        ],
        selectedCategory: null,
      };
    },
    methods: {
      showPopup(category) {
        this.selectedCategory = category;
      },
      closePopup() {
        this.selectedCategory = null;
      },
      addToCart(item) {
        // Replace this with your actual add to cart logic
        console.log(`Added ${item.name} to cart`);
      },
    },
  };
  </script>
  
  <style scoped>
#app {
  font-family: 'Arial', sans-serif;
}

.main-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding:0 1rem;
}

.category {
  cursor: pointer;
  text-align: center;
  margin: 10px;
  padding: 10px;
  background-color: #ffcc29; /* McDonald's Yellow */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

.category:hover {
  transform: scale(1.05);
}

.category-image {
  background-color: #ffcc29; /* McDonald's Yellow */
  border-radius: 10px;
  overflow: hidden;
}

.category-image img {
  width: 100%;
  min-height: 10rem;
  max-height: 10rem;
  object-fit: cover;
}

.category-info {
  margin-top: 10px;
}

.category-name {
  font-weight: bold;
  font-size: 1.2rem;
}

.category-description {
  color: #555;
  font-size: 0.9rem;
}

@media screen and (max-width: 767px) {
  .category {
    flex-basis: calc(50% - 20px);
  }
}
@media screen and (min-width: 500px) {
  .category {
    flex-basis: calc(33.33% - 20px);
  }
}

</style>
