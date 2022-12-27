<template>
    <div class="container">
        <LetterTitle>
            <h1>Profil</h1>
        </LetterTitle>

        <div class="container__about">

            <div class="container__info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus
                    inventore quod
                    quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur
                    assumenda
                    nam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus
                    inventore quod
                    quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur
                    assumenda
                    nam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus
                    inventore quod
                    quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur
                    assumenda
                    nam!</p>
            </div>
            <div class="container__img">
                <img src="@/assets/img/profil-c.svg" alt="photo de profils">
            </div>
        </div>
    </div>
</template>

<script>
import LetterTitle from '@/components/letter/LetterTitle.vue';
export default {
    components: { LetterTitle },
    setup() {
    }
}
</script>

<style lang="scss" scoped>
.container {

    margin: 3rem;

    &__about{

        display: flex;
        flex-direction: row;

        padding: 13rem 7rem;
    }


    &__info {
        
        width: 50%;
        margin: 0px 100px;

        p {
            text-align: left;
        }
    }

    &__img {

        img {
            width: 100%;

        }
    }

    p {
        color: yellow;
    }
}
</style>