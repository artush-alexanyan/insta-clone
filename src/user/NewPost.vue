<template>
    <div class="new_post font-serif h-screen">
        <div 
            class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 xl:w-1/3 lg:w-2/5 md:w-3/4 w-[90%]  md:h-3/4 h-1/2 rounded-xl bg-white z-0 shadow-2xl"
            v-if="!showSelectArea"
        >
            <div class="border-b border-b-gray-100 py-3 font-bold">
                <h6 class="text-center">
                    Create new post
                </h6>
            </div>            
            <div class="flex items-center justify-center h-full">
                <div>
                    <MediaSelectSVG />
                    <p class="text-xl text-gray-500 my-7">Drag photos and videos here</p>       
                    <div class="flex flex-col items-center">
                        <button 
                            class="rounded-md bg-blue-500 text-white px-3 py-1" 
                            @click="selectFile"
                        >
                            Select from computer
                        </button>  
                        <input 
                            type="file" 
                            @change="onSelect" 
                            class="hidden" 
                            ref="inp"
                            accept="image/*"
                        >
                    </div>           
                </div>            
            </div>
        </div>
        <div 
            class="fixed  overflow-hidden top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  xl:w-1/3 lg:w-2/5 md:w-3/4 w-[90%]  md:h-3/4 h-1/2 rounded-xl bg-white z-0 shadow-2xl" 
            v-else
        >
        
            <div class="border-b border-b-gray-100 flex irems-center justify-between py-3">
                <button 
                    class="ml-4" 
                    @click="showSelectArea = false"
                >
                    <BackArrowSVG />                                           
                </button>
                <h6 class="font-bold">
                    Crop
                </h6>
                <button class="text-blue-600 font-bold mr-4">
                    Next
                </button>
            </div>   

            <div 
                class="flex p-2 justify-center mx-auto w-full h-full overflow-hidden" 
                :class="currentCropSize != '' ? 'bg-slate-800' : ''"
            >
                <img 
                    :src="selectedFiles" 
                    :class="currentCropSize" 
                   
                    :style="`transform: scale(${rangeScale}); transition: transform .2s;`" 
                    alt="selected-image"
                >
            </div>
            <div class="grid place-items-center">
                <div class="absolute bottom-6 flex items-center justify-between w-[95%] mx-auto">
                    <div class="flex items-center">
                        <CropPostImage 
                            :cropList="cropList" 
                            @changeCrop="changeCrop" 
                            :currentCrop="currentCrop"
                        />
                        <ZoomPostImage v-model="zoomRange" />
                    </div>
                    <button class="rounded-full w-8 h-8 bg-black hover:bg-gray-600 flex items-center justify-center shadow-xl text-white">
                        <OpenMediaSVG />
                    </button>                  
                </div>
            </div>                
        </div>            
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import ZoomPostImage from '@/components/new-post/ZoomPostImage.vue'
import CropPostImage from '@/components/new-post/CropPostImage.vue'
import OpenMediaSVG from '@/svgs/OpenMediaSVG.vue'
import BackArrowSVG from '@/svgs/BackArrowSVG.vue'
import MediaSelectSVG from '@/svgs/MediaSelectSVG.vue'

export default {

components: {
    ZoomPostImage,
    CropPostImage,
    OpenMediaSVG,
    BackArrowSVG,
    MediaSelectSVG
}, 

setup () {
    const inp = ref(null)
    const showSelectArea = ref(false)
    const cropItem = ref(false)
    const selectedFiles = ref('')
    const zoomRange = ref(100)
    const zoomItem = ref(false)
    const currentCrop = ref(0)
    const currentCropSize = ref('')
    const cropList = reactive([
        { 
            title: 'Original', 
            isSelected: false,
            cropSizeClass: '', 
            svg_icon: {
                aria_label: "Photo outline icon",
                class:"_ab6-", 
                color:"",
                fill: "",
                height: "24", 
                role: "img",
                viewBox: "0 0 24 24",
                width: "24"            
            },
            svg_paths: {
                d_1: `M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z`,
                d_2: `m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905`,
                d_3: `M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z`
            },
            svg_path_props: {
                fill:"none", 
                stroke: "currentColor", 
                stroke_linecap: "round",
                stroke_linejoin:"round", 
                stroke_width:"2",                
            }     
        },
        { 
            title: '1:1', 
            isSelected: false,
            cropSizeClass: 'object-cover', 
            svg_icon: {
                aria_label: "Crop portrait icon",
                class:"_ab6-", 
                color:"",
                fill: "",
                height: "24", 
                role: "img",
                viewBox: "0 0 24 24",
                width: "24"            
            },
            svg_paths: {
                d_1: `M19 23H5a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h14a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM5 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z`,
                d_2: '',
            }          ,
            svg_path_props: {
                fill:"none", 
                stroke: "currentColor", 
                stroke_linecap: "round",
                stroke_linejoin:"round", 
                stroke_width:"2",                
            }               
        },
        { 
            title: '4:5', 
            isSelected: false,
            cropSizeClass: 'object-contain', 
            svg_icon: {
                aria_label: "Photo outline icon",
                class:"_ab6-", 
                color:"",
                fill: "",
                height: "24", 
                role: "img",
                viewBox: "0 0 24 24",
                width: "24"            
            },
            svg_paths: {
                d_1: `M16 23H8a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h8a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM8 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h8a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z`,
                d_2: '',
            }          ,
            svg_path_props: {
                fill:"none", 
                stroke: "currentColor", 
                stroke_linecap: "round",
                stroke_linejoin:"round", 
                stroke_width:"2",                
            }               
        },
        { 
            title: '10:6', 
            isSelected: false,
            cropSizeClass: 'object-none', 
            svg_icon: {
                aria_label: "Photo outline icon",
                class:"_ab6-", 
                color:"",
                fill: "",
                height: "24", 
                role: "img",
                viewBox: "0 0 24 24",
                width: "24"            
            },
            svg_paths: {
                d_1: `M16 23H8a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h8a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM8 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h8a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z`,
                d_2: '',
            },
            svg_path_props: {
                fill:"none", 
                stroke: "currentColor", 
                stroke_linecap: "round",
                stroke_linejoin:"round", 
                stroke_width:"2",                
            }             
        },                        
    ])

    const rangeScale = computed(() => {
        return zoomRange.value / 100
    })

    return {
        inp,
        selectedFiles,
        showSelectArea,
        cropItem,
        cropList,
        currentCrop,
        currentCropSize,
        zoomRange,
        rangeScale,
        zoomItem,
        selectFile: () => {
            let choosenFile = inp.value
            choosenFile.click()
        },
        onSelect (event) {
            const file = event.target.files[0]
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                selectedFiles.value = reader.result
            })
            reader.readAsDataURL(file)
            selectedFiles.value = file
            showSelectArea.value = true
        },
        changeCrop: (index, cropSizeCl) => {
            currentCrop.value = index
            currentCropSize.value = cropSizeCl
        }
    }

}

}
</script>