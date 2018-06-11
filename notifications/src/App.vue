<template>
  <div id="app">
   
    <notifications/>
  </div>
</template>

<script>
import notifications from './components/notifications.vue'


export default {
  name: 'app',
  components: {
    notifications
  }
}
</script>

<style>
#app {
    padding-top: 200px;
    background: darkgray;
    color: black;

}
</style>
