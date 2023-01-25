<script>
import Sidebar from '@/components/sidebar/Sidebar.vue'
import { ref, watch, computed } from 'vue'

export default {
    components: { Sidebar },
    setup() {
        const dark = ref('light');
        const body = document.querySelector('body');

        dark.value = JSON.parse(localStorage.getItem('item'))

        watch(() => {
            JSON.stringify(localStorage.setItem('item', dark.value));
            body.setAttribute('data-mode', localStorage.getItem(('darkmode')));
        })

        const toggleTheme = function () {
            if (dark.value) {
                dark.value = !dark.value
                localStorage.setItem('darkmode', 'light')
            } else {
                dark.value = !dark.value
                localStorage.setItem('darkmode', 'dark')
            }
        }
        return { dark, toggleTheme }
    }
}
</script>

<template>
    <div class="content">
        <div v-if="dark" @click="toggleTheme">
            <i class="fas fa-sun icon-sun"></i>
        </div>
        <div v-else @click="toggleTheme">
            <i class="fas fa-moon icon-moon"></i>
        </div>
        <div :style="{ 'margin-left': compiledSidebarWidth }">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.icon-moon {
    cursor: pointer;
    font-size: 2rem;
}

.icon-sun {
    cursor: pointer;
    font-size: 2rem;
    color: yellow;
}

</style>