<template>
  <div class="container mt-4">
    <div class="row">
      <div v-for="order in orders" :key="order.id" class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Order #{{ order.id }}</h5>
            <p class="card-text">Time: {{ order.time }}</p>
            <ul class="list-group">
              <li v-for="item in order.items" :key="item.name" class="list-group-item">
                <p>{{ item.cat }}</p>
                <p>{{ item.name }}</p>
                <span class="float-right">{{ item.price }}</span>
              </li>
            </ul>
            <p class="mt-3">Total: {{ order.total }}</p>
            <button class="btn btn-success btn-block" @click="completeOrder(order.id)">
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  
  export default{
    data(){
      return{
        orders:[],
        grandTotalArr:[]
      }
  },
    beforeCreate(){
    fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/frostyOrders.json').then(data=>{
      if(data.ok){
        return data.json()
      }
    }).then(info=>{
      let arr = []
      arr.push(info)
      arr.forEach(item=>{
        
        Object.values(item).forEach(item => {
    const total = item.total;
    this.orders.push(item) 
    this.grandTotalArr.push(total)
  });
            

        
      })
      let sum = 0;
        this.grandTotalArr.forEach(item => {
        sum += item;
        });
        this.totalSales= sum
    })
  }
  }

</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.list-group-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn-success {
  background-color: #4caf50;
  border-color: #4caf50;
}
</style>