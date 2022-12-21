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
                    <svg 
                        aria-label="Icon to represent media such as images or videos" 
                        class="_ab6- mx-auto" 
                        color="#262626" 
                        fill="#262626" 
                        height="77" 
                        role="img" 
                        viewBox="0 0 97.6 77.3" 
                        width="96"
                    >
                        <path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path>
                        <path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path>
                    </svg>
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
            class="fixed  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  xl:w-1/3 lg:w-2/5 md:w-3/4 w-[90%]  md:h-3/4 h-1/2 rounded-xl bg-white z-0 shadow-2xl" 
            v-else
        >
        
            <div class="border-b border-b-gray-100 flex irems-center justify-between py-3">
                <button class="ml-4" @click="showSelectArea = false">
                    <svg aria-label="Back" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>                    
                </button>
                <h6 class="font-bold">
                    Crop
                </h6>
                <button class="text-blue-600 font-bold mr-4">
                    Next
                </button>
            </div>   

            <div class="grid place-items-center w-full h-full overflow-hidden" :class="currentCropSize != '' ? 'bg-gray-200' : ''">
                <img 
                    :src="selectedFiles" 
                    :class="currentCropSize" 
                    class="w-3/4 h-3/4" 
                    :style="`transform: scale(${rangeScale}); transition: transform .2s;`" 
                    alt="selected-image"
                >
            </div>
            <div class="grid place-items-center">
                <div class="absolute bottom-10 flex items-center justify-between w-[95%] mx-auto">
                    <div class="flex items-center">
                        <CropPostImage 
                            :cropList="cropList" 
                            @changeCrop="changeCrop" 
                            :currentCrop="currentCrop"
                        />
                        <ZoomPostImage v-model="zoomRange" />
                    </div>
                    <button class="rounded-full w-8 h-8 bg-black hover:bg-gray-600 flex items-center justify-center shadow-xl text-white">
                        <svg 
                            aria-label="Open media gallery" 
                            class="_ab6-" 
                            color="#ffffff" 
                            fill="#ffffff" 
                            height="16" 
                            role="img" 
                            viewBox="0 0 24 24" 
                            width="16"
                        >
                            <path d="M19 15V5a4.004 4.004 0 0 0-4-4H5a4.004 4.004 0 0 0-4 4v10a4.004 4.004 0 0 0 4 4h10a4.004 4.004 0 0 0 4-4ZM3 15V5a2.002 2.002 0 0 1 2-2h10a2.002 2.002 0 0 1 2 2v10a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2Zm18.862-8.773A.501.501 0 0 0 21 6.57v8.431a6 6 0 0 1-6 6H6.58a.504.504 0 0 0-.35.863A3.944 3.944 0 0 0 9 23h6a8 8 0 0 0 8-8V9a3.95 3.95 0 0 0-1.138-2.773Z" fill-rule="evenodd"></path>
                        </svg>
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

export default {

components: {
    ZoomPostImage,
    CropPostImage
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
                d_1: 'M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z" fill-rule="evenodd',
                d_2: 'm2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path><path d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2',
                d_3: 'M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z'
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
                d_1: 'M19 23H5a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h14a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM5 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z',
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
                d_1: 'M16 23H8a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h8a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM8 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h8a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z',
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
                d_1: 'M16 23H8a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h8a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM8 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h8a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z',
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