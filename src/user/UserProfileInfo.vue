<template>
    <div class="profile-info lg:w-[55%] w-full mx-auto bg-gray-50 font-serif">
        <div class="flex items-start justify-start py-6 px-7">
            <button class="avatar-user">
                <img :src="user.picture" alt="userPicture" class="w-28 h-28 rounded-full">
            </button>
            <div class="info ml-20">
                <div class="flex items-center justify-center">
                    <h2 class="text-3xl"> 
                        _{{ user.nickname }}_
                    </h2>
                    <button class="border  border-gray-400 font-semibold mx-5 rounded px-3 my-1">
                        Edit profile
                    </button>
                    <button>
                        <svg aria-label="Options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </button>
                </div>
                <div class="followers my-5">
                    <div class="flex items-center">
                        <p class="text-lg mr-6">
                            <strong>31</strong> posts
                        </p>
                        <p class="text-lg mr-6">
                            <strong>77</strong> followers
                            
                        </p>
                        <p class="text-lg mr-6">
                            <strong>193</strong> following
                        </p>                                        
                    </div>                
                </div>  
                <div class="user-slogan">
                    <h4 class="text-lg font-bold"> {{ user.name }}  </h4>
                    <p class="text-lg">Take a sad song and make it better 🙂</p>
                </div>                              
            </div>
        </div>

    </div>
</template>


<script>
import { useAuth0 } from "@auth0/auth0-vue"

export default {
  name: 'UserProfileInfo',

  setup () {

    const { user, loginWithRedirect } = useAuth0()

    return {
      user,
      handleLogin: () => {
        loginWithRedirect({
          appState: {
            target: `/user/profile`
          }
        })
      }
    }
     
  }
}
</script>