<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute} from 'vue-router';
    import api from '../api.js';
    import UserDetail from './UserDetail.vue'

    const route = useRoute();
    const userID = ref("");
    const carrentUser = ref({});

    onMounted(async() => {
        userID.value = route.params.id
        carrentUser.value = await api.getUser(userID.value)
    });
</script>

<template>
    <UserDetail :user="carrentUser"/>
</template>


