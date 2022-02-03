<template>
  <h1 class="h1typewriter" style=" 
      padding-top: 60px;
      color: rgb(231, 231, 231);
      font-size: 50px;
      text-shadow: 3px 3px rgb(94, 1, 1); 
      font-family: 'Courier New', Courier, monospace;">
      
      I am Sergio Rodgers</h1>

  <h2 style="
        color: rgb(231, 231, 231);
        padding-bottom: 80px;
        font-size: 22px;
        text-shadow: 3px 3px rgb(94, 1, 1);
        font-family: 'Courier New', Courier, monospace;">
        Front End Developer</h2>
 <img src="../assets/Images/Me2.png" id='Me'>

</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>

     p{
       padding-bottom: 30px;
     }

    #Me {
      border-radius:50%;
      height: 50%;
      align-items: center;
      box-shadow: 0 0.15rem 1rem 0 rgb(94, 1, 1);
    }

    
</style>
