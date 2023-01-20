<template>

    <div class="portfolio">
        <div class="portfolio__title" :class="{ 'move-text': collapsed }">
            <h1>
                <LetterAnime :classl="classl" :char="title" :idx=1 />
            </h1>
        </div>
        <div class="portfolio__content" :class="{ 'move-text': collapsed }">
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
                pictures: require('@/assets/img/divers/port.jpg'),
                technos: ["PHP", "javaScript", "html", "sass"],
                githubLink: "https://github.com",
                liveView: "https://ns-food-ecommerce.netlify.app"
            },
            {
                name: "Mon Portfolio",
                description: "Mon portfolio personnel.",
                pictures: require('@/assets/img/divers/port.jpg'),
                technos: ["VueJS", "sass"],
                githubLink: "https://github.com/",
                liveView: "/"
            }, {
                name: "Mon Portfolio",
                description: "Mon portfolio personnel.",
                pictures: require('@/assets/img/divers/port.jpg'),
                technos: ["VueJS", "sass"],
                githubLink: "https://github.com/",
                liveView: "/"
            }
        ])
        const title = [...'Portfolio'];
        const classl = ref('text-animate')

        return { title, classl, collapsed, projects }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/mixin';

body{
    background-image: var(--image-s);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    width: 100%;
    height: 100vh;
}
.portfolio {
    &__content {
        margin-left: 13rem;
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
    .move-text {
        margin-left: 100px;
    }
}
</style>