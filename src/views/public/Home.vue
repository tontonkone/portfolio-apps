<template>
  <div class="home">
    <!--Text container -->    
    <div class="home__text" :class="{ 'move-text': collapsed }">
      <h1>
        <LetterAnime :classl="classl" :char="present" :idx=1 />
        <br>
        <img src="@/assets/img/logomini.png" alt="logo">
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
import { ref, watchEffect } from 'vue'
import LetterAnime from '@/components/letter/LetterAnime.vue'
import LogoAnime from '@/components/logo/LogoAnime.vue'
import ButtonLink from '@/components/button/ButtonLink.vue'
import Separator from '@/components/separator/Separator.vue'
import {collapsed} from '@/components/sidebar/state'

export default {
  components: {LetterAnime, LogoAnime, ButtonLink, Separator },
  setup() {
    const classl = ref('text-animate')
    const present = ref([... 'Je suis'])
    const jobchar = ref([... 'developpeur web junior'])
    const char = ref([... 'one mamoudou'])


    watchEffect(() => setTimeout(() => {
      classl.value = "text-animate-hover"
    }, 3000))
    
    return { classl, jobchar, char, present, collapsed}
  }
}
</script> 

<style lang="scss" scoped>
@import '../../assets/scss/mixin';
.home {
 
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
    margin: 0;
    padding: 0px;
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
.move-text {
    margin-left: 100px;
  }
</style>