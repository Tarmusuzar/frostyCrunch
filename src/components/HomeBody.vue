<template>
  <main-cart :cartItems="cartItems" @deleteItem="deleteItem" :addedToCart="addedToCart"></main-cart>
  <main-loading :loading="loading" @turnOn="turnOn"></main-loading>
    <div id="app" >
      <create-own 
      v-if="selectOptions" 
      @closeOptions="selectOptions=false"
      :twoStep="twoStep"
      :threeStp="threeStep"
      :itemName="itemName"
      :itemFlavor="itemFlavor"
      @customazationDone="customazationDone"

      ></create-own>
      <pop-up @itemSelected="itemSelected" v-if="selectedCategory" 
      :selectedCategory="selectedCategory" 
      :addedToCart="addedToCart"
      @closePopup="closePopup"></pop-up>
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
  import MainCart from './MainCart.vue';
  import CreateOwn from './CreateOwn.vue';
  import PopUp from './Reusables/PopUp.vue';
  import MainLoading from './Reusables/MainLoading.vue';
  export default {
   
    mounted() {
     window.addEventListener('load', this.turnOff);
},  

  
    components:{
      PopUp, 
      CreateOwn,
      MainLoading,
      MainCart
    },
    data() {
      return {
        cartItems:[],
        addedToCart:false,
        itemName:'',
        itemFlavor:'',
        twoStep:false,
        threeStep:false,
        loading:false,
        selectOptions:false,
        categories: [
          { id: 1,  image:'kids.png', name: 'Frozen Banana', description: 'Delicious frozen banana treats.', backgroundColor: '#ffcc29', 
          items: [
            { cat:'Frozen Banana',
              id: 1,
              name: 'White Chocolate',
              description: 'The classic frozen banana',
              price: 19,
              image: 'cat/white.png'
},
            {
              id: 1,
              cat:'Frozen Banana',
              name: 'Milk Chocolate',
              description: 'The classic frozen banana',
              price: 19,
              image: 'cat/milk.png'
},
            {
              id: 1,
              cat:'Frozen Banana',
              name: 'Peanut Butter',
              description: 'The classic frozen banana',
              price: 19,
              image: 'cat/peanut.png'
},
            {
              id: 1,
              name: 'Salted Caramel',
              cat:'Frozen Banana',
              description: 'The classic frozen banana',
              price: 19,
              image: 'cat/caramel.png'
},
       
            {
              id: 1,
              cat:'Frozen Banana',
              name: 'Plain',
              description: 'The classic frozen banana',
              price: 19,
              image: 'cat/white.png'
},
] },
          { id: 2, image:'popsicle.png', name: 'Popsicle Ice Cream', description: 'Colorful and refreshing popsicles.', backgroundColor: '#ffcc29', 
          items: [
          {
              id: 1,
              cat:'Popsicle',
              name: 'Mango',
              description: 'The amazing mango Fruit icecream',
              price: '25 | 13',
              image: 'cat/Mango.png'
},
          {
              id: 2,
              cat:'Popsicle',
              name: 'Strawberry',
              description: 'The amazing strawberry Fruit icecream',
              price: '25 | 13',
              image: 'cat/strawberry.png'
},
          {
              id: 3,
              cat:'Popsicle',
              name: 'Chestnut & Vanilla',
              description: 'The amazing chesntut Fruit icecream',
              price: '25 | 13',
              image: 'cat/chestnut.png'
},
          {
              id: 4,
              cat:'Popsicle',
              name: 'Banana',
              description: 'The amazing banana Fruit icecream',
              price: '25 | 13',
              image: 'cat/banana.png'
},
          {
              id: 5,
              cat:'Popsicle',
              name: 'Pinacolada',
              description: 'The amazing pineapple Fruit icecream',
              price: '25 | 13',
              image: 'cat/pinacolada.png'
},
          {
              id: 6,
              cat:'Popsicle',
              name: 'Cherry',
              description: 'The amazing pineapple Fruit icecream',
              price: '25 | 13',
              image: 'cat/cherry.png'
},
          ] },
          { id: 3, image:'cup.png', name: 'Cup Ice Cream', description: 'Creamy ice cream in cups.', backgroundColor: '#ffcc29', 
          items: [
          {
              id: 1,
              cat:'Cup Icecream',
              name: 'Mango',
              description: 'The amazing mango Fruit icecream',
              price: '25 | 13',
              image: 'cup/mango.png'
},
          {
              id: 2,
              cat:'Cup Icecream',
              name: 'Vanila',
              description: 'The amazing vanilla  icecream',
              price: '25 | 13',
              image: 'cup/vanilla.png'
},
          {
              id: 3,
              cat:'Cup Icecream',
              name: 'Strawberry',
              description: 'The amazing strawberry fruit  icecream',
              price: '25 | 13',
              image: 'cup/strawberry.png'
},
          ] },
          { id: 4, image:'cone.png', name: 'Cone Ice Cream', description: 'Classic cone ice cream delights.', backgroundColor: '#ffcc29', items:
           [
          {
              id: 1,
              cat:'Cone Icecream',
              name: 'Mango',
              description: 'The amazing mango Fruit icecream',
              price: '13',
              image: 'cone/mango.png'
},
          {
              id: 2,
              cat:'Cone Icecream',

              name: 'Vanilla',
              description: 'The amazing vanilla icecream',
              price: '13',
              image: 'cone/vanilla.png'
},
          {
              id: 3,
              cat:'Cone Icecream',

              name: 'Strawberry',
              description: 'The amazing strawberry fruit icecream',
              price: '13',
              image: 'cone/strawberry.png'
},
          ] },
          { id: 5, image:'shakes.png', name: 'Milkshakes', description: 'Thick and tasty milkshakes.', backgroundColor: '#ffcc29', 
          items: [
          {
              id: 1,
              cat:'Milkshake',
              name: 'Oreo',
              description: 'The amazing oreo and banana shake',
              price: '28',
              image: 'shakes/oreo.png'
},
          {
              id: 2,
              cat:'Milkshake',
              name: 'Strawberry',
              description: 'The amazing strawberry and banana shake',
              price: '28',
              image: 'shakes/strawberry.png'
},
          {
              id: 3,
              cat:'Milkshake',
              name: 'Banana',
              description: 'The amazing  banana shake',
              price: '28',
              image: 'shakes/banana.png'
},
          {
              id: 4,
              cat:'Milkshake',
              name: 'Mango',
              description: 'The amazing  mango shake',
              price: '28',
              image: 'shakes/mango.png'
},

          ] },
          { id: 6, image:'juice.png', name: 'Fresh Juices', description: 'Healthy and refreshing fruit juices.', backgroundColor: '#ffcc29', 
          items: [
          {
              id:1,
              cat:'Watermelon Juice',
              name: 'Fresh Watermelon Juice',
              description: 'Inhouse Fresh Juice',
              price: '12',
              image: 'juice/watermelon.png',
              added:false
},
          {
              id:1,
              added:false,
              cat:'Orange Juice',
              name: 'Fresh Orange Juice',
              description: 'Inhouse Fresh Juice',
              price: '12',
              image: 'juice/orange.png'
},
          ] },
          { id: 7, image:'coffee.png', name: 'Coffee', description: 'Rich and aromatic coffee beverages.', backgroundColor: '#ffcc29', 
          items: [
          {
              id:1,
              cat:'Coffee',
              name: 'Espresso',
              description: 'Aromatic Espresso',
              price: '10 | 17',
              image: 'coffee/espresso.png'
},
          {
              id:2,
              cat:'Coffee',
              name: 'Americano',
              description: 'Signature Americano',
              price: '19',
              image: 'coffee/americano.png'
},
          {
              id:3,
              cat:'Coffee',
              name: 'Spanish Latte',
              description: 'Amazing Latte',
              price: '21',
              image: 'coffee/spanish.png'
},
          {
              id:4,
              cat:'Coffee',
              name: 'Iced Latte',
              description: 'Amazing Iced latte',
              price: '21',
              image: 'coffee/iced.png'
},
          ] },
          { id: 8, image:'water.png', name: 'Beverages', description: 'Various beverages to quench your thirst.', backgroundColor: '#ffcc29', 
          items: [
          {
              id:1,
              cat:'Water',
              name: 'Mineral Water',
              description: 'Quench your thirst',
              price: '4',
              image: 'water.png'
},
          ] },
        ],
        selectedCategory: null,
      };
    },
    methods: {
      deleteItem(id){
        this.cartItems.splice(id, 1);

      },
      itemSelected(item, selectedItem,flavor){
        this.itemName = item
        this.itemFlavor = flavor
        if(item == 'Popsicle Ice Cream' || item == 'Cup Ice Cream' ){
                this.threeStep = true
                this.twoStep =false
                  this.selectOptions=true

        }
        else if(item =='Frozen Banana' || item== 'Cone Ice Cream'){
          this.twoStep = true
          this.threeStep = false
          this.selectOptions = true
        }
        else{
          this.selectOptions= false
          this.loading = true
          setTimeout(() => {
          this.loading=false
        }, 200);
          this.cartItems.push(selectedItem)
          this.addedToCart=true


          setTimeout(() => {
            this.addedToCart=false
          }, 1000);
          
          
          
        }  
      },
      turnOn(){
        this.loading=true
      },
      turnOff(){
        this.loading = false
      },
      showPopup(category) {
        this.selectedCategory = category;
      },
      closePopup() {
        this.selectedCategory = null;
      },
      addToCart(item) {
        console.log(`Added ${item.name} to cart`);
      },
      customazationDone(data){
        this.loading = true
        setTimeout(() => {
          this.loading=false
        }, 200);
        this.selectOptions= false
        this.cartItems.push(data)
      }
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
