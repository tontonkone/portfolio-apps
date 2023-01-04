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
.btn {
font-size: 1.3rem;
    font-weight: 200;

    letter-spacing: 1px;
    padding: 13px 50px 13px;
    outline: 0;

    border: 1px solid #2C3E50;

    color: white;
    cursor: pointer;

    position: relative;
    background-color: rgba(0, 0, 0, 0);

    &::after {
        content: "";
        background-color: red;
        width: 100%;
        z-index: -1;
        position: absolute;
        height: 100%;
        top: 7px;
        left: 7px;
        transition: 0.2s;
    }

    &:hover::after {
        top: 0px;
        left: 0px;
    }

    &:hover {
        cursor: pointer;
        background: red;
    }
}
</style>