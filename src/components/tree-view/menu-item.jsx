import React, {useState} from 'react';
import MenuList from "./menu-list";

function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    const handleToggleChildren = (getCurrentLabel) => {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        });
    }
    console.log(displayCurrentChildren, 'displayCurrentChildren');

    return (
        <li>
            <div style={{display: 'flex', gap: '20px'}}>
                <p>{item.label}</p>
                {
                    item.children && item.children.length > 0
                        ? <span onClick={() => handleToggleChildren(item.label)}>
                            {
                                displayCurrentChildren[item.label]
                                    ? '-'
                                    : '+'
                            }
                    </span>
                        : null
                }
            </div>
            {
                item && item.children && item.children.length  > 0 && displayCurrentChildren[item.label]
                    ? (<MenuList list={item.children} />)
                    : null
            }
        </li>
    );
}

export default MenuItem;