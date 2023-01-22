<template>
    <button  class="btn"> <a :href="link" target="_blank">PDF</a></button>
</template>

<script>
import {ref} from 'vue';
export default {

    setup(props) {

        const link = 'https://drive.google.com/file/d/1WjjBF_hI1LCkRTl4KzTkNd_MT_P8wJ9v/view'
        
        return {link}
    }
}
</script>

<style lang="scss">

</style>