/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as ResetPasswordImport } from './routes/reset-password'
import { Route as RecoverPasswordImport } from './routes/recover-password'
import { Route as LoginImport } from './routes/login'
import { Route as GoogleSerpCmsImport } from './routes/google-serp-cms'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutSettingsImport } from './routes/_layout/settings'
import { Route as LayoutItemsImport } from './routes/_layout/items'
import { Route as LayoutAdminImport } from './routes/_layout/admin'
import { Route as LayoutScrapingApiUserAgentsImport } from './routes/_layout/scraping-api/user-agents'
import { Route as LayoutScrapingApiSearchProxiesImport } from './routes/_layout/scraping-api/search-proxies'
import { Route as LayoutScrapingApiGoogleSerpImport } from './routes/_layout/scraping-api/google-serp'
import { Route as LayoutScrapingApiExploreImport } from './routes/_layout/scraping-api/explore'
import { Route as LayoutAiIcongptImport } from './routes/_layout/ai/icongpt'
import { Route as LayoutScrapingApiScrapingJobsIndexImport } from './routes/_layout/scraping-api/scraping-jobs/index'
import { Route as LayoutScrapingApiEndpointsIndexImport } from './routes/_layout/scraping-api/endpoints/index'
import { Route as LayoutScrapingApiSubmitFormSuccessImport } from './routes/_layout/scraping-api/submit-form/success'
import { Route as LayoutScrapingApiSubmitFormGoogleSerpImport } from './routes/_layout/scraping-api/submit-form/google-serp'
import { Route as LayoutScrapingApiScrapingJobsJobIdImport } from './routes/_layout/scraping-api/scraping-jobs/$jobId'
import { Route as LayoutScrapingApiEndpointsEndpointIdImport } from './routes/_layout/scraping-api/endpoints/$endpointId'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const ResetPasswordRoute = ResetPasswordImport.update({
  id: '/reset-password',
  path: '/reset-password',
  getParentRoute: () => rootRoute,
} as any)

const RecoverPasswordRoute = RecoverPasswordImport.update({
  id: '/recover-password',
  path: '/recover-password',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const GoogleSerpCmsRoute = GoogleSerpCmsImport.update({
  id: '/google-serp-cms',
  path: '/google-serp-cms',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSettingsRoute = LayoutSettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutItemsRoute = LayoutItemsImport.update({
  id: '/items',
  path: '/items',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAdminRoute = LayoutAdminImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutScrapingApiUserAgentsRoute =
  LayoutScrapingApiUserAgentsImport.update({
    id: '/scraping-api/user-agents',
    path: '/scraping-api/user-agents',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiSearchProxiesRoute =
  LayoutScrapingApiSearchProxiesImport.update({
    id: '/scraping-api/search-proxies',
    path: '/scraping-api/search-proxies',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiGoogleSerpRoute =
  LayoutScrapingApiGoogleSerpImport.update({
    id: '/scraping-api/google-serp',
    path: '/scraping-api/google-serp',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiExploreRoute = LayoutScrapingApiExploreImport.update({
  id: '/scraping-api/explore',
  path: '/scraping-api/explore',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAiIcongptRoute = LayoutAiIcongptImport.update({
  id: '/ai/icongpt',
  path: '/ai/icongpt',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutScrapingApiScrapingJobsIndexRoute =
  LayoutScrapingApiScrapingJobsIndexImport.update({
    id: '/scraping-api/scraping-jobs/',
    path: '/scraping-api/scraping-jobs/',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiEndpointsIndexRoute =
  LayoutScrapingApiEndpointsIndexImport.update({
    id: '/scraping-api/endpoints/',
    path: '/scraping-api/endpoints/',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiSubmitFormSuccessRoute =
  LayoutScrapingApiSubmitFormSuccessImport.update({
    id: '/scraping-api/submit-form/success',
    path: '/scraping-api/submit-form/success',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiSubmitFormGoogleSerpRoute =
  LayoutScrapingApiSubmitFormGoogleSerpImport.update({
    id: '/scraping-api/submit-form/google-serp',
    path: '/scraping-api/submit-form/google-serp',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiScrapingJobsJobIdRoute =
  LayoutScrapingApiScrapingJobsJobIdImport.update({
    id: '/scraping-api/scraping-jobs/$jobId',
    path: '/scraping-api/scraping-jobs/$jobId',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiEndpointsEndpointIdRoute =
  LayoutScrapingApiEndpointsEndpointIdImport.update({
    id: '/scraping-api/endpoints/$endpointId',
    path: '/scraping-api/endpoints/$endpointId',
    getParentRoute: () => LayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/google-serp-cms': {
      id: '/google-serp-cms'
      path: '/google-serp-cms'
      fullPath: '/google-serp-cms'
      preLoaderRoute: typeof GoogleSerpCmsImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/recover-password': {
      id: '/recover-password'
      path: '/recover-password'
      fullPath: '/recover-password'
      preLoaderRoute: typeof RecoverPasswordImport
      parentRoute: typeof rootRoute
    }
    '/reset-password': {
      id: '/reset-password'
      path: '/reset-password'
      fullPath: '/reset-password'
      preLoaderRoute: typeof ResetPasswordImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/_layout/admin': {
      id: '/_layout/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof LayoutAdminImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/items': {
      id: '/_layout/items'
      path: '/items'
      fullPath: '/items'
      preLoaderRoute: typeof LayoutItemsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/settings': {
      id: '/_layout/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof LayoutSettingsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/ai/icongpt': {
      id: '/_layout/ai/icongpt'
      path: '/ai/icongpt'
      fullPath: '/ai/icongpt'
      preLoaderRoute: typeof LayoutAiIcongptImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/explore': {
      id: '/_layout/scraping-api/explore'
      path: '/scraping-api/explore'
      fullPath: '/scraping-api/explore'
      preLoaderRoute: typeof LayoutScrapingApiExploreImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/google-serp': {
      id: '/_layout/scraping-api/google-serp'
      path: '/scraping-api/google-serp'
      fullPath: '/scraping-api/google-serp'
      preLoaderRoute: typeof LayoutScrapingApiGoogleSerpImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/search-proxies': {
      id: '/_layout/scraping-api/search-proxies'
      path: '/scraping-api/search-proxies'
      fullPath: '/scraping-api/search-proxies'
      preLoaderRoute: typeof LayoutScrapingApiSearchProxiesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/user-agents': {
      id: '/_layout/scraping-api/user-agents'
      path: '/scraping-api/user-agents'
      fullPath: '/scraping-api/user-agents'
      preLoaderRoute: typeof LayoutScrapingApiUserAgentsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/endpoints/$endpointId': {
      id: '/_layout/scraping-api/endpoints/$endpointId'
      path: '/scraping-api/endpoints/$endpointId'
      fullPath: '/scraping-api/endpoints/$endpointId'
      preLoaderRoute: typeof LayoutScrapingApiEndpointsEndpointIdImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/scraping-jobs/$jobId': {
      id: '/_layout/scraping-api/scraping-jobs/$jobId'
      path: '/scraping-api/scraping-jobs/$jobId'
      fullPath: '/scraping-api/scraping-jobs/$jobId'
      preLoaderRoute: typeof LayoutScrapingApiScrapingJobsJobIdImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/submit-form/google-serp': {
      id: '/_layout/scraping-api/submit-form/google-serp'
      path: '/scraping-api/submit-form/google-serp'
      fullPath: '/scraping-api/submit-form/google-serp'
      preLoaderRoute: typeof LayoutScrapingApiSubmitFormGoogleSerpImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/submit-form/success': {
      id: '/_layout/scraping-api/submit-form/success'
      path: '/scraping-api/submit-form/success'
      fullPath: '/scraping-api/submit-form/success'
      preLoaderRoute: typeof LayoutScrapingApiSubmitFormSuccessImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/endpoints/': {
      id: '/_layout/scraping-api/endpoints/'
      path: '/scraping-api/endpoints'
      fullPath: '/scraping-api/endpoints'
      preLoaderRoute: typeof LayoutScrapingApiEndpointsIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/scraping-jobs/': {
      id: '/_layout/scraping-api/scraping-jobs/'
      path: '/scraping-api/scraping-jobs'
      fullPath: '/scraping-api/scraping-jobs'
      preLoaderRoute: typeof LayoutScrapingApiScrapingJobsIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutAdminRoute: typeof LayoutAdminRoute
  LayoutItemsRoute: typeof LayoutItemsRoute
  LayoutSettingsRoute: typeof LayoutSettingsRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
  LayoutAiIcongptRoute: typeof LayoutAiIcongptRoute
  LayoutScrapingApiExploreRoute: typeof LayoutScrapingApiExploreRoute
  LayoutScrapingApiGoogleSerpRoute: typeof LayoutScrapingApiGoogleSerpRoute
  LayoutScrapingApiSearchProxiesRoute: typeof LayoutScrapingApiSearchProxiesRoute
  LayoutScrapingApiUserAgentsRoute: typeof LayoutScrapingApiUserAgentsRoute
  LayoutScrapingApiEndpointsEndpointIdRoute: typeof LayoutScrapingApiEndpointsEndpointIdRoute
  LayoutScrapingApiScrapingJobsJobIdRoute: typeof LayoutScrapingApiScrapingJobsJobIdRoute
  LayoutScrapingApiSubmitFormGoogleSerpRoute: typeof LayoutScrapingApiSubmitFormGoogleSerpRoute
  LayoutScrapingApiSubmitFormSuccessRoute: typeof LayoutScrapingApiSubmitFormSuccessRoute
  LayoutScrapingApiEndpointsIndexRoute: typeof LayoutScrapingApiEndpointsIndexRoute
  LayoutScrapingApiScrapingJobsIndexRoute: typeof LayoutScrapingApiScrapingJobsIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutAdminRoute: LayoutAdminRoute,
  LayoutItemsRoute: LayoutItemsRoute,
  LayoutSettingsRoute: LayoutSettingsRoute,
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutAiIcongptRoute: LayoutAiIcongptRoute,
  LayoutScrapingApiExploreRoute: LayoutScrapingApiExploreRoute,
  LayoutScrapingApiGoogleSerpRoute: LayoutScrapingApiGoogleSerpRoute,
  LayoutScrapingApiSearchProxiesRoute: LayoutScrapingApiSearchProxiesRoute,
  LayoutScrapingApiUserAgentsRoute: LayoutScrapingApiUserAgentsRoute,
  LayoutScrapingApiEndpointsEndpointIdRoute:
    LayoutScrapingApiEndpointsEndpointIdRoute,
  LayoutScrapingApiScrapingJobsJobIdRoute:
    LayoutScrapingApiScrapingJobsJobIdRoute,
  LayoutScrapingApiSubmitFormGoogleSerpRoute:
    LayoutScrapingApiSubmitFormGoogleSerpRoute,
  LayoutScrapingApiSubmitFormSuccessRoute:
    LayoutScrapingApiSubmitFormSuccessRoute,
  LayoutScrapingApiEndpointsIndexRoute: LayoutScrapingApiEndpointsIndexRoute,
  LayoutScrapingApiScrapingJobsIndexRoute:
    LayoutScrapingApiScrapingJobsIndexRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/google-serp-cms': typeof GoogleSerpCmsRoute
  '/login': typeof LoginRoute
  '/recover-password': typeof RecoverPasswordRoute
  '/reset-password': typeof ResetPasswordRoute
  '/signup': typeof SignupRoute
  '/admin': typeof LayoutAdminRoute
  '/items': typeof LayoutItemsRoute
  '/settings': typeof LayoutSettingsRoute
  '/': typeof LayoutIndexRoute
  '/ai/icongpt': typeof LayoutAiIcongptRoute
  '/scraping-api/explore': typeof LayoutScrapingApiExploreRoute
  '/scraping-api/google-serp': typeof LayoutScrapingApiGoogleSerpRoute
  '/scraping-api/search-proxies': typeof LayoutScrapingApiSearchProxiesRoute
  '/scraping-api/user-agents': typeof LayoutScrapingApiUserAgentsRoute
  '/scraping-api/endpoints/$endpointId': typeof LayoutScrapingApiEndpointsEndpointIdRoute
  '/scraping-api/scraping-jobs/$jobId': typeof LayoutScrapingApiScrapingJobsJobIdRoute
  '/scraping-api/submit-form/google-serp': typeof LayoutScrapingApiSubmitFormGoogleSerpRoute
  '/scraping-api/submit-form/success': typeof LayoutScrapingApiSubmitFormSuccessRoute
  '/scraping-api/endpoints': typeof LayoutScrapingApiEndpointsIndexRoute
  '/scraping-api/scraping-jobs': typeof LayoutScrapingApiScrapingJobsIndexRoute
}

export interface FileRoutesByTo {
  '/google-serp-cms': typeof GoogleSerpCmsRoute
  '/login': typeof LoginRoute
  '/recover-password': typeof RecoverPasswordRoute
  '/reset-password': typeof ResetPasswordRoute
  '/signup': typeof SignupRoute
  '/admin': typeof LayoutAdminRoute
  '/items': typeof LayoutItemsRoute
  '/settings': typeof LayoutSettingsRoute
  '/': typeof LayoutIndexRoute
  '/ai/icongpt': typeof LayoutAiIcongptRoute
  '/scraping-api/explore': typeof LayoutScrapingApiExploreRoute
  '/scraping-api/google-serp': typeof LayoutScrapingApiGoogleSerpRoute
  '/scraping-api/search-proxies': typeof LayoutScrapingApiSearchProxiesRoute
  '/scraping-api/user-agents': typeof LayoutScrapingApiUserAgentsRoute
  '/scraping-api/endpoints/$endpointId': typeof LayoutScrapingApiEndpointsEndpointIdRoute
  '/scraping-api/scraping-jobs/$jobId': typeof LayoutScrapingApiScrapingJobsJobIdRoute
  '/scraping-api/submit-form/google-serp': typeof LayoutScrapingApiSubmitFormGoogleSerpRoute
  '/scraping-api/submit-form/success': typeof LayoutScrapingApiSubmitFormSuccessRoute
  '/scraping-api/endpoints': typeof LayoutScrapingApiEndpointsIndexRoute
  '/scraping-api/scraping-jobs': typeof LayoutScrapingApiScrapingJobsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/google-serp-cms': typeof GoogleSerpCmsRoute
  '/login': typeof LoginRoute
  '/recover-password': typeof RecoverPasswordRoute
  '/reset-password': typeof ResetPasswordRoute
  '/signup': typeof SignupRoute
  '/_layout/admin': typeof LayoutAdminRoute
  '/_layout/items': typeof LayoutItemsRoute
  '/_layout/settings': typeof LayoutSettingsRoute
  '/_layout/': typeof LayoutIndexRoute
  '/_layout/ai/icongpt': typeof LayoutAiIcongptRoute
  '/_layout/scraping-api/explore': typeof LayoutScrapingApiExploreRoute
  '/_layout/scraping-api/google-serp': typeof LayoutScrapingApiGoogleSerpRoute
  '/_layout/scraping-api/search-proxies': typeof LayoutScrapingApiSearchProxiesRoute
  '/_layout/scraping-api/user-agents': typeof LayoutScrapingApiUserAgentsRoute
  '/_layout/scraping-api/endpoints/$endpointId': typeof LayoutScrapingApiEndpointsEndpointIdRoute
  '/_layout/scraping-api/scraping-jobs/$jobId': typeof LayoutScrapingApiScrapingJobsJobIdRoute
  '/_layout/scraping-api/submit-form/google-serp': typeof LayoutScrapingApiSubmitFormGoogleSerpRoute
  '/_layout/scraping-api/submit-form/success': typeof LayoutScrapingApiSubmitFormSuccessRoute
  '/_layout/scraping-api/endpoints/': typeof LayoutScrapingApiEndpointsIndexRoute
  '/_layout/scraping-api/scraping-jobs/': typeof LayoutScrapingApiScrapingJobsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/google-serp-cms'
    | '/login'
    | '/recover-password'
    | '/reset-password'
    | '/signup'
    | '/admin'
    | '/items'
    | '/settings'
    | '/'
    | '/ai/icongpt'
    | '/scraping-api/explore'
    | '/scraping-api/google-serp'
    | '/scraping-api/search-proxies'
    | '/scraping-api/user-agents'
    | '/scraping-api/endpoints/$endpointId'
    | '/scraping-api/scraping-jobs/$jobId'
    | '/scraping-api/submit-form/google-serp'
    | '/scraping-api/submit-form/success'
    | '/scraping-api/endpoints'
    | '/scraping-api/scraping-jobs'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/google-serp-cms'
    | '/login'
    | '/recover-password'
    | '/reset-password'
    | '/signup'
    | '/admin'
    | '/items'
    | '/settings'
    | '/'
    | '/ai/icongpt'
    | '/scraping-api/explore'
    | '/scraping-api/google-serp'
    | '/scraping-api/search-proxies'
    | '/scraping-api/user-agents'
    | '/scraping-api/endpoints/$endpointId'
    | '/scraping-api/scraping-jobs/$jobId'
    | '/scraping-api/submit-form/google-serp'
    | '/scraping-api/submit-form/success'
    | '/scraping-api/endpoints'
    | '/scraping-api/scraping-jobs'
  id:
    | '__root__'
    | '/_layout'
    | '/google-serp-cms'
    | '/login'
    | '/recover-password'
    | '/reset-password'
    | '/signup'
    | '/_layout/admin'
    | '/_layout/items'
    | '/_layout/settings'
    | '/_layout/'
    | '/_layout/ai/icongpt'
    | '/_layout/scraping-api/explore'
    | '/_layout/scraping-api/google-serp'
    | '/_layout/scraping-api/search-proxies'
    | '/_layout/scraping-api/user-agents'
    | '/_layout/scraping-api/endpoints/$endpointId'
    | '/_layout/scraping-api/scraping-jobs/$jobId'
    | '/_layout/scraping-api/submit-form/google-serp'
    | '/_layout/scraping-api/submit-form/success'
    | '/_layout/scraping-api/endpoints/'
    | '/_layout/scraping-api/scraping-jobs/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
  GoogleSerpCmsRoute: typeof GoogleSerpCmsRoute
  LoginRoute: typeof LoginRoute
  RecoverPasswordRoute: typeof RecoverPasswordRoute
  ResetPasswordRoute: typeof ResetPasswordRoute
  SignupRoute: typeof SignupRoute
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
  GoogleSerpCmsRoute: GoogleSerpCmsRoute,
  LoginRoute: LoginRoute,
  RecoverPasswordRoute: RecoverPasswordRoute,
  ResetPasswordRoute: ResetPasswordRoute,
  SignupRoute: SignupRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/google-serp-cms",
        "/login",
        "/recover-password",
        "/reset-password",
        "/signup"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/admin",
        "/_layout/items",
        "/_layout/settings",
        "/_layout/",
        "/_layout/ai/icongpt",
        "/_layout/scraping-api/explore",
        "/_layout/scraping-api/google-serp",
        "/_layout/scraping-api/search-proxies",
        "/_layout/scraping-api/user-agents",
        "/_layout/scraping-api/endpoints/$endpointId",
        "/_layout/scraping-api/scraping-jobs/$jobId",
        "/_layout/scraping-api/submit-form/google-serp",
        "/_layout/scraping-api/submit-form/success",
        "/_layout/scraping-api/endpoints/",
        "/_layout/scraping-api/scraping-jobs/"
      ]
    },
    "/google-serp-cms": {
      "filePath": "google-serp-cms.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/recover-password": {
      "filePath": "recover-password.tsx"
    },
    "/reset-password": {
      "filePath": "reset-password.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/_layout/admin": {
      "filePath": "_layout/admin.tsx",
      "parent": "/_layout"
    },
    "/_layout/items": {
      "filePath": "_layout/items.tsx",
      "parent": "/_layout"
    },
    "/_layout/settings": {
      "filePath": "_layout/settings.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/ai/icongpt": {
      "filePath": "_layout/ai/icongpt.tsx",
      "parent": "/_layout"
    },
    "/_layout/scraping-api/explore": {
      "filePath": "_layout/scraping-api/explore.tsx",
      "parent": "/_layout"
    },
    "/_layout/scraping-api/google-serp": {
      "filePath": "_layout/scraping-api/google-serp.tsx",
      "parent": "/_layout"
    },
    "/_layout/scraping-api/search-proxies": {
      "filePath": "_layout/scraping-api/search-proxies.tsx",
      "parent": "/_layout"
    },
    "/_layout/scraping-api/user-agents": {
      "filePath": "_layout/scraping-api/user-agents.tsx",
      "parent": "/_layout"
    },
    "/_layout/scraping-api/endpoints/$endpointId": {
      "filePath": "_layout/scraping-api/endpoints/$endpointId.tsx",
      "parent": "/_layout"
    },
    "/_layout/scraping-api/scraping-jobs/$jobId": {
      "filePath": "_layout/scraping-api/scraping-jobs/$jobId.tsx",
      "parent": "/_layout"
    },
    "/_layout/scraping-api/submit-form/google-serp": {
      "filePath": "_layout/scraping-api/submit-form/google-serp.tsx",
      "parent": "/_layout"
    },
    "/_layout/scraping-api/submit-form/success": {
      "filePath": "_layout/scraping-api/submit-form/success.tsx",
      "parent": "/_layout"
    },
    "/_layout/scraping-api/endpoints/": {
      "filePath": "_layout/scraping-api/endpoints/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/scraping-api/scraping-jobs/": {
      "filePath": "_layout/scraping-api/scraping-jobs/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
