import { useState } from "react";
import UploadBox from "../components/UploadBox/UploadBox";
import DiagramViewer from "../components/DiagramViewer/DiagramViewer";
import ComponentList from "../components/ComponentList/ComponentList";
import "./Dashboard.css";

function Dashboard() {

  const [image, setImage] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="dashboard">

      <h2 className="title">Diagram Dashboard</h2>

      <UploadBox setImage={setImage} image={image} />

      <div className="dashboard-layout">

        <DiagramViewer
          image={image}
          selectedComponent={selectedComponent}
        />

        <ComponentList
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />

      </div>

    </div>
  );
}

export default Dashboard;