<script lang="ts">
//  <Card headline="test headline" text="test text" />

    export let headline;
    export let text;
    export let items = "";

    //export let text: string;
    
    // 	import Text from './text.svelte';
    // <Text src={images[counter]} alt={alt} />
    
    
    </script>

<div class=" 
2xl5:w-50/100  
2xl3:w-60/100 2xl:w-70/100 
xl:w-80/100 lg:w-90/100  
md:w-90/100 w-95/100  

mx-auto   my-10 p-4
 overflow-hidden 
 overflow-ellipsis 
  break-words
  border-2 border-gray-300  bg-gray-100 
  rounded-lg shadow-lg
  ">

    <p class="text-2xl lg:text-3xl  text-center ">
        {headline}
    </p>
<br>
    <p class="text-md lg:text-lg  text-justify	">
        {@html text}
    </p>
    {@html items}

    
</div>