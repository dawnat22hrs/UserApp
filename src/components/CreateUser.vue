<script setup>
import { reactive, ref, onMounted } from 'vue';
import api from '../api.js'

const newUser = reactive({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    city: '',
    street: '',
    suite: '',
    zipcode: ''
})

const submit = () => {
    api.postUser(newUser)
}
</script>

<template>
    <div class="container">
        <h1 class="title">Create user</h1>
        <form @submit.prevent.stop="submit">
            <div class="input-list">
                <div class="input-block">
                    <span class="text input-block__text">Name</span>
                    <input 
                        type="text"
                        class="input"
                        v-model="newUser.name"
                    >
                </div>
                <div class="input-block">
                    <span class="text input-block__text">Username</span>
                    <input 
                        type="text" 
                        class="input"
                        v-model="newUser.username"
                    >
                </div>
                <div class="input-block">
                    <span class="text input-block__text">Email</span>
                    <input 
                        type="text" 
                        class="input"
                        v-model="newUser.email"
                    >
                </div>
                <div class="input-block">
                    <span class="text input-block__text">Phone</span>
                    <input 
                        type="text" 
                        class="input"
                        v-model="newUser.phone"
                    >
                </div>
                <div class="input-block">
                    <span class="text input-block__text">Website</span>
                    <input 
                        type="text" 
                        class="input"
                        v-model="newUser.website"
                    >
                </div>
                <div class="input-block">
                    <span class="text input-block__text">Company</span>
                    <input 
                        type="text" 
                        class="input"
                        v-model="newUser.company"
                    >
                </div>
                <div class="input-block">
                    <span class="text input-block__text">City</span>
                    <input 
                        type="text" 
                        class="input"
                        v-model="newUser.city"
                    >
                </div>
                <div class="input-block">
                    <span class="text input-block__text">Street</span>
                    <input 
                        type="text" 
                        class="input"
                        v-model="newUser.street"
                    >
                </div>
                <div class="input-block">
                    <div class="input-block__suit">
                        <span class="text input-block__text">Suite</span>
                        <input 
                            type="text"
                            class="input-last"
                            v-model="newUser.suite"
                        >
                    </div>
                    <div class="input-block__zipcode">
                        <span class="text input-block__text">Zipcode</span>
                        <input 
                            type="text" 
                            class="input-last"
                            v-model="newUser.zipcode"
                        >
                    </div>
                </div>
            </div>
            <button class="btn">Create User</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
    .input-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        grid-row-gap: 32px;
        margin-bottom: 48px;

        .input-block {
            display: flex;
            flex-direction: column;
            
            &__text {
                margin-bottom: 8px;
            }

            .input {
                border: none;
                height: 38px;
                width: 376px;
                font-size: 20px;
                background-color: #FFF;
                box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
            }

            .input-last {
                margin-top: 8px;
                border: none;
                height: 38px;
                width: 176px;
                font-size: 20px;
                background-color: #FFF;
                box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
            }
        }

        .input-block:last-child {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
    }
</style>