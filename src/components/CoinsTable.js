import React, { useMemo } from "react";
import { Link } from "react-router-dom"; // Import Link component
import { useTable, useSortBy, usePagination } from "react-table";
import { TopRankedCoins } from "../config/api.js";
import { useTopRankedCoins } from "../utils/useTopRankedCoins.js";

const CoinsTable = ({ trending }) => {
  const columns = [
    {
      Header: "Coins",
      accessor: "id",
      Cell: (tableProps) => (
        <Link to={`/${tableProps.row.original.id}`}>
          <div className="flex items-center ml-[2.5vw]">
            <img
              className="rounded-full"
              src={tableProps.row.original.image}
              width={35}
              alt="coin"
            />
            <div className="ml-1">{tableProps.row.original.name}</div>
          </div>
        </Link>
      ),
    },
    {
      Header: "Price",
      accessor: "current_price",
      Cell: (tableProps) => (
        <Link to={`/${tableProps.row.original.id}`}>
          <div>${tableProps.row.original.current_price.toFixed(2)}</div>
        </Link>
      ),
    },
    {
      Header: "24h Change",
      accessor: "price_change_percentage_24h",
      Cell: (tableProps) => (
        <Link to={`/${tableProps.row.original.id}`}>
          <div
            className={`text-${
              tableProps.row.original.price_change_percentage_24h >= 0
                ? "green-700"
                : "red-700"
            }`}
          >
            {tableProps.row.original.price_change_percentage_24h >= 0
              ? `+${tableProps.row.original.price_change_percentage_24h.toFixed(
                  2
                )}%`
              : `${tableProps.row.original.price_change_percentage_24h.toFixed(
                  2
                )}%`}
          </div>
        </Link>
      ),
    },
    {
      Header: "Market Cap",
      accessor: "market_cap",
      Cell: (tableProps) => (
        <Link to={`/${tableProps.row.original.id}`}>
          <div>
            {(tableProps.row.original.market_cap / 1000000).toLocaleString()}M
          </div>
        </Link>
      ),
    },
  ];

  const col = useMemo(() => columns, []);
  const data = useMemo(() => trending, [trending]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns: col,
      data: trending,
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="container w-[850px] min-w-[300px] flex-col justify-center overflow-hidden">
      <table className="center rounded-xl overflow-hidden" {...getTableProps()}>
        <thead className="border-black bg-gradient-to-br from-blue-900 to-blue-500 text-white font-bold rounded-md">
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th
                  key={column.id}
                  className="w-52 h-20 text-center"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>{column.isSortedDesc ? "🔽" : "🔼"}</span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white" {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                key={row.id}
                className="w-44 m-10 h-16 text-center justify-center rounded-xl overflow-hidden transition-transform transform hover:scale-95"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <td key={cell.id} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-col items-center justify-center mt-6">
        <div className="flex items-center mb-2">
          <button
            className="mr-4 px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Prev
          </button>
          <div className="text-blue-500">
            {pageIndex + 1} / {pageOptions.length}
          </div>
          <button
            className="ml-4 px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinsTable;
