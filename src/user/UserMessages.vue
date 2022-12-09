<template>
    <div>
        <div class=" lg:w-3/4 mx-auto p-h-screen bg-gray-100 grid grid-cols-3 gap-0">
            <div class="col-span-1 border md:block hidden"> 
                <div class="overflow-scroll overflow-x-hidden h-screen">
                    <div class="border rounded bg-white">
                        <div class="flex item-center justify-between py-3 px-2">
                            <p class="flex item-center text-sm font-bold justify-between py-3 px-2">
                              _{{ user.nickname }}__
                              <button style="display: inline-block; transform: rotate(180deg);" class="ml-2">
                                <svg aria-label="Down chevron icon" class="_ab6-" color="#262626" fill="#262626" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg>
                              </button>
                            </p>
                            <button>
                                <svg aria-label="New message" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
                            </button>
                        </div>
                    </div>
                    <ul class="mt-20 mx-2">
                        <li class="flex items-center mb-5 w-full cursor-pointer" v-for="(mess, index) in 15" :key="mess">
                            <div class="user-avatar-messages h-16 w-16 border rounded-full flex items-center justify-center ">
                                AA
                            </div>
                            <span class="ml-2 text-gray-400 text-sm"> {{ index + 1 }} Lorem ipsum dolor </span>
                        </li>
                    </ul>                    
                </div>
            </div>
            <div class="md:col-span-2 col-span-3 border"> 
                <div class="grid grid-cols-1 justify-items-center content-center h-screen">
                    <div class="svg_wrapper">
                        <svg aria-label="Direct" class="_ab6-" color="#262626" fill="#262626" height="96" role="img" viewBox="0 0 96 96" width="96"><circle cx="48" cy="48" fill="none" r="47" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="69.286" x2="41.447" y1="33.21" y2="48.804"></line><polygon fill="none" points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    </div>
                    <h2 class="text-xl my-3">Your Messages</h2>
                    <p class="text-gray-500 text-sm my-3">Send private photos and messages to a friend or group.</p>
                    <button class="text-white bg-blue-500 px-3 py-1 rounded-lg">
                        Send message
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { useAuth0 } from "@auth0/auth0-vue"

export default {
  name: 'HomeView',

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