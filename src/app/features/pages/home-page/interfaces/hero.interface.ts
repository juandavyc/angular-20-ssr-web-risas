export interface Hero {
  title: string;
  subtitle?: string;
  action: Action,
  background: string;
  logo: string;
}

interface Action {
  title: string;
  icon: string;
  url: string;
}
