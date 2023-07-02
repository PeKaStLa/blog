<script lang="ts">
//  <Card headline="test headline" text="test text" />

    export let headline;
    export let text;
    export let editing;
    let editing2 = false;
   $:  onChange(editing); 

    //export let text: string;
    
    // 	import Text from './text.svelte';
    // <Text src={images[counter]} alt={alt} />
    
   function onChange(editing)
   {
    !editing ? editing2 = false : "" ;
   }
    </script>

<div class=" 
pb-20 relative

2xl5:w-50/100  
2xl3:w-60/100 2xl:w-70/100 
xl:w-80/100 lg:w-90/100  
md:w-90/100 w-95/100  

mx-auto   my-10 p-6 
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
    <p class="text-md lg:text-lg   text-justify	">
        {@html text}
    </p>



    {#if (editing == false && editing2 == false) || (editing == true && editing2 == false)  }
    <button
    on:click={() => {editing = true; editing2 = true;}}
    class="
shadow-md hover:shadow-lg 
 text-lg p-1
 absolute  bottom-2 left-2
  bg-green-500 hover:bg-blue-700 
 text-white font-bold  rounded
 ">edit +</button
> 

{:else if (editing == true && editing2 == true) || (editing == false && editing2 == true)   }
<button
on:click={() => { editing2 = false;}}
class="
shadow-md hover:shadow-lg 
text-lg p-1
absolute  bottom-2 right-2

bg-gray-500 hover:bg-blue-700 
text-white font-bold  rounded
">save +</button
>	
{/if}


editing: {editing}
editing2: {editing2}

</div>