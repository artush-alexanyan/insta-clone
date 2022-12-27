<template>
    <div class="crop-post-image" ref="el">
        <Transition>
            <div class="h-52 w-28 bg-slate-800 shadow-lg rounded-lg absolute bottom-16" v-show="cropItem">
                <ul class="h-52 grid">
                    <li 
                        class="py-2 px-3 flex items-center border-b"
                        v-for="(crop , index) in cropList"
                        :key="index"
                    >
                        <button 
                            class="flex items-center" 
                            @click="$emit('changeCrop', index, crop.cropSizeClass)"
                        >
                            <span 
                                class="mr-3" 
                                :class="currentCrop === index ? 'text-white' : 'text-gray-400'"
                            >
                                {{ crop.title  }}
                            </span>
                            <svg 
                                :aria-label="crop.svg_icon.aria_label" 
                                :class="crop.svg_icon.class" 
                                :color="currentCrop === index ? 'white' : '#8e8e8e'" 
                                :fill="currentCrop === index ? 'white' : '#8e8e8e'" 
                                :height="crop.svg_icon.height" 
                                :role="crop.svg_icon.role" 
                                :viewBox="crop.svg_icon.viewBox" 
                                :width="crop.svg_icon.width"
                            >

                                    <path :d="crop.svg_paths.d_1"></path>
                                    <path :d="crop.svg_paths.d_2"></path>
                                    <path 
                                        :d="crop.svg_paths.d_3"
                                        :fill="crop.svg_path_props.fill" 
                                        :stroke="crop.svg_path_props.stroke" 
                                        :stroke-linecap="crop.svg_path_props.stroke_linecap" 
                                        :stroke-linejoin="crop.svg_path_props.stroke_linejoin" 
                                        :stroke-width="crop.svg_path_props.stroke_width"
                                    >
                                    </path>
                            </svg>                                        
                        </button>
                    </li>
                </ul>
            </div>
        </Transition>
        <button 
            class="rounded-full w-8 h-8 bg-black hover:bg-gray-600 flex items-center justify-center shadow-xl text-white mr-4"
            @click="cropItem = !cropItem"
        >
            <SelectCropSVG />
        </button>        
    </div>    
</template>

<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import SelectCropSVG from '@/svgs/SelectCropSVG.vue'

export default {

components: {
    SelectCropSVG
}, 
props: {
    cropList: {
        type: Array,
        required: false
    },
    currentCrop: {
        type: Number,
        required: false
    }
},
setup () {

    const el = ref(null)
    const showSelectArea = ref(false)
    const cropItem = ref(false)

    onClickOutside(el, () =>  {
        cropItem.value = false      
    })   

    return {
        el,
        showSelectArea,
        cropItem,
    }

}

}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>