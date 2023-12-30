<template>
  <footer class="frosty-footer">
    <div class="footer-links">
      <a @click="$router.push('/menu')">Order Now</a>
      <a @click="$router.push('/login')">Login</a>
      <a @click="promptToCall" >Contact</a>
    </div>
    <div class="copyright">
      &copy; Frosty Crunch 2024
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    promptToCall() {
      const phoneNumber = '0547800635';
      const url = `tel:${phoneNumber}`;
      window.location.href = url;
    }
  }
}
</script>

<style scoped>
.frosty-footer {
  background-color: #333;
  padding: 15px 0;
  color: #fff;
  text-align: center;
}

.footer-links a {
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
  font-size: 16px;
}

.footer-links a:hover {
  text-decoration: underline;
}

.copyright {
  margin-top: 10px;
  font-size: 14px;
}
</style>
