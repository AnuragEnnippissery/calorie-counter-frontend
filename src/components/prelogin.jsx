import { useState } from "react";

function PreLogin() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [result, setResult] = useState(null);

  let [bmr,setBmr]=useState("")
  let maintain;

  const handleSubmit = (e) => {
    e.preventDefault();

    // store submitted values
    setResult({
      age,
      height,
      weight,
    });

    // reset form inputs
    setAge("");
    setHeight("");
    setWeight("");
  };
  function BMR(weight,height,age){
    return bmr=(10*weight)+(6.25*height)-(5*age)+5;
  }

  function calculateMaintainance(bmr){
    return maintain= bmr*1.2
  }
  return (
    <main>
      <h1>Welcome User</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {result && (
        <>
        <div>
          <h3>Observation</h3>
          <p>Age: {result.age}</p>
          <p>Height: {result.height}</p>
          <p>Weight: {result.weight}</p>
        </div>
        <div>
           <p>BMR of the user is :  {BMR(result.weight,result.height,result.age)}</p>
           <p>Maintainance calorie of the user is : {calculateMaintainance(bmr)}</p>
            
        </div>
        </>
       
      )}
    </main>
  );
}

export default PreLogin;
