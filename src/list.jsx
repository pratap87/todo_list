import React from "react";
import PropTypes from "prop-types";
import Item from "./item";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
function List({ items, completeItem }) {
    if (items.length === 0) {
        return (<Zoom>
            <div className="card" >
                <div className=" card-body" role="alert">
                    Congratulations your todo list is empty!
            </div>
            </div>
        </Zoom>
        );
    }
    return (
        <ul className="list-group">
            {items.map(item => (
                <Fade left>
                    <Item key={item.id} item={item} completeItem={() => completeItem(item.id)} />
                </Fade>
            ))}
        </ul>
    );
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    completeItem: PropTypes.func.isRequired,
};

export default List;
