import "../style/skeleton.css";

function SkeletonLoader() {
  return (
    <div className="loading">
      <div className="img-load"></div>
      <div className="title-load"></div>
      <div className="desc-load">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default SkeletonLoader;