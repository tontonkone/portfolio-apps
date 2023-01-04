<template>
        <LetterTitle>
            <h1>Profil</h1>
        </LetterTitle>
    <div class="about">


        <div class="about__info" :class="{ 'move-text': collapsed }">
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
                <ButtonDownload />
        </div>
        <div class="about__img">
            <img src="@/assets/img/profil-c.svg" alt="photo de profils">
        </div>
    </div>
</template>

<script>
import LetterTitle from '@/components/letter/LetterTitle.vue';
import ButtonDownload from '@/components/button/ButtonDownload.vue';
import { collapsed } from '@/components/sidebar/state'


export default {
    components: { LetterTitle, ButtonDownload },
    setup() {
        return {collapsed}
    }
}
</script>

<style lang="scss" scoped>
.about {
    padding: 1rem;
    display: flex;
    flex-direction: row;

    svg{
        width: 100%;
        height: auto;
    }

    &__info {
        text-align: left;
        margin-top: 15rem;
        text-align: left;
        margin-left: 13rem;

        p {
            color: rgb(19, 19, 9);
        }
    }
    &__img {
        width: 60%;

    }
    .move-text {
        margin-left: 100px;
    }
}
</style>