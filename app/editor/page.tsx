import dynamic from "next/dynamic";

const CreativeEditorSDKWithNoSSR = dynamic(
  () => import("../components/editorCanvas"),
  {
    ssr: false,
  }
);

export default CreativeEditorSDKWithNoSSR;
