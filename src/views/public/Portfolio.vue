<template>

    <div class="portfolio">
        <h1>
            <LetterAnime :classl="classl" :char="title" :idx=1 />
        </h1>

    </div>
</template>

<script>
import LetterAnime from '@/components/letter/LetterAnime.vue';
import { ref } from 'vue';
export default {
    components: {LetterAnime},
    setup(props) {

        const title = [...'Portfolio'];
        const classl = ref('text-animate')

        return {title,classl}
    }
}
</script>

<style lang="scss">
.portfolio{
    display: flex;
    flex-direction: row;
    background-image: var(--image-s);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    padding: 5rem;
}
</style>