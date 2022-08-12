<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="container">
    <div class="scroll">
      <router-view class="router"/>
    </div>
    <div class="menu">
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .scroll {
    width: calc(100vw - 95px);
    overflow: auto;
    position: relative;
    left: 10px;

    &::-webkit-scrollbar {
      width: 5px;
      height: 1px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #f0555a;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  }

  .router {

  }

  .menu {
    width: 80px;
    background-color: #f0555a;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>
