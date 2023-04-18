import { Header } from "@/components/Header";
import { ImageUploader } from "@/components/ImageUploader/ImageUploader";
import styles from "@/styles/addCopyright.module.css";

export default function Add() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <h2> ADD Copyright NFT </h2>
        <form className={styles.form}>
          <div className={styles.uploader}>
            <ImageUploader />
          </div>
          <div>
            <div className={styles.inputs}>
              <p className={styles.inputName}>name</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <br />
              <p className={styles.inputName}>song data</p>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />

              <br />
              <p className={styles.inputName}>wallet address</p>
              <textarea
                className="textarea textarea-bordered"
                placeholder="ex) [0x90D9306105aB6b58a8eccCc65ef38F725770B7c5,0x90D9306105aB6b58a8eccCc65ef38F725770B7dd]"
              ></textarea>
              <br />
              <p className={styles.inputName}>rates</p>
              <textarea
                className="textarea textarea-bordered"
                placeholder="ex) [30%, 70%]"
              ></textarea>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <button className="btn btn-success">　　Mint　　</button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
