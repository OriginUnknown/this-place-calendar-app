export interface EventMetadata {
    month: string;
    date: number;
}

export interface EventBrief {
    id: number;
    title: string;
    startDateTime: number | string;
}

export interface EventDetails extends EventBrief {
    description: string;
    endDateTime: number | string;
    labelColour: string;
    metadata: EventMetadata;
}

export interface EventsInMonth {
    [key: number]: Array<EventDetails>;
}

export interface EventsCollection {
    [key: string]: EventsInMonth;
}
