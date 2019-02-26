import { Action } from '@ngrx/store';
import { EventDetails } from '../../model/event.model';

export interface ActionWithPayload extends Action {
    payload?: any;
}

export const ADD_EVENT: string = '[Calendar] Add event';
export const EDIT_EVENT: string = '[Calendar] Edit event';
export const DELETE_EVENT: string = '[Calendar] Delete event';

export class AddEvent implements ActionWithPayload {
    readonly type = ADD_EVENT;
    constructor(public payload: EventDetails) { }
}

export class EditEvent implements ActionWithPayload {
    readonly type = EDIT_EVENT;
    constructor(public payload: EventDetails) { }
}

export class DeleteEvent implements ActionWithPayload {
    readonly type = DELETE_EVENT;
    constructor(public payload: EventDetails) { }
}

