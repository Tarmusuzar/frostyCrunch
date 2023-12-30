<template>
  <div>
    <home-nav title="Place Order" @nav-clicked="navClicked"
      opt1="Sales"
      opt2="Place Order"
      opt3="Refund Order"
      opt4="Past Orders"
    ></home-nav>
    <div class="pos-container">
      <!-- Left side: Selected items -->
      <selected-items
        
       :selectedItems="selectedItems"
       @removeItem = "removeItem"
      ></selected-items>

      <!-- Right side: Product buttons and mini navigation -->
      <product-buttons @itemsSelected="pushSelectedItems" @done="done" ></product-buttons>
    </div>
  </div>
</template>

<script>
import HomeNav from '../../Reusables/HomeNav.vue';
import SelectedItems from './SelectedItems.vue';
import ProductButtons from './ProductButtons.vue';

export default {
  components: {
    HomeNav,
    SelectedItems,
    ProductButtons,
  },
  data(){
    return{
      selectedItems:[],
    }
  },
  methods:{
    navClicked(opt){
      if (opt =='Sales'){
        this.$router.push('/admin')
      }
      else if(opt =='Place Order'){
        this.$router.push('/placeOrder')

      }
      else{
        this.$router.push('/yetoDevelop')

      }
    },
    done(){
      this.selectedItems = []
    },
    pushSelectedItems(item, price){
      this.selectedItems.push({item:item, price:price, qty:1})
    },
    removeItem(index) {
      this.selectedItems.splice(index, 1);
    },
  },
  provide(){
    return{
      toUploadItems:this.selectedItems
    }
  }

};
</script>

<style scoped>
/* Container styles */
.pos-container {
  height: calc(100vh - 70px);
  display: flex;
  justify-content: space-between;
}
</style>
