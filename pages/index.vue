<template>
  <div class="home w-full h-full flex flex-col justify-between items-center bg-center bg-cover bg-no-repeat ">

    <header class="container flex justify-between pt-4">
      <img class="logo" src="@/assets/img/logo.png" alt="logo">

      <div class="playing p-4 bg-black rounded-lg text-right">
        <h3 class="text-2xl sm:text-4xl font-bold mb-3 ml-2 sm:ml-4">Now Playing</h3>
        <ul class="">
          <li class="mb-2 cursor-pointer">
            <p>Raleigh Richie<br>
              - Live at O2
            </p>
          </li>
        </ul>

        <a href="#"
           class="bg-red rounded-xl p-3 font-bold block mx-2 sm:mx-4 hover:opacity-80 duration-300 mt-10 text-center ">
          Watch Event
          <img src="@/assets/img/link.svg" alt="open link" class="inline-block ml-1">
        </a>
      </div>
    </header>

    <h1 class="sm:flex-1 font-bold text-left text-5xl md:text-8xl pb-6">
      This is<br>
      Slipstream<span class="text-red animate-pulse tv-anim">TV</span>
    </h1>

    <footer class="container flex justify-between py-8">
      <div>
        <a href="#" class="hover:opacity-70 duration-300 mr-4">Enquiries</a>
        <a href="#" class="hover:opacity-70 duration-300">Support</a>
      </div>

      <div class="flex">
        <a class="mr-4" href="http://instagram.com/SlipstreamTV"><img class="hover:opacity-70 duration-300"
                                                                      src="@/assets/img/Instagram.svg"
                                                                      alt="Instagram logo"></a>
        <a href="https://twitter.com/SlipstreamTV_"><img class="hover:opacity-70 duration-300"
                                                         src="@/assets/img/Twitter.svg" alt="Twitter logo"></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

}
</script>
<style lang="scss" scoped>
@import "@/assets/css/responsible";

.home {
  background-image: url("@/assets/img/home-bg.jpg");
}

.logo {
  height: 50px;
}
.tv-anim{
  animation-duration: 4s;
  animation-delay: 3s;
}

@include respond("xs") {
  .logo {
    height: 40px;
  }

}

</style>
