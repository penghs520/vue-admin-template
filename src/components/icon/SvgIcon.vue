<template>
    <div>
        <svg :style="{ width: width, height: height }">
            <use :xlink:href="`#icon-${name}`" :fill="color"></use>
        </svg>
    </div>
</template>

<script setup lang='ts'>
defineProps({
    name: String,
    color: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '16px'
    },
    height: {
        type: String,
        default: '16px'
    }
})

</script>

<style scoped></style>