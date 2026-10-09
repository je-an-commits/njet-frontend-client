import { Table, type Column } from "../ui/Table";
import { Button } from "../ui/Button";
import { useState } from "react";  

interface Product {
  id: string;
  name: string;
  price: string;
  stock: number;
}

const mockProducts: Product[] = [
  { id: "P1", name: "Wireless Mouse", price: "$25.00", stock: 120 },
  { id: "P2", name: "Mechanical Keyboard", price: "$85.00", stock: 45 },
  { id: "P3", name: "Gaming Monitor", price: "$299.00", stock: 15 },
  { id: "P4", name: "USB-C Hub", price: "$40.00", stock: 80 },
  { id: "P5", name: "Desk Mat", price: "$20.00", stock: 200 },
  { id: "P6", name: "Bluetooth Speaker", price: "$55.00", stock: 35 },
  { id: "P7", name: "Webcam 1080p", price: "$69.00", stock: 62 },
];

export function ProductTable() {
    const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 3; // Change this value to adjust page size
    
      // 1. Calculations for chunking list array chunks
      const totalPages = Math.ceil(mockProducts.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = mockProducts.slice(startIndex, endIndex);
    
      // 2. Table Column Schema
      const columns: Column<Product>[] = [
        { header: "Product Name", key: "name", className: "font-medium text-gray-900" },
        { header: "Price", key: "price" },
        { 
          header: "Stock Status", 
          key: "stock",
          render: (stock) => (
            <span className={stock < 20 ? "text-amber-600 font-medium" : "text-gray-600"}>
              {stock} units
            </span>
          )
        },
      ];

      return (
        <Table
                data={paginatedData}
                columns={columns}
                rowKey="id"
                pagination={{
                  currentPage,
                  totalPages,
                  onPageChange: (newPage) => setCurrentPage(newPage),
                }}
        />
    );
}