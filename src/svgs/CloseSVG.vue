<template>
    <div>
        <svg 
            aria-label="Close" 
            class="_ab6-" 
            color="#262626" 
            fill="#262626" 
            :height="height" 
            role="img" 
            viewBox="0 0 24 24" 
            :width="width"
        >
            <polyline 
                fill="none" 
                points="20.643 3.357 12 12 3.353 20.647" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="3">
            </polyline>
            <line 
                fill="none" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="3" 
                x1="20.649" 
                x2="3.354" 
                y1="20.649" 
                y2="3.354">
            </line>
        </svg>        
    </div>
</template>

<script>
export default {
    name: 'CloseSVG',
    props: {
        height: {
            type: String,
            default: '12'
        },
        width: {
            type: String,
            default: '12'
        }        
    }
}
</script>