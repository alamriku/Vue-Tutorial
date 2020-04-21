<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1 class="text-center">Route</h1>
              <hr>

              <router-view name="header-top"></router-view>
              <transition name="slide" mode="out-in">
                <router-view></router-view>
              </transition>
              <router-view name="header-bottom"></router-view>
            </div>

      </div>
      <hr>

    </div>
</template>

<script>
import Header from './components/Header'
export default{
  components: {
    appHeader: Header
  }
}
</script>
<style>
  .slide-enter{
    opacity: 0;
    /*transform: translateY(20px);*/
  }
  .slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s ease-in-out;
  }
  .slide-leave{
    opacity: 1;
    transform: translateX(0);
  }
  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
    }
    100%{
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100%{
      transform: translateY(-30px);
    }
  }
</style>
