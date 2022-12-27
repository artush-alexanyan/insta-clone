<template>
    <div class="grid xl:w-[70%] lg:w-[80%] w-full grid-cols-5 p-5 mx-auto gap-x-3">
        <div class="py-2 md:col-span-3 col-span-5">
            <div class="story-content py-2 flex items-center md:justify-start justify-between">
                <div class="flex items-center justify-center">
                    <div class="story-item px-1 cursor-pointer" v-for="story in 5" :key="story">
                        <div class="img_wrapp rounded-full border flex items-center justify-center border-red-400 h-16 w-16">
                            <img 
                                :src="user.picture" 
                                alt="story_item" 
                                class="rounded-full w-16 h-16 p-[0.125rem]"
                            >
                        </div>
                        <!-- <p class="text-center text-[0.5rem] font-bold my-1"> {{ user.nickname }} </p> -->
                    </div>
                </div>
            </div>
            <ul class="mt-5">
                <li class="my-5" v-for="post in 10" :key="post">
                    <div class="post_img_wrapper border">
                        <img class="postImage" src="../assets/post-image-1.jpg" alt="">
                    </div>
                </li>
            </ul>
        </div>
        <div class="p-2 col-span-2 md:block hidden">
            <div class="user-details">
                <div class="flex items-center justify-between">
                    <div class="avatar name flex items-center">
                        <img :src="user.picture" class="h-14 w-14 rounded-full" alt="user-picture">
                        <div class="ml-4">
                            <p class="text-xs font-bold"> _{{ user.nickname }} </p>
                            <p class="lg:text-sm text-xs text-gray-400"> {{ user.nickname }} </p>                                    
                        </div>
                    </div>
                    <div>
                        <button class="text-blue-500 border-0 rounded-0 outline-0 text-xs text-bold">
                            Switch
                        </button>
                    </div>
                </div>
            </div>
            <div class="sugestions my-5">
                <div class="flex items-center justify-between w-full my-5">
                    <p class="text-base text-gray-400 font-bold">Suggestions For You</p>
                    <button class="text-xs">See all</button>
                </div>
                <ul>
                    <li v-for="(suggest, index) in 5" :key="index" class="my-3">
                        <div class="flex items-center justify-between">
                            <div class="avatar name flex items-center">
                                <img :src="user.picture" class="h-8 w-8 rounded-full" alt="user-picture">
                                <div class="ml-4">
                                    <p class="text-xs font-bold"> _{{ user.nickname }} </p>
                                    <p class="text-[0.6rem] text-gray-400"> {{ user.email }} </p>                                    
                                </div>
                            </div>
                            <div>
                                <button class="text-blue-500 border-0 rounded-0 outline-0 text-xs text-bold">
                                    Follow
                                </button>
                            </div>
                        </div>                                
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue"
import { ref, onMounted } from 'vue'

export default {
    name: 'UserProfile',
    setup () {

        const { user, logout } = useAuth0()
        const tab = ref(0)
        const showTitles = ref(false)

        onMounted (() => {

        })      

        return {
            changeTab: (index, title) => {
                tab.value = index
                if(title === 'Search'){
                    showTitles.value = !showTitles.value
                }
            },              
            handleLogOut: () => {
                logout({
                    appState: {
                        target: '/'
                    }
                })
            },
            user,
            tab,
            showTitles
        }
        
    }
}
</script>