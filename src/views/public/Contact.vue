<template>
    <div class="contact">

        <div class="container">
        <div class="container__img">
            <img src="@/assets/img/message-c.svg" alt="photo de profils">
        </div>

            <div class="container__info">
                <LetterTitle>
                    <h1>Contact</h1>
                </LetterTitle>

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
    display: flex;
    flex-direction: row;

    &__info {

        margin-top: 8rem;

        p {
            text-align: left;
        }
    }

    &__img {

        margin-top: 10rem;
        margin-left: 10rem;
        padding: 2rem;
    }

    p {
        color: yellow;
    }
}
</style>