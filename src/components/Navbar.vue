<template>
   <MDBNavbar dark bg="dark" expand="lg" container>
    <MDBNavbarBrand href="#"><img src="../assets/Images/navpic.png" id="navpic"></MDBNavbarBrand>
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
</style>
