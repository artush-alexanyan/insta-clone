<template>
    <div class="zoom-feature" ref="el">
        <Transition>
            <div 
                class="absolute flex items-center justify-center left-14 bottom-9 w-40 h-8 shadow-lg rounded-xl bg-slate-800" 
                v-show="zoomItem"
            >
                <input 
                    type="range" 
                    name="" 
                    id="" 
                    min="100" 
                    max="180" 
                    class="slider outline-0 h-[1px] text-black" 
                    v-model="zoomRange"
                    @input="$emit('update:modelValue', $event.target.value)"
                >
            </div>
        </Transition>
        <button 
            class="rounded-full w-8 h-8 bg-black hover:bg-gray-600 flex items-center justify-center shadow-xl text-white" 
            @click="zoomItem = !zoomItem"
        >
            <SelectZoomSVG />
        </button>
    </div>    
</template>

<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import SelectZoomSVG from '@/svgs/SelectZoomSVG.vue'

export default {
props: {

},
components: {
    SelectZoomSVG
},
setup () {

    const el = ref(null)
    const zoomRange = ref(0)
    const zoomItem = ref(false)

    onClickOutside(el, () =>  {
        zoomItem.value = false      
    })   

    return {
        el,
        zoomRange,
        zoomItem
    }

}

}
</script>

<style>
.slider {
  -webkit-appearance: none;
  height: 1px;
  background-color: rgb(200, 200, 200);
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: black;
}
</style>