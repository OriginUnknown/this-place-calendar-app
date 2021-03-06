export interface EventMetadata {
    month: string;
    date: number;
}

export interface EventBrief {
    id: number;
    title: string;
    startTime: string;
}

export interface EventDetails extends EventBrief {
    description: string;
    startDateTime: number;
    endTime: string;
    endDateTime: number;
    labelColour: string;
    metadata: EventMetadata;
}

export interface EventsInMonth {
    [key: number]: Array<EventDetails>;
}

export interface EventsCollection {
    [key: string]: EventsInMonth;
}
