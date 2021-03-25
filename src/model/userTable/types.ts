import { DataTableHeader } from 'vuetify'

export interface UserDataI {
  posts: PostI[];
  user: UserI;
}

export interface ConvertedUserDataI {
  id: number;
  fullName: string;
  countPosts: number;
  dateOfLastPost: string;
}

interface PostI {
  createdAt: string;
  text: string;
}

interface UserI {
  id: number;
  name: string;
  patronymic: string | null;
  surname: string;
}

export interface TableUsersI {
  headers: DataTableHeader[];
  users: ConvertedUserDataI[];
  search: string;
}
