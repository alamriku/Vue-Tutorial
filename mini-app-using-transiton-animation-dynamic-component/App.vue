<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1 class="text-center">The Quiz App</h1>

            </div>

        </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <transition name="flip" mode="out-in">
            <component  :is="mode" @answered="answered($event)" @confirmed="nextQuestion()"></component>
          </transition>

        </div>

      </div>

    </div>
</template>

<script>
import Answer from './components/Answer'
import Question from './components/Question'
export default {

  data () {
    return {
      mode: 'app-question'
    }
  },
  methods: {
    answered (isCorrect) {
      if (isCorrect) {
        this.mode = 'app-answer'
      } else {
        alert('Wrong! Try again')
      }
    },
    nextQuestion () {
      this.mode = 'app-question'
    }
  },
  components: {
    appAnswer: Answer,
    appQuestion: Question
  }
}
</script>

<style scoped>

  .flip-enter{
      /*transform: translateY(20px);*/
  }
.flip-enter-active{
animation: flip-in 5s ease-in-out forwards;
}
  .flip-leave{
  }
.flip-leave-active{
  animation: flip-out 5s ease-in-out forwards;

}

.flip-move{
  transition:transform 1s;
}

  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }
    to{
      transform: rotateY(0deg);
    }
  }
@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to{
    transform: rotateY(90deg);;
  }
}

</style>
