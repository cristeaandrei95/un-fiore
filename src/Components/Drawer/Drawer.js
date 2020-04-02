import React, { useState } from "react";
import classnames from "classnames";
import styles from "./Drawer.module.scss";

const Drawer = ({ inside, outside }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className={styles.root}>
            <div className={classnames(styles.inside, { [styles.open]: isDrawerOpen })}>{inside}</div>

            <div className={classnames(styles.outside, { [styles.open]: isDrawerOpen })}>
                {outside({ isDrawerOpen, setIsDrawerOpen })}
            </div>
        </div>
    );
};

export default Drawer;
