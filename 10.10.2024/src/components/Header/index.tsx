// @ts-ignore
import styles from './style.module.css';
import { ListLink } from '../../UI/ListLink';
interface HeaderProps {
    valute: string;
    count: number;
};

export const Header = ({ valute, count }: HeaderProps) => {
    const options = [
        { value: '/', label: 'Home' },
        { value: '/cases', label: 'Cases' },
        { value: '/mines', label: 'Mines' },
    ];
    console.log("rerender header")

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__links}>
                    <ListLink options={options} />
                    {/* NEW UI */}
                </div>

                <div className={styles.header__valute}>
                    <span>{count}</span>
                    <span>{valute}</span>
                </div>

            </header>
        </>
    );
};