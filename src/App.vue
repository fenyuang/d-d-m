<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import animate from 'animate.css'
export default {
  name: 'app'
}
</script>

<style>
@import 'components/css/common.css';
#app {
	height: 100%;
}
</style>
