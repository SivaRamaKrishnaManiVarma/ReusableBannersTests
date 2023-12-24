// Write your code here.
import './index.css/'

const cardsList = props => {
  const {banner} = props
  const {heading, para, className} = banner

  return (
    <li>
      <div className={className}>
        <h1 className="heading">{heading}</h1>
        <p className="para">{para}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}
export default cardsList
