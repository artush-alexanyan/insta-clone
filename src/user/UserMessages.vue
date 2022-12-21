<template>
    <div>
        <div class=" lg:w-3/4 mx-auto p-h-screen bg-gray-100 grid grid-cols-3 gap-0">
            <div class="col-span-1 border md:block hidden"> 
                <div class="overflow-scroll overflow-x-hidden h-screen">
                    <div class="border rounded bg-white">
                        <div class="flex item-center justify-between py-6 px-2">
                            <p class="flex item-center text-sm font-bold justify-between px-2">
                              _{{ user.nickname }}__
                              <button style="display: inline-block; transform: rotate(180deg);" class="ml-2">
                                <svg 
                                  aria-label="Down chevron icon" 
                                  class="_ab6-" color="#262626" 
                                  fill="#262626" 
                                  height="20" 
                                  role="img" 
                                  viewBox="0 0 24 24" 
                                  width="20">
                                  <path 
                                    d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z">
                                  </path>
                                </svg>

                              </button>
                            </p>
                            <ModalCentered 
                                :users="searchUser" 
                                v-model="search"
                                :userCount="searchUser.length"
                            >
                              <slot>
                                <svg aria-label="New message" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
                              </slot>
                            </ModalCentered>                            
                        </div>
                    </div>
                    <ul class="mt-5 mx-2">
                        <li 
                          class="flex items-center mb-5 w-full cursor-pointer" 
                          v-for="(mess, index) in users" 
                          :key="index"
                          @click="showMessages = true"
                        >
                            <div class="user-avatar-messages h-16 w-16 border rounded-full flex items-center justify-center ">
                                <img :src="mess.img" alt="userImg" class="h-16 w-16 rounded-full">
                            </div>
                            <span class="ml-2 text-gray-600 text-sm"> {{ mess.name }} </span>
                        </li>
                    </ul>                    
                </div>
            </div>
            <div class="md:col-span-2 col-span-3 border" v-if="!showMessages"> 
                <div class="grid grid-cols-1 justify-items-center content-center h-screen">
                    <div class="svg_wrapper">
                        <svg aria-label="Direct" class="_ab6-" color="#262626" fill="#262626" height="96" role="img" viewBox="0 0 96 96" width="96"><circle cx="48" cy="48" fill="none" r="47" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="69.286" x2="41.447" y1="33.21" y2="48.804"></line><polygon fill="none" points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    </div>
                    <h2 class="text-xl my-3">Your Messages</h2>
                    <p class="text-gray-500 text-sm my-3">Send private photos and messages to a friend or group.</p>
                    <div class="mx-auto">
                      <ModalCentered 
                        :users="searchUser" 
                        :userCount="searchUser.length"
                        :title="'Send message'" 
                        :buttonClasse="`block text-white bg-blue-500 hover:bg-blue-500 font-medium rounded-md text-sm px-3 py-1 text-center`" 
                        v-model="search"
                    />
                    </div>

                </div>
            </div>
            <div class="md:col-span-2 col-span-3 border" v-else> 
                <div class="messanger_wrapper">
                    <div class="messanger_header flex items-center justify-between px-5 h-20 border-b">
                        <div class="user_info flex items-center">
                          <div class="user-avatar-messages h-8 w-8 border rounded-full flex items-center justify-center ">
                                <img :src="user.picture" alt="userImg" class="h-8 w-8 rounded-full">
                            </div>
                            <span class="font-bold ml-2"> {{ user.name }} </span>
                        </div>
                        <div class="flex items-center">
                            <button class="mx-2">
                              <svg aria-label="Audio call" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 0 1 .908-2.138 17.116 17.116 0 0 1 1.865-1.71 2.307 2.307 0 0 1 3.004.174 13.283 13.283 0 0 1 3.658 5.325 2.551 2.551 0 0 1-.19 1.941l-.455.853a.463.463 0 0 0-.024.387 7.57 7.57 0 0 0 4.077 4.075.455.455 0 0 0 .386-.024l.853-.455a2.548 2.548 0 0 1 1.94-.19 13.278 13.278 0 0 1 5.326 3.658 2.309 2.309 0 0 1 .174 3.003 17.319 17.319 0 0 1-1.71 1.866 3.29 3.29 0 0 1-2.138.91 10.27 10.27 0 0 1-.368.006Zm-13.144-20a.27.27 0 0 0-.167.054A15.121 15.121 0 0 0 3.28 4.47a1.289 1.289 0 0 0-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 0 0 .835-.36 15.217 15.217 0 0 0 1.504-1.637.324.324 0 0 0-.047-.41 11.62 11.62 0 0 0-4.457-3.119.545.545 0 0 0-.411.044l-.854.455a2.452 2.452 0 0 1-2.071.116 9.571 9.571 0 0 1-5.189-5.188 2.457 2.457 0 0 1 .115-2.071l.456-.855a.544.544 0 0 0 .043-.41 11.629 11.629 0 0 0-3.118-4.458.36.36 0 0 0-.244-.1Z"></path></svg>
                            </button>
                            <button class="mx-2">
                              <svg aria-label="Video call" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><rect fill="none" height="18" rx="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="16.999" x="1" y="3"></rect><path d="m17.999 9.146 2.495-2.256A1.5 1.5 0 0 1 23 8.003v7.994a1.5 1.5 0 0 1-2.506 1.113L18 14.854" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                            </button>
                            <button class="mx-2">
                              <svg aria-label="View Thread Details" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                            </button>                                                        
                        </div>
                    </div>
                    <div class="h-[48rem] overflow-scroll overflow-x-hidden"></div>
                    <div class="send_message flex items-center justify-between px-5 h-20">
                        <div class="flex items-center py-2 px-3 w-full rounded-full border">
                          <button>
                            <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                          </button>
                          <input type="text" class="w-full outline-0 px-3 mx-2 bg-transparent" placeholder="Message..."> 
                          <button class="mx-2">
                            <svg aria-label="Add Photo or Video" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z" fill-rule="evenodd"></path><path d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path><path d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> 
                          </button>
                          <button class="mx-2">
                            <svg aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                          </button>
                        </div>
                    </div>                    
                </div>
            </div>            
        </div>
    </div>
</template>


<script>
import { ref, reactive, computed } from "vue"
import { useAuth0 } from "@auth0/auth0-vue"
import ModalCentered from "@/components/ModalCentered.vue"

export default {
  name: 'HomeView',
  components: {
    ModalCentered
  },

  setup () {

    const { user, loginWithRedirect } = useAuth0()
    const search = ref('')
    const showMessages = ref(false)
    const users = reactive([
            { img: require('../assets/user-man.jpg'), name: 'SoloSome', isChecked: false},
            { img: require('../assets/user-woman.jpg'), name: 'CoachUser', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'UserDwarf', isChecked: false},
            { img: require('../assets/user-woman.jpg'), name: 'FoolishUser', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'UserSnake', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'UserCouple', isChecked: false},
            { img: require('../assets/user-woman.jpg'), name: 'NonUser', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'FoolishUser', isChecked: false},
            { img: require('../assets/user-woman.jpg'), name: 'NappyUser', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'MysteryUser', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'BowUser', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'FoolishUser', isChecked: false},
            { img: require('../assets/user-woman.jpg'), name: 'BowUser', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'FoolishUser', isChecked: false},
            { img: require('../assets/user-woman.jpg'), name: 'AtheistUser', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'FoolishUser', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'FoolishUser', isChecked: false},
            { img: require('../assets/user-woman.jpg'), name: 'UserWriting', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'ChaoticSome', isChecked: false},
            { img: require('../assets/user-woman.jpg'), name: 'TonSome', isChecked: false},
            { img: require('../assets/user-man.jpg'), name: 'StonedSome', isChecked: false},             
        ])    

    const searchUser = computed(() => {
        return users.filter(item => {
            return item.name.toLowerCase().includes(search.value.toLocaleLowerCase())
        })
    })        
    return {
      computed,
      users,
      search,
      searchUser,
      user,
      showMessages,
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