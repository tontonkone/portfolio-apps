<template>
    <div>
        <router-link :to="to" class="link" :class="{ active: isActive }">
            <i class="icon" :class="icon"></i>
            <transition name="fade">
                <span v-if="!collapsed">
                    <slot></slot>
                </span>
            </transition>
        </router-link>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { collapsed } from './state.js';

export default {
    props: {
        //declaration des props pour les routes actives
        to: { type: String, required: true },
        icon: { type: String, required: true },
    },

    setup(props) {
        const route = useRoute()
        const isActive = computed(() => route.path === props.to)
        return { collapsed, isActive }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.link {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    font-weight: 400;
    margin: 0.1em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;
    color:var(--color-sidebar-icon-bg);
    text-decoration: none;
}

.link:hover {
    background-color: var(--sidebar-item-hover);
}

.link.active {
    background-color: var(--sidebar-item-active);
}
.link.scrol{
        background-color: var(--sidebar-item-active);
}

.link .icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}
</style>