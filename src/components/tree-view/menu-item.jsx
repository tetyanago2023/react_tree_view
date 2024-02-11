import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    const handleToggleChildren = (getCurrentLabel) => {
        setDisplayCurrentChildren((prevDisplay) => ({
            ...prevDisplay,
            [getCurrentLabel]: !prevDisplay[getCurrentLabel],
        }));
    };

    return (
        <li>
            <div className="menu-item">
                <p>{item.label}</p>
                {item.children && item.children.length > 0 && (
                    <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
                <FaMinus color="#bf8743" size={25} />
            ) : (
                <FaPlus color="#bf8743" size={25} />
            )}
          </span>
                )}
            </div>
            {item.children && item.children.length > 0 && displayCurrentChildren[item.label] && (
                <MenuList list={item.children} />
            )}
        </li>
    );
}

export default MenuItem;
