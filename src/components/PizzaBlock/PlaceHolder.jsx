import ContentLoader from "react-content-loader";

export function PlaceHolder() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="139" cy="139" r="139" />
      <rect x="0" y="290" rx="0" ry="0" width="280" height="30" />
      <rect x="0" y="330" rx="0" ry="0" width="280" height="60" />
      <rect x="0" y="411" rx="0" ry="0" width="109" height="30" />
      <rect x="141" y="400" rx="25" ry="25" width="140" height="46" />
      <rect x="209" y="432" rx="0" ry="0" width="0" height="1" />
    </ContentLoader>
  );
}
