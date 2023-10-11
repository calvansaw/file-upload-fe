import { useEffect, useState } from "react";
import { publicFiles } from "../../services/public";

const PublicImage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    publicFiles().then((res) => {
      setImages(res.data.fileUrls);
    });
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

export default PublicImage;
