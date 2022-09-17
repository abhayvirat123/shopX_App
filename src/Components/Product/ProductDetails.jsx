import React from 'react';
import {useParams} from 'react-router-dom';
import Products from '../../data.json';

function ProductDetails() {
    let param=useParams()
    let details=Products[param.id-1]

  return (
    <div style={{marginTop:"120px"}}>
        
                <div className="information">
                    <div className="information__header">{details.title}</div>
                    <div className="information__category">Brand: {details.category}</div>
                  
                        <div className="information__rating">
                            {/* <Rating maxRating={5} rating={details.rating.value} /> */}
                            <div className="information__rating-label">{details.rating.count} ratings</div>
                        </div>                   
                        <div className="information__pricing">
                            <div className="information__price">
                                <span className="information__label">M.R.P. : </span>
                                {/* <CurrencyFormat
                                    className="details-card__amount strikethrough"
                                    currencyCode={details.price.currency}
                                    value={basePrice}
                                /> */}
                            </div>
                            <div className="information__price">
                                <span className="information__label">Price. : </span>
                                {/* <CurrencyFormat
                                    className="details-card__amount"
                                    currencyCode={details.price.currency}
                                    value={finalPrice}
                                /> */}
                            </div>
                            <div>
                                <span className="information__label">You Save : </span>
                                {details.price.discount}
                            </div>
                        </div>
              

                    {/* <AddToCard details={details} /> */}


                    <div className="information__specs">
                        {details.specs &&
                            details.specs.map((spec, i) => (
                                <div className="information__spec" key={i}>
                                    <span> {spec.name}</span> : <span>{spec.value}</span>
                                </div>
                            ))}
                    </div>

                    <div className="information__features">
                        <div className="information__spec-header">About this item</div>
                        <ul>
                            {details.features &&
                                details.features.map((feature, i) => (
                                    <li className="information__feature" key={i}>
                                        {feature}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
   </div>
  )
}
export default ProductDetails