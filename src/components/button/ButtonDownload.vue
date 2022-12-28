<template>
  <h2>mon CV </h2>
    <button @click="onClick()">DownLoad</button>
</template>

<script>
import axios from 'axios'
import { onMounted } from 'vue'
export default {

    setup(props) {

         const onClick = function() {
            axios({
                url: require('@/assets/img/logomini.png'),
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

<style lang="scss" scoped>
button {
    background: transparent;
        border: 1px solid yellow;
        width: 8rem;
        padding: 1rem;
        border-radius: .3rem;
        color: orange;
    
        &:hover {
            cursor: pointer;
            background: rgb(91, 91, 5);
        }
}
</style>