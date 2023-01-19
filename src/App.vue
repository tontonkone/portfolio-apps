<template>
  <Sidebar />
  <router-view/>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar.vue'
export default {
  components: { Sidebar },
}
</script>
<style lang="scss" >
@import './assets/scss/variable.scss';
@import './assets/scss/noramlize';
@import './assets/scss/mixin';

span{
  margin: 0px;
}

#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;  
}
.move{
  margin-left: 100px;
}
label{
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

body{
  background: var(--image-haut);
  overflow: hidden;
  box-sizing: border-box;
}

h1 {
  color: #ff3d08;
  font-size: 50px;
  line-height: 53px;
  margin: 0;
  font-family: Coolvetica;
}
</style>
