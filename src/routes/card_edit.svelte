<script lang="ts">

import { do_cards_need_update } from "../store.js";
import { did_last_save_card_return_ok } from "../store.js";

   export let title = "";
    export let text = "";
    export let id = false;
    export let position = 12345;
     export let edit_is_visible;
     let changing;
     let title_change;
     let text_change;
let new_title;
let new_text;


     

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



async function createCard(card) {    
      try {
    console.log("createCard is running try. Date: ", Date.now());
    console.log(JSON.stringify(card));
        const response = await fetch('http://localhost:8080/cards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(card)
        });
    
        if (response.ok) {
          console.log("createCard is running in response.ok. Date: ", Date.now());
          const createdCard = await response.json();
          changeDidLastSaveCardReturnOkToTrue();
          return createdCard;
        } else {
          console.log("createCard is running in response-not-ok");
          throw new Error('Failed to create card');
        }
      } catch (error) {
        console.error('Error creating card:', error);
        return null;
      }
    }

    async function editCard(card) {    
      try {
    console.log("editCard is running try");
    console.log(JSON.stringify(card));
        const response = await fetch('http://localhost:8080/cards/'+id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(card)
        });
    
        if (response.ok) {
          console.log("editCard is running in response.ok");
          const editedCard = await response.json();
          return editedCard;
        } else {
          console.log("editCard is running in response-not-ok");
          throw new Error('Failed to edit card');
        }
      } catch (error) {
        console.error('Error editing card:', error);
        return null;
      }
    }


    let do_cards_need_update_local;
    do_cards_need_update.subscribe((value) => {
      do_cards_need_update_local = value;
	});

function changeDoCardsNeedUpdateToTrue(){
  do_cards_need_update.update((n) => true);
}


let did_last_save_card_return_ok_local;
    did_last_save_card_return_ok.subscribe((value) => {
      did_last_save_card_return_ok_local = value;
	});

function changeDidLastSaveCardReturnOkToTrue(){
  did_last_save_card_return_ok.update((n) => true);
}

   
    
    </script>

<div class=" 
relative

2xl5:w-50/100  
2xl3:w-60/100 2xl:w-70/100 
xl:w-80/100 lg:w-90/100  
md:w-90/100 w-95/100  

mx-auto   my-10 p-4 
pb-12
 overflow-hidden 
 overflow-ellipsis 
  break-words
  border-2 border-gray-300  bg-gray-100 
  rounded-lg shadow-lg
  ">


  <button
  on:click={() => {
    changeDoCardsNeedUpdateToTrue();
    }}
  class="
  shadow-md p-2
   bg-blue-500 hover:bg-blue-700 
   text-white font-bold  rounded
   ">changeDoCardsNeedUpdateToTrue </button>
   <br><br>
   <h1> do_cards_need_update_local = {do_cards_need_update_local}</h1>
      <br><br>
    
    
      <button
      on:click={() => {
        changeDidLastSaveCardReturnOkToTrue();
        }}
      class="
      shadow-md p-2
       bg-blue-500 hover:bg-blue-700 
       text-white font-bold  rounded
       ">changeDidLastSaveCardReturnOkToTrue </button>
       <br><br>
       <h1> did_last_save_card_return_ok_local = {did_last_save_card_return_ok_local}</h1>
          <br><br>


  title change {title_change}<br>
  title change {text_change}<br>
  position {position}<br>

  {#if edit_is_visible==true }
  window 1 create new card
  <form on:submit>
  <input autofocus class="my-2  rounded w-full text-2xl p-1" type="text" 
  placeholder="Enter your title here" bind:value={title} />
  <br>
  <textarea rows="5" class="my-2 rounded w-full text-lg p-1"  
  placeholder="Enter your text here"  bind:value={text} />
<br>
  
	<button type="submit"
  on:click={() => {createCard(new CardEntry(title, text, 123)); /* cardsPromise = GetCards();**/ title = text = "";  edit_is_visible = false;}}
  class="
  shadow-md hover:shadow-lg 
   text-lg p-2
   
   bg-blue-500 hover:bg-blue-700 
   text-white font-bold  rounded
   ">Eintrag speichern </button>
  </form>
   {:else if changing ==true}
window 2 edit/change exisiting card
   <input class="my-2  rounded w-full text-2xl p-1" type="text" 
   placeholder="Enter your title here" bind:value={title_change} />
   <br>
   <textarea rows="5" class="my-2 rounded w-full text-lg p-1"  
   placeholder="Enter your text here"  bind:value={text_change} />
 <br>

   <button on:click={() => {editCard(new CardEntry(title_change, text_change, 123)); changing=false; }} 
    class="
shadow-md hover:shadow-lg 
 text-lg p-1
 absolute  bottom-2 right-2
  bg-red-500 hover:bg-blue-700 
 text-white font-bold  rounded
 ">save/edit card</button> 
  {:else }
  window 3 display values of finished card
    <p class="text-2xl lg:text-3xl  text-center ">
        {title}
    </p>
    <br>
    <p class="text-md lg:text-lg   text-justify	">
        {@html text}
    </p>

    <button on:click={() => {changing=true; title_change = title; text_change = text;}} 
      class="
  shadow-md hover:shadow-lg 
   text-lg p-1
   absolute  bottom-2 left-2
    bg-green-500 hover:bg-blue-700 
   text-white font-bold  rounded
   ">edit +</button> 

  
    {/if}

</div>