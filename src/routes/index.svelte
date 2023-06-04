<script lang="ts">
	import Image from './image.svelte';
	import Card from './card.svelte';
</script>

<div class=" text-center  ">
<h1
			class="text-3xl
            pb-1  font-thin
            text-center   
            rounded-md text-black  border-white
 "
		>
			 Peters' Blog
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



     <Card headline="test headline" text="test text" />
     <Card headline="Basic Git-commands" text="'git remote' shows the origin. 'git branch' shows the current branch. 'git status' shows if the current repository is up-to-date with the origin-repo. 'git remote show origin' shows the remote-URL." />
     <Card headline="Writing a .sh-script and running it via crontab" 
     text="First we create the script-file via touch-command. After we need to make it executable. Then we add #!/bin/bash in the first line." />
     <Card headline="(AWS) Creating a CI" 
     text="To create a CI we first have to know which steps need to be executed for updating the production-server with the newest code from the development-server.
     For that we first do all steps manually. We assume that the dev made some last changes on the dev-server. After that the dev executes 'git add .', then 'git commit -m 'message'', then 'git push'.
     Now on the production-server the dev executes 'git pull'. After this the dev needs to deploy the svelte-App on the production-server to get the latest build-files.
     " />
     <Card headline="(AWS) Writing an automation for redeployment of a broken down WebApp" text="test text" />
     <Card headline="Different linux-distributions" 
     text="When working with different Linux-distros you will notice that there are many differences like for example the package-manager. 
     In  RHEL-based linux-distros like CentOS and Fedora and also Amazon Linux you can use the 'yum'-package-manager.
      
     openSUSE/SuSE
Ubuntu is partly based on 'Debian', uses the Advanced Package Tool (APT)-software-manager.
     In Debian-bases distros the package manager ... is used.
 " />
     <Card headline="Finding out which process uses a specific port - and killing it" 
     text="Everybody knows it: starting a dev-server and it fails with the message 'Port already in use'. What to do " />

     <Card
		headline="(AWS) Hosting multiple Web-Apps in one EC2-Instance with Nginx"
	text="When you buy a domain, set up an EC2-Server and deploy a Web-App on Port 80 - then that's it. The server is used and seems full.
    But what if you want to host more than one Application? Do you need to pay for a second EC2-machine? One server and one domain for every project?
    With a webserver-software like 'nginx' it's possible to host multiple apps on different sub-domains on one single server. 
    "
    />
	<Image src="pangolin_2.png" alt="pangolin_2" />
    
 <Card
		headline="(AWS) Adding a new Hosted Zone after deleting the domains' original Hosted Zone "
        text="When you buy a domain at AWS your first hosted zone gets generated automatically. Later I deleted this hosted zone to save some money on AWS-fees during a long travel. After coming home from the vacation I didn't remember much about the orignal hosted zone. I just created a new hosted zone and added the records for simple routing to the www-domain and the short domain-name. After starting the EC2-Server and installing nginx - there was nothing to see on my domain. So I tried reaching my public-IP. Luckily there I could see the 'Welcome to nginx!'-Page. So where is the error in this? After some searching I found out that the nameservers of the new hosted zone are different to the ones of the domain. I copied all of the four nameservers from the hosted zone and pasted them into the records of the domain. Instead of the notified 24 hours it just took 2 or 3 minutes to apply the changes. Now everything worked as it should. The domain and the public-IP showed the same page."
	items="
      
      "
    />
	<Image src="pangolin.png" alt="pangolin" />
 <Card
		headline="How to travel with a 20-liter backpack (for 7 months or more)"
      
        text="First things first. Most important during the whole trip is the backpack itself. I used the cheap but robust 'Arpenaz NH100 20 L' from Decathlon. Unlike many other cheap bagpacks it still looks good after 5 months.
        What else do you need? 
        "
      items="

<div class='content-center'>
<ol class='list-decimal inline-block'>

<br><br>

<p class='underline'>

general:</p>
<br>

  <li>backpack</li>
  <li>daypack</li>
  <li>bellybag</li>
  <li>books</li>
  <li>big/1.5L water bottle</li>
  <li>1x sandals/flip-flops</li>
     <li>1x hiking/normal shoes</li>
     <li>1x towel</li>
     <li>2x tiny bags for tiny things</li>
     

<br><br>

<p class='underline'>

wallet:</p>
<br>

  <li>passport</li>
  <li>international driving license</li>
   <li>national driving license card</li>
  <li>national ID card</li>
  <li>national health card</li>
  <li>creditcard/debit-card/giro-card</li>
    <li>student ID card</li>
  <li>vaccination certificate book</li>
  <li>health-insurance-documents</li>
   <li class=''>4x passport photographs for visa-applications</li>
   <li>ca. 200€ cash</li>
   <li>name tag with important information</li>

<br><br>

<p class='underline'>

clothing:</p>

<br>

  <li>2 socks</li>
  <li>2x underwear</li>

  <li>2x normal t-shirt</li>
  <li>1x long hoodie</li>
  <li>1x belt</li>
  <li>1x long trousers</li>
  <li>1x short trousers</li>

   <li>1x thin beanie</li>
  <li>1x scarf/bandana</li>
  
  <li>1x swimming/sport short</li>
  <li>1x sport shirt</li>
<br><br>


<p class='underline'>

travel-pharmacy:</p>
<br>


  <li>antibiotics</li>
   <li>diarrhea meds</li>
   <li>cough/running nose meds</li>
   <li>malaria meds</li>
   <li>nausea/sick-feeling meds</li>
  <li>pain/fever meds</li>
  <li>sore throat meds</li>
<br><br>

<p class='underline'>

toiletries:</p>
<br>
  <li>1x tissues/handkerchief</li>
  <li>1x Bepanthen</li>
  <li>2x lip balm</li>
   <li>1x soap</li>
  <li>1x manual razor</li>
  <li>1x tweezers</li>
  <li>1x nail clipper</li>
  <li>1x nail file</li>
  
  <li>1x travel mirror</li>
  <li>100ml mosquitospray</li>
  <li>100ml suncream</li>

  <li>1x hard toothbrush</li>
  <li>1x elmex gelee</li>
  <li>30g toothpaste</li>
   <li>1x dental floss</li>
  <li>1x covid-mask(for driving motorbike)</li>
   <li>3x replacement contactlenses</li>
  <li>100ml contactlense-fluid</li>
  <li>2x contactlense-box</li>
  <li>5x plaster/band-aid</li>
<br><br>
<p class='underline'>

accessories:</p>
<br>

  <li>1x large sun hat</li>
   <li>1x robust normal glasses</li>
  <li>1x sunglasses</li>
  <li>1x glasses cleaning cloth</li>
  <li>1x flexible glasses case</li>
  <li>1x pen</li>
  <li>10m tape</li>
  <li>10x cable tie</li>
  <li>5x reusable cable tie</li>
  <li>10x rubber band</li>

  <li>1x lock and 2x keys</li>
  <li>1x headlight with different intensity levels</li>
  <li>1x swimming goggles</li>
  <li>1x sewing-kit</li>
  <li>1x metal spoon</li>
  <li>1x can opener</li>
  <li>1x dirt/stain cleaning tissue</li>
  <br><br>
<p class='underline'>
electronics:</p>
<br>

  <li>1x smartphone</li>
  <li>1x headphones</li>
    <li>1x power adapter</li>

  <li>2x micro-USB cable</li>
  <li>2x USB-C cable</li>
  <li>1x 10.000mAh powerbank</li>
  <li>1x electrical razor with removable trim-section</li>
  <li>2x empty microSD-card</li>
  <li>SIM-cards</li>
  <li>1x opening-tool for SIM- and microSD-port</li>

  <li>evtl. 1x GoPro-camera</li>

</ol>
   
</div>

<br><br>
<p class='text-justify'>
 No worries, you can fit all this in a 20L-backpack. I tried it and did it before. A small backpack will make your whole backpacking-life much easier and make your trip more relaxed.
   </p>
      "
	/>
    </div>

