import MobileDevSvg from "../../assets/mobile-dev.svg";
import WebDevSvg from "../../assets/web-dev.svg";
import ServerDevSvg from "../../assets/server.svg";
import "../Services/Services.scss";
import Card from "./Card";

interface services{
    heading:string
    image: any
    description: string
}

const Services = () => {
  const services:services[] = [
    {
      heading: "Mobile",
      image: MobileDevSvg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        heading: "Web",
        image: WebDevSvg,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        heading: "Cloud",
        image: ServerDevSvg,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }
  ];
  return (
    <div className="services-container">
      <h1 className="heading">
            &lt;<span className="code-tag">H1</span>&gt; SERVICES &lt;/
            <span className="code-tag">H1</span>&gt;
          </h1>
      <div className="services-cards-container">
      {
         services.map(service=>(
             <Card heading={service.heading} image={service.image} description={service.description}/>
         ))
     }
      </div>

    </div>
  );
};

export default Services;
