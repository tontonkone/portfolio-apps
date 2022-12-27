<template>
   
    <div>
        <LetterTitle>
            <h1>Expériences</h1>
        </LetterTitle>
        <div class="skill">
            
            <div class="skill__img">
                <img src="@/assets/img/skill-c.svg" alt="photo de profils">
            </div>
            <div class="skill__logosvg">
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
.skill{
    display: flex;
    flex-direction: row;
    padding-top: 5rem;

    ul {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
/*         padding: .3rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; */

        li {
            list-style-type: none;
            cursor: pointer;
            img{
                width:10rem;
                margin:2rem;
            }
        }
    }
    &__img{
 
        img{
            width: 80%;
            margin-left: 100px;
        }
    }
}
</style>