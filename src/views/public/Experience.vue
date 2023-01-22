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
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import LetterAnime from '@/components/letter/LetterAnime.vue'
import LogoExperience from '../../components/logo/LogoExperience.vue'
import { collapsed } from '@/components/sidebar/state';

export default {
    components:{ LogoExperience,LetterAnime},
    setup() {

        const title = [... 'Experience'];
        const classl = ref('text-animate')

        const langs = ref([
            { name: 'logo php', link: require('@/assets/img/skill/php.svg') },
            { name: 'logo html', link: require('@/assets/img/skill/js.svg') },
            { name: 'logo vue', link: require('@/assets/img/skill/vue.svg') },
            { name: 'logo css', link: require('@/assets/img/skill/css.svg') },
            { name: 'logo symfony', link: require('@/assets/img/skill/symfony.svg') },
            { name: 'logo symfony', link: require('@/assets/img/skill/html.svg') },
            { name: 'logo symfony', link: require('@/assets/img/skill/mysql.svg') },
            { name: 'logo symfony', link: require('@/assets/img/skill/sass.svg') },
            { name: 'logo symfony', link: require('@/assets/img/skill/wp.svg') },

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
@import '../../assets/scss/mixin';
.skill{

    padding-top: 10rem;
    @include displayFlex();
    background-image: var(--image);
    
    &__img{
        flex: 1;
        @include positionLeft();
    }
    
    &__logosvg{
        flex: 1;
        
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

                max-width: 78px;
                height: 80px;

                margin: .2rem;
                padding: 10px;

                display: flex;
                justify-content: center;
                align-items: center;

                transition: 0.3s all;
            
                &:hover {
                    transform: scale(1.1);
                    background: var(--color-bg-fond);
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

@media only screen and (max-width: 992px) {


    h1 {
        font-size: 2rem;
    }

    .skill {
        padding-top: 3rem;
        height: 100vh;

        @include mobileDisplay();
        overflow-y: scroll;

        &__img {

            margin-top: 2rem;
            margin-left: 50px;
            padding:0 2rem;
        }

        &__logosvg {

            margin: 0 0 3rem 5rem;
            padding: 0 1rem;

            ul{
                width:auto;
            }
        }
    }

}
</style>