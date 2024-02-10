import React from 'react';
import MenuItem from "./menu-item";

function MenuList({ list = []}) {
    return (
        <div className={"menu-lest-container"}>
            {
                list && list.length > 0
                    ? list.map(listItem => <MenuItem item = {listItem}/>)
                    : null
            }
        </div>
    );
}

export default MenuList;
