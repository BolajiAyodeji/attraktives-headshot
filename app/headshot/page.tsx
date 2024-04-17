"use client";
import { useEffect, useRef, useState, ChangeEvent } from "react";
import Image from "next/image";
import CreativeEngine from "@cesdk/engine";
import { grids } from "@/app/utils/grids";

const config = {
  license: process.env.NEXT_PUBLIC_CESDK_LICENSE,
  userId: "guides-user",
  baseURL: "https://cdn.img.ly/packages/imgly/cesdk-engine/1.24.0/assets",
};

const defaultImage =
  "https://res.cloudinary.com/bolaji/image/upload/v1713033942/imgly/headshot_ofe5m4.png";

export default function GenerateHeadshot() {
  const [imagePath, setImagePath] = useState<string>("");
  const cesdk_container = useRef<HTMLDivElement>(null);

  const initializeCESDK = (imagePath: string) => {
    CreativeEngine.init(config).then((engine) => {
      // Append the engine element to the container.
      const container = cesdk_container.current!;
      container.innerHTML = "";
      container.append(engine.element);

      // Create a new scene.
      let scene = engine.scene.create();

      for (let i = 1; i <= 6; i++) {
        // Create a page block and add it to the scene.
        const page = engine.block.create("page");
        engine.block.setWidth(page, 500);
        engine.block.setHeight(page, 500);
        engine.block.setPositionX(page, grids[i].x);
        engine.block.setPositionY(page, grids[i].y);
        engine.block.appendChild(scene, page);

        // Get the color fill block of the page.
        const colorFill = engine.block.getFill(page);

        // Create an graphic block with an image fill
        // and add it to the scene's page.
        const block = engine.block.create("graphic");
        engine.block.setShape(block, engine.block.createShape("rect"));
        engine.block.setFill(block, engine.block.createFill("color"));
        engine.block.setColor(colorFill, "fill/color/value", grids[i].color);
        engine.block.setWidth(block, 500);
        engine.block.setHeight(block, 480);
        engine.block.setPositionX(block, 0);
        engine.block.setPositionY(block, 20); // For some extra top padding
        engine.block.appendChild(page, block);

        const imageFill = engine.block.createFill("image");
        engine.block.setString(
          imageFill,
          "fill/image/imageFileURI",
          imagePath || defaultImage
        );

        engine.block.destroy(engine.block.getFill(block));
        engine.block.setFill(block, imageFill);
      }
    });
  };

  const uploadImage = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      const file = event.target.files[0];
      setImagePath(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    initializeCESDK(imagePath);
  }, [imagePath]);

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="upload-headshot" className="hidden">
        Upload your image
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        id="upload-headshot"
        name="upload-headshot"
        className="p-10"
        onChange={uploadImage}
      />
      {/* {imagePath && (
        <Image src={imagePath} alt="Preview Image" width={200} height={200} />
      )} */}
      <div
        ref={cesdk_container}
        style={{ width: "100vw", height: "100vh" }}
        className=""
      ></div>
    </div>
  );
}
