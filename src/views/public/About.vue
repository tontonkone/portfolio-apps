<template>

    <div class="about">
        <div class="about__info" :class="{ 'move-text': collapsed }">
            <LetterTitle>
                <h1>Profil</h1>
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
                <ButtonDownload />
        </div>
        <div class="about__img">
            <!-- <img src="@/assets/img/profil-c.svg" alt="photo de profils"> -->
            <LogoAboout/>
        </div>
    </div>
</template>

<script>
import LetterTitle from '@/components/letter/LetterTitle.vue';
import ButtonDownload from '@/components/button/ButtonDownload.vue';
import { collapsed } from '@/components/sidebar/state';
import LogoAboout from '@/components/logo/LogoAboout.vue';


export default {
    components: { LetterTitle, ButtonDownload,LogoAboout },
    setup() {
        return {collapsed}
    }
}
</script>

<style lang="scss" scoped>
.about {
    display: flex;
    flex-direction: row;
    background-image: var(--image-s);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;

    svg{
        height: auto;
    }

    &__info {
        text-align: left;
        margin-top: 10rem;
        margin-left: 13rem;
        flex: .5;

        p {
            color: rgb(19, 19, 9);
        }
    }
    &__img {
        flex: 1;
        padding: 10rem 2rem 0 0;
    }
    .move-text {
        margin-left: 100px;
    }
}
</style>