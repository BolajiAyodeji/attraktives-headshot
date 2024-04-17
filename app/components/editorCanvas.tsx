"use client";
import { useEffect, useRef } from "react";
import { UserButton } from "@clerk/nextjs";
import CreativeEditorSDK, { Configuration } from "@cesdk/cesdk-js";
import { useRouter } from "next/navigation";

export default function EditorPage() {
  const cesdk_container = useRef(null);
  const router = useRouter();

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
    callbacks: {
      onUpload: "local",
      onBack: () => {
        router.push("/start");
      },
      onClose: () => {
        router.push("/start");
      },
    },
  };

  useEffect(() => {
    const container = cesdk_container.current!;
    if (container) {
      CreativeEditorSDK.create(container, config).then(async (instance) => {
        instance.addDefaultAssetSources();
        instance.addDemoAssetSources({ sceneMode: "Design" });
        await instance.createDesignScene();
      });
    }
  });

  return (
    <>
      <div className="flex flex-col items-center p-2">
        <UserButton afterSignOutUrl={"/start"} />
      </div>
      <div
        ref={cesdk_container}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </>
  );
}
