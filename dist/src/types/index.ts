import { OktaAuth, AuthState } from '@okta/okta-auth-js';

export type OnAuthRequiredFunction = (oktaAuth: OktaAuth) => Promise<void> | void;

export interface OktaVueOptions {
  oktaAuth: OktaAuth;
  onAuthRequired: OnAuthRequiredFunction;
}

// Declare augmentation for Vue
declare module 'vue/types/vue' {
  interface Vue {
    $oktaAuth: OktaAuth;
    authState: AuthState;
    $_oktaVue_handleAuthStateUpdate: (authState: AuthState) => void;
  }
}
