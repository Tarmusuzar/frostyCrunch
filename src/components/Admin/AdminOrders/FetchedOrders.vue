<template>
    <div>
      <nav>
        <button @click="activeComponent = 'NewOrder'" :class="{ active: activeComponent === 'NewOrder' }">New Order</button>
        <button @click="activeComponent = 'PastOrder'" :class="{ active: activeComponent === 'PastOrder' }">Past Order</button>
      </nav>
      <component :is="activeComponent"></component>
    </div>
  </template>
  
  <script>
  import NewOrder from './NewOrders.vue';
  import PastOrder from './PastOrders.vue';
  
  export default {
    components: { 
      NewOrder,
      PastOrder,
    },
    data() {
      return {
        activeComponent: 'NewOrder', // Start with NewOrder active
      };
    },

  };
  </script>
  
  <style scoped>
  div {
   margin: 0 auto;
  }
  
  nav {
    display: flex;
    width: 100%;
    background-color: #3498db;
  }
  
  button {
    flex-grow: 1;
    padding: 15px;
    cursor: pointer;
    border: none;
    background-color: #2980b9;
    color: white;
    font-size: 16px;
    transition: background-color 0.3s ease-in-out;
  }
  
  button.active {
    background-color: #2c3e50;
  }
  
  component {
    margin-top: 20px;
  }
  </style>
  