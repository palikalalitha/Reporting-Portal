export const TEXT = 'text'
export const SUBMIT = 'Submit'
export const ERROR_MESSAGE = 'Enter Required field'
export const STATUS = 'optional'
export const CATEGORY_LIST = [
   { value: '1', label: 'Cleaning' },
   { value: '2', label: 'Water' },
   { value: '3', label: 'KeybBoard' }
]
export const SUB_CATEGORY_LIST = [
   { value: '1', label: 'Cleaning is not completed' },
   { value: '2', label: 'Dustbin in not clead' },
   { value: '3', label: 'Water leakage' },
   { value: '4', label: 'Water Blocked' },
   { value: '5', label: 'keyboards not working' }
]
export const DEFAULT_VALUE = { value: null, label: '' }
export const SEVERITY = [
   { value: 'HIGH', label: 'HIGH' },
   { value: 'LOW', label: 'LOW' },
   { value: 'MEDIUM', label: 'MEDIUM' }
]
export const USER_HEADINGS = [
   'title',
   'reported on',
   'assigned to',
   'severity',
   'status',
   'due date',
   'messages'
]
export const RP_HEADINGS = [
   'title',
   'reported on',
   'reported by ',
   'severity',
   'status',
   'due date',
   'messages'
]

export const OBSERVATIONLIST = [
   {
      id: '1',
      title: 'Learning deviations',
      priority: 'HIGH',
      description:
         'It is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or other type of compatible computer. Text messages may be sent over a cellular network, or may also be sent via an Internet connection',
      category: 'category 1',
      sub_category: 'sub_category 1',
      due_date: '11/5/2020',
      status: 'Action in progress',
      assigned_to: {
         name: 'lalitha',
         phno: 913456788
      }
   }
]

export const TYPE_FILE = 'file'
export const TITLE_TEST_ID = 'title'
export const DESC_TEST_ID = 'description'
export const SEVERITY_TEST_ID = 'severity'
