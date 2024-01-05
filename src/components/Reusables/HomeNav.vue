<template>
  <div id="app">
    <nav >
     <div class="headNav">
      <p class="title" >
        {{ title }}
      </p>
      
      <div class="nav-toggle" @click="toggleNav">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
     </div>
      <div class="nav-backdrop" @click="toggleNav" v-if="isNavVisible"></div>
      <ul class="nav-list" :class="{ 'show': isNavVisible }">
        <li class="nav-item" @click="nextAction(opt1)"><i class="fas fa-home" ></i> {{ opt1 }}</li>
        <li class="nav-item" @click="nextAction(opt2)"><i class="fas fa-store"></i> {{ opt2 }}</li>
        <li class="nav-item" @click="nextAction(opt3)"><i class="fas fa-envelope"></i> {{ opt3 }} </li>
        <li class="nav-item" @click="nextAction(opt10)">{{ opt10 }} </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavVisible: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavVisible = !this.isNavVisible;
    },
    nextAction(opt){
      this.$emit('navClicked',opt)
      this.isNavVisible = !this.isNavVisible;

    }
  },
  props:['title','opt1','opt2','opt3','opt10'],
  emits:['navClicked']
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffcc29; /* McDonald's Yellow */
  color: #000; /* Black */
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 70px;
  position: relative; /* Added position relative for proper stacking */
}

.brand {
  font-size: 1.5rem;
  color: #000; /* Black */
}

.nav-toggle {
  display: none;
  cursor: pointer;
  height: 100%;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #000; /* Black */
  margin: 6px 0;
}

.nav-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998; /* Lower z-index than .nav-list */
  display: none;
}

.nav-list {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 999; /* Higher z-index than .nav-backdrop */
  top: 60px;
  right: 0;
  background-color: #ffcc29; /* McDonald's Yellow */
  width: 75%; /* 3/4 of the screen */
  height: 100%;
  text-align: left; /* Align text to the left */
  border-radius: 0 0 10px 0;
}


.nav-item {
  margin: 10px 0;
}

li {
  text-decoration: none;
  color: #000; /* Black */
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 8px;
  transition: color 0.3s ease-in-out;
}

.nav-item i {
  margin-right: 8px;
}

li:hover {
  color: #dc3545; /* McDonald's Red */
  cursor: pointer;
}
.headNav{
  width: 90%;
  display: flex;
  margin: 1rem;
  justify-content: space-between;
}


  .nav-toggle {
    display: block;
    width: 30px;
  }

  .nav-list {
    flex-direction: column;

    display: none;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #ffcc29; /* McDonald's Yellow */
    width: 75%; /* 3/4 of the screen */
    height: 100%;
    text-align: left; /* Align text to the left */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 10px 0;
    z-index: 999; /* Higher z-index than .nav-backdrop */
  }

  .nav-list.show {
    display: flex;
  }

  .nav-item {
    margin: 10px 0;
  }

  li {
    font-size: 1.2rem;
  }

  .nav-backdrop {
    display: block;
  }
  .title{
    font-size: 2.4rem;
    background: linear-gradient(to right, red, rgb(252, 248, 4));
            -webkit-background-clip: text;
            color: transparent;
            font-size: 1.9rem;
            max-width: 600px;
            font-weight: 600;

  }
  @media screen and (min-width: 769px) {
    .nav-list{
      width: 50%;
      max-width: 20rem;
    }
  }

</style>
