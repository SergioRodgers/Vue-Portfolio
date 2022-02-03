<template>
<section id="contact"> 
        <!--Section heading-->
        <h1 style="font-size: 50px">Contact</h1>
        <!--Section description-->  
        <p class="text-center w-responsive mx-auto mb-5"></p>
    
        <div class="row" style="margin-left: 16%;">
    
            <!--Grid column-->
            <div class="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="https://formspree.io/f/xrgjzzoa" target="_blank" method="POST" style="padding-left: 60px;">
                    <!--Grid row-->
                    <div class="row" id="row">
    
                        <!--Grid column-->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <label for="name" class="">Your name</label>
                                <input type="text" id="name" name="Name" class="form-control" style="box-shadow: 0 0.15rem 1rem 0 rgb(94, 1, 1);">                            
                            </div>
                        </div>
                        <!--Grid column-->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <label for="lname" class="">Your Last Name</label>
                                <input type="text" id="lname" name="Last Name" class="form-control" style="box-shadow: 0 0.15rem 1rem 0 rgb(94, 1, 1);">                           
                            </div>
                        </div>
                        <!--Grid column-->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <label for="email" class="">Your email</label>
                                <input type="text" id="email" name="Email" class="form-control" style="box-shadow: 0 0.15rem 1rem 0 rgb(94, 1, 1);">                           
                            </div>
                        </div>             
                    <!--Grid row-->               
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="pnum" class="">Your Phone Number</label>
                            <input type="text" id="pnum" name="Cell Number" class="form-control" style="box-shadow: 0 0.15rem 1rem 0 rgb(94, 1, 1);">                       
                        </div>
                    </div>
                    <!--Grid row-->
                  
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                        <label for="message" class="">Message</label>
                        <input type="text" id="message" name="Message" class="form-control" style="box-shadow: 0 0.15rem 1rem 0 rgb(94, 1, 1);">                       
                    </div>
                </div>
                </div>
                </form>
                <br>
                <div id="submit" class="text-center text-md-left" style="margin-left: 5.8%;">
                    <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();" style="color:white; box-shadow: 0 0.15rem 1rem 0 rgb(94, 1, 1);">Submit</a>
                </div>
                <br>
                <div id="reset" class="text-center text-md-left" style="margin-left: 5.8%;">
                    <a class="btn btn-dark" onclick="document.getElementById('contact-form').reset();" style="color:white; box-shadow: 0 0.15rem 1rem 0 rgb(94, 1, 1);">Reset</a>
                </div>
                <div class="status"></div>
            </div>
            <div class="col-md-3">
                <ul class="list-unstyled mb-0">
                    <li>
                        <p><i class="fas fa-map-marker-alt fa-1x" style="padding-right: 3px"></i> Cape Town, South Africa, Western Cape.</p>
                    </li>   
                    <li>
                        <p><i class="fas fa-phone mt-1 fa-1x" style="padding-right: 6px"></i>Mobile: 0840469194 </p>
                        <p><i class="bi bi-whatsapp" style="padding-right: 6px"></i>WhatsApp: 0840469194</p>
                    </li>   
                    <li>
                        <p><i class="fas fa-envelope mt-1 fa-1x" style="padding-right: 6px"></i> Email: sergiorodgers01@gmail.com</p>
                    </li>
                </ul>
            </div>    
        </div>
    </section>
  
</template>

<script>
export default {

}
</script>

<style>
#contact{
    margin: auto; 
    width: 85%; 
    height: 100vh;
    padding: auto;
}

</style>