import React from 'react';
import MainHeaderAuth from './header_log_container.jsx';
const headerMain = () => (
    <div className="page-header-main">
        <div className="menu-container">
            <div className="menu-left">
                <div className="menu-text-1">
                    <button>Write a Review</button>
                </div>
                <div className="menu-text-2">
                    <button>Events</button>
                </div>
                <div className="menu-text-3">
                    <button>Talk</button>
                </div>
            </div>
            <div>
                <MainHeaderAuth />
            </div>
        </div>
    </div>
);

export default mainHeader;
