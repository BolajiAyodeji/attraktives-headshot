"use client";
import { useEffect, useRef } from "react";
import { UserButton } from "@clerk/nextjs";
import CreativeEditorSDK, { Configuration } from "@cesdk/cesdk-js";

export default function EditorPage() {
  const config: Configuration = {
    license: process.env.NEXT_PUBLIC_CESDK_LICENSE,
    userId: "guides-user",
    baseURL: "https://cdn.img.ly/packages/imgly/cesdk-js/1.24.0/assets",
    ui: {
      elements: {
        view: "default",
        navigation: {
          show: true,
          action: {
            close: true,
            back: true,
            load: true,
            save: true,
            export: {
              show: true,
              format: ["application/pdf", "image/png"],
            },
            download: true,
          },
        },
        panels: {
          settings: {
            show: true,
          },
        },
      },
    },
    callbacks: { onUpload: "local" },
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
    <>
      <div className="flex flex-col items-center p-2">
        <UserButton />
      </div>
      <div
        ref={cesdk_container}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </>
  );
}
