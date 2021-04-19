import React, { Suspense } from "react";

import Login from './Login/Login';
import Register from './Register/Register';
import Todo_list from './Todo_list/Todo_list';
import Add_newTask from './Add_newTask/Add_newTask';



import { Route, Switch } from "react-router-dom";


// const Home = React.lazy(() => import("./home/Home"));
// const Login = React.lazy(() => import("./login/Login"));
// const Cart = React.lazy(() => import("./cart/Cart"));
// const Register = React.lazy(() => import("./register/Register"));



export default function Routes() {
 
    return (

      <Suspense fallback="loading">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/Todo_list" exact component={Todo_list} />
          <Route path="/Add_newTask" exact component={Add_newTask} />


        </Switch>
      </Suspense>
    );
  }