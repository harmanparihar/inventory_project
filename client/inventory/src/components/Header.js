import React from 'react';

const Header = () => {
    return (
        <div className="ui inverted menu">
            <div className="header item">Brand</div>
            <div className="active item">Link</div>
            <a className="item">Link</a>
            <div className="ui dropdown item">
                Dropdown
                <i className="dropdown icon"></i>
                <div className="menu transition hidden" >
                <div className="item">Action</div>
                <div className="item">Another Action</div>
                <div className="item">Something else here</div>
                <div className="divider"></div>
                <div className="item">Separated Link</div>
                <div className="divider"></div>
                <div className="item">One more separated link</div>
                </div>
            </div>
            <div className="right menu">
                <div className="item">
                <div className="ui transparent inverted icon input">
                    <i className="search icon"></i>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            </div>
        </div>
    )
};

export default Header;