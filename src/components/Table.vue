<template>
  <v-card>
    <v-card-title>
      {{ tableTitle }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="data"
      :search="search"
      locale="ru-RU"
      no-results-text="Ничего не найдено"
      hide-default-footer
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

// Interfaces
import { ConvertedUserDataI } from '@/model/userTable/types'
import { DataTableHeader } from 'vuetify'

@Component({
  name: 'Table'
})

export default class Table extends Vue {
  @Prop({ type: Array, default: () => [] })
  private tableData!: ConvertedUserDataI[]

  @Prop({ type: Array, default: () => [] })
  private tableHeaders!: DataTableHeader[]

  @Prop({ type: String, default: () => '' })
  private tableSearch = ''

  @Prop({ type: String, default: () => 'Таблица' })
  private tableTitle!: string

  private data = this.tableData
  private headers = this.tableHeaders
  private search = this.tableSearch
}
</script>
