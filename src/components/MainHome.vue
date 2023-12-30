<template>
    
    <home-nav opt1="Order Now" opt2="Review" opt3="POS" title="Frosty Crunch" @nav-clicked="navClicked"></home-nav>
      <home-body></home-body>
      <main-footer></main-footer>
     
   
  </template>
  
  <script>
  import MainFooter from './MainFooter.vue';
  import HomeBody from './HomeBody.vue';
  import HomeNav from './Reusables/HomeNav.vue';
  export default {
    methods:{
      navClicked(opt){
        if(opt=='Order Now'){
          this.$router.push('/menu')
        }
        else if(opt=='POS'){
          this.$router.push('/login')
        }
        else if(opt=='Review'){
          this.$router.push('/ruv')
        }
        else{
          this.$router.push('/')
        }
      }
    },

    components:{
        HomeNav,
        HomeBody,
        MainFooter
    }
  };
  </script>
  
  