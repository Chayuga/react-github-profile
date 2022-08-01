export interface IProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  company: string;
  location: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  stargazers_count: number;
  open_issues_count: number;
  forks_count: number;
}

export interface IRepo {
  description: string;
  name: string;
  stargazers_count: number;
  size: number;
}
export interface IProfileStateType {
  user: string;
  loading: boolean;
  profile: IProfile | undefined;
  error: unknown;
}

export interface IReposStateType {
  user: string;
  loading: boolean;
  repos: IRepo[] | undefined;
  error: unknown;
}

export interface IStoreDataTypes {
  repos: IReposStateType;
  profile: IProfileStateType;
}
