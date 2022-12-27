<template>
    <div class="about">

        <div class="container">

            <div class="container__info">

                <LetterTitle>
                    <h1>Profil</h1>
                </LetterTitle>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
                    quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda
                    nam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
                    quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda
                    nam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
                    quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda
                    nam!</p>
            </div>
            <div class="container__img">
                <img src="@/assets/img/profil-c.svg" alt="photo de profils">
            </div>
        </div>
    </div>
</template>

<script>
import LetterTitle from '@/components/letter/LetterTitle.vue';
export default {
    components: { LetterTitle },
    setup() {
    }
}
</script>

<style lang="scss" scoped>
.container{
        display: flex;
        flex-direction: row;
        &__info{
          
            margin-top: 8rem;
            margin-left: 100px;
            p{
                text-align: left;
            }
        }
        &__img{
       
            margin-top: 10rem;
            padding: 2rem;
        }

        p {
            color: yellow;
        }
    }
</style>