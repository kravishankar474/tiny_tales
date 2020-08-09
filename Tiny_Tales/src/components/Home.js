import React from 'react'

function Home() {
    return (
    <div>
  <form>
      <label>Enter Any Number :  </label>
      <input type="number" placeholder="Enter Number" name="Number"></input>
      <button onSubmit="">Submit</button>
  </form>
 </div>
);
    }
export default Home;