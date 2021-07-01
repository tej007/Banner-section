// Write your code here.
const BannerCardItem = props => {
  const {bannerCardData} = props
  const {headerText, description, className} = bannerCardData

  return (
    <div className={`${className} banner-section`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-btn" type="button">
          Show More
        </button>
      </div>
    </div>
  )
}
export default BannerCardItem
