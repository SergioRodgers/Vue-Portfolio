<template>
<section id="test">
  <h1 style="font-size: 50px; text-align: center;">Testimonials</h1>
  <h4 style="text-align: center; padding-top:20px">People I have worked with in the past.</h4>
  <div class="container" style="text-align: center; padding-left: 110px;">
  <div class="row" id="test-cards">
        <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl"> 
            <div class="testimonials">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/Images/chad.png" class="card-img-top" alt="..." id="img">
                    <div class="card-body">
                    <h5 class="card-title">Chad Hendricks</h5>
                    <p class="card-text">"In this short time that I have got to known Sergio, he has shown that he is a hardworking, dedicated and capable developer. He always gives 110 percent in everything he does. I'm sure he'd be an asset to any company that hires him!"</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl"> 
            <div class="testimonials">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/Images/dan(1).jpg" class="card-img-top" alt="..." id="img">
                    <div class="card-body">
                    <h5 class="card-title">Daniel Bowers</h5>
                    <p class="card-text">"Sergio is a dependant and reliable person, has a great sense of humour and strives to be his best and do his best with everything he does."</p>
                    </div>
                </div>
            </div>
        </div>

  

  <!-- Next Collumn-->

  <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl">
      <div class="testimonials">
          <div class="card" style="width: 18rem;">
              <img src="../assets/Images/godwin.png" class="card-img-top" alt="..." id="img">
              <div class="card-body">
              <h5 class="card-title">Godwin Dzvapatsva</h5>
              <p class="card-text">"Sergio seems to bring a unique energy to my class. I always love the effort he puts forth whenever he participates in class. His confidence in his HTML and CSS is improving the more he practices it and uses it every day. I think Sergio is a fast learner, so he will improve these skills quickly through focused studying"</p>
              </div>
          </div>
      </div>
  </div>
  <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl">
      <div class="testimonials">
          <div class="card" style="width: 18rem;">
              <img src="../assets/Images/Seth.png" class="card-img-top" alt="..." id="img">
              <div class="card-body">
              <h5 class="card-title">Seth Kleynhans</h5>
              <p class="card-text">"As a fellow peer, I noticed Sergio has a super friendly and caring personality. He loves participating when he knows the answer. When the lecturer asks him a question, he is always happy to answer with confidence. As long as he focuses in class, Sergio will continue to improve rapidly."</p>
              </div>
          </div>
      </div>
  </div>


  

<!-- Next Collumn-->

        <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl">
        <div class="testimonials">
            <div class="card" style="width: 18rem;">
                <img src="../assets/Images/j.jpg" class="card-img-top" alt="..." id="img">
                <div class="card-body">
                <h5 class="card-title">Jordan Dawson</h5>
                <p class="card-text">Sergio is a very compassionate person who uplifts everyone around him making him an extremely helpfull and essential part of any team. </p>
                </div>
            </div>
        </div>
        </div>
        <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl">
        <div class="testimonials">
            <div class="card" style="width: 18rem;">
                <img src="../assets/Images/daryll.png" class="card-img-top" alt="..." id="img">
                <div class="card-body">
                <h5 class="card-title">Daryll Grainger</h5>
                <p class="card-text">"Sergio has shown a capacity to learn quick and work efficiency, has a good work ethic and ability to work in a team. Very dependable and committed."</p>
                </div>
            </div>
        </div>
        </div>  
  </div>
</div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>

#test{
    height: 100vmax;
    background: #555555;
}
.testimonials{
    padding-top: 60px;
    margin: auto;
}
.card-body{
    background: rgb(114, 114, 114);
    height: 325px;
    box-shadow: 0 0.15rem 1rem 0 rgb(94, 1, 1);
}
#img{
    box-shadow: 0 0.15rem 1rem 0 rgb(94, 1, 1);
}

h5{
    color: black;
}
p{
    color: #d9d9d9;
}

</style>