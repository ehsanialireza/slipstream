<template>
  <div class="onboard w-full h-full flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat ">

    <purchase></purchase>
    <sidebar></sidebar>

    <div class="bg-black bg-opacity-80 pt-6 pb-10 px-10 rounded-lg">
      <h4 class="text-center mb-4">Livestream starts in</h4>
      <div class="flex flex-col justify-center items-center">
        <p class="time text-red text-4xl sm:text-6xl font-bold tracking-widest flex justify-between">
          <span>{{ days }}: </span>
          <span>{{ hours }}:</span>
          <span>{{ minutes }}:</span>
          <span>{{ seconds }}</span>
        </p>
        <div class="flex w-full mt-4 text-xs">
          <span class="flex-1 text-center">Days</span>
          <span class="flex-1 text-center">Hours</span>
          <span class="flex-1 text-center">Minutes</span>
          <span class="flex-1 text-center pr-6">Seconds</span>
        </div>
      </div>
    </div>
    <div class="font-bold bg-red rounded-lg py-3 px-4 cursor-pointer transform -translate-y-5">ALREADY PURCHASED?</div>

  </div>
</template>

<script>

import purchase from '~/components/Purchase.vue'
import sidebar from '~/components/chat.vue'

export default {

  components: {
    purchase,
    sidebar
  },

  data() {
    return {
      liveTimestamp: 0,
      diffTime: 0,
      timer: 0,
    }
  },

  mounted() {
    this.liveTimestamp = Date.now() + 8640000;
    this.diffTime = (this.liveTimestamp - Date.now()) / 1000;
    this.timer = setInterval(() => {
       this.diffTime--;
        if (this.diffTime <= 0) {
            clearInterval(this.timer);
        }
    }, 1000)

  },
  computed: {
    days: function () {
      let d = Math.floor(this.diffTime / 86400);
      return d < 10 ? '0' + d : d;
    },
    hours: function () {
      let d = Math.floor((this.diffTime - (86400 * parseInt(this.days))) / 3600);
      return d < 10 ? '0' + d : d;
    },
    minutes: function () {
      let d = Math.floor((this.diffTime - (86400 * parseInt(this.days)) - (3600 * parseInt(this.hours))) / 60);
      return d < 10 ? '0' + d : d;
    },
    seconds: function () {
      let d = Math.floor((this.diffTime - (86400 * parseInt(this.days)) - (3600 * parseInt(this.hours)) - (60 * parseInt(this.minutes))));
      return d < 10 ? '0' + d : d;
    },
  },

}
</script>
<style lang="scss" scoped>
@import "@/assets/css/responsible";

.onboard {
  background-image: url("@/assets/img/onboarding-bg.png");
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
