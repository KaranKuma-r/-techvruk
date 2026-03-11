import { useState } from "react";
import "./UploadBox.css";

function UploadBox({ setImage, image }) {

  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file) => {

    if (file && file.type.startsWith("image/")) {

      const imageURL = URL.createObjectURL(file);

      setImage({
        file,
        url: imageURL
      });

    }

  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  return (
    <div
      className={`upload-box ${dragActive ? "drag-active" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >

      <p>Drag & Drop Diagram Here</p>
      <p>or</p>

      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleUpload}
      />

      {image && (
        <p className="file-name">
          Uploaded: {image.file.name}
        </p>
      )}

    </div>
  );
}

export default UploadBox;