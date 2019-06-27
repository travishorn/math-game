<template>
  <div class="quiz">
    <div class="problemPart">{{ factor1 }}</div>
    <div class="problemPart">&times;</div>
    <div class="problemPart">{{ factor2 }}</div>
    <div class="problemPart">=</div>
    <div class="problemPart">
      <input v-model.number="response" @keypress.enter="submit">
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiplicationQuiz",
  data() {
    return {
      response: '',
      factor1: null,
      factor2: null
    };
  },
  computed: {
    answer() { return this.factor1 * this.factor2; }
  },
  methods: {
    submit() {
      if (this.response === this.answer) {
        this.$emit("rightAnswer");
      } else {
        this.$emit("$wrongAnswer");
      }
      this.newProblem();
    },
    newProblem() {
      this.response = '';
      this.factor1 = Math.floor(Math.random() * 13);
      this.factor2 = Math.floor(Math.random() * 13);
    }
  },
  mounted() {
    this.newProblem();
  }
};
</script>

<style scoped>
  .quiz {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 500px;
  }

  .problemPart, input {
    text-align: center;
    font-size: 2rem;
  }

  input {
    width: 100px;
  }
</style>
