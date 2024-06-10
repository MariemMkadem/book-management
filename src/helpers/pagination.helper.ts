export interface Pagination {
  start: number;
  size: number;
  end: number;
}

const parseRangeHeader = (rangeHeader: string): Pagination => {
  const [startRange, endRange] = rangeHeader.replace("items=", "").split("-");

  const start = parseInt(startRange, 10);
  const end = parseInt(endRange, 10);

  const size = end - start;
  return { start, size, end };
};

export const PaginationHelper = (range) => {
  if (range) {
    return parseRangeHeader(range);
  } else {
    return { start: 0, size: 20, end: 19 }; // Default values
  }
};
