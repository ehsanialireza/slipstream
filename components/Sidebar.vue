<template>
	<div id="sidebar" 
		class="fixed w-9/12 top-0 right-0 py-1 pb-3 z-50 h-screen sm:w-2/4 lg:w-1/4 flex flex-col" 
		:class="{close:!toggle}">

		<div class="header bg-bluedark w-full py-2 rounded-lg shadow-xl flex justify-center relative">

			<div 
			class="toggle-btn bg-black bg-opacity-90 flex 
			items-center justify-between absolute 
			rounded-l-lg py-2 px-2 -left-14 top-5 cursor-pointer"
			@click="toggle = !toggle"
			>
				<div class="toggle-icon mr-1 flex" v-if="toggle">
					<img src="~/assets/img/toggle-left.svg">
					<img src="~/assets/img/toggle-left.svg">
				</div>

				<img src="~/assets/img/sidebar/phone.svg">

				<div class="toggle-icon ml-1 flex" v-if="!toggle">
					<img src="~/assets/img/toggle-right.svg">
					<img src="~/assets/img/toggle-right.svg">
				</div>

			</div>

			<div class="tabs w-full  flex items-center justify-between">
				<div class="tab shadow-xl  bg-black flex-1 mx-2 py-2 px-1 rounded-lg flex items-center justify-center cursor-pointer">
					<img src="~/assets/img/sidebar/info.svg">
					<span class="text-xs font-bold ml-1">Info</span>
				</div>

				<div class="tab shadow-xl  bg-black flex-1  py-2 px-1 rounded-lg flex items-center justify-center cursor-pointer">
					<img src="~/assets/img/sidebar/Tee.svg">
					<span class="text-xs font-bold ml-1">Merch Store</span>
				</div>	

				<div class="tab shadow-xl bg-black mx-2 flex-1 py-2 px-1 rounded-lg flex items-center justify-center cursor-pointer">
					<img src="~/assets/img/sidebar/setting.svg">
					<span class="text-xs font-bold ml-1">Settings</span>
				</div>	
			</div>
		</div>

	<div class="content -mt-1 overflow-y-scroll w-full m-auto
				 bg-bluedark px-4 py-2 flex-1 flex flex-col justify-center
				 justify-between rounded-b-3xl sm:overflow-y-hidden w-11/12" 
		 >

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
		 			 Vestibulum cras risus ipsum commodo interdum aenean tellus. Quis purus vel velit, elementum rhoncus pulvinar leo cursus. Sed ipsum pharetra lobortis lectus. Magna morbi iaculis amet, consectetur sollicitudin in varius. Tincidunt malesuada sed tortor aliquam ultrices.
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
		 			 Vestibulum cras risus ipsum commodo interdum aenean tellus. Quis purus vel velit, elementum rhoncus pulvinar leo cursus. Sed ipsum pharetra lobortis lectus. Magna morbi iaculis amet, consectetur sollicitudin in varius. Tincidunt malesuada sed tortor aliquam ultrices.
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
	</div>

	<div class="support-box rounded-2xl bg-bluedark -mt-2 py-4 px-4">
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

	#sidebar{
		transition: 0.5s all;
		max-width: 999px;

		.content{
			transition: 0.5s all;
			background: rgba(0, 1, 102, 0.5);
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			backdrop-filter: blur(20px);
		}

		.header{
			height: 70px;
		}

		.support{
			background-color: #20326c;
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