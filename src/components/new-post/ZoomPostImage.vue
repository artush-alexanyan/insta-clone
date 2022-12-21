<template>
    <div class="zoom-feature">
        <div class="absolute flex items-center justify-center left-14 bottom-9 w-40 h-8 shadow-lg rounded-xl bg-slate-500" v-show="zoomItem">
            <input 
                type="range" 
                name="" 
                id="" 
                min="100" 
                max="150" 
                class="outline-0" 
                v-model="zoomRange"
                @input="$emit('update:modelValue', $event.target.value)"
            >
        </div>
        <button class="rounded-full w-8 h-8 bg-black hover:bg-gray-600 flex items-center justify-center shadow-xl text-white" @click="zoomItem = !zoomItem">
            <svg 
                aria-label="Select zoom" 
                class="_ab6-" 
                color="#ffffff" 
                fill="#ffffff" 
                height="16" 
                role="img" 
                viewBox="0 0 24 24" 
                width="16"
            >
                <path d="m22.707 21.293-4.825-4.825a9.519 9.519 0 1 0-1.414 1.414l4.825 4.825a1 1 0 0 0 1.414-1.414ZM10.5 18.001a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Zm3.5-8.5h-2.5v-2.5a1 1 0 1 0-2 0v2.5H7a1 1 0 1 0 0 2h2.5v2.5a1 1 0 0 0 2 0v-2.5H14a1 1 0 0 0 0-2Z"></path>
            </svg>
        </button>
    </div>    
</template>

<script>
import { ref } from 'vue'

export default {
props: {

},
setup () {

    const zoomRange = ref(0)
    const zoomItem = ref(false)
    return {
        zoomRange,
        zoomItem
    }

}

}
</script>