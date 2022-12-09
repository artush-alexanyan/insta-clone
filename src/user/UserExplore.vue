<template>
    <div class="user-explore">
        <div class="grid grid-cols-4 gap-1">
            <div class="explore-card hover:cursor-pointer" v-for="card in 30" :key="card"> 
                <img src="../assets/explore-post-3.jpg" class="w-full" alt="">
            </div>              
        </div>
    </div>
</template>