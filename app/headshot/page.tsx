import dynamic from "next/dynamic";

const CreativeEditorSDKWithNoSSR = dynamic(
  () => import("../components/headshotCanvas"),
  {
    ssr: false,
  }
);

export default CreativeEditorSDKWithNoSSR;
