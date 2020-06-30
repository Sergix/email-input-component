<template>
  <div id="app">
    <img alt="Vue logo" src="/img/logo.82b9c7a5.png" />
    <h1>Email Input Microinteraction</h1>
    <h3>
      From <a href="https://dribbble.com/ai">Aaron Iker</a> on
      <a href="https://dribbble.com/shots/4779275-Email-validation-animation">
        dribbble
      </a>
    </h3>
    <email-input placeholder="Enter email" />
    <img
      alt="Source code"
      src="/img/code-2.f5a4e11a.png"
      class="code"
      width="600"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
body {
  background: #eeeeee;
}

a {
  text-decoration: none;
  color: #0069dd;
}

a:hover {
  text-decoration: underline;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input-field {
  margin-left: auto;
  margin-right: auto;
  margin-top: 4em;
  text-align: right;
  width: 16em;
  height: 4em;

  .email {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
  }

  .validated-message {
    font-size: 14px;
    font-style: italic;
  }
}

.code {
  margin-top: 1em;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
