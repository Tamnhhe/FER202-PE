import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, getNameCha, setCart } = useContext(DataContext);

  //
  let totalCart = cart.reduce((soCong, it) => {
    return soCong + it.quantity * it.price;
  }, 0);

  const handleCart = (id, action) => {
    switch (action) {
      case "increase":
        const newCartIn = cart.map((it) => {
          if (it.id == id) {
            it.quantity = it.quantity + 1;
          }

          return it;
        });
        setCart(newCartIn);
        break;
      case "decrease":
        const newCartDe = cart
          .map((it) => {
            if (it.id == id) {
              it.quantity = it.quantity - 1;
            }
            return it;
          })
          .filter((it) => it.quantity > 0);

        setCart(newCartDe);
        break;
      case "delete":
        const newCart = cart.filter((it) => it.id != id);
        setCart(newCart);
        break;

      default:
        break;
    }
  };

  //
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>
      <Link to={"/"}>
        {" "}
        <Button variant="success">Go to home</Button>
      </Link>
      {/*  */}
      {cart.length > 0 ? (
        <>
          <div style={{ textAlign: "right" }}>
            <Link onClick={() => setCart([])}>clear cart</Link>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Id</th>
                <th>Image</th>
                <th>Price (VND)</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.name}</td>
                    <td>
                      <img
                        style={{ height: "100px", width: "100%" }}
                        src={`/assets/images/${todo.images[0].name}`}
                      />
                    </td>
                    <td>{Number(todo.price).toLocaleString("en-US")}</td>
                    <td>{Number(todo.quantity).toLocaleString("en-US")}</td>
                    <td>
                      {Number(todo.quantity * todo.price).toLocaleString(
                        "en-US"
                      )}
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleCart(todo.id, "decrease")}
                      >
                        -
                      </Button>
                      <Button
                        variant="success"
                        onClick={() => handleCart(todo.id, "increase")}
                      >
                        +
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleCart(todo.id, "delete")}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <div style={{ textAlign: "right" }}>
            <strong>VAT</strong>: 8%
          </div>
          <div style={{ textAlign: "right" }}>
            <strong>Total</strong>: {totalCart} VND
          </div>
          <div style={{ textAlign: "right" }}>
            <strong>Total(VAT)</strong>: {totalCart + (totalCart * 8) / 100} VND
          </div>
        </>
      ) : (
        <>
          <div style={{ textAlign: "center" }}>Your cart is empty</div>
        </>
      )}
    </>
  );
}

export default Cart;
