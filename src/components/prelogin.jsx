import { useState } from "react";
import './prelogin.css'
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
      <section className="section">
           <form onSubmit={handleSubmit} className="form">
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
            <div className="info">
              <h3>What is BMR ?</h3>
              <p>Basal Metabolic Rate (BMR) is the minimum number of calories your body requires to perform essential, 
                life-sustaining functions—such as breathing, circulation, and cell production—while at complete rest. 
                It accounts for 60-70% of daily energy expenditure, making it a critical factor for weight management. </p>
              <h3>How is BMR calculated ?</h3>
              <p>Basal Metabolic Rate (BMR) is calculated by estimating the calories burned at rest based on age, sex, height, and weight, 
                with the Mifflin-St Jeor equation being the most accurate commonly used formula 
                (Men: \(10\times \text(kg)+6.25\times \text(cm)-5\times \text(age)+5\);
                 Women: \(10\times \text(kg)+6.25\times \text(cm)-5\times \text(age)-161\)).</p>
              <h3>What is Maintenance Calorie ?</h3>
              <p></p>
              <h3>How is Maintenance Calorie Calculated ?</h3>
              <p></p>
            </div>
      </section>
     

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
           <p>Maintenance calorie of the user is : {calculateMaintainance(bmr)}</p>
            
        </div>
        </>
       
      )}
    </main>
  );
}

export default PreLogin;
