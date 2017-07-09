import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import SearchResults from '@/components/SearchResults'
import DoctorView from '@/components/DoctorView'
import ContactUs from '@/components/ContactUs'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import SignUpEmail from '@/components/SignUpEmail'
import About from '@/components/About'
import AboutCont from '@/components/AboutCont'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/searchResults',
      name: 'Search Results',
      component: SearchResults
    },
    {
      path: '/doctor/:id',
      name: 'Doctor View',
      component: DoctorView
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      component: ContactUs
    },
    {
      path: '/sign-in',
      name: 'Sign In',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'Sign Up',
      component: SignUp
    },
    {
      path: '/sign-up-email',
      name: 'Sign Up',
      component: SignUpEmail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/about-cont',
      name: 'About Cont',
      component: AboutCont
    }
  ]
})
