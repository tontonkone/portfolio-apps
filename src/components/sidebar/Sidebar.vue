
<template>
    <div class="sidebar" :style="{ width: computedSideBarWidth }">
        <h1>
            <span v-if="collapsed">
                <div class="logo-small"><img src="@/assets/img/LogoBas.png" alt="logo" ></div>
            </span>
            <span v-else class="logo-big"><img src="@/assets/img/LogoBas.png" alt="logo"></span>
        </h1>

        <SidebarLink to="/" icon="fas fa-users">Home</SidebarLink>
        <SidebarLink to="/about" icon="fas fa-columns">About</SidebarLink>
        <SidebarLink to="/contact" icon="fas fa-user">Contact</SidebarLink>
        <SidebarLink to="/experience" icon="fas fa-image">Experience</SidebarLink>
        <SidebarLink to="/portfolio" icon="fas fa-image">Portfolio</SidebarLink>

        <span class="collapse-icon" :class="{ 'rotate-icon': collapsed }" @click="toggle">
            <i class="fas fa-angle-double-left"></i>
        </span>
    </div>
</template>

<script>
import { collapsed, toggle, computedSideBarWidth } from './state.js'
import SidebarLink from './SidebarLink.vue';

export default {
    props: {},
    components: { SidebarLink },
    setup() {

        collapsed.value = JSON.parse(localStorage.getItem('collapsed'))

        return { collapsed, toggle, computedSideBarWidth }
    }

}
</script>

<style lang="scss" scoped>
.sidebar {
    color: white;
    background-color: var(--color-sidebar-bg);
    float: left;

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;

    padding: 0.5em;
    transition: 0.3s ease;

    display: flex;
    flex-direction: column;

    .logo-small{
        img{
            width: 50px;
            transition: width 2s, height 2s;
        }

    }
    .logo-big{
        img{
            width: 120px;
        }
    }
    .collapse-icon {
        position: absolute;
        bottom: 0;
        padding: 0.75em;
        color: rgba(255, 255, 255, 0.7);
        transition: 0.2s linear;
    }

    .rotate-icon {
        transform: rotate(180deg);
        transition: 0.2s linear;
    }
    h1 {
        height: 2.5em;
    }
}
</style>
