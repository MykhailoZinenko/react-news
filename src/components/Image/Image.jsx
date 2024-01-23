import styles from "./styles.module.css";

const Image = ({ image }) => {
    return (
        <header className={styles.wrapper}>
            {image ? (
                <img src={image} alt="news" className={styles.image} />
            ) : null}
        </header>
    );
};

export default Image;
