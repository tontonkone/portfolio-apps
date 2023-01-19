<template>
  <div class="separator"></div>
  <SocialLink />
</template>

<script>
import SocialLink from './SocialLink.vue'
export default {
    components: {SocialLink}
}
</script>

<style lang="scss" scoped>
.separator{
    height: 1px;
    width: 50%;
    background: var(--color-sep);
    margin: 1rem 0rem;
    display: inline-block;
}

</style>