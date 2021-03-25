import { ConvertedUserDataI, UserDataI } from './../model/userTable/types'
import convertDate from '@/helpers/convertDate'

export default (users: UserDataI[]): ConvertedUserDataI[] => {
  return users.map((el: UserDataI): ConvertedUserDataI => {
    return {
      id: el.user.id,
      fullName: `${el.user.surname} ${el.user.name} ${el.user.patronymic ? el.user.patronymic : ''}`,
      countPosts: el.posts.length,
      dateOfLastPost: convertDate(el.posts[el.posts.length - 1].createdAt)
    }
  })
}
