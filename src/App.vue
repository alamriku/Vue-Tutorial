<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>Animation</h1>
              <hr>
              <select name="" id="" class="form-control" v-model="alertAnimation">
                <option value="slide">Slide</option>
                <option value="fade">Fade</option>
              </select>
              <button class="btn btn-primary" @click="show = !show">Show alert</button>
              <transition :name="alertAnimation">
                <div class="alert alert-info" v-if="show">This is some info</div>
              </transition>
              <transition :name="alertAnimation" type="animation">
                <div class="alert alert-info" v-if="show">This is some info</div>
              </transition>
              <transition

                enter-active-class="animated bounce"

                leave-active-class="animated shake"
              >
                <div class="alert alert-info" v-if="show">This is some info</div>
              </transition>
              <transition :name="alertAnimation" mode="out-in" >
                <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
              </transition>
            </div>

        </div>

    </div>
</template>

<script>

export default {
  data () {
    return {
      show: true,
      alertAnimation: 'fade'
    }
  }
}
</script>

<style scoped>
.fade-enter{
  opacity: 0;
}
  .fade-enter-active{
    transition: opacity 1.5s ease-in-out;
  }
  .fade-leave{
    /*opacity: 1s;*/
  }
  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }
  .slide-enter{
    opacity: 0;
      /*transform: translateY(20px);*/
  }
.slide-enter-active{
animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}
  .slide-leave{
  }
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
}

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to{
      transform: translateY(0);
    }
  }
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to{
    transform: translateY(20px);
  }
}

</style>
