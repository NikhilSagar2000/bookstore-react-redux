import { useEffect,Fragment } from 'react'; 
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/Layout/Notification';
// import { toggleActions } from './store/toggleCart-slice';
import { postData,getData } from './store/cart-Action';
import { useSelector,useDispatch } from 'react-redux'; 

let initialLoad = true;

function App() {
  const dispatch = useDispatch();


  const isCartShown = useSelector(state => state.toggleCart.isCartShown);
  const notifyChecker = useSelector(state => state.toggleCart.notification);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getData())
  },[dispatch])
  useEffect(() => {
      if (initialLoad) {
          initialLoad = false;
          return;
      }
      
      if (cart.changed) {
          dispatch(postData(cart));
      }


      //   dispatch(
      //     toggleActions.notificationHandler({
      //       status: "pending",
      //       title: "Sending...",
      //       message: "Sending Data. Please wait for a while.",
      //     })
      //   );

      //   const response = await fetch(
      //     "https://react-redux-async-c2500-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      //     {
      //       method: "PUT",
      //       body: JSON.stringify(cart),
      //     }
      //   );

      //   if (!response.ok) {
      //     throw new Error("error :(");
      //   }

      //   dispatch(
      //     toggleActions.notificationHandler({
      //       status: "success",
      //       title: "Successful :)",
      //       message: "Data Sent Successfully",
      //     })
      //   );
      // };

      // dataSender().catch((error) => {
      //   dispatch(
      //     toggleActions.notificationHandler({
      //       status: "error",
      //       title: "Failed :(",
      //       message: "Sending Data Failed.",
      //     })
      //   );
      // });
  },[cart,dispatch]);

  return (
    <Fragment>
      {notifyChecker && (
        <Notification
          status={notifyChecker.status}
          title={notifyChecker.title}
          message={notifyChecker.message}
        />
      )}
      <Layout>
        {isCartShown && <Cart />}
        {!isCartShown && <Products />}
      </Layout>
    </Fragment>
  );
}

export default App;
