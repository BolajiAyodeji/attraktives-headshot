"use client";

import dynamic from "next/dynamic";

const CreativeEditorSDKWithNoSSR = dynamic(() => import("./headshotCanvas"), {
  ssr: false,
});

export default CreativeEditorSDKWithNoSSR;
