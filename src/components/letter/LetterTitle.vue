<template>
    <div>
    <transition 
        appear 
        @before-enter="beforeEnterF" 
        @enter="enterF">
        <slot></slot>
    </transition>
    </div>
</template>

<script>
import gsap from 'gsap'
export default {
    setup() {
        const beforeEnterF = (el) => {
            el.style.transform = 'translateX(60px)'
            el.style.opacity = 0
        }
        const enterF = (el, done) => {
            gsap.to(el, {
                duration: 3,
                x: -60,
                opacity: 1,
                ease: 'bounce.out',
                onComplete: done
            })
        }
        return { beforeEnterF, enterF }
    }
}
</script>

<style lang="scss" scoped>

</style>