<template>
  <div class="home">
    <!--Text container -->    
    <div class="home__text">
      <h1>
        <LetterAnime :classl="classl" :char="present" :idx=1 />
        <br>
        <img src="@/assets/img/logo/logomini.png" alt="logo">
        <LetterAnime :classl="classl" :char="char" :idx=6 />
        <br />
        <LetterAnime :classl="classl" :char="jobchar" :idx=12 />
       </h1>
       <Separator/>
      <ButtonLink />
    </div>
    <!-- logo container -->    
    <div class="home__logobig">
      <LogoAnime/>
    </div>
 
  </div>

</template>

<script>
import { ref, watchEffect} from 'vue'
import LetterAnime from '@/components/letter/LetterAnime.vue'
import LogoAnime from '@/components/logo/LogoAnime.vue'
import ButtonLink from '@/components/button/ButtonLink.vue'
import Separator from '@/components/separator/Separator.vue'

export default {
  components: {LetterAnime, LogoAnime, ButtonLink, Separator },
  setup() {
    const classl = ref('text-animate')
    const present = ref([... 'Je suis'])
    const jobchar = ref([... 'devéloppeur web junior'])
    const char = ref([... 'one mamoudou'])

    watchEffect(() => setTimeout(() => {
      classl.value = "text-animate-hover"
    }, 3000))
    
    return { classl, jobchar, char, present}
  }
}
</script> 

<style lang="scss" scoped>
@import '../../assets/scss/mixin';
.home {
  padding-top: 10rem;
 
  @include displayFlex();
  background-image: var(--image);
  overflow-y: hidden;

  svg{
    height: auto;
  }

  &__text{
    flex: 1;
    @include positionLeft();

  }

  h1 span{
    margin: 0;
  }
  
  &__logobig{
    flex: 1;
    padding: 0px;
    visibility: visible;
  }

  img {
    opacity: 0;
    width: 100px;
    height: auto;
    animation: rotateIn 1s linear both;
    animation-delay: .4s;
    margin-bottom: -4px;
    margin-left: -7px;
  }
}
@media only screen and (max-width: 1050px) {

  .home {
    overflow: scroll !important;
    padding-top: 2rem;
  }
}

@media only screen and (max-width: 758px ){


  h1{
    font-size: 1.5rem;
    line-height: 2rem;
  }
  svg{
    height: 100vh;
    width: 100%;
  }

  .home{
    overflow: scroll;

    padding-top: 2rem;

    @include mobileDisplay();

    img{
      width: 50px;
    }

    &__text{

      margin-left: 70px;
    }
    &__logobig{
      margin-left: 70px;
      margin-bottom: 3rem;

    }
  }

}
</style>