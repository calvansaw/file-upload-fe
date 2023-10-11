import { useState } from "react";
import { upload } from "../../services/upload";

const Upload = () => {
  const [dataUrl, setDataUrl] = useState();
  const [fileName, setFileName] = useState("");
  const [check, setCheck] = useState(true);

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (err) => {
        console.log(err);
      };
    });
  };

  const handleChange = (e) => {
    console.log("e.target.files: ", e.target.files);
    const file = e.target.files[0];
    convertFileToBase64(file)
      .then((res) => {
        setDataUrl(res);
        setFileName(file.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    const payload = {
      public: check,
      fileName: fileName,
      content: dataUrl,
    };
    upload(payload)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheck = () => {
    setCheck((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "32px" }}>
      <div style={{ padding: "32px" }}>
        <input onChange={handleChange} type="file" />
        <div style={{ padding: "32px" }}>
          <img style={{ maxWidth: "500px" }} src={dataUrl} alt="" />
        </div>
      </div>
      <div style={{ padding: "32px" }}>
        <button onClick={handleClick}>Upload</button>
        <div style={{ display: "flex" }}>
          <p>is Public ?</p>
          <input type="checkbox" checked={check} onClick={handleCheck} />
        </div>
      </div>
    </div>
  );
};

export default Upload;
