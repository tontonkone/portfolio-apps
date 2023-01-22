<template>
  <Sidebar />
  <Dark/>  
  <transition>
    <router-view v-slot="{Component}">
      <transition name="route" mode="out-in">
        <component :is="Component"> </component>
      
      </transition>

    </router-view>
  </transition>

</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar.vue';
import Dark from '@/components/help/Dark.vue';

export default {
  components: { Sidebar,Dark},
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
  color:var(--color-h1);
  font-size: 3rem;
  line-height: 4rem;
  margin: 0;
  font-family: Coolvetica;
}
.route-enter-from {
  opacity: 0.3;
  transform: translateY(50px);
}
.route-enter-active {
  transition: ass .4s ease-out;
}

.route-leave-to{
  opacity: 0.3;
  transform: translateY(-50px);
}
.route-leave-active {
  transition: all .4s ease-in;
}
</style>
