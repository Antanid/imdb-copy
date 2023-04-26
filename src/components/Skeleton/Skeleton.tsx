import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC  = ({ props }: any) => {
  return (
    <ContentLoader
      speed={1}
      width={280}
      height={320}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="14" ry="14" width="200" height="320" />
    </ContentLoader>
  );
};

export default Skeleton;
