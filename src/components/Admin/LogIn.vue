<template>
    <div class="login-container">
      <h1 class="title">Frosty Crunch Restaurant</h1>
      <form @submit.prevent="login" class="login-form">
        <label for="email" class="label">Email:</label>
        <input v-model="email" type="email" id="email" name="email" class="input" required />
  
        <label for="password" class="label">Password:</label>
        <input v-model="password" type="password" id="password" name="password" class="input" required />
  
        <button type="submit" class="login-button">
          <span v-if="loading">Logging in...</span>
          <span v-else>Login</span>
        </button>
  
        <p v-if="error" class="error-message">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        loading: false,
        error: '',
      };
    },
    methods: {
      login() {
        this.loading = true;
        setTimeout(() => {
          if (this.email === 'braham@frostycrunch.ae' && this.password === 'braham') {
            this.$router.push('/admin');
          } else {
            this.error = 'Invalid email or password. Please try again.';
          }
          this.loading = false;
        }, 4000); // Simulate a 4-second loading period
      },
    },
  };
  </script>
  
  <style scoped>
  /* ... (Previous styles remain unchanged) */
  
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  
  .label {
    color: black;
    margin-bottom: 5px;
    text-align: left;
    margin-right: auto;
  }
  
  .input {
    padding: 10px;
    margin: 5px 0 15px 0;
    width: 100%;
    box-sizing: border-box;
    font-size: 1rem;
  }
  
  .login-button {
    background-color: green;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    margin-top: 20px;
    transition: background-color 0.3s ease;
  }
  
  .login-button:hover {
    background-color: #ffcc00;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  
  @media screen and (max-width: 768px) {
    .login-container {
      padding: 20px;
    }
  }
  </style>
  