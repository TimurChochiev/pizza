import debounce from "lodash.debounce";
import { useCallback, useContext, useRef, useState } from "react";

import { searchContext } from "../../App";

import styles from "./Search.module.scss";

export function Search() {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(searchContext);
  const inputRef = useRef();

  const inputClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const searchUpdate = useCallback(
    debounce((str) => {
      setSearchValue(str);
      console.log("Hi");
    }, 300),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    searchUpdate(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="Editable-line"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск..."
      />
      {value && (
        <svg
          onClick={inputClear}
          className={styles.clear}
          enableBackground="new 0 0 26 26"
          id="Layer-1"
          version="1.1"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0605469,13L24.7802734,2.2802734c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469  s-0.7675781-0.2929688-1.0605469,0L13,11.9394531L2.2802734,1.2197266c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0  s-0.2929688,0.7675781,0,1.0605469L11.9394531,13L1.2197266,23.7197266c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469  C1.3662109,24.9267578,1.5576172,25,1.75,25s0.3837891-0.0732422,0.5302734-0.2197266L13,14.0605469l10.7197266,10.7197266  C23.8662109,24.9267578,24.0576172,25,24.25,25s0.3837891-0.0732422,0.5302734-0.2197266  c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469L14.0605469,13z"
            fill="#1D1D1B"
          />
        </svg>
      )}
    </div>
  );
}
