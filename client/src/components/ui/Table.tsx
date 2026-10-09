import React from "react";

export interface Column<T> {
  header: string;
  key: keyof T | string;
  render?: (value: any, item: T, index: number) => React.ReactNode;
  className?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: keyof T | ((item: T, index: number) => string | number);
  emptyMessage?: string;
  className?: string;
  
  // Pagination Props
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
}

export function Table<T>({
  data,
  columns,
  rowKey,
  emptyMessage = "No data available.",
  className = "",
  pagination,
}: TableProps<T>) {
  
  const getRowKey = (item: T, index: number): string | number => {
    if (typeof rowKey === "function") return rowKey(item, index);
    return item[rowKey] as unknown as string | number;
  };

  return (
    <div className={`w-full border border-gray-200 rounded-lg shadow-sm bg-white ${className}`}>
      {/* Table Wrapper */}
      <div className="w-full overflow-x-auto rounded-t-lg">
        <table className="w-full text-left border-collapse text-sm text-gray-600">
          <thead className="bg-gray-50 text-xs font-semibold text-gray-700 uppercase border-b border-gray-200">
            <tr>
              {columns.map((column, index) => (
                <th key={index} className={`px-6 py-3 whitespace-nowrap ${column.className || ""}`}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-10 text-center text-gray-400 italic bg-gray-50/50">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((item, rowIndex) => (
                <tr key={getRowKey(item, rowIndex)} className="hover:bg-gray-50/75 transition-colors">
                  {columns.map((column, colIndex) => {
                    const rawValue = item[column.key as keyof T];
                    return (
                      <td key={colIndex} className={`px-6 py-4 whitespace-nowrap ${column.className || ""}`}>
                        {column.render ? column.render(rawValue, item, rowIndex) : (rawValue as React.ReactNode)}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer Controls */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <div className="text-xs text-gray-500 font-medium">
            Page <span className="text-gray-900">{pagination.currentPage}</span> of{" "}
            <span className="text-gray-900">{pagination.totalPages}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={pagination.currentPage === 1}
              onClick={() => pagination.onPageChange(pagination.currentPage - 1)}
              className="px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pagination.currentPage === pagination.totalPages}
              onClick={() => pagination.onPageChange(pagination.currentPage + 1)}
              className="px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
