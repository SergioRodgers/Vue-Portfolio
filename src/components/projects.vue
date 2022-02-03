<template>
  <h1 style="font-size: 50px; text-align: center; margin: auto">Projects</h1>
        

     <div class="row" id="project-cards">
       <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl">
        <div class="card" style="width: 100%;background-color: rgb(20, 20, 20); color: white;">
          <img src="../assets/Images/calculator1.png" class="card-img-top" alt="..." style="height: 350px; width: 100%;">
          <div class="card-body">
            <h5 class="card-title">Calculator</h5>
            <p class="card-text">I created this Calculator using HTML, CSS, Bootstrap and JavaScript. 
            <a href="https://practical-shaw-88fdaf.netlify.app/" target="_blank" class="btn btn-primary">Check It Out</a>
            </p>
          </div>
        </div>      
       </div>

       <!-- second project -->
       <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl">
        <div class="card" style="width: 100%;background-color: rgb(20, 20, 20); color: white;">
          <img src="../assets/Images/Timeline.png" class="card-img-top" alt="..." style="height: 350px; width: 100%;">
          <div class="card-body">
            <h5 class="card-title">Timeline</h5>
            <p class="card-text">Created this timeline using HTML and CSS.
              <br>  
            <a href="https://compassionate-liskov-3d8d15.netlify.app/timeline" target="_blank" class="btn btn-primary">Check It Out</a></p>
          </div>
        </div>
        </div>
      <!-- third project -->
        <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl">
         <div class="card" style="width: 100%;background-color: rgb(20, 20, 20); color: white;">
           <img src="../assets/Images/projects.png" class="card-img-top" alt="..." style="height: 350px; width: 100%;">
           <div class="card-body">
             <h5 class="card-title">Website</h5>
             <p class="card-text">This is the Website I Created.
               <br>
             <a href="https://vigorous-archimedes-05d313.netlify.app/" target="_blank" class="btn btn-primary">Check It Out</a></p>
           </div>
         </div>
       </div>
     </div>
</template>

<script>
export default {

}
</script>

<style>
.card-text{
  color: #A6A2A2;
}
.card{
    height: 450px;
    box-shadow: 0 0.15rem 1rem 0 rgb(94, 1, 1);
}
#project-cards{
    margin: auto;
    padding-top: 80px;
}
</style>