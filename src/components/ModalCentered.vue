<template>
    <div class="modal-centered">


        <button 
            :class="buttonClasse" type="button"
            @click="closeModal = true"
            >
            <slot>
                {{ title }}
            </slot>
        </button>
            
            <Transition name="bounce">
            <div 
                class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border mx-auto rounded-xl shadow bg-white flex items-center justify-center" 
                v-show="closeModal"
                ref="el"
            >
                <div class="modal_body md:w-96 w-80">
                    <div class="modal_header py-2 flex justify-between items-center border-b border-gray-300">
                        <button class="ml-4" @click="closeModal = false">
                            <svg aria-label="Close" class="_ab6-" color="#262626" fill="#262626" height="18" role="img" viewBox="0 0 24 24" width="18"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
                        </button>
                        <p class="font-semibold text-lg">New message</p>
                        <button class="mr-4" :class="selected.length ? 'text-blue-700' : 'text-blue-300'">Next</button>
                    </div>
                    <div class="modal_header py-1  border-b border-gray-300" :class="selected.length ? '' : 'flex items-center'">
                        <p class="font-semibold text-lg mx-4">To:</p>
                            <ul class="mx-4 grid grid-cols-3">
                                <li 
                                    class="text-xs text-blue-500 mx-1 my-1 flex items-center bg-blue-100 rounded-full px-2 py-1" 
                                    v-for="(sel, index) in selected" 
                                    :key="index"
                                > 
                                    <span>
                                        {{ sel.name }}
                                    </span>
                                    <button class="text-sm font-bold ml-2 text-blue-600" @click="selectUser(sel, index)">
                                        x
                                    </button>
                                </li>                                
                            </ul>
                        <input 
                            v-model="search"
                            @input="$emit('update:modelValue', $event.target.value)"
                            type="text" 
                            :class="selected.length ? 'mx-4' : ''" 
                            class="rounded-0 border-0 py-3 outline-0" 
                            placeholder="Search..."
                        >
                    </div>      
                    <div class="overflow-scroll overflow-x-hidden h-96 border">
                        <h6 class="ml-4 font-semibold text-sm my-3">
                            Suggested
                        </h6>
                        <ul class="ml-4">
                            <li 
                                v-for="(item, index) in users" 
                                :key="index" 
                                class="my-2 flex justify-between items-center"
                            >
                                <div class="flex items-center">
                                    <img 
                                        :src="item.img" 
                                        class="h-16 w-16 rounded-full" 
                                        alt="userImage"
                                    >
                                    <span class="text-xs ml-3"> 
                                        {{ item.name }} 
                                    </span>
                                </div>
                                <div 
                                    class="ratio w-6 h-6 rounded-full flex items-center justify-center border border-gray-400 mr-4 cursor-pointer" 
                                    @click="selectUser(item, index)"
                                >
                                    <div class="w-4 h-4 rounded-full flex items-center justify-center bg-blue-500" v-show="item.isChecked === true">

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>          
                </div>
            </div>
        </Transition>            
            
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
    name: 'ModalCentered',
    props: {
        users: {    
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: false
        },
        buttonClasse: {
            type: String,
            required: false
        }        
    },
    setup () {
        const el = ref(null)
        const search = ref('')
        const closeModal = ref(false)
        const selected = reactive([])

        onClickOutside(el, () =>  {
            closeModal.value = false           
        })   

        function selectUser (user) {
            if(user.isChecked === false){
                user.isChecked = true
                selected.push(user)
            }
            else{
                user.isChecked = false
                selected.splice(selected.indexOf(user), 1)
            }
        }

        return {
            closeModal,
            el,
            selected,
            search,
            selectUser,
        }
    }
}
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {

  0% {
    transform: scale(1);
  }

}

</style>