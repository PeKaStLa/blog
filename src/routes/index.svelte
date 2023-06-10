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
		Peters' Blog - 09.06.2023 - 00:29
	</h1>

	<div
		class="
      2xl5:w-50/100  
2xl3:w-50/100 2xl:w-60/100 
xl:w-70/100 lg:w-80/100  
md:w-85/100
sm:w-95/100

mx-auto px-2
            "
	>
		<img
			class=" 
        rounded-md 
    border-2
    border-gray-300
    shadow-lg
        "
			src="ta_prohm_kleiner.jpg"
			alt="ta_prohm_kleiner"
		/>

		<h5 class="text-xs	">Ta Prohm, Cambodia</h5>
	</div>

	<Card headline="test headline" text="test text" />
	<Card headline="test headline" text="test text" />
	<Card headline="test headline" text="test text" />
	<Card headline="test headline" text="test text" />
	<Card headline="mariaDB" 
  text="Starting the mariaDB-service with systemd:
  <br><br>
  'sudo systemctl start mariadb.service'.
  <br><br>
  First login into mariaDB after installation via root:
  <br><br>
  'sudo mysql -u root'.
  <br><br> 
  You can check for users with 
  'SELECT user,host,password FROM mysql.user;'
  <br><br>
  Then set the password for your mysql user with 
  'ALTER USER 'mysql'@'localhost' IDENTIFIED BY 'NewPassword';'.
  And reload the grant tables with 
  'FLUSH PRIVILEGES;'.
<br><br>
Now you can login with the mysql user and your new password.




" />



	<Card headline="Running processes" 
  text="List all running processes with 'ps -e' or 'ps -A'. 
  'ps -ax' ergibt eine List mit längeren Namen??
  You can search the proces list for specific results with 'ps ax | grep mysql'.
  " />

	<Card headline="search dnf for available packages"
  
   text="The command 'dnf list' will give you all 
   available packages. These results you can filter 
   for specific terms (for example mariadb) by 
   running 'dnf list | grep maradb'
   <br><br> Also you can list all installed packages
   with the command 'dnf list installed' and filter
   these packages with 'dnf list installed | grep mariadb'.
   <br><br>
   Without grep you can use 'dnf list installed mariadb*'.
   For exact matches in searching you can use 
   'dnf list installed mariadb105'
   
   " />

	<Card headline="Adding a software-repository to the package manager manually" 
  
  text="In the beginning the software-search with 'dnf list jenkins*' 
   shows no result. There is no jenkins-repository known to the package manager.
   So the first step is to add the repository manually to '/etc/yum.repos.d'.

   After this step the 'dnf list jenkins*'-search shows the repositoryas an result.
   Now you just need to install that the normal way.
  
  1. Add jenkins-repository to yum


" />

	<Card
		headline="Installing software manually when it is not available with the software package manager"
		text="On Amazon Linux 2023 and Amazon Linux 2 there 
     there are many softwares missing like mariaDB, 
     postgresql, node, npm.
     
     
     <br><br>
  For node and npm for example, we need to first add
  the node.js repository and install it after:
  <br><br>
  1. curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
 <br>
  2. sudo yum install -y nodejs
<br>
<br><br>
I also downloaded the sourcecode of postgresql 
manually. First download the file with curl and 
second unzip it with tar:
<br><br>
1. curl --output postgresql-15.3.tar.bz2 https://ftp. postgresql.org /pub/source/v15.3 /postgresql -15.3.tar.bz2
<br>
2. tar xf postgresql-15.3.tar.bz2
<br><br>

     "
	/>

	<Card headline="send mails via AWS SNS" text="blablub" />

	<Card
		headline="Run a node-server in a script via background-tmux-server"
		text="If you want to run a node-server in a script there are many ways to 
     fail. Also when you use the node-command with '&' to run it without 
     output, the command still requires a 'ENTER' to return to the bash-commandline.
     So the way to do it is using tmux. First we create a new detached tmux session.
     Then we send the node-command to the created tmux-session and confirm the 
     command with adding 'ENTER' in the command.  
     <br>
     <br> 
     1. command: 'tmux new-session -d -s blog'
     <br>
     2. command: 'tmux send -t blog ''PORT=3006 node ~/blog/build/index.js'' ENTER'
     <br>
     
      "
	/>

	<Card
		headline="Deploy/Update a Node-App with Nginx without any downtime"
		text="I will try to deploy a Node-App without any downtime by changing 
     the Port of the application in the nginx.config-file."
	/>

	<Card
		headline="Basic Git-commands"
		text="'git remote' shows the 
     origin. 'git branch' shows the current branch. 'git status' shows 
     if the current repository is up-to-date with the origin-repo. 
     'git remote show origin' shows the remote-URL."
	/>

	<Card
		headline="Writing a .sh-script and running it via crontab"
		text="First we create the script-file via touch-command: 'touch cron_blog.sh'. 
     We can check the permissions with 'ls -al cron_blog.sh' and see that 
     there are indeed no execute-permissions.
     After we need to make it executable via 'sudo chmod +x cron_blog.sh'.
     Now we have execute-permissions for every user-group.
      Then we add #!/bin/bash in the first line via vim.
      Now we add the content.
      After that we will add the .sh-file to crontab and get it automatically
      executed every hour.
      
      
      "
	/>

	<Card
		headline="(AWS) Creating CD for an App"
		text="To create a CI we first have to know which steps need to 
     be executed for updating the production-server with the newest 
     code from the development-server.
     For that we first do all steps manually. We assume that the dev 
     made some last changes on the dev-server. After that the dev 
     executes 'npm run build' to finally check if the code is valid 
     and able to run. Then the dev continues with 'git add .', then 
     'git commit -m 'message'', then 'git push'.
     .....
     Now on the production-server the dev executes 'git pull'. 
     After this the dev needs to deploy the svelte-App via 'npm run build'
      on the production-server to get the latest build-files. 
      Before we can deploy these latest build-files we need to kill 
      the process on the specific port 3005 with the command 
      'fuser -k 3005/tcp'.
      After killing the port-blocking-process we can deploy the 
      new build files.
      These build files need to get executed with node in the 
      background and to a specific port via 'PORT=3005 node index.js &'.
      Now the production-server is up-to-date with the dev server and 
     the latest content is running in the WebApp on the actual domain.
      ...
      All of that worked quite well and successfully.
      So all we need to do is writing all these commands 
      (on the production-server) into an executable 
      '.sh-file' and letting it get executed ca. hourly via crontab:
      1. git pull
      2. npm run build
      3. fuser -k 3005/tcp
      4. PORT=3005 node index.js &
      ....
      ....
      ....
          "
	/>
	<Card
		headline="(AWS) Writing an automation for redeployment of a broken-down WebApp"
		text="test text"
	/>
	<Card
		headline="Different linux-distributions"
		text="When working with different Linux-distros you will notice that there are many differences like for example the package-manager. 
     In  RHEL-based linux-distros like CentOS and Fedora and also Amazon Linux you can use the 'yum'-package-manager.
      
     openSUSE/SuSE
Ubuntu is partly based on 'Debian', uses the Advanced Package Tool (APT)-software-manager.
     In Debian-bases distros the package manager ... is used.
 "
	/>
	<Card
		headline="Finding out which process uses a specific port 
     - and killing it"
		text="Everybody knows it: starting a dev-server and it fails with 
     the message 'Port already in use'. What to do:
Via the command 'fuser 3005/tcp' we get the process-ID of the process 
which is running on and blocking the Port 3005.
With the command 'fuser -k 3005/tcp' we are killing this process. 
Even in case we did not check for the process-ID before.

     
     "
	/>

	<Card
		headline="(AWS) Hosting multiple Web-Apps in one EC2-Instance with Nginx"
		text="When you buy a domain, set up an EC2-Server and deploy a Web-App on Port 80 - then that's it. The server is used and seems full.
    But what if you want to host more than one Application? Do you need to pay for a second EC2-machine? One server and one domain for every project?
    With a webserver-software like 'nginx' it's possible to host multiple apps on different sub-domains on one single server. 
    ...
    Also I want to seperate the different nginx.config-snippets into 
    seperate files so that I can edit them easier for CD without any 
    downtime.
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
      

<div class='content-center text-center px-6'>
<ol class='list-decimal inline-block'>

<br><br>
<p class='underline'>
general:</p><br>

  <li>backpack</li>
  <li>daypack</li>
  <li>bellybag</li>
  <li>books</li>
  <li>big/1.5L water bottle</li>
  <li>1x sandals/flip-flops</li>
     <li>1x hiking/normal shoes</li>
     <li>1x towel</li>
     <li>2x smaller bags for tiny things</li>
     
<br><br>
<p class='underline'>
wallet:</p><br>

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
  <li>1x wide bright dense cotton/linen long trousers for sun and mosquitos</li>
  <li>1x wide bright dense cotton/linen long shirt for sun and mosquitos</li>
  <li>1x short trousers</li>
  <li>1x belt</li>


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
  <li>1x dirt/stain robust cleaning tissue/cloth</li>
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
 No worries, you can fit all this in a 20L-backpack. I tried it and did it before. 
 A small backpack will make your whole backpacking-life much easier and make your 
 trip more relaxed and enjoyable.
   </p>
      "
	/>

	<Card headline="Cambodia 05/2023" text="test text" />
	<Card headline="Vietnam 04 & 05/2023" text="test text" />
	<Card headline="Laos" text="test text" />
	<Card headline="Thailand" text="test text" />
	<Card headline="Sri Lanka" text="test text" />
	<Card headline="Croatia" text="test text" />
	<Card headline="Italy" text="test text" />
	<Card headline="Greece" text="test text" />
	<Card headline="Turkey" text="test text" />
	<Card headline="Bulgaria" text="test text" />
	<Card headline="Romania" text="test text" />
	<Card headline="Hungary" text="test text" />
	<Card headline="Scotland" text="test text" />
	<Card headline="England" text="test text" />
	<Card headline="Portugal" text="test text" />
	<Card headline="Spain" text="test text" />
	<Card headline="France XX/2022" text="test text" />
	<Card headline="Georgia 02/2022" text="test text" />
	<Card headline="Belgium" text="test text" />
	<Card headline="Poland" text="test text" />
</div>
