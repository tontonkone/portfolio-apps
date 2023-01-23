<template>

    <div class="about">
        <div class="about__info" >
            <h1>
                <LetterAnime :classl="classl" :char="title" :idx=1 />
            </h1>
            <p>Bonjour, je suis Kone j'ai découvert la programmation en usinage. J'y ai pris gout j'ai donc décidé de me reconvertir
                pour faire du développement mon métier.
                Ensuite, j'ai suivi une formation de 6 mois chez la 3wa.<br/> <br/>
                <strong>Ce que je recherche :</strong><br/>
                un contrat de professionnalisation <br/>
                un poste développeur web junior. <br/><br/>
            </p>

            <p> <strong>Ce que je peux vous apporter:</strong><br/>
                Je suis très autonome, débrouillard ce qui me permet de réagir et de trouver des solutions aux aléas rencontrés.<br/>
                J'ai une bonne aisance relationnelle, et je suis un moteur positif au sein d'une équipe.<br/>
                j'ai une bonne maitrise des bases en PHP, javasScript et Sql.
                J'apprends très vite et j'ai un esprit logique.
            </p>
                <ButtonDownload/>
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
@media only screen and (max-width: 1050px) {
.about {
        overflow: scroll !important;
        padding-top: 2rem;
    }
}

@media only screen and (max-width: 758px) {


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