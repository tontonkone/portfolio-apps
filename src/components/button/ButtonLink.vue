<template>
  <div >
    <button class="btn" @click="$router.push('/contact')"> Contact</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
//style de button 
.btn {
  font-size: 1.3rem;
  font-weight: bold;
  padding: 13px 50px 13px;
  outline: 0;

  border: 3px solid var(--color-border-btn);
  border-radius: 15px;
  color: var(--color-bg-btn); 
  cursor: pointer;

  background-color: transparent;

    &:hover{
      cursor: pointer;
      background: var(--color-hover-btn);
      scale: 1.1;
      color:var(--color-hover-bg);
      border: 3px solid var(--color-hover-border-btn);
    }
}
</style>