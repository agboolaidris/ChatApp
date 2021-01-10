import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


const ProtectedRoute = ({component:Component,isAuthenticated, ...rest})=>{
    
    return ( isAuthenticated 
        ? 
        <Route {...rest} render={
            (props)=>{
                return <Component {...props} />
            }
        } />
        :
        <Redirect to='/login' />
        
    )
}

const mapStateToProps=(state)=>{
    return{
        isAuthenticated:state.Auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(ProtectedRoute)

