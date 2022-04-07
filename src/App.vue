<template>
 <Navbar/>
  <router-view/>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
export default {
  components:{Navbar}
}
</script>

<style>
h1{
  padding-top: 60px;
  color: rgb(231, 231, 231);
  font-size: 50px;
  text-shadow: 3px 3px rgb(94, 1, 1);
  border-style: solid;
  border-color: rgb(48, 48, 48);
  border-width: 3px;
  border-left: none;

  border-right: none;
  border-top: none;
  margin: auto;
  width: 60%;
  text-align: center;
}



</style>
