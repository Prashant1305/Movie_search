import React from 'react';
import { useNavigation, Link, Outlet } from 'react-router-dom';
import styles from "./Root.module.css";
import LoadingSpinner from "../assets/LoadingSpinner.svg";

function RootLayout() {
    const navigation = useNavigation();
    // console.log(navigation);
    return (
        <nav className={`container ${styles.nav}`}>
            <Link to='/'><h2>Movie Search</h2></Link>
            {navigation.state === 'loading' ? <img
                src={LoadingSpinner}
                alt="Loading..."
                className="loadingSpinner"
            /> : <Outlet />}
        </nav>
    );
}

export default RootLayout