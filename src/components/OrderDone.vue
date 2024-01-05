<template>
    <div class="order-success-backdrop">
      <div class="order-success">
        <div class="icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <h2>Your order has been placed!</h2>
        <p>Please proceed to the counter to make the payment.</p>
        <button @click="newOrder">New Order</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OrderSuccess',
  };
  </script>
  
  <style scoped>
  button{
    padding: 1rem;
    margin-top: 2rem;
    font-size: 1.2srem;
    border: 1px solid white;
    border-radius: 5px;
  }
  .order-success-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent black backdrop */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .order-success {
    text-align: center;
    padding: 20px;
    background-color: #4caf50; /* Green background color */
    color: white; /* White text color */
    border-radius: 8px; /* Rounded corners */
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  </style>
  