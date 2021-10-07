<template>
<div> 
<h1 class="admin">
      Welcome Administrator!
    </h1>
<div class="text-b">
     <h2>Please fill in your credentials to access the portal. Thank you!
    </h2>
    <form>
          <div class="flex row">
            <label for="username"> User Name </label><br />
            <input type="text" id="username" name="username" /><br />
          </div>
          <div class="flex row">
            <label for="password"> Password </label><br />
            <input type="password" id="password" name="password" /><br />
          </div>
          <div class="row"><input type="button" value="Sign In" /><br /></div>
        </form>
    </div>
</div>

    
</template>



<script setup lang="ts">
</script>

<style>

.admin {
  text-align: center;
  color: #f2f2f2;
  padding: 200px 10px 200px 10px;
}
</style>
