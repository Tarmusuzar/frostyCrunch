<template>
    <div class="selected-items">
      <ul class="items" >
        <table class="itemHolder" >
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th style="text-align: right;">Total</th>
          </tr>
          <tr v-for="item in selectedItems" :key="item">
            <td style="text-align: left;">{{ item.item }}</td>
            <td class="itemQty">1</td>
            <td>{{ item.price }}</td>
            <td @click="removeItem" class="cancelHolder">  <i class="fas fa-times cancel"></i>
</td>
          </tr>
        </table>
      </ul>
      <div class="order-summary">
        <!-- Display order summary table here -->
        <table class="totals">
          <tr>
            <th>Grand Total:</th>
            <td>{{ grandtotal }} AED</td>
          </tr>
          
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        orderUpload:[],
      }
    },
    methods:{
      removeItem() {
        this.$emit('removeItem')
    },
  
    },
    props:['selectedItems'],
    computed:{
      grandtotal(){
        let sum = 0;
        this.selectedItems.forEach(item => {
        sum += item.price;
        });
      return sum;     
        
      }
    },
    emits:['selectedItems'],
    
  };
  </script>
  
  <style scoped>
  /* Add selected items and order summary styles */
  .selected-items {
    flex: 1;
    padding: 20px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow-y: auto; /* Add this line to enable vertical scrolling */
  }
  
  .order-summary {
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 1.2rem;
    width: 100%;
    background-color: rgb(245, 241, 241);
    padding: .1rem;
  }
  
  table{
    width: 100%;
  }
  .totals>tr>td{
    text-align: right;
    padding-right: 20px;
    height: 4rem;
    font-size: 2rem;
  }
  
  .totals>tr>th,.totals>tr>td{
    border-bottom: 1px solid rgb(212, 209, 209);
  }
  .mini-nav{
     background-color: rgb(243, 237, 237);
     height: auto;
     display: flex;
     justify-content: space-between;
     
  }
  @media screen and (min-width: 768px) {
    .order-summary{
        width: 35%;
    }}
    .itemHolder>tr>th{
      min-width: 2.5rem;
      text-align: left;
      
    }
    .itemHolder>tr>td{
      text-align: center;
      padding: .5rem;
    }
    .cancel{
      background-color: red;
      border: 1px solid white;
      padding: .1rem;
      color: white;
      border-radius: 4px;
    }
    .itemQty>input{
      max-width: 2rem;
      color: red;
      text-align: center;
    }
    .cancelHolder:hover{
      cursor: pointer;
    }
  </style>
  