<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Concert+One&display=swap');

  html { font-size: 22px; }

  html, body { height: 100%; }

  body {
    display: grid;
    margin: 0;
  }

  body,
  input {
    background-color: #3D3D3B;
  }

  body,
  button,
  input {
    color: #F4F4F4;
    font-family: "Concert One", sans-serif;
    font-size: 1rem;
  }

  .container {
    margin: auto;
  }

  button {
    background-color: #7F8489;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    margin: 0.5rem 0;
    transition: background-color 0.5s;
  }

  button:hover {
    background-color: #6C7175;
  }

  input {
    padding: 0.4rem;
    border: solid 1px #7F8489;
  }

  .my-5 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .text-center {
    text-align: center;
  }

  .badge {
    background-color: #525F7F;
    border-radius: 5px;
    padding: 0.25rem;
  }
</style>