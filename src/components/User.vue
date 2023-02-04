<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import api from '../api.js';
    import UserDetail from './UserDetail.vue'

    const route = useRoute();
    const router = useRouter();
    const userID = ref("");
    let carrentUser = ref({});

    onMounted(async() => {
        userID.value = route.params.id
        carrentUser = await api.getUser(userID.value)
        
    });
</script>

<template>
    <UserDetail :user="carrentUser"/>
</template>


