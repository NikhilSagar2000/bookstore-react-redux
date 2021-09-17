import { toggleActions } from './toggleCart-slice';
import { cartActions } from './cart-slice';

export const postData = (cartData) => {
    return async (dispatch) => {
        dispatch(
          toggleActions.notificationHandler({
            status: "pending",
            title: "Sending...",
            message: "Sending Data. Please wait for a while.",
          })
        );

        const sendRequest = async() => {
            const response = await fetch(
          "https://react-redux-async-c2500-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cartData),
          }
        );

        if (!response.ok) {
          throw new Error("error :(");
        }
        }
        try {
            await sendRequest();
            dispatch(
              toggleActions.notificationHandler({
                status: "success",
                title: "Successful :)",
                message: "Data Sent Successfully",
              })
            );
        } catch (error) {
            dispatch(
              toggleActions.notificationHandler({
                status: "error",
                title: "Failed :(",
                message: "Sending Data Failed.",
              })
            );
        }

      };
}

export const getData = () => {
    return async(dispatch) => {
        const response = await fetch(
          "https://react-redux-async-c2500-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
        );
        const cartData = await response.json();

        if (cartData) {
            dispatch(
              cartActions.setInitialState({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0,
              })
            );
        }
    } 
}