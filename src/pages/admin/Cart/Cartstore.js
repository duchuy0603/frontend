
import { exists, list, total, quantity, remove, destroy } from "cart-localstorage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Trans } from "react-i18next";
import Headermem from "../../../components/Headermem";
function Cart() {
  const { id } = useParams()
  const history = useNavigate();

  const DeleteAll = () => {
    const question = window.confirm("Bạn muốn xóa hết giỏ hàng ?")
    if (question) {
      destroy()
      history("/cart")
    }
  }
  const onRemove = (id) => {
    remove(id);
    history("/cart")

  }
  const decrement = (id) => {
    quantity(id, -1);
    history("/cart")
  }
  const increment = (id) => {
    quantity(id, +1);
    history("/cart")
  }
  const count = list().length
  return (
    <div>
      <Headermem></Headermem>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5 > <Trans>Total items</Trans>:({count}) </h5>
            <table className="table table-light table-hover m-0">
              <tbody>

                {list().map((item, index) => {
                  return (
                    <tr>

                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td> <td> <img src={"http://localhost:4000/api/products/photo/" + item.id} alt="" height="120px" width="110px" /></td></td>
                      <td><button className="btn btn-danger" onClick={() => decrement(item.id)}>-</button>
                        <button className="btn btn-info" onClick={() => increment(item.id)}>+</button></td>
                      <td><button className="btn btn-danger" onClick={() => onRemove(item.id)}><Trans>Delete</Trans></button> </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2><Trans>Total Price</Trans>:${total()}</h2>
          </div>
          <div className=" col-auto">
            <button className="btn btn-danger" onClick={() => DeleteAll()}><Trans>Clear Cart</Trans></button>
          </div>
        </div>


      </section>
    </div>
  );
}
export default Cart;
