import { createBrowserRouter } from 'react-router-dom'
import Laout from '../layout/Laout'
import Home from '../page/home/Home'
import EditReview from '../page/myreviews/EditReview'
import Myreviews from '../page/myreviews/Myreviews'
import Addservice from '../page/services/Addservice'
import Service from '../page/services/Service'
import Services from '../page/services/Services'
import Signin from '../page/sign/Signin'
import Signup from '../page/sign/Signup'
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
        element: <Signin />,
      },

      {
        path: 'sign-up',
        element: <Signup />,
      },
    ],
  },
])

export default routes
