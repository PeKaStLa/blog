<script lang="ts">
	import Image from './image.svelte';
	import Text from './text.svelte';
</script>

<div class=" text-center  ">
<h1
			class="text-3xl
            pb-1  font-thin
            text-center   
            rounded-md text-black  border-white
 "
		>
			 Peters Blog
		</h1>



       <div class="
      2xl5:w-50/100  
2xl3:w-50/100 2xl:w-60/100 
xl:w-70/100 lg:w-80/100  
md:w-85/100
sm:w-95/100

mx-auto px-2
            ">
            
        <img class=" 
        rounded-md 
    border-2
    border-gray-300
    shadow-lg
        " 
		src="ta_prohm_kleiner.jpg" alt="ta_prohm_kleiner" />

        <h5 class="text-xs	">
        Ta Prohm, Cambodia
        </h5>
        </div>



 <Text
		text="(AWS) Hosting multiple Web-Apps in one EC2-Instance with Nginx"
	/>
	<Image src="pangolin_2.png" alt="pangolin_2" />
    
 <Text
		text="(AWS) Adding a new Hosted Zone to a Domain after deleting the original Hosted Zone "
	/>
	<Image src="pangolin.png" alt="pangolin" />
 <Text
		text="How to travel with a 20-liter backpack (for 7 months or more)"
	/>
    </div>

