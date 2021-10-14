import { FC } from "react"
import "../Services/Services.scss"

interface props{
    heading:string
    image: any
    description: string
}

const Card:FC<props>= ({heading, image, description}) => {
    return (
        <div className="card">
        <h1 className="card-heading">{heading}</h1>
        <img src={image} alt="" className="card-image" />
        <p className="card-description">
          {description}
        </p>
      </div>
    )
}

export default Card
