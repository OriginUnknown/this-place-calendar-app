import { EventsCollection } from '../../model/event.model';

export interface CalendarState {
    events: EventsCollection;
}


export const initialState: CalendarState = {
    events: {
        february: {
            1: [
                {
                    id: 923928,
                    title: 'Scrum of scrum meeting',
                    description: 'Catch up with all the scrum masters',
                    startTime: '14:00:00',
                    startDateTime: 1549029600000,
                    endTime: '15:00:00',
                    endDateTime: 1549033200000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'february',
                        date: 1
                    }
                }
            ],
            14: [
                {
                    id: 923928,
                    title: 'Scrum of scrum meeting',
                    description: 'Catch up with all the scrum masters',
                    startTime: '10:00:00',
                    startDateTime: 1550181600000,
                    endTime: '11:30:00',
                    endDateTime: 1550143800000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'february',
                        date: 11
                    }
                },
                {
                    id: 182671,
                    title: 'Interiew project manager',
                    description: '',
                    startTime: '16:00:00',
                    startDateTime: 1550161800000,
                    endTime: '17:30:00',
                    endDateTime: 1550165400000,
                    labelColour: 'pink',
                    metadata: {
                        month: 'february',
                        date: 11
                    }
                }
            ],
            18: [
                {
                    id: 973894,
                    title: 'Walk Archie the dog',
                    description: '1 hour walk in Victoria Park',
                    startTime: '12:00:00',
                    startDateTime: 1550491200000,
                    endTime: '13:00:00',
                    endDateTime: 1550494800000,
                    labelColour: 'red',
                    metadata: {
                        month: 'february',
                        date: 18
                    }
                }
            ],
            26: [
                {
                    id: 230982,
                    title: 'Scrum of scrum meeting',
                    description: 'Catch up with all the scrum masters',
                    startTime: '09:00:00',
                    startDateTime: 1551171600000,
                    endTime: '11:00:00',
                    endDateTime: 1551178800000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'february',
                        date: 26
                    }
                },
                {
                    id: 182671,
                    title: 'Interiew project manager',
                    description: '',
                    startTime: '15:00:00',
                    startDateTime: 1551193200000,
                    endTime: '16:00:00',
                    endDateTime: 1551196800000,
                    labelColour: 'pink',
                    metadata: {
                        month: 'february',
                        date: 26
                    }
                }
            ],
            28: [
                {
                    id: 102938,
                    title: 'Conf call with Angie',
                    description: 'Bitcoin summary part 2',
                    startTime: '14:00:00',
                    startDateTime: 1551196800000,
                    endTime: '15:00:00',
                    endDateTime: 1551366000000,
                    labelColour: 'red',
                    metadata: {
                        month: 'february',
                        date: 28
                    }
                }
            ]
        },
        march: {
            5: [
                {
                    id: 923928,
                    title: 'Scrum of scrum meeting',
                    description: 'Catch up with all the scrum masters',
                    startTime: '14:00:00',
                    startDateTime: 1551794400000,
                    endTime: '15:00:00',
                    endDateTime: 1551798000000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'march',
                        date: 5
                    }
                }
            ],
            15: [
                {
                    id: 923928,
                    title: 'Scrum of scrum meeting',
                    description: 'Catch up with all the scrum masters',
                    startTime: '09:00:00',
                    startDateTime: 1552640400000,
                    endTime: '11:00:00',
                    endDateTime: 1552647600000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'march',
                        date: 15
                    }
                },
                {
                    id: 923928,
                    title: 'Organise Hackathon with Jilly',
                    description: 'Catch up with all the scrum masters',
                    startTime: '12:30:00',
                    startDateTime: 1552653000000,
                    endTime: '13:30:00',
                    endDateTime: 1552656600000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'march',
                        date: 15
                    }
                },
                {
                    id: 182671,
                    title: 'Interiew project manager',
                    description: '',
                    startTime: '14:00:00',
                    startDateTime: 1552658400000,
                    endTime: '17:00:00',
                    endDateTime: 1552669200000,
                    labelColour: 'pink',
                    metadata: {
                        month: 'march',
                        date: 15
                    }
                }
            ],
            20: [
                {
                    id: 973894,
                    title: 'Walk Archie the dog',
                    description: '1 hour walk in Victoria Park',
                    startTime: '08:30:00',
                    startDateTime: 1553070600000,
                    endTime: '09:30:00',
                    endDateTime: 1553074200000,
                    labelColour: 'red',
                    metadata: {
                        month: 'march',
                        date: 20
                    }
                }
            ],
            22: [
                {
                    id: 230982,
                    title: 'Scrum of scrum meeting',
                    description: 'Catch up with all the scrum masters',
                    startTime: '13:00:00',
                    startDateTime: 1553259600000,
                    endTime: '15:00:00',
                    endDateTime: 1553266800000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'march',
                        date: 22
                    }
                },
                {
                    id: 182671,
                    title: 'Interiew project manager',
                    description: '',
                    startTime: '17:00:00',
                    startDateTime: 1553274000000,
                    endTime: '18:00:00',
                    endDateTime: 1553277600000,
                    labelColour: 'pink',
                    metadata: {
                        month: 'march',
                        date: 22
                    }
                }
            ],
            29: [
                {
                    id: 102938,
                    title: 'Conf call with Angie',
                    description: 'Bitcoin summary part 2',
                    startTime: '10:00:00',
                    startDateTime: 1553853600000,
                    endTime: '10:30:00',
                    endDateTime: 1553855400000,
                    labelColour: 'red',
                    metadata: {
                        month: 'march',
                        date: 29
                    }
                }
            ]
        },
        april: {
            8: [
                {
                    id: 923928,
                    title: 'Scrum of scrum meeting',
                    description: 'Catch up with all the scrum masters',
                    startTime: '14:00:00',
                    startDateTime: 1554732000000,
                    endTime: '15:30:00',
                    endDateTime: 1554737400000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'april',
                        date: 8
                    }
                }
            ],
            12: [
                {
                    id: 923928,
                    title: 'Scrum of scrum meeting',
                    description: 'Catch up with all the scrum masters',
                    startTime: '11:30:00',
                    startDateTime: 1555068600000,
                    endTime: '12:30:00',
                    endDateTime: 1555072200000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'april',
                        date: 12
                    }
                },
                {
                    id: 182671,
                    title: 'Interiew project manager',
                    description: '',
                    startTime: '14:00:00',
                    startDateTime: 1555079400000,
                    endTime: '15:00:00',
                    endDateTime: 1555083000000,
                    labelColour: 'pink',
                    metadata: {
                        month: 'april',
                        date: 12
                    }
                }
            ],
            17: [
                {
                    id: 973894,
                    title: 'Walk Archie the dog',
                    description: '1 hour walk in Victoria Park',
                    startTime: '13:00:00',
                    startDateTime: 1555506000000,
                    endTime: '14:30:00',
                    endDateTime: 1555509600000,
                    labelColour: 'red',
                    metadata: {
                        month: 'april',
                        date: 17
                    }
                }
            ],
            25: [
                {
                    id: 230982,
                    title: 'Scrum of scrum meeting',
                    description: 'Catch up with all the scrum masters',
                    startTime: '09:00:00',
                    startDateTime: 1556182800000,
                    endTime: '09:30:00',
                    endDateTime: 1556184600000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'april',
                        date: 25
                    }
                },
                {
                    id: 182671,
                    title: 'Interiew project manager',
                    description: '',
                    startTime: '11:00:00',
                    startDateTime: 1556190000000,
                    endTime: '13:00:00',
                    endDateTime: 1556197200000,
                    labelColour: 'pink',
                    metadata: {
                        month: 'april',
                        date: 25
                    }
                }
            ],
            30: [
                {
                    id: 102938,
                    title: 'Conf call with Angie',
                    description: 'Bitcoin summary part 2',
                    startTime: '14:00:00',
                    startDateTime: 1556632800000,
                    endTime: '16:00:00',
                    endDateTime: 1556640000000,
                    labelColour: 'red',
                    metadata: {
                        month: 'april',
                        date: 30
                    }
                }
            ]
        },
    }
};
