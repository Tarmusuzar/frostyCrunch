<template>
  <main-loading :loading="loading" @turnOn="turnOn"></main-loading>
    <div  class="popup">
       <div class="sub">
        <div class="innav">
            <button class="close-btn" @click="$emit('closePopup')">Back</button>


          <div v-for="item in selectedCategory.items" :key="item.id" class="item" @click="$emit('itemSelected',selectedCategory.name, item, item.name)">
          <div class="itm">
            <img :src="require(`@/assets/${item.image}`)" alt="Item Image" />
             <div class="item-details">
            <p class="item-name" style="white-space: nowrap;">{{ item.name }}</p>
            <p class="description">{{ item.description }}</p>
            <p class="price">Dhs {{ item.price }} </p>
          </div>
          </div>
          <i :class="getIconClass(item)" @click="toggleAddedToCart(item)"></i>


          </div>
        </div>
      </div>
      <div class="innav">
            <button class="close-btn" @click="$emit('closePopup')">Back</button>


        </div>
       </div>
</template>
<script>
import MainLoading from './MainLoading.vue';
    export default{
      methods:{
        getIconClass(item) {
      return item.addedToCart ? 'fas fa-check' : 'fas fa-plus addBtn';
    },
    toggleAddedToCart(item) {
      item.addedToCart = !item.addedToCart;
      // Add any additional logic you need when the item is clicked
      // For example, you can set a timer to revert the class after 2 seconds
      setTimeout(() => {
        item.addedToCart = false;
      }, 4000);
    
  },
          off(){
            this.loading = false
        }, 
        turnOn(){
          this.loading = true
        }
        },
        mounted(){
          setTimeout(() => {
      // Turn off loading after the simulated delay
      this.loading = false;
    }, 600);
    

        },
        
        components:{MainLoading},
        props:['selectedCategory','addedToCart'],
        emits:['closePopup','itemSelected'],
        data(){
          return{
            loading:false
          }
        }
    }
</script>
<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.95);

  z-index: 900;
  overflow: scroll;
}
.sub{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: .4rem;
}

.popup-title {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
}

.itm{
  display: flex;
  max-width: 90%;

  
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: white;
  width: 100%;
  padding: .4rem;
  border-radius: 5px;
  justify-content: space-between;
  padding-right:  2rem;
  


}

.item img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 20px;
  max-width: 5rem;
}

.item-details {
  flex-grow: 1;
}
.add{
    flex: 1;
    padding: .2em .4rem;
    color:  white;
    border: 1px solid rgb(226, 222, 222);
    border-radius: 4px;
    background-color: rgb(9, 189, 24);
   min-width: 5rem;

}

.item-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.description {
  color: #555;
  margin-bottom: 10px;
}

.price {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.close-btn {
  background-color: #dc3545; /* McDonald's Red */
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 6rem;
  padding: 1rem;
  margin-bottom: .5rem;
  text-align: center;
  transition: background-color 0.3s ease-in-out;
}

.close-btn:hover {
  background-color: #c82333; /* Slightly darker red on hover */
}
.innav{
width: 90%;
margin: 1rem;

}
.addBtn{
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  padding: .2rem;
  background-color: green;
}
</style>