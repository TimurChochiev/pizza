import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

export function Pagination(props) {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => props.onChangePage(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={4}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
