<template>
    <button  class="btn"> <a :href="link" target="_blank">Mon CV</a></button>
</template>

<script>
import {ref} from 'vue';
export default {

    setup(props) {

        const link = 'https://drive.google.com/file/d/1TRZibVXwXjWzczUBVIMlWxbISme2Kx3s/view?usp=sharing'
        
        return {link}
    }
}
</script>

<style lang="scss">

a{
    text-decoration: none;
    color: var(--color-link);
}
</style>