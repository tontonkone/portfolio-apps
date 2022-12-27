<template>
   
    <div class="container">
        <LetterTitle>
            <h1>Expériences</h1>
        </LetterTitle>
        <div class="container__skill">
            
            <div class="container__skill--img">
                <img src="@/assets/img/skill-c.svg" alt="photo de profils">
            </div>
            <div class="skill--logosvg">
                <ul>
                    <li v-for="icon in icons" :key="icon.name">
                        <img :src="icon.link" :alt="icon.name">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import LetterTitle from '@/components/letter/LetterTitle.vue' 

export default {
    components:{LetterTitle},
    setup() {
        const icons = ref([
            { name: 'logo php', link: require('@/assets/img/skill/php.svg') },
            { name: 'logo html', link: require('@/assets/img/skill/html.svg') },
            { name: 'logo vue', link: require('@/assets/img/skill/vue.svg') },
            { name: 'logo css', link: require('@/assets/img/skill/css.svg') },
            { name: 'logo symfony', link: require('@/assets/img/skill/symfony.svg') },
            { name: 'logo jquery', link: require('@/assets/img/skill/jquery.svg') },
        ])

        return { icons }
    }
}
</script>

<style lang="scss" scoped>
.container{

    margin: 2rem ;
    
    &__skill{

        display: flex;
        flex-direction: row;
        padding-top: 10rem;
    }


    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        li {
            list-style-type: none;
            cursor: pointer;

            img{
                width:10rem;
                margin:2rem;
            }
        }
    }
    &__skill--img{
 
        img{
            width: 80%;
            margin-left: 100px;
        }
    }
}
</style>