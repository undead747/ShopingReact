import React, { Component } from 'react';

import {connect} from 'react-redux';
import { fetchMainProducts } from '../actions/homepageProductAction';
import util from '../util';

import PantPage from './PantPage';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class Login extends Component {
    render() {
    return(
       <div>
   <div id="top-bar" class="container">
     <div class="row">
       <div class="span4">
         <form method="POST" class="search_form">
           <input type="text" class="input-block-level search-query" Placeholder="eg. T-sirt"></input>
         </form>
       </div>
       <div class="span8">
         <div class="account pull-right">
           <ul class="user-menu">
             <li><a href="#">My Account</a></li>
             <li><a href="cart.html">Your Cart</a></li>
             <li><a href="checkout.html">Checkout</a></li>
             <li><a href="register.html">Login</a></li>
           </ul>
         </div>
       </div>
     </div>
   </div>
   <div id="wrapper" class="container">
     <section class="navbar main-menu">
       <div class="navbar-inner main-menu">
         <a href="index.html" class="logo pull-left"><img src="themes/images//logo.png" class="site_logo" alt="" /></a>
         <nav id="menu" class="pull-right">
           <ul>
             <li><a href="./products.html">Woman</a>
               <ul>
                 <li><a href="./products.html">Lacinia nibh</a></li>
                 <li><a href="./products.html">Eget molestie</a></li>
                 <li><a href="./products.html">Varius purus</a></li>
               </ul>
             </li>
             <li><a href="./products.html">Man</a></li>
             <li><a href="./products.html">Sport</a>
               <ul>
                 <li><a href="./products.html">Gifts and Tech</a></li>
                 <li><a href="./products.html">Ties and Hats</a></li>
                 <li><a href="./products.html">Cold Weather</a></li>
               </ul>
             </li>
             <li><a href="./products.html">Hangbag</a></li>
             <li><a href="./products.html">Best Seller</a></li>
             <li><a href="./products.html">Top Seller</a></li>
           </ul>
         </nav>
       </div>
     </section>
     <section class="header_text sub">
     <img class="pageBanner" src="themes/images/pageBanner.png" alt="New products"/>
       <h4><span>Login or Regsiter</span></h4>
     </section>
     <section class="main-content">
       <div class="row">
         <div class="span5">
           <h4 class="title"><span class="text"><strong>Login</strong> Form</span></h4>
           <form action="#" method="post">
             <input type="hidden" name="next" value="/"></input>
             <fieldset>
               <div class="control-group">
                 <label class="control-label">Username</label>
                 <div class="controls">
                   <input type="text" placeholder="Enter your username" id="username" class="input-xlarge"></input>
                 </div>
               </div>
               <div class="control-group">
                 <label class="control-label">Username</label>
                 <div class="controls">
                   <input type="password" placeholder="Enter your password" id="password" class="input-xlarge"></input>
                 </div>
               </div>
               <div class="control-group">
                 <input tabindex="3" class="btn btn-inverse large" type="submit" value="Sign into your account"></input>
                 <hr/>
                 <p class="reset">Recover your <a tabindex="4" href="#" title="Recover your username or password">username or password</a></p>
               </div>
             </fieldset>
           </form>
         </div>
         <div class="span7">
           <h4 class="title"><span class="text"><strong>Register</strong> Form</span></h4>
           <form action="#" method="post" class="form-stacked">
             <fieldset>
               <div class="control-group">
                 <label class="control-label">Username</label>
                 <div class="controls">
                   <input type="text" placeholder="Enter your username" class="input-xlarge"></input>
                 </div>
               </div>
               <div class="control-group">
                 <label class="control-label">Email address:</label>
                 <div class="controls">
                   <input type="password" placeholder="Enter your email" class="input-xlarge"></input>
                 </div>
               </div>
               <div class="control-group">
                 <label class="control-label">Password:</label>
                 <div class="controls">
                   <input type="password" placeholder="Enter your password" class="input-xlarge"></input>
                 </div>
               </div>
               <div class="control-group">
                 <p>Now that we know who you are. I'm not a mistake! In a comic, you know how you can tell who the arch-villain's going to be?</p>
               </div>
               <hr/>
               <div class="actions"><input tabindex="9" class="btn btn-inverse large" type="submit" value="Create your account"></input></div>
             </fieldset>
           </form>
         </div>
       </div>
     </section>
     <section id="footer-bar">
       <div class="row">
         <div class="span3">
           <h4>Navigation</h4>
           <ul class="nav">
             <li><a href="./index.html">Homepage</a></li>
             <li><a href="./about.html">About Us</a></li>
             <li><a href="./contact.html">Contac Us</a></li>
             <li><a href="./cart.html">Your Cart</a></li>
             <li><a href="./register.html">Login</a></li>
           </ul>
         </div>
         <div class="span4">
           <h4>My Account</h4>
           <ul class="nav">
             <li><a href="#">My Account</a></li>
             <li><a href="#">Order History</a></li>
             <li><a href="#">Wish List</a></li>
             <li><a href="#">Newsletter</a></li>
           </ul>
         </div>
         <div class="span5">
           <p class="logo"><img src="themes/images/logo.png" class="site_logo" alt=""/></p>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. the  Lorem Ipsum has been the industry's standard dummy text ever since the you.</p>
           <br/>
           <span class="social_icons">
             <a class="facebook" href="#">Facebook</a>
             <a class="twitter" href="#">Twitter</a>
             <a class="skype" href="#">Skype</a>
             <a class="vimeo" href="#">Vimeo</a>
           </span>
         </div>
       </div>
     </section>
     <section id="copyright">
       <span>Copyright 2013 bootstrappage template  All right reserved.</span>
     </section>
   </div>
        </div>
    )
  }
}

export default Login;