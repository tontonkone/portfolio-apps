<template>
  <div class="container">
    <div class="container__text">
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
    <LogoAnime/>
 
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import LetterAnime from '@/components/letter/LetterAnime.vue'
import LogoAnime from '@/components/logo/LogoAnime.vue'
import ButtonLink from '@/components/button/ButtonLink.vue'
import Separator from '@/components/separator/Separator.vue'

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
    return { classl, jobchar, char, present }
  }
}
</script> 

<style lang="scss" scoped>
.container {
  &__text{
    position: absolute;
    left: 13%;
    top: 50%;
    transform: translateY(-40%);
    width: 50%;
    max-height: 90%;
    
    text-align: left;
  }
  h1 span{
    margin: 0;
  }

  img {
    opacity: 0;
    width: 100px;
    height: auto;
    animation: rotateIn 1s linear both;
    animation-delay: .3s;
    margin-bottom: -7px;
    margin-left: -7px;
  }
}
</style>