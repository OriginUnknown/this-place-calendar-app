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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'february',
                        date: 1
                    }
                }
            ],
            11: [
                {
                    id: 923928,
                    title: 'Scrum of scrum meeting',
                    description: 'Catch up with all the scrum masters',
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'march',
                        date: 5
                    }
                }
            ],
            16: [
                {
                    id: 923928,
                    title: 'Scrum of scrum meeting',
                    description: 'Catch up with all the scrum masters',
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
                    labelColour: 'orange',
                    metadata: {
                        month: 'march',
                        date: 16
                    }
                },
                {
                    id: 182671,
                    title: 'Interiew project manager',
                    description: '',
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
                    labelColour: 'pink',
                    metadata: {
                        month: 'march',
                        date: 16
                    }
                }
            ],
            20: [
                {
                    id: 973894,
                    title: 'Walk Archie the dog',
                    description: '1 hour walk in Victoria Park',
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
                    startDateTime: 1550152800000,
                    endDateTime: 1550156400000,
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
