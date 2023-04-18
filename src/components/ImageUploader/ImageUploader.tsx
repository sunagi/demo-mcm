import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import styles from "./index.module.css";

type Props = {};

export const ImageUploader: React.FC<Props> = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            {!imageList.length && (
              <>
                <div className={styles.noImage}>no image</div>
                <div className={styles.uploadBtn}>
                  <button
                    className={styles.btn}
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop
                  </button>
                </div>
              </>
            )}
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img className={styles.image} src={image.dataURL} alt="" />
                <div className={styles.buttons}>
                  <div className="image-item__btn-wrapper">
                    <button
                      className={styles.btn}
                      onClick={() => onImageUpdate(index)}
                    >
                      Update
                    </button>
                    <button
                      className={styles.removeBtn}
                      onClick={() => onImageRemove(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </>
  );
};
