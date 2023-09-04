import { Fragment , useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

//import { UserContext } from '../../contexts/user.context';
//import { CartContext } from '../../contexts/cart.context';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);



  console.log(currentUser ? "signed in he user" : "sign out hogya");
  console.log(currentUser);


  return (
    <Fragment>

<NavigationContainer>        {/* <div className='navigation'> */}

        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>

        {/* <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>*/}



        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>


        {/* <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>  */}

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT 
            </span>
            
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}

        <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}   
          {/* //cart open hoga toh return dropdown and show it */}
          </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;