import { useContext, useEffect, useState } from 'react'
import './App.css'             
import Routing from './AppRouter'  
import { DataContext } from './components/DataProvider/DataProvider'
import { Type } from './Utility/ActionType'
import { auth } from './Utility/firebase'
function App() {
const [user, dispatch]=useContext(DataContext);
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: Type.SET_USER, 
          user:authUser,
         });
      } else{   
        dispatch({
          type: Type.SET_USER, 
        user:null,
        });
      }
    })
    
  }, [])
  
  return (
    <>
    <div>
      <Routing/>
    
    </div>
          </>
  )
}

export default App
