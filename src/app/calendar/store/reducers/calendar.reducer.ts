import * as fromCalendar from '../actions/calendar.actions';
import { CalendarState, initialState } from '../model/calendar.model';
import { EventsCollection, EventsInMonth, EventDetails } from '../../model/event.model';

export function reducer (
    state: CalendarState = initialState, action: fromCalendar.ActionWithPayload
    ): CalendarState {
        let month: string, date: number, eventsCollection: EventsCollection,
            selectedMonth: EventsInMonth, eventId: number, updateSelectedEvent: Array<EventDetails>;
        switch (action.type) {
            case fromCalendar.ADD_EVENT:
                month = action.payload.metadata.month;
                date = action.payload.metadata.date;
                eventsCollection = { ...state.events };
                if (eventsCollection.hasOwnProperty(month)) {
                    selectedMonth = { ...eventsCollection.month };
                    if (selectedMonth.hasOwnProperty(date)) {
                        selectedMonth[date] = [...selectedMonth[date], action.payload];
                    } else {
                        selectedMonth[date] = [action.payload];
                    }
                } else {
                    eventsCollection[month] = {};
                    eventsCollection.month[date] = [action.payload];
                }
                return {
                    ...state,
                    events: eventsCollection
                };
            case fromCalendar.EDIT_EVENT:
                eventId = action.payload.id;
                month = action.payload.metadata.month;
                date = action.payload.metadata.date;
                eventsCollection = { ...state.events };
                selectedMonth = { ...eventsCollection.month };
                updateSelectedEvent = selectedMonth[date].map(evt => {
                    return ( evt.id === eventId) ? action.payload : evt;
                });
                eventsCollection[month][date] = updateSelectedEvent;
                return {
                    ...state,
                    events: eventsCollection
                };
            case fromCalendar.DELETE_EVENT:
                eventId = action.payload.id;
                month = action.payload.metadata.month;
                date = action.payload.metadata.date;
                eventsCollection = { ...state.events };
                selectedMonth = { ...eventsCollection.month };
                updateSelectedEvent = selectedMonth[date].filter(evt => evt.id !== eventId);
                eventsCollection[month][date] = updateSelectedEvent;
                return {
                    ...state,
                    events: eventsCollection
                };
            default:
                return state;
        }
}
