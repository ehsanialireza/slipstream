<template>
  <div id="purchase"
       class="fixed w-full top-0 left-0 py-1 pb-3 z-50 h-screen sm:w-2/4 lg:w-1/4 flex flex-col items-start"
       :class="{close:!toggle}">
    <div class="header w-11/12 sm:w-full bg-gray mx-auto py-2 rounded-lg shadow-xl flex justify-center relative">
      <img class="object-contain" src="~/assets/img/most-haunted.svg">

      <div
        class="hidden sm:flex bg-black bg-opacity-90 items-center justify-between absolute rounded-r-lg py-2 px-2 -right-14 top-3 cursor-pointer"
        @click="toggle = !toggle">
        <div class="mr-1 flex" v-if="toggle">
          <img src="~/assets/img/toggle-left.svg">
          <img src="~/assets/img/toggle-left.svg">
        </div>

        <img src="~/assets/img/ticket.svg">

        <div class="toggle-icon ml-1 flex" v-if="!toggle">
          <img src="~/assets/img/toggle-right.svg">
          <img src="~/assets/img/toggle-right.svg">
        </div>

      </div>
    </div>

    <div
      class="content w-11/12 sm:w-full close mx-auto bg-blue px-3 py-2 flex flex-col justify-between flex-1 overflow-auto rounded-lg "
      :class="{purchased:step == 3}">

      <div class="livestream-details hidden py-2 text-white p-3 rounded-t-lg
					sm:block">
        <div class="text-2xl font-extrabold title">
          Livestream
        </div>

        <div class="description text-xs leading-3 pb-2 border-b-2 border-gray60 mb-2 sm:border-white">
          & 48 hours access to VOD
        </div>

        <div class="date-and-time leading-3 text-gray60">
          <div class="date text-xs font-bold mb-1">
            15th December
          </div>
          <div class="date text-xs font-medium leading-3">
            20:00 - 21:00 GMT
          </div>
        </div>
      </div>

      <!-- Desktop  -->
      <div
        class="purchase-box hidden sm:block rounded-lg bg-white p-3 text-black flex flex-col flex-1 justify-around">
        <template v-if="step !== 3">
          <div class="event-ticket">
            <div class="title text-xl font-extrabold mb-2">
              Event Ticket
            </div>

            <div class="options px-3.5 w-1/1">

              <div class="option flex items-center justify-between mb-1">
                <div class="option-title flex items-center text-xs">
                  <input type="radio" id="option-1" name="ticket-option" value="HTML">
                  <span class="ml-1">Livestream</span>
                </div>
                <div class="price text-xs font-bold">
                  $7.00
                </div>
              </div>

              <div class="option flex items-center justify-between mb-1">
                <div class="option-title flex items-center text-xs">
                  <input type="radio" id="option-2" name="ticket-option" value="CSS">
                  <span class="ml-1">Livestream & Vinyl</span>
                </div>
                <div class="price text-xs font-bold">
                  $9.00
                </div>
              </div>

              <div class="option flex items-center justify-between mb-1">
                <div class="option-title flex items-center text-xs">
                  <input type="radio" id="option-3" name="ticket-option" value="CSS">
                  <span class="ml-1">Livestream & CD</span>
                </div>
                <div class="price text-xs font-bold">
                  $8.00
                </div>
              </div>
            </div>
          </div>
          <div class="send-ticket mt-6">
            <div class="title text-xl font-extrabold">
              Send E-Ticket To
            </div>

            <input-component class="mx-2" v-model="email" label="email"/>

            <div class="note text-xs text-tiny mx-3.5 mb-2 text-gray60">
              This is the email we will send your e-ticket too.
            </div>
          </div>
          <div class="card-details">
            <div class="title text-xl mt-5 font-extrabold flex items-center justify-between">
              <div>
                Card Details
              </div>
              <div class="cards-logos">
                <img src="~/assets/img/Card.svg">
              </div>
            </div>

            <input-component class="mx-2" v-model="name" label="Full Name"/>
            <input-component class="mx-2" v-model="card" label="Card Number"/>

            <div class="flex">
              <input-component class="mx-2 flex-1" v-model="expireDate" label="Expiry Date"/>
              <input-component class="mx-2 flex-1" v-model="cvv" label="CVV"/>
            </div>
          </div>
        </template>
        <div class="step-3 font-medium text-sm" v-else>
          <div class="text-xl font-bold">
            Ticket Information
          </div>

          <div class=" px-2 py-3">
            Thank you for buying a streaming ticket. We hope you enjoy the show.
          </div>

          <div class=" px-2 py-3">
            Thank you for buying a streaming ticket. We hope you enjoy the show. When the countdown ends the show will
            begin on this page. If it doesn’t start after 30 secs, please manually refresh the page.
          </div>

          <div class=" px-2 py-3">
            <div class="font-bold">PLEASE NOTE</div>
            This is your own indivudual private link, sharing the link will prevent you from
          </div>
        </div>

      </div>

      <!--   Mobile   -->
      <div
        class="purchase-box-mobile sm:hidden rounded-lg bg-white p-3 mb-2 text-black mb-1 flex-1 flex flex-col justify-start">

        <div class="step-1" v-if="step === 1">

          <div class="livestream-details text-black pb-4">

            <div class="text-3xl font-extrabold">
              Livestream
            </div>

            <div class="description text-sm leading-3 pb-2 border-b-2 border-gray60 mb-2 sm:border-white">
              & 48 hours access to VOD
            </div>

            <div class="date-and-time leading-3">
              <div class="date text-sm font-bold">
                15th December
              </div>
              <div class="date text-sm font-medium leading-3">
                20:00 - 21:00 GMT
              </div>
            </div>
          </div>

          <div class="event-ticket">
            <div class="title text-2xl font-extrabold mb-4">
              Event Ticket
            </div>

            <div class="options px-3.5 w-1/1">

              <div class="option flex items-center justify-between mb-1">
                <div class="option-title flex items-center text-sm">
                  <input type="radio" id="option-1" name="ticket-option" value="HTML">
                  <span class="ml-1">Livestream</span>
                </div>
                <div class="price text-xs font-bold">
                  $7.00
                </div>
              </div>

              <div class="option flex items-center justify-between mb-1">
                <div class="option-title flex items-center text-sm">
                  <input type="radio" id="option-2" name="ticket-option" value="CSS">
                  <span class="ml-1">Livestream & Vinyl</span>
                </div>
                <div class="price text-xs font-bold">
                  $9.00
                </div>
              </div>

              <div class="option flex items-center justify-between mb-1">
                <div class="option-title flex items-center text-sm">
                  <input type="radio" id="option-3" name="ticket-option" value="CSS">
                  <span class="ml-1">Livestream & CD</span>
                </div>
                <div class="price text-xs font-bold">
                  $8.00
                </div>
              </div>
            </div>
          </div>

          <div class="next-step-btn flex justify-end" @click="step = 2">
            <div class="text-xl bg-blue text-white inline font-extrabold py-2 px-4 mt-14 mb-4 flex rounded-lg">
              <div>Card Details</div>
              <div class="flex ml-1">
                <img src="~/assets/img/toggle-right.svg">
                <img src="~/assets/img/toggle-right.svg">
              </div>
            </div>
          </div>
        </div>


        <div class="step-2" v-if="step === 2">

          <div class="next-step-btn flex items-center justify-start mb-3" @click="step = 1">
            <div class="btn text-lg bg-gray60 text-black inline font-extrabold py-2 px-4 flex rounded-lg">
              <div class="flex mr-1">
                <img src="~/assets/img/toggle-left-black.svg">
                <img src="~/assets/img/toggle-left-black.svg">
              </div>
              <div>Back</div>
            </div>

            <div class="text-sm overview ml-2">
              <div class=" text-black border-b font-bold">
                Overview
              </div>
              <div class="text-xs text-gray60">
                1 x Livestream
              </div>
            </div>
          </div>

          <div class="send-ticket mt-12">

            <div class="title text-xl font-extrabold">
              Send E-Ticket To
            </div>

            <input-component class="mx-2" v-model="email" label="email"/>

            <div class="note text-xs text-tiny mx-3.5 mb-2 text-gray60">
              This is the email we will send your e-ticket too.
            </div>
          </div>
          <div class="card-details">
            <div class="title text-xl mt-5 font-extrabold flex items-center justify-between">
              <div>
                Card Details
              </div>
              <div class="cards-logos">
                <img src="~/assets/img/Card.svg">
              </div>
            </div>

            <input-component class="mx-2" v-model="name" label="Full Name"/>
            <input-component class="mx-2" v-model="card" label="Card Number"/>

            <div class="flex">
              <input-component class="mx-2 flex-1" v-model="expireDate" label="Expiry Date"/>
              <input-component class="mx-2 flex-1" v-model="cvv" label="CVV"/>
            </div>
          </div>
        </div>


        <div class="step-3 font-medium" v-if="step === 3">
          <div class="text-xl font-bold">
            Ticket Information
          </div>

          <div class=" px-2 py-3">
            Thank you for buying a streaming ticket. We hope you enjoy the show.
          </div>

          <div class=" px-2 py-3">
            Thank you for buying a streaming ticket. We hope you enjoy the show. When the countdown ends the show will
            begin on this page. If it doesn’t start after 30 secs, please manually refresh the page.
          </div>

          <div class=" px-2 py-3">
            <div class="font-bold">PLEASE NOTE</div>
            This is your own indivudual private link, sharing the link will prevent you from
          </div>
        </div>

      </div>

      <div class="border-b-2 border-dashed border-white my-6"></div>

      <div v-if="step === 1" @click="step = 3"
           class="w-full bg-gray60 sm:bg-red text-xl rounded-lg text-center font-bold py-2 cursor-pointer">
        Buy Now $7.00
      </div>

      <div v-if="step === 2" @click="step = 3"
           class="w-full bg-red text-xl rounded-lg text-center font-bold py-2 cursor-pointer">
        Buy Now $7.00
      </div>

      <div v-if="step === 3"
           class="flex items-center justify-center w-full bg-green text-lg rounded-lg text-center font-bold py-2 mb-4 cursor-pointer">
        <div class="mr-1"><img src="~/assets/img/check.svg"></div>
        <div>LICENSE CODE VERIFIED</div>
      </div>

      <div class="accept-conditions text-center text-tiny py-1 font-medium mb-2"
           v-if="step !== 3">
        By click by now you are accepting our terms and conditions
      </div>

      <div class="bottom-logo flex justify-center py-1 sm:hidden">
        <img src="~/assets/img/sidebar/logo.png">
      </div>

    </div>

  </div>
</template>

<script>

import inputComponent from '~/components/Input.vue'

export default {

  components: {
    inputComponent
  },

  data() {
    return {
      toggle: true,

      email: '',
      name: '',
      card: '',
      expireDate: '',
      cvv: '',

      step: 1,
    }
  },
}
</script>

<style lang="scss" scoped>

@import "~/assets/css/_responsible";

#purchase {
  transition: 0.5s all;
  max-width: 999px;

  .content {
    transition: 0.5s all;

    &.purchased {
      background-color: #1E1E1E;

    }
  }

  .header {
    height: 60px;

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


</style>
