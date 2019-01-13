<template>
    <div>
        <input type="text" :value='inputValue' @input='handleInput' @blur="handleBlur($event)" @change="handleChange($event)">
    </div>
</template>

<script>
    export default {
        props: {
            value : {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                inputValue: this.value
            }
        },
        methods: {
            handleInput(e) {
                this.inputValue = e.target.value
                this.$emit('input',e.target.value)
            },
            handleBlur(e) {
                this.inputValue = e.target.value
                this.$emit('input',e.target.value)
            },
            handleChange(e) {
                this.inputValue = e.target.value
                this.$emit('input',e.target.value)
            }
        },
        watch: {
            value(newValue) {
                this.inputValue = newValue
            }
        },
    }
</script>

<style scoped>

</style>