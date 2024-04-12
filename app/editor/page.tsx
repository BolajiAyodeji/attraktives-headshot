"use client";
import { useEffect, useRef } from "react";
import CreativeEditorSDK from "@cesdk/cesdk-js";

export default function Editor() {
  const config = {
    license: process.env.NEXT_PUBLIC_CESDK_LICENSE,
    userId: "guides-user",
    baseURL: "https://cdn.img.ly/packages/imgly/cesdk-js/1.24.0/assets",
    callbacks: { onUpload: "local" as const },
  };

  const cesdk_container = useRef(null);
  useEffect(() => {
    if (cesdk_container.current) {
      CreativeEditorSDK.create(cesdk_container.current, config).then(
        async (instance) => {
          instance.addDefaultAssetSources();
          instance.addDemoAssetSources({ sceneMode: "Design" });
          await instance.createDesignScene();
        }
      );
    }
  });

  return (
    <div
      ref={cesdk_container}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}
