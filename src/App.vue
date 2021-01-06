<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

html, body {
  font-family: 'Noto Sans JP', sans-serif;
  user-select: none;
}

header, .contact {
  display: flex;
  align-items: center;
}

h1, li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 40px;
  margin: 5px;
  padding: 15px;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 5px;
  padding: 15px;
  font-size: 40px;
  cursor: pointer;

  &#text {
    height: 100%;
  }
}
</style>
