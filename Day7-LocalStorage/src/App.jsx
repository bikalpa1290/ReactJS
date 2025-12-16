import React from 'react'
import { useState } from 'react';

const App = () => {
    const user=localStorage.getItem("userName");
    const users ={
        Name:"Bikalpa",
        Age:20,
        Salary:0.00,
        potential:"peakkk"
    }
    localStorage.setItem("Userdetail",JSON.stringify(users))
    console.log(user);
    console.log(localStorage.getItem("Userdetail"));
    console.log("11111------------------");
    const userDetail=localStorage.getItem("Userdetail")
    console.log(JSON.parse(userDetail));

  return (
    <div>
    </div>
  )
}

export default App