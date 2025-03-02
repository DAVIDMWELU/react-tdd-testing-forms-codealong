import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState("Medium");
  const [contact, setContact] = useState("");

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);
  const handleSizeChange = (e) => setSize(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);
  
  return (
    <div>
      <h1>Place an Order</h1>
      <form>
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>

        <div>
          <h3>Select Size</h3>
          <select value={size} onChange={handleSizeChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div>
          <h3>Your Selection</h3>
          <p>Size: {size}</p>
          <p>Toppings: Cheese {pepperoniIsChecked ? ", Pepperoni" : ""}</p>
        </div>

        <div>
          <h3>Contact Info</h3>
          <input
            type="text"
            placeholder="Enter your contact info"
            value={contact}
            onChange={handleContactChange}
          />
        </div>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default App;

