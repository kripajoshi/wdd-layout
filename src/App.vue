<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="header">
      <router-link class="logo" to="/"
        ><img src="./assets/logo.png" alt="WDD Technology" />
      </router-link>
      <div class="menu">
        <router-link to="/pricing"> Pricing </router-link>
        <router-link to="/interns"> Interns </router-link>
        <router-link to="/contact"> Contact </router-link>
        <router-link to="/admin" class="admin-button"> Admin </router-link>
      </div>
    </div>
    <div class="body-content">
      <router-view> </router-view>
    </div>
  </div>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #f2f2f2;
  font-family: sans-serif;
}
.flex {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>

<style scoped>
.header {
  display: flex;
  background: #ccc;
  padding: 10px 50px 10px 50px;
}
.header a {
  color: #00f;
  text-decoration: none;
}
/*.logo {
   background: #ffffff;
}*/
.admin-button {
  background: #3fa9f5;
  padding: 10px;
  border-radius: 5px;
  color: #0b3c69;
}
.container {
  width: 1000px;
  box-shadow: -1px 10px 10px #ffffff;
  margin: auto;
  background: #0b3c69;
  min-height: 100%;
}
.body-content {
  padding: 20px;
}

.menu {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 100px;
  align-items: center;
}
</style>
