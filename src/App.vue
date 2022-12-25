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

h1 {
  color: rgb(72, 5, 5);
  font-size: 56px;
  line-height: 53px;
  margin: 0;
  font-family: Coolvetica;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
