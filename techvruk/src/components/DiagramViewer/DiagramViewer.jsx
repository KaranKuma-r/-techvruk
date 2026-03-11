import { useState } from "react";
import "./DiagramViewer.css";

function DiagramViewer({ image, selectedComponent }) {

  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((prev) => prev + 0.2);
  const zoomOut = () => setZoom((prev) => prev - 0.2);
  const resetZoom = () => setZoom(1);

  return (
    <div className="viewer">

      <div className="controls">

        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={resetZoom}>Reset</button>

      </div>

      <div className="image-box">

        {image ? (
          <div className="image-wrapper">

            <img
              src={image.url}
              alt="diagram"
              style={{ transform: `scale(${zoom})` }}
            />

            {selectedComponent && (
              <div className="highlight-box">
                Component {selectedComponent}
              </div>
            )}

          </div>
        ) : (
          <p className="placeholder">
            Upload a diagram to view
          </p>
        )}

      </div>

    </div>
  );
}

export default DiagramViewer;