'use client'
import React, {useEffect, useState} from "react";
import DataTable, {TableColumn} from 'react-data-table-component';
import {ProductType} from "@/lib/definittion";
import {EditIcon, EyeIcon, TrashIcon} from "lucide-react";
import {Pagination} from "flowbite-react";
import {useRouter} from "next/navigation";
import {ACCESS_TOKEN, BASE_URL} from "@/lib/constants";

const Dashboard = () => {
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
    const router = useRouter();
    const handleDelete=(product:ProductType)=>{
        const id=product.id
        fetch(`${BASE_URL}/api/products/${id}/`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${ACCESS_TOKEN}`
            }})
        setProducts(products.filter((product)=>product.id!==id))
    }
    const columns: TableColumn<ProductType>[] = [
        {
            name: 'ID',
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: (row) => row.name,
        },
        {
            name: 'Price',
            selector: (row) => row.price,
        },
        {
            name: 'Category',
            selector: (row) => row.category,
        },
        {
            name: 'Image',
            selector: (row) => <img src={row.image} alt={row.name} className="h-16 w-16 object-cover overflow-hidden"/>,
        },
        {
            name: 'Action',
            selector: (row): any =>
                <div className="flex gap-4 cursor-pointer">
                    <h1 onClick={() => router.push(`/products/view/${row.id}`)}><EyeIcon
                        className="bg-blue-600 p-1 text-white rounded"/></h1>
                    <h1 onClick={() => router.push(`/edit/${row.id}`)}><EditIcon
                        className="bg-yellow-400 p-1 text-white rounded"/></h1>
                    <h1 onClick={()=>handleDelete(row)}><TrashIcon className="bg-red-600 p-1 text-white rounded"  /></h1>
                </div>,

        }
    ];

    const handleUpdate = (product: ProductType) => {
        setSelectedProduct(product);
        router.push(`/products/edit/${product.id}`);
        console.log("Lof",product)
    };
    const [products, setProducts] = useState<ProductType[]>([])
    useEffect(() => {
        fetch(`${BASE_URL}/api/products/`)
            .then(res => res.json()).then(data => {
            setProducts(data.results)
        }).catch(err => console.log(err))
    }, [])
    // console.log(products)

    const onPageChange = (page: number) => setCurrentPage(page);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${BASE_URL}/api/products/?page=${currentPage}&page_size=10`);
            const data = await response.json();
            setProducts(data.results);
            const totalPage = Math.ceil(data.total / 10);
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
        <main className="p-4 w-full h-screen">
            <header className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">Dashboard</h1>
                <a href="/products/create" className="p-4 bg-blue-800 text-white rounded-xl left-10">Add Product</a>
            </header>
            <DataTable
                columns={columns}
                data={products}
                responsive={true}
                fixedHeader={true}
                className="w-full"
            />
            <div className="flex lg:justify-end justify-center">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
            </div>
        </main>
    );
};

export default Dashboard;
