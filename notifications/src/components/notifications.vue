<template>

  <div class='all d-flex justify-content-center'>

    <ul>
       <li>
         <p>hello</p>

         <!-- v-bind: src="" -->
         <!-- <img src="" alt=""> -->
        <button v-on: click = 'notify()'>ovdeovde</button>
       {{info}}
      </li>
     
      
    </ul>

  </div>
  
</template>

<script>
export default {
    name: 'notifications',
  // props: {
  //   msg: String,
  //   // mozda ovo??
  //   notifications: ['notifications'] 
  // },

     data() {
         return{
                info: [],
                notification: '',
                img: ''
          }
      },

      methods: {
        
        notify() {
          this.axios
           .get('https://api.myjson.com/bins/19wyhe')
           .then(response => (this.info = response.data.message))
              console.log(this.response);
        }
       
      }
}  

    // mouted () { 
    //     this.axios
    //        .get('https://api.myjson.com/bins/19wyhe')
    //        .then(response => (this.info = response.data))
    //       console.log(this.axios)           
    // }
          
  

//     methods: {
//            getIcon
//     }
// }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.all {  
background:  darkgray;
height: 100vh;
}

.all ul li{
  margin-top: 20px;
  background:black;

}

</style>
