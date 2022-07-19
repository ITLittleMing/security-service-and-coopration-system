import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home';
import PersonalCentor from '../views/PersonalCentor';
import ProductCentor from '../views/ProductCentor';
import Help from '../views/Help';
import Page from '../views/Page';
import GetTask from '../views/ProductChildren/GetTask';
import PersonalData from '../views/PersonalChildren/PersonalData';
import ServiceData from '../views/PersonalChildren/PersonalDataChildren/ServiceData';
import MyPost from '../views/PersonalChildren/MyPost';
import Unsolved from '../views/PersonalChildren/MyPostChildren/Unsolved';
import Solved from '../views/PersonalChildren/MyPostChildren/Solved';


const routes = [
  {
    path: '/',
    redirect: '/page/home'  
  },
  {
    path: '/page',
    name: 'page',
    component: Page,
    children:[
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'personalCentor',
        name: 'personalCentor',
        component: PersonalCentor,
        children:[
          {
            path: 'myPost',
            name: 'myPost',
            component: MyPost,
            children:[
              {
                path: 'unsolved',
                name: 'unsolved',
                component: Unsolved
              },
              {
                path: 'solved',
                name: 'solved',
                component: Solved
              }
            ]
          },
          {
            path: 'myTask',
            name: 'myTask',
            component: ''
          },
          {
            path: 'personalData',
            name: 'personalData',
            component: PersonalData,
            children:[
              {
                path: 'serviceData',
                name: 'serviceData',
                component: ServiceData
              },
              {
                path: 'userData',
                name: 'userData',
                component: ''
              }
            ]
          }
        ]
      },
      {
        path: 'productCentor',
        name: 'productCentor',
        component: ProductCentor,
        children:[
          {
            path: 'postTask',
            name: 'postTask',
            component: ''
          },
          {
            path: 'getTask',
            name: 'getTask',
            component: GetTask
          }
        ]
      },
      {
        path: 'help',
        name: 'help',
        component: Help
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
