import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  value: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => props.onChangePage(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={4}
      forcePage={props.value - 1}
      previousLabel="<"
    />
  );
};
