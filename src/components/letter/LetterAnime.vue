<template>
    <transition-group appear :enter-active-class="classl">

        <span v-for="( lette, index ) in  char" :key="lette + index" :class="`${classl} _${index + idx}`">{{
                lette
        }}</span>

    </transition-group>
</template>

<script>

export default {
    props: ['char', 'idx', 'classl'],
    setup(props) {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.text-animate {
    display: inline-block;
    opacity: 0;
    animation: bounceIn;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    min-width: 10px;
}

.text-animate-hover {
    min-width: 10px;
    display: inline-block;
    animation-fill-mode: both;
    cursor: none;

    &:hover {
        animation: rubberBand 1s;
        color: #FE5D26;
    }
}

@for $i from 1 through 45 {
    .text-animate._#{$i} {
        animation-delay: #{$i/10}s;

    }
}

.contact ul {
    padding: 0;
}

span {
    margin: 1px;
}

.contact li {
    list-style-type: none;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    line-height: 1.5em;
}
</style>