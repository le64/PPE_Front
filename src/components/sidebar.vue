<template>
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-2 fixed-start ms-4 bg-gradient-dark"
       id="sidenav-main"> 
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
        aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
        target="_blank">
        <img src="../assets/img/logos/wisecount.jpg" class="navbar-brand-img h-100" alt="main_logo">
        <span class="ms-4 font-weight-bold text-white">WISECOUNT</span>
      </a>
    </div>
    <hr class="horizontal light mt-1 mb-4">
    <div class="w-auto  max-height-vh-100" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item" :class="{ 'active': isActive('/home') }">
          <router-link class="nav-link text-white" to="/home">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">home</i>
            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item" :class="{ 'active': isActive('/recensement') }">
          <router-link class="nav-link text-white" to="/recensement">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">table_view</i>
            </div>
            <span class="nav-link-text ms-1">Recensements</span>
          </router-link>
        </li>
        <li class="nav-item" :class="{ 'active': isActive('/categorirecensement') }">
          <router-link class="nav-link text-white" to="/categorirecensement">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">receipt_long</i>
            </div>
            <span class="nav-link-text ms-1">Catégorie Recensements</span>
          </router-link>
        </li>
        <li class="nav-item" :class="{ 'active': isActive('/agentrecensement') }">
          <router-link class="nav-link text-white" to="/agentrecensement">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">person</i>
            </div>
            <span class="nav-link-text ms-1">Agents de Recensements</span>
          </router-link>
        </li>
        <li class="nav-item" :class="{ 'active': isActive('/recensementeffectue') }">
          <router-link class="nav-link text-white" to="/recensementeffectue">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">create</i>
            </div>
            <span class="nav-link-text ms-1">Recensements Effectués</span>
          </router-link>
        </li>
        <li class="nav-item" :class="{ 'active': isActive('/rapportrecensement') }">
          <router-link class="nav-link text-white" to="/rapportrecensement">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">notifications</i>
            </div>
            <span class="nav-link-text ms-1">Rapport de Recensements</span>
          </router-link>
        </li>
      </ul>
    </div>
    <hr class="horizontal light mt-1 mb-4">
    <div class="w-auto max-height-vh-60" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item" :class="{ 'active': isActive('/profil') }">
          <router-link class="nav-link text-white" to="/profil">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">person</i>
            </div>
            <span class="nav-link-text ms-1">Profil</span>
          </router-link>
        </li>
      </ul>
    </div>
    
  </aside>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>

<style>
.active {
  background-color: #840743; /* Example active background color */
  border-radius: 10px; /* Example active border radius */
}
</style>
