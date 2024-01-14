import { useState } from "react";
import { SortingIcon } from "@root/assets";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/Table";
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
const emptyArray: [] = [];

export function CommonTable(props: any) {
  const [rowSelection, setRowSelection] = useState({});
  const [expanded, setExpanded] = useState({});
  const {
    columns,
    data,
    isLoading,
    isError,
    isSuccess,
    count,
    limit = 10,
    currentPage,
    setCurrentPage,
    setSortBy,
    setSort,
    isFetching,
    maxHeight = 560,
    minHeight = 512,
    isPagination = true,
  } = props;

  const table = useReactTable({
    data: data ?? emptyArray,
    columns,
    state: {
      rowSelection,
      expanded: true,
    },
    onExpandedChange: setExpanded,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSubRows: (row: any) => row.item,
    getExpandedRowModel: getExpandedRowModel(),
  });
  return (
    <div className="container">
      <div className=" overflow-x-auto">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            {table?.getHeaderGroups().map((headerGroup) => (
              <TableRow key={`headGroup-${headerGroup?.id}`}>
                {headerGroup.headers.map((header: any) => (
                  <TableHead key={`head-${header?.id}`} className="">
                    <div className="flex items-center space-x-2 text-f16 text-customGray font-medium py-4">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {header.column.columnDef.id === "action" ||
                      header.column.columnDef.sorticon === true ? null : (
                        <div className=" cursor-pointer">
                          <Image src={SortingIcon} alt="" />
                        </div>
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          {isSuccess && table.getRowModel().rows.length > 0 && (
            <TableBody>
              {table.getRowModel().rows?.map((row: any) => (
                <TableRow key={row?.id}>
                  {row.getVisibleCells().map((cell: any) => (
                    <TableCell key={cell?.id} className="font-medium py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
    </div>
  );
}
