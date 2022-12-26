<template>
  <div class="btn">
    <button @click="$router.push('/contact')"> Contact</button>
  </div>
</template>

<script>
export default {

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
    &:hover{
        cursor: pointer;
    }
}

</style>