import { Route } from 'next';

export interface NavLinkProps {
  href: Route;
  label: string;
  exact?: boolean;
}