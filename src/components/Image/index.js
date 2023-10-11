import { useEffect, useState } from "react";
import { files } from "../../services/files";
import { useNavigate } from "react-router-dom";

const Image = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (isLoggedIn) {
      files().then((res) => {
        setImages(res.data.fileUrls);
      });
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        padding: "40px",
        width: "100%",
      }}
    >
      {images.map((url, index) => {
        return <img key={index} alt="" src={url} style={{ width: "500px" }} />;
      })}
    </div>
  );
};

export default Image;
