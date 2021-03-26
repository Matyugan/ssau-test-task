<template>
  <v-container>
    <v-row>
      <v-col class="mb-12">
        <Table
          :table-data="tableData.users"
          :table-headers="tableData.headers"
          :table-search="tableData.search"
          table-title="Данные пользователей"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

// Components
import Table from '@/components/common/Table/Table.vue'

// Data
import users from '@/data/userData.json'

// Interfaces
import { TableUsersI } from '@/model/userTable/types'

// Helpers
import convertUserData from '@/helpers/convertUserData'

@Component({
  name: 'Home',
  components: {
    Table
  }
})

export default class Home extends Vue {
  private tableData: TableUsersI = {
    headers: [
      {
        text: 'ФИО',
        value: 'fullName'
      },
      {
        text: 'Количество постов',
        value: 'countPosts',
        filterable: false
      },
      {
        text: 'Дата последнего поста',
        value: 'dateOfLastPost'
      }
    ],
    users: convertUserData(users),
    search: ''
  }
}
</script>
