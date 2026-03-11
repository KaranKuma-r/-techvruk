import { useEffect, useState } from "react";
import { getComponents } from "../../services/api";
import "./ComponentList.css";

function ComponentList({ selectedComponent, setSelectedComponent }) {

  const [components, setComponents] = useState([]);

  useEffect(() => {
    getComponents().then((data) => {
      setComponents(data);
    });
  }, []);

  return (
    <div className="component-sidebar">

      <h3>Components</h3>

      {components.map((item) => (

        <div
          key={item.id}
          className={`component-item ${
            selectedComponent === item.id ? "active" : ""
          }`}
          onClick={() => setSelectedComponent(item.id)}
        >
          {item.name}
        </div>

      ))}

    </div>
  );
}

export default ComponentList;