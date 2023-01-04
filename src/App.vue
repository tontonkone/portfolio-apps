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
@import './assets/scss/_variable.scss';
@import './assets/scss/noramlize';

span{
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.move{
  margin-left: 100px;
}

body{
  background: #ffffff;
  overflow-y: none;
}

h1 {
  color: #ff3d08;
  font-size: 30px;
  line-height: 53px;
  margin: 0;
  font-family: Coolvetica;
}
</style>
