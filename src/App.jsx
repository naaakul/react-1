import React, { useState } from "react";
import Card from "./components/Card";

function App() {

  const data = [{name : 'lisa', pro:"artist", img : "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend : false},
  {name : 'gigi', pro:"star", img : "https://images.unsplash.com/photo-1621784563330-caee0b138a00?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend : false},
  {name : 'doll', pro:"model", img : "https://images.unsplash.com/photo-1621086893822-ca4d5a70bf36?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend : false},
  {name : 'chichi', pro:"coder", img : "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend : false}]

  const [realData, setRealData] = useState(data);
  // state jaha banti hai wahi modify ki jaa sakti hai
  const handelFriendsButton = (cardIndex)=>{
    setRealData((pre)=> {
      return pre.map((item,index)=>{
        if(index === cardIndex){
          return {...item, friend : !item.friend}
        }
        return item;
      })
    })
  }

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {realData.map((item,index)=>(
          <Card key={index} index={index} handleClick={handelFriendsButton} values={item}/>
        ))}
      </div>
    </>
  );
}

export default App;