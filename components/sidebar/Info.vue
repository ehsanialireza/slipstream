<template>
  <div>
    <div class="text-2xl font-bold">
      Information
    </div>

    <div class="information px-2 flex-1 flex flex-col">
      <div class="text-1xl font-bold flex flex-col leading-4 py-1">
        <span>You, Me & OMD -</span>
        <span>Live at O2 Arena</span>
      </div>

      <div class="py-1">
        <div class="text-xs font-bold">
          ABOUT THE SHOW
        </div>

        <div class="text-xs">
          Vestibulum cras risus ipsum commodo interdum aenean tellus. Quis purus vel velit, elementum rhoncus pulvinar
          leo cursus. Sed ipsum pharetra lobortis lectus. Magna morbi iaculis amet, consectetur sollicitudin in
          varius. Tincidunt malesuada sed tortor aliquam ultrices.
        </div>
      </div>

      <div class="py-1 flex-1 flex-1">
        <div class="leading-4">
          <span class="text-xs font-bold">BROATCAST DATE: </span>
          <span class="text-xs font-meduim">09/01/21 </span>
        </div>
        <div class="leading-4">
          <span class="text-xs font-bold">BROATCAST DATE: </span>
          <span class="text-xs font-meduim">09/01/21 </span>
        </div>
        <div class="leading-4">
          <span class="text-xs font-bold">BROATCAST DATE: </span>
          <span class="text-xs font-meduim">09/01/21 </span>
        </div>
        <div class="leading-4">
          <span class="text-xs font-bold">BROATCAST DATE: </span>
          <span class="text-xs font-meduim">09/01/21 </span>
        </div>

      </div>

      <p class="py-2">
      <div class="text-xs font-bold">
        ABOUT THE SHOW
      </div>

      <div class="text-xs">
        Vestibulum cras risus ipsum commodo interdum aenean tellus. Quis purus vel velit, elementum rhoncus pulvinar
        leo cursus. Sed ipsum pharetra lobortis lectus. Magna morbi iaculis amet, consectetur sollicitudin in varius.
        Tincidunt malesuada sed tortor aliquam ultrices.
      </div>
      </p>

      <hr class="border-t-2 border-white my-3">

      <div class="social-medias">
        <div class="text-sm font-bold">
          BAND SOCIALS
        </div>

        <div class="socials flex items-center justify-start py-2">
          <a href="#">
            <img src="~/assets/img/sidebar/Twitter.svg">
          </a>
          <a href="#" class="mx-4">
            <img src="~/assets/img/sidebar/Instagram.svg">
          </a>
          <a href="#">
            <img src="~/assets/img/sidebar/Facebook.svg">
          </a>
        </div>
      </div>
    </div>

    <div class="support-box rounded-2xl bg-blue -mt-2 py-4 px-4">
      <hr class="border-t-2 border-white my-3">
      <div class="support py-2 px-4 rounded-3xl">

        <div class="text-sm font-bold">
          Support
        </div>
        <div class="text-xs font-meduim">
          support@slipstreamtv.co.uk
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    }
  },
}
</script>

<style lang="scss" scoped>

@import "~/assets/css/_responsible";

#sidebar {
  transition: 0.5s all;
  max-width: 999px;

  .messages {
    transition: 0.5s all;
    background: rgba(31, 31, 31, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
  }

  .header {
    height: 70px;
  }

  .message-box {
    background-color: #333333;
  }

  .message-text {
    background-color: #1e1e1e;
    position: relative;

    &:after {
      content: '';
      width: 17px;
      height: 15px;
      background-color: #1e1e1e;
      position: absolute;
      left: -1px;
      bottom: 2px;
      border-radius: 5px 5px 5px 2px;
      transform: rotate(30deg);
    }
  }

  .message-box {

    .text-box {
      background: rgba(118, 118, 128, 0.24);
      border-radius: 15px;
      padding: 10px 15px;

      textarea {
        resize: none;
        border: none;
        outline: none !important;
        margin-left: 10px;
        flex-grow: 1;
        background-color: transparent;


        &:focus {
          border: none;
        }
      }

      .emoji {
        margin-top: 5px;
      }
    }

  }

  .messages-box {
    border: 1px solid blue;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: scroll;
  }

  .my-message-text {
    color: #000;
  }

  &.close {
    max-width: 0;

    .content {
      padding-right: 0;
      padding-left: 0;
      opacity: 0;
    }
  }


}

@include respond("mobiles") {

}

</style>
