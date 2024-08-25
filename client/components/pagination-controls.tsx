import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  getPageNumbers: () => (number | "...")[] | any;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  getPageNumbers,
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          className={
            currentPage > 1 ? "" : "text-muted-foreground pointer-events-none"
          }
        >
          <PaginationPrevious
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
          />
        </PaginationItem>
        {getPageNumbers().map((pageNumber: any, index: number) => (
          <PaginationItem key={index}>
            {pageNumber === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                onClick={() => onPageChange(pageNumber as number)}
                isActive={pageNumber == currentPage}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem
          className={
            currentPage < totalPages
              ? ""
              : "text-muted-foreground pointer-events-none"
          }
        >
          <PaginationNext
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControls;
