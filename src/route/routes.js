import { createBrowserRouter } from 'react-router-dom'
import Laout from '../layout/Laout'
import Blog from '../page/blog/Blog'
import Home from '../page/home/Home'
import EditReview from '../page/myreviews/EditReview'
import Myreviews from '../page/myreviews/Myreviews'
import NotFound from '../page/NotFound'
import Addservice from '../page/services/Addservice'
import Service from '../page/services/Service'
import Services from '../page/services/Services'
import Signin from '../page/sign/Signin'
import Signup from '../page/sign/Signup'
import PrivetLogin from './PrivetLogin'
import PrivetRoute from './PrivetRoute'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Laout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: 'services/service/:id',
        element: <Service />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params?.id}`),
      },

      {
        path: 'my-reviews',
        element: (
          <PrivetRoute>
            <Myreviews />
          </PrivetRoute>
        ),
      },
      {
        path: 'my-reviews/edit-reivew/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params?.id}`),
        element: (
          <PrivetRoute>
            <EditReview />
          </PrivetRoute>
        ),
      },
      {
        path: 'add-service',
        element: (
          <PrivetRoute>
            <Addservice />
          </PrivetRoute>
        ),
      },
      {
        path: 'sign-in',
        element: (
          <PrivetLogin>
            <Signin />
          </PrivetLogin>
        ),
      },

      {
        path: 'sign-up',
        element: (
          <PrivetLogin>
            <Signup />
          </PrivetLogin>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default routes
