<template>
  <div id="chat" class="flex flex-col h-full">

    <div class="title text-2xl font-bold p-2">
      Chat
    </div>

    <div class="messages w-11/12 sm:w-full mx-auto overflow-auto px-4 py-2 rounded-b-3xl h-full ">


      <div class="message my-3">
        <div class="name text-sm font-meduim text-gray60 italic pb-1">
          @Dan:
        </div>
        <div
          class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
          Message text
        </div>
      </div>

      <div class="message my-3">
        <div class="name text-sm font-meduim text-gray60 italic pb-1">
          @Dan:
        </div>
        <div
          class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
          Message text
        </div>
      </div>

      <div class="message my-3">
        <div class="name text-sm font-meduim text-gray60 italic pb-1">
          @Dan:
        </div>
        <div
          class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
          Message text
        </div>
      </div>

      <div class="message my-3">
        <div class="name text-sm font-meduim text-gray60 italic pb-1">
          @Dan:
        </div>
        <div
          class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
          Message text
        </div>
      </div>

      <div class="message my-3">
        <div class="name text-sm font-meduim text-gray60 italic pb-1">
          @Dan:
        </div>
        <div
          class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
          Message text
        </div>
      </div>

      <div class="message my-3">
        <div class="name text-sm font-meduim text-gray60 italic pb-1">
          @Dan:
        </div>
        <div
          class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
          Message text
        </div>
      </div>

      <div class="message my-3">
        <div class="name text-sm font-meduim text-gray60 italic pb-1">
          @Dan:
        </div>
        <div
          class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
          Message text
        </div>
      </div>

      <div class="message my-3">
        <div class="name text-sm font-meduim text-gray60 italic pb-1">
          @Dan:
        </div>
        <div
          class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
          Message text
        </div>
      </div>

      <div class="message my-3">
        <div class="name text-sm font-meduim text-gray60 italic pb-1">
          @Dan:
        </div>
        <div
          class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
          Message text
        </div>
      </div>

      <div class="message my-3">
        <div class="name text-sm font-meduim text-gray60 italic pb-1">
          @Dan:
        </div>
        <div
          class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
          Message text
        </div>
      </div>

      <div class="message my-3 text-right">
        <div class="name text-sm font-meduim text-gray60 italic pb-1 pr-2">
          @Dan:
        </div>
        <div class="text-black text-sm mt-3 font-meduim bg-white
           bg-opacity-90 py-2 px-4 inline rounded-3xl">
          Message text
        </div>
      </div>

    </div>

    <div class="message-box rounded-2xl -mt-2 py-4 px-4 flex flex-col justify-end">
      <hr class="border-t-2 border-white my-3">
      <div class="text-box flex">
        <div class="emoji">
          <img src="~/assets/img/sidebar/smile.svg">
        </div>
        <textarea placeholder="Type your message">

			</textarea>
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

#chat {
  transition: 0.5s all;
  max-width: 999px;

  .title{
    position: relative;
    &:after{
      content: '';
      display: block;
      width: 100%;
      height: 100px;
      position: absolute;
      z-index: 10;
      top: 40px;
      left: 0;
      background: linear-gradient(180deg, rgba(31, 64, 145, .6) 0%, rgba(51, 51, 51, 0) 100%);

    }
  }


  .messages {
    transition: 0.5s all;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

}

@include respond("mobiles") {

}

</style>
