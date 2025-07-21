import { FaStar } from "react-icons/fa";

export default function Rating({rating}) {
    return (
        <div className="rating flex gap-1">
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    className={`cursor-pointer ${index < rating ? "text-yellow-500" : "text-gray-400"}`}
                    onClick={() => handleRate(index)}
                />
            ))}
        </div>
    );
  
}
