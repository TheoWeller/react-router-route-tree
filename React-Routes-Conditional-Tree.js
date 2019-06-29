/*
This is an example of how I used React Router and nested conditionals to create public and private routes in my app.

- Outer most conditional renders fallback loading spinner if page is still fetching data
- Inner conditional ensures
  1. private routes become available when CurrrentUser exists and is isAthenticated
  2. only public routes are available otherwise.
*/

if (this.props.doneLoading || this.state.unAuthenticated) {
  if(!this.props.isAuthenticated || !this.props.currentUser){
    //PUBLIC ROUTES
    return (
      <Switch>
        <Route path='/home' component={LoginIn}/>
        <Route path='/about' component={About}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/:slug' component={Redirect}/>
        <Route path='/subscribe/:slug' component={Subscribe}/>
      </Switch>
    )
  } else {
  //PRIVATE ROUTES
    return (
      <Fragment>
        <Navbar />
          <Switch>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/subscribe/edit' component={SubscriptionEdit}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/draft' component={Draft}/>
            <Route exact path='/my-messages' component={Messages}/>
          </Switch>
        </Fragment>
    )
  }
} else {
  // show a loading spinner
  return (
        <Dimmer id="loading-dimmer" active blurring>
          <Loader/>
        </Dimmer>
  )
}
