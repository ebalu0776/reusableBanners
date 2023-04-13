import './index.css'

const BannerCardItem = props => {
  const {bannerCardDetails} = props

  const {headerText, description, className} = bannerCardDetails

  return (
    <li className={`${className} card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCardItem
