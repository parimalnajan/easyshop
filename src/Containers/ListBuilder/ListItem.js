import React , { useState } from "react";
import Card from "./Card";
import { DeleteOutlined,EditOutlined,CheckSquareOutlined,CloseSquareOutlined} from'@ant-design/icons';


const ListItem = (props) => {

    let [Edit, setEdit] = useState(false);


    const deletelocal = () => {
        props.deleteItem(props.id);
        // props.deletefb(props.id);
    };   

    const editItemLocal = () => {
        const newitem = {
            id: props.id,
            item: itemText,
            flavor: flavorText,
            qty: qtyText,
        };

        props.editItem(newitem);
        setEdit(false);
    };

    const [itemText, setitemText] = useState(props.itemname);
    const textChangeBot1 = (event) => {
        setitemText(event.target.value);
    };

    const [flavorText, setflavorText] = useState(props.itemflavor);
    const textChangeBot2 = (event) => {
        setflavorText(event.target.value);
    };

    const [qtyText, setqtyText] = useState(props.itemqty);
    const textChangeBot3 = (event) => {
        setqtyText(event.target.value);
    };

    const resettext = () => {
        setitemText(props.itemname);
        setflavorText(props.itemflavor);
        setqtyText(props.itemqty);
        setEdit(false);
    };

    const viewcode = (
       <div>
          <Card>
             <div className="list-item">
                <div className="list-subitem">
                   <div className="list-index">{props.asd} </div>
                   <div className="name-top-handler">
                      <div className="list-name-wrapper">
                         <div className="list-elements">{props.itemname}</div>
                      </div>

                      <div className="list-name-wrapper2">
                         <div className="list-elements">{props.itemflavor}</div>
                         <div className="list-elements">{props.itemqty}</div>
                      </div>
                   </div>
                </div>

                <div className="list-subitem">
                   {
                      <EditOutlined
                         className="list-elements"
                         onClick={() => setEdit(true)}
                         style={{
                            fontSize: "1.3rem",
                            alignSelf: "center",
                         }}
                      ></EditOutlined>
                   }
                   <DeleteOutlined
                      className="list-elements"
                      onClick={deletelocal}
                      style={{ fontSize: "1.3rem", alignSelf: "center" }}
                   />{" "}
                </div>
             </div>
          </Card>
       </div>
    );


    
    const editcode = (
       <Card>
          <div className="list-item">
             <div className="list-subitem">
                <div className="list-index">Edit item{props.asd} </div>
                <div className="name-top-handler">
                   <div className="list-name-wrapper">
                      <input
                         className="list-elements"
                         onChange={textChangeBot1}
                         value={itemText}
                      ></input>
                   </div>

                   <input
                      className="list-elements"
                      onChange={textChangeBot2}
                      value={flavorText}
                   ></input>
                   <input
                      className="list-elements"
                      onChange={textChangeBot3}
                      value={qtyText}
                   ></input>
                </div>
             </div>

             <div className="list-subitem">
                <CloseSquareOutlined
                   className="list-elements"
                   onClick={resettext}
                   style={{ fontSize: "1.5rem", alignSelf: "center" }}
                ></CloseSquareOutlined>
                <CheckSquareOutlined
                   className="list-elements"
                   onClick={editItemLocal}
                   style={{ fontSize: "1.5rem", alignSelf: "center" }}
                ></CheckSquareOutlined>
             </div>
          </div>
       </Card>
    );

    return <div>{Edit ? editcode : viewcode}</div>;
};

export default ListItem;

