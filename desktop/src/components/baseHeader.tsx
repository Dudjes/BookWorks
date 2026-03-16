import { ChangeEvent, useState } from "react";
import styles from "../css/baseHeader.module.css";

type BaseHeaderProps = {
    title?: string;
    buttonText?: string;
    searchPlaceholder?: string;
    subtitle?: string;
    searchAriaLabel?: string;
    onButtonClick?: () => void;
};

export default function BaseHeader({
    title,
    buttonText,
    searchPlaceholder,
    subtitle,
    searchAriaLabel,
    onButtonClick,
}: BaseHeaderProps){
    const [filter, setFilter] = useState("");

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    return(
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <div className={styles.headerText}>
                    <h1>{title}</h1>
                    <p>{subtitle ?? `Beheer en maak ${buttonText}`}</p>
                </div>
                <button type="button" onClick={onButtonClick}>
                    <p className={styles.buttonText}>+  {buttonText}</p>
                </button>
            </div>

            <div className={styles.searchRow}>
                <div className={styles.searchInputWrap}>
                    <input
                        type="search"
                        className={styles.searchInput}
                        value={filter}
                        onChange={handleSearchChange}
                        placeholder={searchPlaceholder}
                        aria-label={searchAriaLabel ?? searchPlaceholder}
                    />
                </div>
            </div>
        </div>
    )
}