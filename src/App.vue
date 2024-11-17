
<template>
  

  <the-navigation />
 

  <div class="container">
    <!-- <router-view class="view left-sidebar" name="LeftSidebar">Home</router-view> -->
      <router-view v-slot="{Component}" class="main-view">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"/>
        </transition>
        
      </router-view>
   
   
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>

<style scoped>
 /* .slide-enter-active, .slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
} */

/* .moveUp-enter-active{
  animation:fadIn 1s ease-in;
}
@keyframes fadeIn{
  0% {opacity: 0;}
  50% {opacity: 0.5;}
  100% {opacity: 1;}
} 

.moveUp-leave-active{
  animation: moveUp 0.3s ease-in;
}

@keyframes moveUp{
  0% {transform: translateY(0);}
  100% {transform: translateY(-400px);}
} */

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to { /* .fade-leave-active in <2.1.8 */
  opacity: 0;
}
  .left-sidebar{
    width: 20%;
  }
  .main-view{
    width: 80%;
  }

</style>

