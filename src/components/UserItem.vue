<script setup>
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        id:{
            type: Number,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
        username:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        phone:{
            type: String,
            required: true,
        },
    });
</script>

<template>
    <div class="user-item">
            <div class="name">
                <RouterLink :to="`users/${id}`" class="user-link"><h2 class="user-item__name">{{ name }}</h2></RouterLink>
                <span class="user-item__nickname">@{{ username }}</span>
            </div>
            <div class="con">
                <span class="email user-item_bgc text">{{ email }}</span>
                <span class="tel user-item_bgc text">{{ phone }}</span>
            </div>
        </div>  
</template>