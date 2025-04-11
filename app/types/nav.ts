import { Route } from 'next';

export type AppRoute = Route | '/skills' | '/experience';

export interface NavLinkProps {
  href: string; 
  label: string;
  exact?: boolean;
}