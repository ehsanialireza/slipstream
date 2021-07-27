
<template>

  <div class="form-group mt-4" 
      :class="{'focused' : isFocused,
			   'bordered':bordered,
			   'form-error' : error,
			   }">

    <template>
      <label class="label text-xs text-gray60">{{ label }}</label>

      <input type="text"
             class="input text-xs"
             @keyup.enter="enterInput"
             @focus="fucused"
             @blur="blured"
             :value="value"
             v-on:input="$emit('input', $event.target.value)">

      <div class="error" v-if="error.length">{{error}}</div>
    </template>

  </div>

</template>
<script>
  export default {
    props: {

      type: {
        type: String
      },
      label: {
        type: String,
      },
      value: {},
      error: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        isFocused: false,
        bordered: false,
        inputValue: '',
      }
    },
    methods: {
      fucused: function () {
        this.isFocused = true;
        this.bordered = true;
      },
      blured: function () {
        this.bordered = false;
        if (!this.$props.value) {
          this.isFocused = false;
        }
      },

      phoneNumberInput: function(event){
        let phoneInput = event.target;
        let phoneInputValue = phoneInput.value;
        let phoneInputValueLength = phoneInputValue.length;
        let phoneInputValueLastTwo = phoneInputValue.slice(Math.max(phoneInputValue.length - 3, 0));
        // allow only numbers
        if (!(event.key > -1 && event.key < 10) && !(event.key === "Backspace")) {
          event.preventDefault();
        }
        if (event.key === "Backspace"){
          // if end of string is white space,replaces white spaces and the last character,
          if (phoneInputValueLastTwo == "   "){
            event.target.value = phoneInputValue.replace(/\s+\S*$/,'');
          }
          event.stopPropagation();
        }
        else if ((phoneInputValueLength == 4) || (phoneInputValueLength == 10)){
          event.target.value = phoneInputValue + "   ";
        }
      },
    },

    created() {
      if (this.$props.value)
        this.isFocused = true;
    },

    watch: {
      value: function () {
        if (this.$props.value)
          this.isFocused = true;
      }
    }
  }
</script>

<style lang="scss" scoped>

	.form-group{
		border-bottom: 1px solid #bdbdbd;
		height: 30px;
		display: flex;
		position: relative;
		transition: 0.4s all;

		input{
			width: 100%;
			outline: none;
			padding-left: 10px;
			position: absolute;
			height: 100%;
			z-index: 20;
			background-color: transparent;

			&:focuse{
				border: none;
			}
		}

		label{
			position: absolute;
			top: 4px;
			left: 5px;
			transition: 0.4s all;
			z-index: 10;
		}

		&.focused{
			

			.label{
				top: -10px;
				
			}
		}
	}

</style>
