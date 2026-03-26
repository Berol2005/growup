import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({rate}:{rate:number}) {
    return (
        <div className="flex flex-row gap-2">
            {[1, 2, 3, 4, 5].map(star=>(
                 star<=rate ? (<FaStar className="text-yellow-600"/>): rate-star==-0.5 ? (<FaStarHalfAlt className="text-yellow-600"/>):(<FaRegStar/>)
            )
             )}
        </div>
    )
}
export default StarRating;
