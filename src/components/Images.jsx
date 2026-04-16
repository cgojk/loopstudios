

export default function Images(props) {
  
const {mobile, desktop, imageAlt, title} = props;

  return (
         <div className="gallery__item">

            <picture>
                <source media ="(min-width:1150px)" srcSet={desktop}/>
                <img src={mobile}alt={imageAlt} className="gallery__image"/>
               
            </picture>
            <h2 className="image__title">{title}</h2>
            </div>
  );
}

   
