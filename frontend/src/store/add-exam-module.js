import Vue from 'vue'

export const addExamModule = {
  state: {
    addChallengerSteps: [
      {
        step: 1,
        title:'Exam Details',
        questions: [
          {
            key: 'exam_name',
            text: 'Exam Name',
            kind: 'input',
            minLength: 2,
            digit: false,
          },
          {
            key: 'on_or_off',
            text: 'Exam Location',
            minLength: 1,
            digit: false,
            kind: 'offsiteSelect',
            options: [
              { text: 'Offsite: Exam will be held at an external location', value: 'off', },
              { text: 'Onsite: Exam will be held at SBC Office', value: 'on', }
            ]
          },
          {
            key: 'event_id',
            text:'Event ID (not required)' ,
            kind: 'input',
            minLength: 0,
            digit: false,
          },
          {
            key: 'number_of_students',
            text: 'Number of Students (not required)',
            minLength: 0,
            kind: 'input',
            digit: false
          },
        ]
      },
      {
        step: 2,
        title: 'Exam Dates',
        questions: [
          {
            kind: 'date',
            key: 'expiry_date',
            text: 'Date and Time',
            minLength: 1,
            digit: false,
          },
          {
            kind: 'time',
            key: 'exam_time',
            text: 'Exam Time',
            minLength: 1,
            digit: false,
          },
          {
            kind: 'locationInput',
            key: 'offsite_location',
            text: 'Location',
            type: 'input',
            minLength: 2,
            digit: false,
          },
          {
            kind: 'notes',
            key: 'notes',
            text: 'Additional Notes (optional)',
            minLength: 0,
            digit: false,
          },
        ]
      },
      {
        step: 3,
        title:'Summary',
        questions:
          [
            {
              kind: null,
              key: null,
              text1:null,
              text2: null,
              minLength: 0,
              digit: false,
            },
          ]
      },
    ],
    addGroupSteps: [
      {
        step: 1,
        title:'Exam Type',
        questions: [
          {
            key: 'exam_type_id',
            text: 'Exam Type ID / Colour',
            kind:'dropdown',
            minLength: 1,
            digit: false,
          }
        ]
      },
      {
        step: 2,
        title: 'Basic Info',
        questions: [
          {
            key: 'office_id',
            text: 'Office',
            kind: 'office',
            minLength: 1,
            digit: true,
          },
          {
            key: 'event_id',
            text: 'Event ID',
            kind: 'input',
            minLength: 4,
            digit: true
          },
          {
            key: 'exam_name',
            text: 'Exam Name',
            kind: 'input',
            minLength: 2,
            digit: false,
          },
          {
            key: 'number_of_students',
            text: 'Number of Students',
            minLength: 1,
            kind: 'input',
            digit: true
          },
        ]
      },
      {
        step: 3,
        title: 'Date, Time & Format',
        questions: [
          {
            kind: 'date',
            key: 'expiry_date',
            text: 'Date and Time',
            minLength: 1,
            digit: false,
          },
          {
            kind: 'time',
            key: 'exam_time',
            text: 'Exam Time',
            minLength: 1,
            digit: false,
          },
          {
            key: 'exam_method',
            text: 'Exam Method',
            minLength: 1,
            digit: false,
            kind: 'select',
            options: [
              { text: 'paper', value: 'paper', id: 'exam_method' },
              { text: 'online', value: 'online', id: 'exam_method' }
            ]
          },
          {
            kind: 'input',
            key: 'offsite_location',
            text: 'Location',
            type: 'input',
            minLength: 2,
            digit: false,
          },
          {
            kind: 'notes',
            key: 'notes',
            text: 'Additional Notes (optional)',
            minLength: 0,
            digit: false,
          },
        ]
      },
      {
        step: 4,
        title:'Summary',
        questions:
          [
            {
              kind: null,
              key: null,
              text1:null,
              text2: null,
              minLength: 0,
              digit: false,
            },
          ]
      },
    ],
    addIndividualSteps: [
      {
        step: 1,
        title:'Exam Type',
        questions: [
          {
            key: 'exam_type_id',
            text: 'Exam Type ID / Colour',
            kind:'dropdown',
            minLength: 1,
            digit: false,
          }
        ]
      },
      {
        step: 2,
        title:'Exam Info',
        questions: [
          {
            key: 'event_id',
            text:'Event ID' ,
            kind: 'input',
            minLength: 4,
            digit: true,
          },
          {
            key: 'exam_name',
            text: 'Exam Name',
            kind: 'input',
            minLength: 2,
            digit: false
          },
          {
            key: 'examinee_name',
            text: `Candidate's Name`,
            minLength: 2,
            kind:'input',
            digit: false
          },
          {
            key: 'exam_method',
            text: 'Exam Method',
            minLength: 1,
            digit: false,
            kind:'select',
            options: [
              {text: 'paper', value: 'paper', id: 'exam_method'},
              {text: 'online', value: 'online', id: 'exam_method'}
            ]
          },
        ]
      },
      {
        step: 3,
        title: 'Exam Dates',
        questions: [
          {
            kind: 'exam_received',
            key: 'exam_received_date',
            text1:'Was the Exam Package Receieved Today?',
            text2: 'Date of Receipt of Exam Package',
            minLength: 1,
            digit: false,
          },
          {
            kind: 'date',
            key: 'expiry_date',
            text: 'Exam Expiry Date',
            minLength: 1,
            digit: false,
          },
          {
            kind: 'notes',
            key: 'notes',
            text: 'Additional Notes (optional)',
            minLength: 0,
            digit: false,
          },
        ]
      },
      {
        step: 4,
        title:'Summary',
        questions:
          [
            {
              kind: null,
              key: null,
              text1:null,
              text2: null,
              minLength: 0,
              digit: false,
            },
          ]
      },
    ],
    addOtherSteps: [
      {
        step: 1,
        title:'Exam Type',
        questions: [
          {
            key: 'exam_type_id',
            text: 'Exam Type ID / Colour',
            kind:'dropdown',
            minLength: 1,
            digit: false,
          }
        ]
      },
      {
        step: 2,
        title:'Exam Info',
        questions: [
          {
            key: 'event_id',
            text:'Event ID (not required)' ,
            kind: 'input',
            minLength: 0,
            digit: false,
          },
          {
            key: 'exam_name',
            text: 'Exam Name',
            kind: 'input',
            minLength: 2,
            digit: false
          },
          {
            key: 'examinee_name',
            text: `Candidate's Name`,
            minLength: 2,
            kind:'input',
            digit: false
          },
          {
            key: 'exam_method',
            text: 'Exam Method',
            minLength: 1,
            digit: false,
            kind:'select',
            options: [
              {text: 'paper', value: 'paper', id: 'exam_method'},
              {text: 'online', value: 'online', id: 'exam_method'}
            ]
          },
        ]
      },
      {
        step: 3,
        title: 'Exam Dates',
        questions: [
          {
            kind: 'exam_received',
            key: 'exam_received_date',
            text1:'Have you received the exam package yet?',
            text2: 'Date of Receipt of Exam Package',
            minLength: 0,
            digit: false,
          },
          {
            kind: 'date',
            key: 'expiry_date',
            text: 'Exam Expiry Date',
            minLength: 1,
            digit: false,
          },
          {
            key: 'on_or_off',
            text: 'Exam Location',
            minLength: 1,
            digit: false,
            kind: 'offsiteSelect',
            options: [
              { text: 'Offsite: Exam will be held at an external location', value: 'off', },
              { text: 'Onsite: Exam will be held at SBC Office', value: 'on', }
            ]
          },
          {
            kind: 'notes',
            key: 'notes',
            text: 'Additional Notes (optional)',
            minLength: 0,
            digit: false,
          },
        ]
      },
      {
        step: 4,
        title:'Summary',
        questions:
          [
            {
              kind: null,
              key: null,
              text1:null,
              text2: null,
              minLength: 0,
              digit: false,
            },
          ]
      },
    ],
    addPesticideSteps: [
      {
        step: 1,
        title:'Exam Type',
        questions: [
          {
            key: 'exam_type_id',
            text: 'Exam Type ID / Colour',
            kind:'dropdown',
            minLength: 0,
            digit: false,
          }
        ]
      },
      {
        step: 2,
        title:'Exam Info',
        questions: [
          {
            key: 'office_id',
            text: 'Office',
            kind: 'office',
            minLength: 1,
            digit: true,
          },
          {
            key: 'event_id',
            text:'Event ID (not required)' ,
            kind: 'input',
            minLength: 0,
            digit: false,
          },
          {
            key: 'exam_name',
            text: 'Exam Name',
            kind: 'input',
            minLength: 2,
            digit: false
          },
          {
            key: 'examinee_name',
            text: `Candidate's Name`,
            minLength: 2,
            kind:'input',
            digit: false
          },
          {
            key: 'exam_method',
            text: 'Exam Method',
            minLength: 1,
            digit: false,
            kind:'select',
            options: [
              {text: 'paper', value: 'paper', id: 'exam_method'},
              {text: 'online', value: 'online', id: 'exam_method'}
            ]
          },
        ]
      },
      {
        step: 3,
        title: 'Exam Dates',
        questions: [
          {
            kind: 'exam_received',
            key: 'exam_received_date',
            text1:'Have you received the exam package yet?',
            text2: 'Date of Receipt of Exam Package',
            minLength: 0,
            digit: false,
          },
          {
            kind: 'date',
            key: 'expiry_date',
            text: 'Exam Expiry Date',
            minLength: 1,
            digit: false,
          },
          {
            kind: 'notes',
            key: 'notes',
            text: 'Additional Notes (optional)',
            minLength: 0,
            digit: false,
          },
        ]
      },
      {
        step: 4,
        title:'Summary',
        questions:
          [
            {
              kind: null,
              key: null,
              text1:null,
              text2: null,
              minLength: 0,
              digit: false,
            },
          ]
      },
    ],
    challengerBooking: {},
  },
  actions: {
    clearChallengerBooking({commit}) {
      commit('clearChallengerBooking')
      commit('clearAddExamModalFromCalendarStatus')
    },
  },
  mutations: {
    saveChallengerBooking(state, payload) {
      Object.keys(payload).forEach( key => {
        if (payload[key]) {
          Vue.set(
            state.challengerBooking,
            key,
            payload[key]
          )
        }
      })
    },
    clearChallengerBooking(state) {
      Vue.delete(
        state,
        'challengerBooking'
      )
    }
  }
}
