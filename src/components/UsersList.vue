<script setup>
    import UserItem from './UserItem.vue';

    const props = defineProps({
        users: {
            required: true,
        },
    });
</script>

<template>
    <div class="list">
        <UserItem v-for="user in users"
            :id="user.id"
            :key="user.id"
            :name="user.name"
            :username="user.username"
            :email="user.email"
            :phone="user.phone" 
        />   
    </div>
</template>

<style lang="scss">
    .list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

        .user-link {
            text-decoration: none;
        }

        .user-item {
            width: 380px;
            height: 160px;
            background: #FFF;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
            font-family: 'Inter';
            font-style: normal;

            .name {
                margin: 24px 24px 16px 24px;
                background-color: #FFF;

                .user-item__name {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                    background-color: #FFF;
                    color: #000;
                    margin-bottom: 4px;
                }

                .user-item__nickname {
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 16px;
                    color: #444;
                    background-color: #FFF;
                }
            }

            .con {
                margin-left: 24px;
                display: flex;
                flex-direction: column;
                background-color: #fff;
                color: #444;

                .user-item_bgc {
                    background-color: #fff;
                }
            }
        }
    }



    
</style>