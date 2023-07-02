<script>
import { readable } from 'svelte/store';


 async function createEmployee(employee) {
    console.log("createEmployee is running 1");
    
      try {
    console.log("createEmployee is running 2");
    
    console.log(JSON.stringify(employee).replace(/"([^"]+)":/g, '$1:'));
        const response = await fetch('http://localhost:8080/employee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          //body: {title:"post try one",text:"Some text",type:"doing",date:"2023-06-22"}
          //body: ( 'post try one', 'Some text', 'doing', '2023-06-22')
    
          body: JSON.stringify(employee)
        });
    console.log("createEmployee is running 4 in try");
    
        if (response.ok) {
          console.log("createEmployee is running 5 in response.ok");
    
          const createdEmployee = await response.json();
          return createdEmployee;
        } else {
          console.log("createEmployee is running 6 in response-not-ok");
    
          throw new Error('Failed to create employee');
        }
        console.log("createEmployee is running9");
    
      } catch (error) {
        console.error('Error creating employee:', error);
        return null;
      }
    }



    async function AddCard() {
		const res = await fetch('http://localhost:8080/cards');
		let data = await res.json();

    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
	}

    

</script>