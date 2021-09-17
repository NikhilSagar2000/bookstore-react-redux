import { Fragment } from 'react';
import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { toggleActions } from '../../store/toggleCart-slice';

const CartButton = (props) => {
  const cartItemsQuantity = useSelector(state => state.cart.totalQuantity);
  const isCartShown = useSelector(state => state.toggleCart.isCartShown);
  const dispatch = useDispatch();
  const toggleCartHandler = () =>{
    dispatch(toggleActions.toggleCart());
  }
  // console.log(cartItemsQuantity);
  return (
    <Fragment>
      {!isCartShown && (
        <button className={classes.button} onClick={toggleCartHandler}>
          <span>Cart</span>
          <span className={classes.badge}>{cartItemsQuantity}</span>
        </button>
      )}
      {isCartShown && (
        <button className={classes.button} onClick={toggleCartHandler}>
          <span>Close Cart</span>
        </button>
      )}
    </Fragment>
  );
};

export default CartButton;
