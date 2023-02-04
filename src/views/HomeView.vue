<script setup>
import { RouterLink } from 'vue-router';
import UsersList from '../components/UsersList.vue' 
import { ref, onMounted } from 'vue';
import api from '../api.js'

const allUsers = ref([]);

onMounted(async() => {
        allUsers.value = await api.getUsers();
});
</script>

<template>
    <div class="container">
        <header class="header">
            <h1 class="title">Users</h1>
            <RouterLink to="/createUser" class="rt"><button class="btn">Create User</button></RouterLink>
        </header>
        <UsersList :users="allUsers"/>
    </div>
    
</template>

<style scoped>
    .header {
        width: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>