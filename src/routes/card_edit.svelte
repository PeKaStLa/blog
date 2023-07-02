<script lang="ts">
//  <Card headline="test headline" text="test text" />

    //export let title;
   // export let text;
     let title;
     let text;
     export let position;
     let cardsPromise = GetCards();



     

  class CardEntry {
  title;
  text;
  position;
  constructor(  title, text, position) {
 this.title = title;
    this.text = text;
    this.position = position;
  }
}


     async function createEmployee( employee) {    
      try {
    console.log("createEmployee is running try");
    console.log(JSON.stringify(employee));
        const response = await fetch('http://localhost:8080/cards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(employee)
        });
    
        if (response.ok) {
          console.log("createEmployee is running in response.ok");
          const createdEmployee = await response.json();
          return createdEmployee;
        } else {
          console.log("createEmployee is running in response-not-ok");
          throw new Error('Failed to create employee');
        }
      } catch (error) {
        console.error('Error creating employee:', error);
        return null;
      }
    }
   
    
	async function GetCards() {
		const res = await fetch('http://localhost:8080/cards');
		const data = await res.json();

    if (res.ok) {
      //cards = data.reverse();
      //position = cards.length;
      return data;
    } else {
      throw new Error(data);
    }
	}
    </script>

<div class=" 
relative

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
  position: {position}
  <input class="p-2 rounded w-full text-2xl" type="text" 
  placeholder="Enter your title here" bind:value={title} />

    <p class="text-2xl lg:text-3xl  text-center ">
        {title}
    </p>
<br>
<textarea class="p-2 rounded w-full text-lg"  
placeholder="Enter your text here"  bind:value={text} />

    <p class="text-md lg:text-lg   text-justify	">
        {@html text}
    </p>


	<button
		on:click={() => {createEmployee(new CardEntry(title, text, position)); cardsPromise = GetCards(); }}
		class="
    shadow-md hover:shadow-lg 
     text-lg p-2
     
     bg-blue-500 hover:bg-blue-700 
     text-white font-bold  rounded
     ">Eintrag speichern </button
	>

</div>