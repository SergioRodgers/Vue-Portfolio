<template>
   <MDBNavbar dark bg="dark" expand="lg" container>
    <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
    <MDBNavbarToggler target="navbarNav"></MDBNavbarToggler>
    <MDBNavbarNav collapse="navbarNav">
      <MDBNavbarItem to="/"><i class="bi bi-house"></i> Home </MDBNavbarItem>
      <MDBNavbarItem :to="{name: 'About'}"><i class="bi bi-person-circle"></i> About </MDBNavbarItem>
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

</style>
