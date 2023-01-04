<template>
  <div >
    <button class="btn" @click="$router.push('/contact')"> Contact</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
//style de button 
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
    &:hover{
        cursor: pointer;
        background: red;
    }
}
</style>