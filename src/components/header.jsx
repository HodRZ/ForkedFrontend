import { Link } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';


export const Header = (props) => {
  const {
    isAuthenticated,
    loginWithRedirect } = useAuth0();
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>

                {' '}
                {!isAuthenticated && (
                  <button className='btn btn-custom btn-lg' onClick={loginWithRedirect}>Join US</button>)}
                <Link to='/city'>
                  <a

                    className='btn btn-custom btn-lg page-scroll'
                  >

                    Yalla Exeplore !
                  </a></Link>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
