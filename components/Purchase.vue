<template>
	<div id="purchase" 
		class="fixed w-9/12 top-0 left-0 py-1 pb-3 z-50 h-screen sm:w-2/4 lg:w-1/4 flex flex-col" 
		:class="{close:!toggle}">
		<div class="header bg-graydark w-full py-2 rounded-lg shadow-xl flex justify-center relative">
			<img src="~/assets/img/most-haunted.svg">

			<div 
			class="toggle-btn bg-black bg-opacity-90 flex 
			items-center justify-between absolute 
			rounded-r-lg py-2 px-2 -right-14 top-5 cursor-pointer"
			@click="toggle = !toggle"
			>
			<div class="toggle-icon mr-1 flex" v-if="toggle">
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

	<div class="content close overflow-y-scroll w-11/12 m-auto bg-bluedark px-4 pb-2 flex-1 flex flex-col justify-between rounded-lg sm:overflow-y-hidden w-11/12" 
		 ref="content">
		<div class="text-2xl font-bold title pt-2">
			Livestream
		</div>

		<div class="description text-xs leading-3">
			& 48 hours access to VOD
		</div>

		<div class="date-and-time mt-5">
			<div class="date text-xs font-bold">
				15th December
			</div>
			<div class="date text-xs font-medium leading-6">
				20:00 - 21:00 GMT
			</div>
		</div>

		<div class="purchase-box rounded-lg bg-white p-3 mb-2 text-black mb-1 flex-1 flex flex-col justify-around">
			<div class="event-ticket">
				<div class="title text-sm font-bold">
					Event Ticket
				</div>

				<div class="options px-3.5 w-1/1">

					<div class="option flex items-center justify-between mb-1">
						<div class="option-title flex items-center text-xs">
							<input type="radio" class="mr-2">
							<span>Livestream</span>
						</div>
						<div class="price text-xs font-bold">
							$7.00
						</div>
					</div>

					<div class="option flex items-center justify-between mb-1">
						<div class="option-title flex items-center text-xs">
							<input type="radio" class="mr-2">
							<span>Livestream & Vinyl</span>
						</div>
						<div class="price text-xs font-bold">
							$9.00
						</div>
					</div>

					<div class="option flex items-center justify-between mb-1">
						<div class="option-title flex items-center text-xs">
							<input type="radio" class="mr-2">
							<span>Livestream & CD</span>
						</div>
						<div class="price text-xs font-bold">
							$8.00
						</div>
					</div>
				</div>
			</div>

			<div class="send-ticket">

				<div class="title text-sm font-bold">
					Send E-Ticket To
				</div>

				<div class="email text-xs px-3.5 text-gray">
					j.hancock@mosthaunted.co.uk
				</div>

				<div class="note text-xs text-tiny mx-3.5 mb-2 text-gray60 border-t border-gray border-opacity-40">
					This is the email we will send your e-ticket too. 
				</div>
			</div>
			<div class="card-details">
				<div class="title text-sm mt-5 font-bold flex items-center justify-between">
					<div>
						Card Details
					</div>
					<div class="cards-logos">
						<img src="~/assets/img/Card.svg">
					</div>
				</div>

				<div class="detail mx-3.5 mt-1 border-b-2 border-gray border-opacity-10">
					<div class="detail-title text-xs text-gray60">
						Full Name
					</div>
					<div class="name text-xs text-gray py-1">
						John Hancock
					</div>
				</div>

				<div class="detail mx-3.5 mt-1 border-b-2 border-gray border-opacity-10">
					<div class="detail-title text-xs text-gray60">
						Card Number
					</div>
					<div class="name text-xs text-gray py-1">
						0000 0000 0000 0000
					</div>
				</div>

				<div class="expire-date mt-1 flex items-center">

					<div class="detail mx-3.5 border-b-2 border-gray border-opacity-10">
						<div class="detail-title text-xs text-gray60">
							Expiry Date
						</div>
						<div class="name text-xs text-gray py-1">
							01/21
						</div>
					</div>

					<div class="detail mx-3.5 border-b-2 border-gray border-opacity-10">
						<div class="detail-title text-xs text-gray60">
							CVV
						</div>
						<div class="name text-xs text-gray py-1">
							123
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="buy-btn w-full bg-red text-1xl rounded-lg text-center font-bold py-2 cursor-pointer">
			Buy Now $7.00
		</div>	

		<div class="accept-conditions text-tiny py-1 font-medium">
			By click by now you are accepting our terms and conditions
		</div>

	</div>

</div>
</template>

<script>
	export default{
		data(){
			return{
				toggle: false,
			}
		},
	}
</script>

<style lang="scss" scoped>

	@import "~/assets/css/_responsible";

	#purchase{
		transition: 0.5s all;
		max-width: 999px;

		.content{
			transition: 0.5s all;
		}

		.header{
			height: 70px;
		}

		&.close{
			max-width: 0;

			.content{
				padding-right: 0;
				padding-left: 0;
				opacity: 0;
			}
		}
	}

	@include respond("mobiles"){

	}

</style>