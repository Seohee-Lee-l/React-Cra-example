import styles from './Samp12.module.css';

function Samp12({label='버튼'}) {
    return (
        <>
            <button className={styles.button}>{label}</button>
        </>
    );
}

export default Samp12;

// 파일 이름에 .module.css를 붙이면 react가 css 클래스 이름을 고유하게 변경해서 다른 컴포넌트와 충돌하지 않도록 함