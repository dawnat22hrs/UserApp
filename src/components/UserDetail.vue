<script setup>
    const props = defineProps({
        user: {
            type: Object,
            default: () => {},
            required: true,
            company: Object,
        }
    });
</script>

<template>
    <div class="info-user">
        <div class="container">
        <div class="title-block">
            <h1 class="title">{{ user.name }}</h1>
            <p class="text title-block__text text_color">@{{ user.username }}</p>
        </div>
        <div class="info-block">
            <div class="email-block wrap__el">
                <span class="subtitle info-block__subtitle">Email</span>
                <span class="text">{{ user.email }}</span>
            </div>
            <div class="phone-block wrap__el">
                <span class="subtitle info-block__subtitle">Phone</span>
                <span class="text">{{ user.phone }}</span>
            </div>
            <div class="website-block wrap__el">
                <span class="subtitle info-block__subtitle">Website</span>
                <span class="text">{{ user.website }}</span>
            </div>
            <div class="company-block wrap__el">
                <span class="subtitle info-block__subtitle">Company</span>
                <span class="text" v-for="name of user">{{ name.name }}</span>
            </div>
            <div class="address-block wrap__el">
                <span class="subtitle info-block__subtitle">Address</span>
                <span class="text" v-for="address of user">{{ address.suite }} {{ address.street }} {{ address.city}} {{ address.zipcode }}</span>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .title-block {
        display: flex;

        &__text {
            margin-left: 16px;
            margin-top: 56px;
        }

.text_color {
    color: #000;
}
}

.info-block {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-row-gap: 32px;

.wrap__el {
    display: flex;
    flex-direction: column;
}

.wrap__el:last-child {
    grid-column-start: 1;
    grid-column-end: 3;
}
.info-block__subtitle {
    margin-bottom: 8px;
}
}

@media screen and (max-width: 1024px) {
    .title-block {
        display: flex;

        &__text {
            margin: 56px 0 32px 16px;
        }
    }

    .info-block {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 32px;
    }
}

@media screen and (max-width: 768px) {
    .title-block {
        display: flex;

        &__text {
            margin: 56px 0 32px 16px;
        }
    }

    .info-block {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 32px;
    }

}

@media screen and (max-width: 390px) {
    .title-block {
        display: flex;
        flex-direction: column;

        .title {
            margin-bottom: 0;
        }

        &__text {
            margin: 8px 0 32px 0;
        }
    }

    .info-block {
        display: flex;
        flex-direction: column;
    }
}
</style>