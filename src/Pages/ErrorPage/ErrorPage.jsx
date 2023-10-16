import React from 'react'
import { Link } from "react-router-dom";
import './errorPage.css'

const ErrorPage = () => {
    return (
        <div class="not-found-container">
            <h1>404 (Not Found)</h1>
            <h3>The URL you visited is not defined</h3>
            <Link to="/home">
                <button class="back-button">Back to Home Page</button>
            </Link>
        </div>
      );

}

export default ErrorPage
