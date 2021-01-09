import React from "react";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";
import Swal from "sweetalert2";

function CloudinaryUploader({ uploadedImage }) {
  const successCallBack = (result) => {
    uploadedImage(result);
  };
  const failureCallBack = (error) => {
    Swal.fire("Oops...", error, "error");
  };
  return (
    <>
      <WidgetLoader />
      <Widget
        sources={[
          "local",
          "camera",
          "dropbox",
          "google_drive",
          "instagram",
          "facebook",
          "image_search",
          "shutterstock",
          "url",
        ]}
        sourceKeys={{
          dropboxAppKey: "1dsf42dl1i2",
          instagramClientId: "d7aadf962m",
        }}
        resourceType={"image"}
        cloudName={"coolps811"}
        uploadPreset={"hbroqmws"}
        buttonText={"Upload Image"}
        style={{
          color: "white",
          border: "none",
          width: "125px",
          backgroundColor: "#00a7ff",
          borderRadius: "4px",
          height: "35px",
          marginBottom: "10px",
        }}
        folder={"petproject"}
        onSuccess={successCallBack}
        onFailure={failureCallBack}
        logging={true}
        use_filename={true}
      />
    </>
  );
}

export default CloudinaryUploader;
