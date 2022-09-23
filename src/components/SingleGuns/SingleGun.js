import React from "react";
import Modal from "../Modal/Modal";

const SingleGun = (props) => {
//   console.log(props)
  const { gun } = props;
//   console.log(gun)
  const { action, bullet, capacity, category, img, name, price } = gun;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-bold">Capacity :{capacity}y</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">${price}</div>
            <div className="badge badge-outline">{category}</div>
          </div>
          <div className="card-actions justify-start">
          <button onClick={props.click} className="btn btn-primary">Buy now</button>
          <label htmlFor="my-modal-3" className="btn btn-secondary">
        open modal
      </label>
          </div>
        </div>
      </div>
      <Modal name={gun}></Modal>
    </div>
  );
};

export default SingleGun;
