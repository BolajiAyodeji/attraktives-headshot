"use client";
import { useState, ChangeEvent } from "react";
import Image from "next/image";
import imglyRemoveBackground, {
  preload,
  Config,
} from "@imgly/background-removal";
import { Progress } from "@/app/types";

// Preload all model assets for faster loading.
preload().then(() => {
  console.log("Assets preloading successful!");
});

export default function BgRemovePage() {
  const [initialImagePath, setInitialImagePath] = useState<string>("");
  const [finalImagePath, setFinalImagePath] = useState<string>("");
  const [progress, setProgress] = useState<Progress>();
  const [loading, setLoading] = useState<boolean>(false);

  const config: Config = {
    progress: (key, current, total) => {
      setProgress({
        key: key.replace("fetch:/", ""),
        current,
        total,
      });
    },
  };

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setFinalImagePath("");
    if (event.target.files) {
      const file = event.target.files[0];
      const initialBlobUrl = URL.createObjectURL(file);
      setInitialImagePath(initialBlobUrl);

      imglyRemoveBackground(initialBlobUrl, config)
        .then((blobUrl) => {
          const finalBlobUrl = URL.createObjectURL(blobUrl);
          setFinalImagePath(finalBlobUrl);
        })
        .catch((error) => {
          console.error("Something went wrong.", error);
        })
        .finally(() => {
          setLoading(false);
          // todo: remove file from the FileList object.
        });
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <label htmlFor="upload-image" className="hidden">
        Upload your image
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/webp"
        id="upload-image"
        name="upload-image"
        className="text-white border-2 border-white rounded-full 
        file:mr-3 file:px-3 file:py-2 file:border-0 
      file:bg-white file:text-black hover:file:bg-blue-200"
        onChange={uploadImage}
        disabled={loading}
      />

      {initialImagePath && (
        <div className="grid grid-cols-2 gap-8 m-12">
          <Image
            src={initialImagePath}
            alt="Preview Initial Image"
            width={400}
            height={400}
            className="border-2 border-white"
          />
          <Image
            src={!finalImagePath ? "/loading.gif" : finalImagePath}
            alt="Preview Final Image"
            width={400}
            height={400}
            className={`${finalImagePath ? "border-2 border-white" : ""}`}
          />
        </div>
      )}

      {initialImagePath && !finalImagePath && (
        <>
          <p>
            Hang on; this will take quite some seconds if this is your first
            time here :‑).
          </p>
          {progress && (
            <p className="mt-6">
              Downloading: [
              <span className="text-blue-500">{progress.key}</span>] (
              {progress.current} of {progress.total})
              <span className="inline-block ml-2 animate-ping">...</span>
            </p>
          )}
        </>
      )}

      {finalImagePath && (
        <a
          className="w-80 lg:w-52 px-6 py-4 text-center bg-white text-black hover:bg-blue-200"
          href={finalImagePath}
          download="attraktives-hs"
        >
          Download Image
        </a>
      )}
    </div>
  );
}
