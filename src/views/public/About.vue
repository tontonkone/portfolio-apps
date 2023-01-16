<template>

    <div class="about">
        <div class="about__info" :class="{ 'move-text': collapsed }">
            <h1>
                <LetterAnime :classl="classl" :char="title" :idx=1 />
            </h1>
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
import { ref } from 'vue';
import ButtonDownload from '@/components/button/ButtonDownload.vue';
import { collapsed } from '@/components/sidebar/state';
import LogoAboout from '@/components/logo/LogoAboout.vue';
import LetterAnime from '@/components/letter/LetterAnime.vue';


export default {
    components: { LetterAnime, ButtonDownload,LogoAboout },
    setup() {
        const classl = ref('text-animate')
        const title = ref([... 'About'])
        return {collapsed, title,classl}
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