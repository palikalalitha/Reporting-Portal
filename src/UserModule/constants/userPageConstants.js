export const TEXT = 'text'
export const SUBMIT = 'Submit'
export const ERROR_MESSAGE = 'Enter Required field'
export const STATUS = 'optional'
export const CATEGORY_LIST = [
   { value: 'Asset', label: 'Asset Management' },
   { value: 'food', label: 'Food Management' },
   { value: 'Accomdation', label: 'Accomdation' }
]
export const SUB_CATEGORY_LIST = [
   { value: 'Power', label: 'Power' },
   { value: 'water', label: 'Water' },
   { value: 'Milk', label: 'Milk' }
]
export const DEFAULT_VALUE=[{value:null}]
export const SEVERITY = [
   { value: 'HIGH', label: 'HIGH' },
   { value: 'LOW', label: 'LOW' },
   { value: 'MEDIUM', label: 'MEDIUM' },
   { value: 'WARNING', label: 'WARNING' }
  
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

export const observationList = [
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
