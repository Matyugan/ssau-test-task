import Vuetify from 'vuetify'
import Vue from 'vue'

// Utils
import { shallowMount, Wrapper } from '@vue/test-utils'

// Components
import Table from './Table.vue'

// Data
import users from '../../../data/userData.json'

// Helpers
import convertUserData from '../../../helpers/convertUserData'

// Interfaces

describe('Table.vue', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(()=>{
    Vue.use(Vuetify)
    wrapper = shallowMount(Table, {
      propsData: {
        tableTitle: 'Данные пользователей',
        tableData: convertUserData(users)
      }
    });
  })

  test('Current data', () => {
    expect(wrapper.props('tableData')).toStrictEqual(convertUserData(users))
  });

  test('Current title', () => {
    expect(wrapper.props('tableTitle')).toBe('Данные пользователей')
  });

})
