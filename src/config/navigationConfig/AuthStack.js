import {
    SignIn,
    Splash,
    AllComponents,
    MapScreen
    
} from '../../containers'

export const AuthStack = [
    {
        name: 'Splash',
        component: Splash,
        key: 'Splash',
    },
    {
        name: 'SignIn',
        component: SignIn,
        key: 'SignIn',
    },
    {
        name:'AllComponents',
        component: AllComponents,
        key: 'AllComponents'
    },
    {
        name:'MapScreen',
        component: MapScreen,
        key: 'MapScreen'
    }
]