<template>
	<div id="sidebar" 
		class="fixed w-9/12 top-0 right-0 max-h-screen	 py-1 pb-3 z-50 h-screen sm:w-2/4 lg:w-1/4 flex flex-col" 
		:class="{close:!toggle}">

		<div class="header bg-graydark w-full py-2 rounded-lg shadow-xl flex justify-center relative">

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

			<div class="tabs w-full  flex items-center justify-center">
				<div class="tab shadow-xl  bg-white text-black py-3 w-3/12 rounded-lg flex items-center justify-center cursor-pointer">
					<img src="~/assets/img/sidebar/chat.png">
					<span class="text-xs font-bold ml-1">chat</span>
				</div>	
			</div>
		</div>

	<div class="messages -mt-1 w-full m-auto
				 px-4 py-2 flex-1 flex flex-col justify-end
				 rounded-b-3xl w-11/12
				 " 
	>
		<div class="title text-2xl font-bold absolute top-2">
			Chat
		</div>

		<div class="message my-3">
			<div class="name text-sm font-meduim text-gray60 italic pb-1">
				@Dan:
			</div>

			<div class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
				Message text
			</div>
		</div>
		<div class="message my-3">
			<div class="name text-sm font-meduim text-gray60 italic pb-1">
				@Dan:
			</div>

			<div class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
				Message text
			</div>
		</div>
		<div class="message my-3">
			<div class="name text-sm font-meduim text-gray60 italic pb-1">
				@Dan:
			</div>

			<div class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
				Message text
			</div>
		</div>
		<div class="message my-3">
			<div class="name text-sm font-meduim text-gray60 italic pb-1">
				@Dan:
			</div>

			<div class="message-text text-sm mt-3 font-meduim text-gray60 bg-black bg-opacity-90 py-2 px-4 inline rounded-3xl">
				Message text
			</div>
		</div>
		<div class="message my-message my-3 text-right">
			<div class="name text-sm font-meduim text-gray60 italic pb-1">
				@Dan:
			</div>

			<div class="my-message-text text-sm mt-3 font-meduim text-gray60 bg-white bg-opacity-90 py-2 px-4 inline rounded-3xl">
				Message text
			</div>
		</div>
	</div>

	<div class="message-box rounded-2xl -mt-2 py-4 px-4">
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

		.messages{
			transition: 0.5s all;
			background: rgba(31, 31, 31, 0.5);
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			backdrop-filter: blur(20px);
		}

		.header{
			height: 70px;
		}

		.message-box{
			background-color: #333333;
		}

		.message-text{
			background-color: #1e1e1e;
			position: relative;

			&:after{
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

		.message-box{

			.text-box{
				background: rgba(118, 118, 128, 0.24);
				border-radius: 15px;
				padding: 10px 15px;
				textarea{
					resize: none;
					border: none;
					outline: none !important;
					margin-left: 10px;
					flex-grow: 1;
					background-color: transparent;


					&:focus{
						border: none;
					}
				}

				.emoji{
					margin-top: 5px;
				}				
			}

		}

		.messages-box{
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