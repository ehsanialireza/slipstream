<template>
  <div class="default-layout font-inter text-white">
    <Nuxt/>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import "@/assets/css/responsible";

* {
  box-sizing: border-box;
}

html, body, #__nuxt, #__layout, .default-layout {
  height: 100%;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #E21616;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.db1 {
  background: rgba(255, 0, 0, .2);
  border: red;
}

.db2 {
  background: rgba(0, 255, 0, .2);
  border: green;
}

.db3 {
  background: rgba(0, 0, 255, .2);
  border: blue;
}

.db4 {
  background: rgba(255, 255, 0, .2);
  border: rgb(255, 255, 0);
}


</style>
