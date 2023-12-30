<template>
  <div id="app">
    <home-nav 
    @navClicked="navClicked"
    title="Sales "
    opt1="Sales"
    opt2="Place Order"
    opt3="Reports"
    
    ></home-nav>

    

    <main>
        
        <section id="date"  class=" total-sales" >
          <p>{{ currentDate }}</p>
          <p><i class="fas fa-calendar"></i></p>
          <!-- Add date selection options here -->
        </section>
      
     

      <section class="card total-sales">
        <div class="arrow-icon"><i class="fas fa-arrow-pointer"></i></div>
        <h2><i class="fas fa-dollar-sign"></i> Total Sales</h2>
        <div class="figure">{{ totalSales }} AED</div>
      </section>

      <section class="card sales-by-staff">
        <div class="arrow-icon"><i class="fas fa-arrow-pointer"></i></div>
        <h2><i class="fas fa-users"></i> Sales by Staff</h2>
        <div class="figure">Braham <sub>(499 AED)</sub> </div>
        <div class="figure " id="otherStaff">Azida <sub>(335 AED)</sub> </div>
        <div class="figure " id="otherStaff">Francis <sub>(95 AED)</sub> </div>
      </section>

      <section class="card summary ">
        <div class="arrow-icon"><i class="fas fa-arrow-pointer"></i></div>
        <h2><i class="fas fa-star"></i> Top Selling Items</h2>
        <div class="figure " id="otherStaff">Small Water <sub>(28 PCS)</sub> </div>
        <div class="figure " id="otherStaff">Frozen Banana <sub>(16 PCS)</sub> </div>

      </section>

      <section class="card charts">
        <div class="card hourly-chart">
          <div class="arrow-icon"><i class="fas fa-arrow-pointer"></i></div>
          <h2><i class="fas fa-clock"></i> Hourly Performance</h2>
          <sales-chart></sales-chart>
        </div>

        <div class="card monthly-chart">
          <div class="arrow-icon"><i class="fas fa-arrow-pointer"></i></div>
          <h2><i class="fas fa-calendar "></i> Monthly Performance</h2>
            <sales-chart></sales-chart>
        </div>
      </section>

      
    </main>
  </div>
</template>


<script>
import SalesChart from './SalesChart.vue'
import HomeNav from '../Reusables/HomeNav.vue';
export default {
  components:{
    HomeNav, 
    SalesChart
  },
  data() {
    return {
      grandTotalArr:[],
      totalSales:0,
      currentDate: this.formatDate(new Date())
    };
  },
  methods: {
    navClicked(opt){
      if (opt =='Sales'){
        this.$router.push('/admin')
      }
      else if(opt =='Place Order'){
        this.$router.push('/placeOrder')

      }
    },
    formatDate(date) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
  },
  
  beforeCreate(){
    fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/frosty.json').then(data=>{
      if(data.ok){
        return data.json()
      }
    }).then(info=>{
      let arr = []
      arr.push(info)
      arr.forEach(item=>{
        
        Object.values(item).forEach(item => {
    const total = item.total;

    this.grandTotalArr.push(total)
  });
            

        
      })
      let sum = 0;
        this.grandTotalArr.forEach(item => {
        sum += item;
        });
        this.totalSales= sum
    })
  },
  

};
</script>

<style>
  #app {
    font-family: 'Arial', sans-serif;
  }

  header {
    background-color: #4CAF50; /* Green */
    color: #fff;
    text-align: center;
    padding: 1rem;
  }

  header h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header h1 i {
    margin-right: 0.5rem;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex: 1;
    min-width: 300px;
    max-width: 400px;
    position: relative;
    height: 250px; /* Increased height */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card h2 {
    display: flex;
    align-items: center;
    font-size: 1rem; /* Smaller font size */
    margin-bottom: 0.5rem;
    color: #777; /* Gray color */
    position: absolute;
    top: 0;
    left: 0;
  }

  .card i {
    margin-right: 0.5rem;
    color: #999; /* Faint icon color */
  }

  .card .figure {
    font-size: 3rem; /* Increased font size */
    font-weight: bold;
    color: #4CAF50; /* Green */
    margin-top: 2rem; /* Adjusted margin */
  }

  .card ul {
    list-style: none;
    padding: 0;
  }

  .card li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }

  .card li i {
    margin-right: 0.5rem;
    color: #999; /* Faint icon color */
  }

  

  

  .arrow-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    color: #777; /* Gray color */
  }

  .arrow-icon i {
    font-size: 1.5rem;
  }
  #date{
    width: 90%;
    margin: 0;
    height: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: underline;
    justify-content: space-between;
  }
  #otherStaff{
    font-size: 1.3rem;
  }
  .sales-by-staff, .summary,.monthly-chart, .charts {
    height: auto;
  }
  sub{
    font-size: 1rem;
  }
</style>
