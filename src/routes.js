import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import SignupPageMessages from './components/pages/SignupPageMessages.json';
import LoginPageMessages from './components/pages/LoginPageMessages.json';

export default [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/login',
        exact: true,
        messages: LoginPageMessages,
        component: LoginPage
    },
    {
        path: '/signup',
        exact: true,
        messages: SignupPageMessages,
        component: SignupPage
    }
]