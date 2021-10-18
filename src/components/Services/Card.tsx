import { FC } from "react"
import "../Services/Services.scss"

interface props{
    heading:string
    image: any
    description: string
}

const Card:FC<props>= ({heading, image, description}) => {
    return (
        <div className="service-card" data-aos="fade-up">
        <h1 className="services-card-heading">{heading}</h1>
        <img src={image} alt="" className="services-card-image" />
        <p className="services-card-description">
          {description}
        </p>
      </div>
    )
}

export default Card
