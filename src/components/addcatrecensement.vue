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
                <div class="row">
                    <center><h3>Veuillez remplir tous les champs</h3></center>
                    <div class="col-12">
                        <!-- Formulaire -->
                        <form @submit.prevent="submitForm" class="form-container">
                            <div class="mb-3">
                                <label for="nomRecensement" class="form-label">Nom de la catégorie</label>
                                <input type="text" id="nomRecensement" v-model="nomRecensement" class="form-control custom-input"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="etat" class="form-label">État</label><br>
                                <div>
                                    <input type="radio" id="actif" value="Actif" v-model="etat" class="custom-radio"> <label
                                        for="actif">Actif</label><br>
                                    <input type="radio" id="inactif" value="Inactif" v-model="etat" class="custom-radio"> <label
                                        for="inactif">Inactif</label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <button type="submit" class="btn btn-primary" style="margin-right: 20px;">Soumettre</button>
                                <router-link to="/categorirecensement" class="btn btn-secondary">Retour</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nomRecensement: '',
            categorie: '',
            etat: 'Actif', // Par défaut Actif
            zoneCiblee: ''
        };
    },
    methods: {
        submitForm() {
            // Ici vous pouvez gérer ce que vous souhaitez faire lorsque le formulaire est soumis
            console.log('Formulaire soumis avec les données suivantes :', this.nomRecensement, this.categorie, this.etat, this.zoneCiblee);
            // Exemple: Envoyer les données à un service, effectuer une action, etc.
        }
    }
};
</script>

<style scoped>
.form-container {
    background-color: #f2f2f2; /* Couleur de fond gris clair */
    padding: 20px;
    border-radius: 10px; /* Coins arrondis */
    margin: auto; /* Centrage horizontal */
    max-width: 500px; /* Largeur maximale du formulaire */
}

.custom-input {
    border: 1px solid #000; /* Bordure noire */
    border-radius: 5px; /* Coins arrondis pour les inputs */
    padding: 8px; /* Espacement interne */
    width: 100%; /* Largeur maximale */
    box-sizing: border-box; /* Inclure la bordure et le padding dans la largeur */
}

.custom-radio {
    margin-right: 10px; /* Espacement entre les radio buttons */
}

/* Ajoutez ici vos styles personnalisés si nécessaire */
</style>
