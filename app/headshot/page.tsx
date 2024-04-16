"use client";
import { useEffect, useRef } from "react";
import CreativeEngine from "@cesdk/engine";
import { gridLayout } from "@/app/types/headshot";

const config = {
  license: process.env.NEXT_PUBLIC_CESDK_LICENSE,
  userId: "guides-user",
  baseURL: "https://cdn.img.ly/packages/imgly/cesdk-engine/1.24.0/assets",
};

const headshotImage =
  "https://res.cloudinary.com/bolaji/image/upload/v1713033942/imgly/headshot_ofe5m4.png";

export default function GenerateHeadshot() {
  const cesdk_container = useRef<HTMLDivElement>(null);

  const grids: gridLayout = {
    1: { x: -800, y: -50, color: { r: 1.0, g: 0.0, b: 0.0, a: 1.0 } },
    2: { x: -250, y: -50, color: { r: 0.0, g: 0.0, b: 1.0, a: 1.0 } },
    3: { x: 300, y: -50, color: { r: 0.0, g: 1.0, b: 0.0, a: 1.0 } },
    4: { x: -800, y: 500, color: { r: 1.0, g: 1.0, b: 0.0, a: 1.0 } },
    5: { x: -250, y: 500, color: { r: 1.0, g: 0.0, b: 1.0, a: 1.0 } },
    6: { x: 300, y: 500, color: { r: 1.0, g: 0.5, b: 0.0, a: 1.0 } },
  };

  useEffect(() => {
    CreativeEngine.init(config).then((engine) => {
      cesdk_container.current!.append(engine.element);

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
        engine.block.setHeight(block, 500);
        engine.block.appendChild(page, block);

        const imageFill = engine.block.createFill("image");
        engine.block.setString(
          imageFill,
          "fill/image/imageFileURI",
          headshotImage
        );

        engine.block.destroy(engine.block.getFill(block));
        engine.block.setFill(block, imageFill);
      }
    });
  });

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <label htmlFor="upload-headshot" className=""></label>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/svg"
        id="upload-headshot"
        name="upload-headshot"
      ></input>
      <div
        ref={cesdk_container}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </div>
  );
}
