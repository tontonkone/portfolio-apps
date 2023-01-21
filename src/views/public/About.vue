<template>

    <div class="about">
        <div class="about__info" >
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
            <LogoAbout/>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import ButtonDownload from '@/components/button/ButtonDownload.vue';
import LogoAbout from '@/components/logo/LogoAbout.vue';
import LetterAnime from '@/components/letter/LetterAnime.vue';


export default {
    components: { LetterAnime, ButtonDownload,LogoAbout },
    setup() {
        const classl = ref('text-animate')
        const title = ref([... 'About'])
        return {title,classl}
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin';

.about {

    padding-top: 10rem;

    background-image: var(--image-s);
    @include displayFlex();


    svg{
        height: auto;
    }

    &__info {
        @include positionLeft();
        flex: .5;

        p {
            color:var(--color-text);
        }
    }
    &__img {
        flex: 1;
        margin: 0 2rem 0 0;
    }

}

@media only screen and (max-width: 992px) {


    svg {
        height: 100vh;
        width: 100%;
    }

    .about{
        overflow: scroll;
        padding-top: 2rem;

        height: 100vh;

        @include mobileDisplay();

        &__info {

            margin-top: 2rem;
            margin-left: 70px;
        }

        &__img {

            margin-top: 2rem;
            margin-left: 70px;
        }
    }

}
</style>