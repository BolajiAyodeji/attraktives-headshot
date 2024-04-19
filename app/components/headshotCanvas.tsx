"use client";
import { useEffect, useRef, useState, ChangeEvent } from "react";
import CreativeEngine, { MimeType, ExportOptions } from "@cesdk/engine";
import { grids } from "@/app/utils/grids";

const config = {
  license: process.env.NEXT_PUBLIC_CESDK_LICENSE,
  userId: "guides-user",
  baseURL: "https://cdn.img.ly/packages/imgly/cesdk-engine/1.24.0/assets",
};

const defaultImage =
  "https://raw.githubusercontent.com/BolajiAyodeji/attraktives-headshot/main/public/headshot.png";

export default function BgAddPage() {
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

      // Display multiple pages in the scene (as grid).
      for (let i = 1; i <= 6; i++) {
        // Create a page block and add it to the scene.
        const page = engine.block.create("page");
        engine.block.setWidth(page, 500);
        engine.block.setHeight(page, 500);
        engine.block.setPositionX(page, grids[i].x);
        engine.block.setPositionY(page, grids[i].y);
        engine.block.appendChild(scene, page);

        // Create a graphic block, set the shape/size,
        // get the color fill block of the page,
        // add a color to the block,
        // and add the block to the scene's page.
        const block = engine.block.create("graphic");
        engine.block.setShape(block, engine.block.createShape("rect"));
        engine.block.setFill(block, engine.block.createFill("color"));
        engine.block.setWidth(block, 500);
        engine.block.setHeight(block, 500);
        const colorFill = engine.block.getFill(page);
        engine.block.setColor(colorFill, "fill/color/value", grids[i].color);
        engine.block.appendChild(page, block);

        // Create a block with an image fill
        // and add it to the scene's page.
        const imageFill = engine.block.createFill("image");
        engine.block.setString(
          imageFill,
          "fill/image/imageFileURI",
          imagePath || defaultImage
        );
        engine.block.setFill(block, imageFill);
      }

      // Export all pages on the scene.
      const exportButton = document.getElementById("export_button")!;
      exportButton.removeAttribute("disabled");
      exportButton.onclick = async () => {
        // Specify the image format (PNG).
        const mimeType = "image/png" as MimeType;
        // Specify compression level (original default for PNG is 5).
        const options: ExportOptions = {
          pngCompressionLevel: 9,
        };

        const pages = engine.scene.getPages();
        // Loop through all the pages on the scene.
        pages.map(async (page, index) => {
          // Download multiple Blob files as PNG for each page.
          const blob = await engine.block.export(page, mimeType, options);
          const anchor = document.createElement("a");
          anchor.href = URL.createObjectURL(blob);
          anchor.download = `attraktives-hs-${index}.png`;
          anchor.click();
        });
      };
    });
  };

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const blobUrl = URL.createObjectURL(file);
      setImagePath(blobUrl);
    }
  };

  useEffect(() => {
    initializeCESDK(imagePath);
  }, [imagePath]);

  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="upload-headshot" className="hidden">
        Upload your image
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        id="upload-headshot"
        name="upload-headshot"
        className="mt-6 text-white border-2 border-white rounded-full 
        file:mr-3 file:px-3 file:py-2 file:border-0 file:rounded-full
        file:bg-white file:text-black hover:file:bg-blue-200"
        onChange={uploadImage}
        required
      />
      <button
        id="export_button"
        className="w-80 lg:w-52 px-6 py-4 mt-2 text-center bg-white text-black hover:bg-blue-200"
      >
        Download Pages &nbsp; ↯
      </button>
      <div
        ref={cesdk_container}
        style={{ width: "100vw", height: "100vh" }}
        className=""
      ></div>
    </div>
  );
}
