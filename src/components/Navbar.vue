<template>
   <MDBNavbar dark bg="dark" expand="lg" container>
    <MDBNavbarBrand href="#"><img src="../assets/Images/navpic.png" id="navpic">
</MDBNavbarBrand>
    <MDBNavbarToggler target="navbarNav"></MDBNavbarToggler>
    <MDBNavbarNav collapse="navbarNav">
      <MDBNavbarItem to="/"><i class="bi bi-house"></i> Home </MDBNavbarItem>
      <MDBNavbarItem :to="{name: 'About'}"><i class="bi bi-person-circle"></i> About </MDBNavbarItem>
      <MDBNavbarItem :to="{name: 'Resume'}"><i class="bi bi-file-earmark-person"></i> Resume </MDBNavbarItem>
      <MDBNavbarItem :to="{name: 'Projects'}"><i class="bi bi-person-rolodex"></i> Project </MDBNavbarItem>
      <MDBNavbarItem :to="{name: 'Testimonials'}"><i class="bi bi-file-earmark-richtext"></i> Testimonial </MDBNavbarItem>
      <MDBNavbarItem :to="{name:'Contact'}"><i class="bi bi-phone"></i> Contact </MDBNavbarItem>
    </MDBNavbarNav>
  </MDBNavbar>
</template>

<script>
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
  } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
    },
  };
  </script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: red;
}
#navpic{
  border-radius: 50%;
  height: 40px;
  padding-left: 6px;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
