import { useState } from 'react'
import './App.css'
import { db } from './firebase/config';
import { collection, getDocs,updateDoc,doc,addDoc,deleteDoc} from 'firebase/firestore/lite';


// Get a list of cities from your database
async function getCities(db) {


  const citiesCol = collection(db, 'products');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(citySnapshot);
  return cityList;

    // const data={type:'Mobiles',price:50000,Name:'OnePlus nord'}

    // addData(data)
}

async function addData(data){

 const docRef=await addDoc(collection(db,'products'),data)
 console.log(docRef.id);
}

function updateData(data){
  
}






function App() {
  const [count, setCount] = useState(0)




  return (
    
      <div>
        <button onClick={()=>{getCities(db)}} >click me</button>
      </div>
    
  )
}

export default App
