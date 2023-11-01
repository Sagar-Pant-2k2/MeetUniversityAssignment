import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import Square from './components/Square'
import Grid from './components/Grid'

const App = ()=>{
   const [state,setState] = useState(Array.from({length:9},(_,index)=>""));
   const [order,setOrder] = useState([]);
   
  const makeOrange = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    
    if (order.length > 0) {
      
      setOrder((order) => {
        
        setState((state)=>{
          const newState = [...state];
          newState[order[order.length-1]]="orange";
          return newState;
        })
        const newOrder = [...order];
        newOrder.pop();
        return newOrder;
      });
      

  
    }
  };
  
  const GridItems = state.map((_, index) => (
      <Square key={index} bgcolor={state[index]} onTouch={async () => {

          setState((prevState) => {
            const newState = [...prevState];
            newState[index] = 'lightgreen';
    
            setOrder((prevOrder) => {
              // Check if the index is already in the order array
              if (prevOrder.includes(index)) {
                return prevOrder;
              }
    
              // If it's not in the order array, add it
              const newOrder = [...prevOrder, index];
              return newOrder;
            });
    
            return newState;
          });

          if(index === 8) {
            const len = order.length;
           
            for(let i=0;i<=len;i++) {  
              await makeOrange();
            }
            
          }
     
      }}
    ></Square>
    ));
  
    return (    
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <h1>MeetUniversity assignment</h1>
          <Grid>
            {GridItems}
          </Grid>
          <button onClick={()=>{
            setOrder(()=>[]);
            setState(Array.from({length:9},(_,index)=>""));
          }} style={{margin:"10px",backgroundColor:'turquoise',color:"white"}}>
            Replay
          </button>
        </div>
      );

    }



export default App;
