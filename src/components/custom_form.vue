<script setup>
import SideBar from '../components/sidebar.vue'
import NavBar from "../components/header.vue";
</script>
<template>
    <div>
        <SideBar></SideBar>
        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
            <NavBar></NavBar>
            <div class="container-fluid py-4">
                <center><h3>Veuillez choisir le formulaire de votre choix</h3></center>
            </div>
        </main>
    </div>
</template>
