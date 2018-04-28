// --- HOME ---

export const homeState = {
    name: 'home',
    url: '/home',
    component: 'home'
};

// --- CANARY ---

export const canaryServiceManagerState = {
    name: 'canaryServiceManager',
    url: '/canary',
    component: 'canaryServiceManager'
};

export const canaryDashboardState = {
    name: 'canaryDashboard',
    url: '/canary/{env}/{svc}',
    component: 'canaryDashboard'
};

// --- QE ---