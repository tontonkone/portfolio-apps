<template>
   
    <div class="skill">
        
        <div class="skill__img">
            <h1>
                <LetterAnime :classl="classl" :char="title" :idx=1 />
            </h1>
            <LogoExperience/>
        </div>
        <div class="skill__logosvg">
                <ul>
                    <li v-for="lang in langs" :key="lang.name">
                        <img :src="lang.link" :alt="lang.name">
                    </li>
                </ul>
<!--                 <ul>
                    <li v-for="lib in libs" :key="lib.name">
                        <img :src="lib.link" :alt="lib.name">
                    </li>
                </ul> -->
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import LetterAnime from '@/components/letter/LetterAnime.vue'
import LogoExperience from '../../components/logo/LogoExperience.vue'

export default {
    components:{ LogoExperience,LetterAnime},
    setup() {

        const title = [... 'Experience'];
        const classl = ref('text-animate')

        const langs = ref([
            { name: 'logo php', link: require('@/assets/img/skill/php.svg') },
            { name: 'logo html', link: require('@/assets/img/skill/html.svg') },
            { name: 'logo vue', link: require('@/assets/img/skill/vue.svg') },
            { name: 'logo css', link: require('@/assets/img/skill/css.svg') },
            { name: 'logo symfony', link: require('@/assets/img/skill/symfony.svg') }
        ])

        const libs = ref([
            { name: 'logo php', link: require('@/assets/img/skill/php.svg') },
            { name: 'logo html', link: require('@/assets/img/skill/html.svg') },
            { name: 'logo vue', link: require('@/assets/img/skill/vue.svg') },
            { name: 'logo css', link: require('@/assets/img/skill/css.svg') },
        ])

        return { langs,classl,title }
    }
}
</script>

<style lang="scss" scoped>
.skill{
    display: flex;
    flex-direction: row;

    background-image: var(--image);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    width: 100%;
    height: 100vh;
    
    &__img{
        flex: 1;
        margin: 1rem;
    }
    
    &__logosvg{
        flex: 1;
        padding-top: 10rem;
        
        ul {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;

            padding: 2rem;

            margin-left: auto;
            margin-right: auto;

            width: 500px;

    
            li {
                list-style: none;
                background: transparent;

                width: 50%;
                box-shadow: 0 0 16px rgba(0, 0, 0, 0.33);

                max-width: 120px;
                height: 122px;

                margin: .2rem;
                padding: 10px;

                display: flex;
                justify-content: center;
                align-items: center;

                transition: 0.3s all;
            
                &:hover {
                    transform: scale(1.1);
                    background: rgb(255, 255, 255);
                    box-shadow: 0 0 40px rgba(0, 0, 0, 0.33);
                }
                img {
                    width: 8rem;
                    margin: 1rem;
                }
            }
        }
    }
}
</style>