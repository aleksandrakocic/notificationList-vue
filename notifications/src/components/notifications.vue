<template>
  
  <div class='all' >
    <div class='d-flex justify-content-center'>
    <button class='button'
          v-on:click="seeNotifications">
    see notifications
    </button>
    </div>

      <div v-if="loading">
          loading
      </div>

      <div class='d-flex justify-content-center'>


                <ul>

                  <li
                     v-for="notification in notifications"
                     v-bind:key="notification"
                     v-bind:class="{ 'seen': notification.seen }">

                   <img class='icon'
                      :src="notification.icon" alt="">

                   {{notification.message}}

                  </li>

               </ul>
        </div>
    </div>

  
</template>

<script>
export default {
      name: 'notifications',

      data() {
          return{
                  notifications: [],
                  loading: false,
                  timestamp: ''
          }
      },

       methods: {

             seeNotifications: function () {
                this.loading = true;
                this.axios
                 .get("https://api.myjson.com/bins/19wyhe")
                 .then((response)  =>  {
                  this.loading = false;
                  this.notifications = response.data;              
              })
            }
        },
}

</script>


<style scoped>

.all {  
background: darkgray;
height: 100vh;
}

.button{
  background: black;
  height: 100px;
  width: 450px;
  color: lightblue;
  font-weight: 800;
  font-size: 35px;
  border-radius: 20px;


}

.all ul li{
  margin-top: 40px;
  padding: 10px;
  list-style:none ;
  font-size: 20px;
  background: lightblue;

}

.icon {
  height: 40px;
  width: 40px;
}

.seen{
    -webkit-filter: blur(1px); 
    filter: blur(1px);
}

</style>
