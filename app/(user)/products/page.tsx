'use client'
import CardProduct from "@/components/card/CardProduct";
import {useEffect, useState} from "react";
import {Pagination} from "flowbite-react";
import { useRouter } from "next/navigation";

export default function ProductsPage(){


    const [products, setProducts] = useState([])
    const router = useRouter();
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`)
            .then(res => res.json()).then(data => {setProducts(data.results)}).catch(err => console.log(err))
    },[])
    const onPageChange = (page: number) => setCurrentPage(page);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://store.istad.co/api/products/?page=${currentPage}&page_size=10`);
            const data = await response.json();
            setProducts(data.results);
            const totalPage = Math.ceil(data.total/10);
            setTotalPage(totalPage); // Assuming 10 items per page

        };

        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <main>
            <div className="flex flex-wrap justify-center gap-8">
                {products.map((product: any, index) => (
                    <CardProduct
                        onClick={() => router.push(`/products/${product.id}`)}
                        key={index}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        seller={product.seller}
                        category={product.category}
                    />))}
            </div>
            <div className="flex overflow-x-auto sm:justify-center">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
            </div>
        </main>

    )
}