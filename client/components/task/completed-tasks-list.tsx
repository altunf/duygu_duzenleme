"use client";
import React, { useEffect, useState } from "react";
import CompletedTaskItem from "./completed-tasks-items";
import PaginationControls from "../pagination-controls";
import { useFetchCompletedTasks } from "@/hooks/useFetchCompletedTasks";
import { usePagination } from "@/hooks/usePagination";
import TaskCard from "./task-card";
import { Separator } from "../ui/separator";

const CompletedTasks = ({ token }: any) => {
  const [paginatedData, setPaginatedData] = useState<any[]>([]);

  const data = useFetchCompletedTasks(token);

  const itemsPerPage = 10;
  const { currentPage, totalPages, getPageNumbers, paginate } = usePagination(
    data,
    itemsPerPage
  );

  useEffect(() => {
    const paginated = paginate(currentPage);
    setPaginatedData(paginated);
  }, [currentPage, data]);

  const handlePaginationClick = (pageNumber: number) => {
    if (pageNumber !== currentPage) {
      paginate(pageNumber);
    }
  };

  return (
    <main className="flex flex-col h-full w-full rounded-sm items-center gap-2 p-2">
      {paginatedData?.length > 0 ? (
        paginatedData.map((task: any, index: number) => (
          <TaskCard key={index} task={task} isCompleted={true} />
        ))
      ) : (
        <i>Henüz bir duygu egzersizi tamamlamadınız</i>
      )}

      {totalPages > 1 && (
        <>
          <Separator className="m-4" />
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePaginationClick}
            getPageNumbers={getPageNumbers}
          />
        </>
      )}
    </main>
  );
};

export default CompletedTasks;
