<template>
    <div class="home pt-10">
        <h1 class="text-center text-4xl font-mono uppercase">home page</h1>
        <div class="mx-auto w-1/5">
          <button 
            class="w-full bg-blue-600 rounded-0 text-white text-lg uppercase px-8 py-2 my-10 hover:bg-blue-700"
            @click="handleLogin"
          >
              login
          </button>
          {{user}}
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
