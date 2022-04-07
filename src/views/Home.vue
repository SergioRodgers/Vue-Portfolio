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
        Aspiring Full stack Developer</h2>
 <img src="../assets/Images/Me2.png" id='Me'>
 <br>
 <div class="git-link" style="margin: auto; padding-top: 10px; font-size: 30px;">
  <a href="https://github.com/SergioRodgers?tab=repositories" target="_blank"><i class="bi bi-github" style="padding-auto; color:#ebebeb"></i></a>
  <a href="https://www.linkedin.com/in/sergio-rodgers-219715224/" target="_blank"><i class="bi bi-linkedin" style="padding-left: 10px; color:#ebebeb"></i></a>
 </div>
 

    
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
