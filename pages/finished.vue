<template>
  <div class="finished w-full h-full flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat ">

    <img src="@/assets/img/Lock.svg" alt="lock live" class="mb-6">
    <div class="bg-black bg-opacity-80 py-3 px-5 sm:py-6 sm:px-10 rounded-lg w-11/12 sm:w-8/12 lg:w-2/6">
      <p class="text-center">
        Sorry, the show you’re trying to watch is no longer available on demand. Thanks for tuning in!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },



}
</script>
<style lang="scss" scoped>
@import "@/assets/css/responsible";

.finished {
  background-image: url("@/assets/img/during-bg.png");
}

.logo {
  height: 50px;
}

.tv-anim {
  animation-duration: 4s;
  animation-delay: 3s;
}

.time span {
  display: inline-block;
  width: 120px;
}

@include respond("xs") {
  .logo {
    height: 40px;
  }
  .time span {
    width: 70px;
  }

}

</style>
