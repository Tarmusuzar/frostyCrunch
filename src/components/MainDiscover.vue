<template>
    <div class="frosty-crunch-uae">
      <div class="header-container">
        <div class="promo-container">
          <div class="promo-slider" v-if="images.length > 0">
            <transition name="fade" mode="out-in">
              <img :src="currentImage" :alt="`Promo Image ${currentIndex + 1}`" class="promo-image" />
            </transition>
          </div>
        </div>
  
        <div class="options-section">
          <div @click="loadNewPage(option.text)" class="option" v-for="option in options" :key="option.text">
            <i :class="option.icon"></i>
            <p >{{ option.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          'discover.jpeg',
          'discover1.jpeg',
          'discover2.jpeg',
          'discover3.jpeg',
          'discover4.jpg',
          // Add more image paths as needed
        ],
        currentIndex: 0,
        intervalId: null,
        options: [
          { icon: 'fas fa-utensils', text: 'Menu' },
          { icon: 'fas fa-star', text: 'Rate Your Visit' },
          { icon: 'fas fa-exclamation-circle', text: 'Raise a Complaint' },
          { icon: 'fas fa-building', text: 'Franchise' },
          { icon: 'fas fa-gift', text: 'Rewards Program' },
          { icon: 'fas fa-book', text: 'Admin' },
          { icon: 'fas fa-phone', text: 'Contact Us' },
        ],
      };
    },
    computed: {
      currentImage() {
        return require(`@/assets/${this.images[this.currentIndex]}`);
      },
    },
    watch: {
      currentIndex() {
        this.startInterval();
      },
    },
    mounted() {
      this.startInterval();
    },
    beforeUnmount() {
      this.clearInterval();
    },
    methods: {
      loadNewPage(page){
        if(page=='Menu'){
          this.$router.push('/menu')
        }
        if(page=='Rate Your Visit'){
          this.$router.push('/ruv')
        }
        else{
          this.$router.push('/dj')
        }
      },
      startInterval() {
        this.clearInterval();
        this.intervalId = setInterval(() => {
          this.nextImage();
        }, 2000);
      },
      clearInterval() {
        clearInterval(this.intervalId);
      },
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Page Styles */
  .frosty-crunch-uae {
    background: linear-gradient(to bottom, #f8f5e7, #ffffff);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333; /* Dark gray text */
  }
  
  /* Header Container Styles */
  .header-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Styled Container */
  .promo-container {
    max-height: 40vh;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Slider Styles */
  .promo-slider {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
  
  /* Image Styles */
  .promo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Options Section Styles */
  .options-section {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
  }
  
  .option {
    text-align: center;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
   /* Black background */
   background-color: white;
   box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
    color: black ;/* White text */
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 150px;
  }
  
  .option i {
    color: rgb(235, 76, 76);
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  .option p {
    font-size: 1em;
    margin: 0;
  }
  
  .option:hover {
    background-color: #ff7e83;
    color: white; /* Hover color: McDonald's red */
  }
  </style>
  