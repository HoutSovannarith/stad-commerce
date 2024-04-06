type ProductProps = {
    name: string;
    seller: string;
    image: string;
    price: number;
    category: string;
    onClick: () => void;
};

export default function CardProduct({name,image,price,seller,category,onClick}: ProductProps){
    return (
        <a className="group relative block overflow-hidden w-60 cursor-pointer" onClick={onClick}>
            <img
                src={image}
                alt=""
                className="h-40 w-full object-cover overflow-hidden transition duration-500 group-hover:scale-105 sm:h-40"
            />
            <div className="relative border border-gray-100 bg-white p-4">
                <p className="mt-1.5 text-sm text-gray-700 bg-gray-200 rounded-xl px-1 w-fit mb-2 line-clamp-1">{category}</p>

                <h3 className="mt-4 text-lg font-medium text-gray-900 line-clamp-1">{name}</h3>


                <p className="mt-1.5 text-sm text-gray-700">${price}</p>
                <p className="mt-1.5 text-sm text-gray-700">Seller : {seller}</p>

                <form className="mt-4">
                    <button
                        className="block w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105"
                    >
                        Add to Cart
                    </button>
                </form>
            </div>
        </a>
    )
}