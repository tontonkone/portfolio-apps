<template>

    <div class="portfolio">
        <div class="portfolio__title">
            <h1>
                <LetterAnime :classl="classl" :char="title" :idx=1 />
            </h1>
        </div>
        <div class="portfolio__content">
            <div class="portfolio__project" v-for="(project, index) in projects" :key="index">
                <div class="portfolio__project--img">
                    <img :src="project.pictures" :alt="project.name">
                </div>
                <div class="portfolio__desc">
                    <p>
                        {{ project.name }}
                    </p>
                    <p>
                        {{ project.description }}
                    </p>
                </div>
                <div class="langs">
                    <div class="language" v-for="(techno, index) of project.technos" :key="index">
                        <img :src="techno.link" :alt="techno.name">
                    </div>
                </div>
                <div class="icon--project">
                    <a :href="project.githubLink" target="_blank">
                        <i class="fab fa-github icon"></i>
                    </a>
                    <a :href="project.liveView" target="_blank">
                        <i class="fas fa-external-link icon"></i> </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LetterAnime from '@/components/letter/LetterAnime.vue';
import { ref } from 'vue';

export default {
    components: { LetterAnime },
    setup(props) {
        const projects = ref([
            {
                name: "site d'échanges ",
                description: "Site d'échange  autour du devéloppement ",
                pictures: require('@/assets/img/divers/fwc.jpg'),
                technos: {
                    php: {
                        link: require('@/assets/img/skill/php.svg'),
                        name: "php"
                    },
                    js: {
                        link: require('@/assets/img/skill/js.svg'),
                        name: "js"
                    },
                    sass: {
                        link: require('@/assets/img/skill/sass.svg'),
                        name: "sass"
                    }

                },
                githubLink: "https://github.com/tontonkone/project3wa",
                liveView: "https://mamoudoukone.sites.3wa.io/projet3wa/public/index.php?page=register"
            },
            {
                name: "Mon Portfolio",
                description: "Mon portfolio personnel.",
                pictures: require('@/assets/img/divers/portf.jpg'),
                technos: {
                    vuejs: {
                        link: require('@/assets/img/skill/vue.svg'),
                        name: "php"
                    },
                    sass: {
                        link: require('@/assets/img/skill/sass.svg'),
                        name: "sass"
                    }

                },
                githubLink: "https://github.com/tontonkone/portfolio-apps",
                liveView: "/"
            }
        ])
        const title = [...'Portfolio'];
        const classl = ref('text-animate')

        return { title, classl, projects }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin';


.portfolio {
    padding-top: 10rem;

    background-image: var(--image-s);

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    width: 100%;
    height: 100vh;

    &__content {
        display: flex;
        padding: 5rem;

    }

    &__project {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 300px;
        margin: .8rem;
        padding: 1rem;
        box-shadow: 0 0 22px rgba(0, 0, 0, 0.33);

        &--img {
            object-fit: fill;

            img {
                width: 100%;
            }
        }

        &:hover {
            box-shadow: 0 0 44px rgba(0, 0, 0, 0.33);
            transform: scale(1.1);
        }
    }

    &__desc {
        display: flex;
        flex-direction: column;
        text-align: left;

    }

    &__title {
        @include positionLeft();
    }

    .icon--project {
        display: flex;
        flex-direction: row;
    }

    .icon {
        font-size: 2rem;
        color: var(--color-bg-btn);
        margin: .3rem;

        &:hover {
            color: var(--color-hover-border-btn);
        }
    }

    h2 {
        color: var();
    }

    p {
        color: var(--color-text);
        font-size: 1.3rem;
    }

    .langs {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        img {
            margin: .3rem;
            width: 3rem;
        }

    }

}

@media only screen and (max-width: 1050px) {

    .portfolio {
        overflow: scroll !important;
        padding-top: 2rem;
    }
}

@media only screen and (max-width:758px) {

    .portfolio {
        padding-top: 2rem;
        height: 100vh;
        overflow: scroll;
        
        @include mobileDisplay();

        &__content {
            display: grid;
            grid-template-columns:1fr;
            margin-bottom: 2rem;
            p{
                font-size: 1rem;
            }
        }

        &__logobig {

            margin-left: 70px;
        }
    }

}
</style>