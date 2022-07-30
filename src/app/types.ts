export interface IProfile{
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

}
export interface IProfileStateType{
    user: string;
  loading: boolean;
  profile: IProfile | undefined;
  error: unknown;

}

export interface IReposStateType {
    user: string;
  loading: boolean;
  reposList: Array<object> | undefined;
  error: unknown;
}

export interface IStoreDataTypes {
    repos: IReposStateType;
    profile: IProfileStateType;
}

