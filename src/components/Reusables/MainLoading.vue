<template>
    <div class="loading-overlay" v-if="loading">
      <div class="loading-spinner"></div>
    </div>
  </template>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8); /* Light white overlay */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999; /* Higher than other elements */
  }
  
  .loading-spinner {
    border: 4px solid rgba(0, 0, 0, 0.1); /* Light border */
    border-top: 4px solid #ffcc29; /* McDonald's Yellow */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  
  <script>
  export default {
    emits:['turnOn'],
    props:['loading'],
    mounted(){
    this.$emit('turnOn')

   },
   
    
    
    
  };
  </script>
  