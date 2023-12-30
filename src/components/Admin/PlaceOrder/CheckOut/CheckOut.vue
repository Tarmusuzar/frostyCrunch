<template>
    <div class="payment-modal"  @click="closeModal"  v-if="showModal">
      <div class="backdrop"></div>
      <div class="modal-content" @click.stop>
        <div class="amount">
          AED {{ grandTotal }}
        </div>
        <div class="payment-method">
          <label for="paymentDropdown">Payment Method:</label>
          <select id="paymentDropdown" v-model="selectedPaymentMethod">
            <option value="card">Credit Card</option>
            <option value="cash">Cash</option>
          </select>
        </div>
        <div class="buttons">
          <button @click="confirmPayment">Confirm Payment</button>
          <button class="cancel" @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedPaymentMethod: 'card'
      };
    },
    inject:['toUploadItems'],
    props:['showModal','grandTotal'],
    methods: {
      confirmPayment() {
        const now = new Date();

        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');

        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        const timestamp = `${year}-${month}-${day} ${hours}:${minutes}`;


        fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/frosty.json',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({staffName:'Azida',items:this.toUploadItems, total:this.grandTotal,time:timestamp,paymentOption:this.selectedPaymentMethod })
          
        })
        
        this.$emit('closeModal')
        this.$emit('done')

      },
      closeModal() {
        this.$emit('closeModal')
      }
    },
    emits:['closeModal','done'],
    
  };
  </script>
  
  <style scoped>
  .payment-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* Updated z-index */
    cursor: pointer; /* Make the modal clickable */
  }
  
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    z-index: 1000;
    width: 70vw;
    max-width: 30rem;
  }
  
  .amount {
    font-size: 1.7rem;
    margin-bottom: 20px;
  }
  
  .payment-method {
    margin-bottom: 20px;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  button {
    flex: 1;
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .cancel {
    margin-left: 1rem;
    background-color: rgb(238, 24, 24);
  }
  select{
    border:1px solid green ;
    border-radius: 3px;
    padding: 1rem;
    font-size: 1.3rem;
  }
  </style>
  