import React from "react";
import styles from "./FAQ.module.scss";

const FAQ = () => (
    <div>
        <h2 className={styles.title}>Intrebari frecvente</h2>
        <h3 className={styles.subtitle} id="cum-comand">
            Cum comand?
        </h3>
        <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia orci in diam euismod, id blandit
            tellus commodo. Suspendisse turpis erat, suscipit quis lorem sed, fermentum ornare leo. Phasellus vitae est
            vitae diam auctor euismod. Cras at libero non nunc fermentum hendrerit. Integer non feugiat est. Nullam
            porta dictum erat quis tincidunt. Aliquam ante nisl, ullamcorper quis est elementum, placerat egestas velit.
            Maecenas maximus dolor auctor quam auctor eleifend. Sed finibus est at neque blandit sodales. Maecenas id
            mauris eget sem dictum ultrices. Vivamus scelerisque, ex sit amet efficitur hendrerit, sem lectus accumsan
            lorem, quis consectetur mauris neque quis magna.
        </p>
        <h3 className={styles.subtitle} id="informatii-comanda">
            Care este status-ul comenzii mele?
        </h3>
        <p className={styles.paragraph}>
            Nulla elit ipsum, tempor sed ipsum sit amet, dapibus lobortis massa. In felis risus, tempor vitae ipsum et,
            dignissim lobortis nulla. Donec quis nisl justo. Vivamus tempor nisi non metus rhoncus bibendum. Etiam
            ultricies quis augue at imperdiet. Sed consequat, ipsum non bibendum aliquet, sapien magna blandit nisi, sit
            amet bibendum quam metus sit amet dui. Praesent non posuere erat, vel volutpat justo. Suspendisse potenti.
        </p>
        <h3 className={styles.subtitle} id="cum-platesc">
            Cum platesc?
        </h3>
        <p className={styles.paragraph}>
            Aenean sit amet pulvinar massa, sed tristique risus. Morbi mollis, nisl convallis efficitur blandit, purus
            nibh dictum quam, et posuere sem tellus sit amet neque. Fusce dignissim quam in urna dictum finibus. Aenean
            finibus nunc nisi, at mattis urna rutrum vitae. Fusce ullamcorper blandit mollis. Nullam semper, elit
            commodo iaculis maximus, augue purus egestas ipsum, ac consectetur dui elit sit amet lorem. Etiam vestibulum
            mauris sed leo maximus posuere. Sed dui sem, gravida at sodales a, pretium dignissim dolor. Nam vel
            venenatis metus. Duis id nunc sagittis, tincidunt arcu at, feugiat nulla. Donec imperdiet tempus metus, ac
            ornare libero rutrum eu. Morbi et nulla eget neque efficitur mollis. Phasellus condimentum risus purus, nec
            scelerisque tellus pellentesque in. Quisque ipsum justo, egestas eget luctus vel, vulputate ac risus. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <h3 className={styles.subtitle} id="politica-confidentialitate">
            Politica de confidentialitate
        </h3>
        <p className={styles.paragraph}>
            Sed tincidunt, metus sit amet ultricies posuere, arcu nisi dictum diam, sit amet tempor nibh turpis ut
            turpis. Aliquam ac mollis mauris. Donec sit amet magna ornare, convallis velit vestibulum, venenatis sapien.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris egestas pellentesque ipsum nec
            lobortis. Quisque hendrerit nulla ante, in sodales elit interdum ac. Nulla sit amet suscipit odio.
        </p>
    </div>
);

export default FAQ;
