<template>

    <div class="portfolio">
        <div class="portfolio__title" >
            <h1>
                <LetterAnime :classl="classl" :char="title" :idx=1 />
            </h1>
        </div>
        <div class="portfolio__content" >
            <div class="portfolio__project" v-for="(project, index) in projects" :key="index">
                <div class="portfolio__project--img">
                    <img  :src="project.pictures" :alt="project.name">
                </div>        
                <div class="portfolio__desc" >
                    <p>{{ project.name }}</p>
                    <p class="text">
                        {{ project.description }}
                    </p>
                </div>
                <div class="langs">
                    <p v-for="(techno, index) of project.technos" :key="index">
                            {{ techno }}
                    </p>
                </div>
                <div class="icon--project">
                    <a :href="project.githubLink" target="_blank">
                        <i class="fab fa-github icon"></i>
                    </a>
                    <a :href="project.liveView" target="_blank">
                        <i class="fab fa-github icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LetterAnime from '@/components/letter/LetterAnime.vue';
import { ref } from 'vue';
import { collapsed } from '@/components/sidebar/state';

export default {
    components: { LetterAnime },
    setup(props) {
        const projects = ref([
            {
                name: "site d'échanges ",
                description: "Une application d'échange  autour du devéloppement ",
                pictures: require('@/assets/img/divers/fwc.jpg'),
                technos: ["PHP", "JS", "Sass"],
                githubLink: "https://github.com",
                liveView: "https://mamoudoukone.sites.3wa.io/projet3wa/public/index.php?page=register"
            },
            {
                name: "Mon Portfolio",
                description: "Mon portfolio personnel.",
                pictures: require('@/assets/img/divers/portf.jpg'),
                technos: ["VueJS", "sass"],
                githubLink: "https://github.com/",
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
        margin-left: 50px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    
    }

    &__project{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 400px;
        margin: .8rem;
        padding: 1rem;
        box-shadow: 0 0 22px rgba(0, 0, 0, 0.33);

        &--img{
            object-fit: fill;
            img{
                width:100%;
            }           
        }
        &:hover{
            box-shadow: 0 0 44px rgba(0, 0, 0, 0.33);
            transform: scale(1.1);
        }
    }
    &__desc{
        display: flex;
        flex-direction: column;
        text-align: left;
        
    }

    &__title {
        @include positionLeft();
    }
    .icon--project{
        display: flex;
        flex-direction: row;
    }
    .icon{
        font-size: 2rem;
        color:var(--color-bg-btn);
        margin: .3rem;
        &:hover{
            color:var(--color-hover-border-btn);
        }
    }
    h2{
        color: var();
    }
    p{
        color:var(--color-text);
        font-size: 1.3rem;
    }
    .langs{
        display: flex;
        flex-direction: row;
        P{
            margin: .3rem;
            color: var(--color-bg-btn);
            padding: .2rem;
            border-radius: .5rem;
        }

    }

}

@media only screen and (max-width:758px) {

    .portfolio {
        overflow: scroll;
        @include mobileDisplay();

        &__content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin-bottom: 2rem;
        }

        &__logobig {

            margin-top: 2rem;
            margin-left: 70px;
        }
    }

}
</style>