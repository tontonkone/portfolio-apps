<template>
    <button  class="btn" @click="onClick()">Mon CV</button>
</template>

<script>
import axios from 'axios'
import { onMounted } from 'vue'
export default {

    setup(props) {

         const onClick = function() {
            axios({
                url: require('@/assets/img/logo/logomini.png'),
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {

                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', 'image.jpg');

                document.body.appendChild(fileLink);

                fileLink.click();
            });
        }
        return { onClick}
    }
}
</script>

<style lang="scss">

</style>