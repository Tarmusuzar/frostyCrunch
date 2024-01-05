<template>
        <div class="cartContainer" v-if="cartItems.length>0" >
        <div class="backdrop" v-if="showOrder" >
            <order-done v-if="orderPlaced" @newOrder="$router.go('/')"></order-done>

            <div class="container" style="background-color: white; color: black;" >
                <div class="btnContainer">
                    <button class="total">{{ totalPrice }} AED</button>
                    <button class="close" @click="showOrder=!showOrder">X</button>
                    <button class="checkoutBtn" @click="uploadOrder(cartItems)">Place Order</button>

            </div>
            <div style="margin-bottom: 40vh;" >
                
             <div class="itemHolder" v-for="item in cartItems" :key="item">
                <h2>{{ item.cat }}</h2>
                <b class="cancel" @click="$emit('deleteItem',cartItems.indexOf(item))">x</b>
                <div style="display: flex; justify-content: space-between;">
                    <p>{{ item.name }}</p>
                    <b>{{ item.price }} AED</b>
                </div>
            </div>
            </div>
        </div>
     </div>
     <div v-if="orderPlaced!=true" class="sub" :style="{backgroundColor: showOrder ?'red':'green', paddingTop:addedToCart?'6vh':'1rem'}"  @click="showOrder=!showOrder" >
         <p>{{ showOrder?'Add More':'My Order' }}</p>
            <div style="display: flex;">
                <p style="margin-right: 1rem;" class="circle">{{ itemCount }}</p>
                 <p class="circle">{{ totalPrice }}</p>
            </div>

     </div>
    </div>
    
</template>

<script scoped>
import OrderDone from './OrderDone.vue';
    export default{
        components:{OrderDone},
        props:['cartItems','addedToCart'],
        computed:{
            itemCount() {
    return this.cartItems.length;
  },
            totalPrice() {
    return this.cartItems.reduce((total, item) => total + parseInt(item.price), 0);
  }
        },
        data(){
            return{
                showOrder:false,
                items:[

                ],
                orderPlaced:false
            }
        },
        emits:['deleteItem'],
        methods:{
            uploadOrder(items){
                this.orderPlaced = true

            function getRandomNumber() {
                return Math.floor(Math.random() * 10000) + 1;
                }
                let id = getRandomNumber()
        const now = new Date();

        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');

        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        const timestamp = `${year}-${month}-${day} ${hours}:${minutes}`;


        fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/frostyOrders.json',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({id:id,items:items, total:this.totalPrice,time:timestamp })
          
        }).then(()=>{
           setTimeout(() => {
            this.$router.go('/')
           }, 3000);
        })
        
            }
        }
    }

</script>
<style scoped>
    
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(51, 51, 51, 0.95);

        z-index: 999;
        overflow: scroll;
            }
    .sub{
        display: flex;
        justify-content: space-between;
        margin:auto;
        padding: 1rem;



    }
    .redBg{
        background-color: red;

    }
    .btnContainer{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;

        
    }
    .checkoutBtn{
        padding: 1rem;
        border: 1px solid white;
        font-size: 1rem;
        border-radius: 7px;
        background-color: green;
        color: white;

    }
    .sub{
        z-index: 1000;
        font-size: 1.4rem;
        color: white;
        position: fixed;
        bottom: .2rem;
        width: 100%;
        background-color: green;

    }
    .container{
        height: inherit;
        padding: 1rem;
        overflow: auto;
    }
    .total{
        background-color: white;
        font-size: 1.7rem;
        font-weight: 800;
        border: none;
        color: rgb(58, 57, 57);
    }
    .itemHolder{
        position: relative;
        width: 100%;
        padding: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .cancel{
        position: absolute;
        top: 0;
        right: 1rem;
        color: red;
        font-size: 1.2rem;
        font-weight: 800;
    }
    .circle{
        background-color: white;
        color: black;
        border: 1px solid white;
        border-radius: 50%;
        padding: 0 .4rem ;
        min-width: .7rem;
    }
    .close{
        color: white;
        font-weight: 800;
        background-color: red;
        font-size: 1.4rem;
        padding: .7rem;
        border: 1px solid white;
        border-radius: 50%;
    }

</style>