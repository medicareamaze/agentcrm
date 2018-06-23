export enum MessageType {
  TEXT = <any>'text'
}

//export interface LeadsType {
//  _id?: string;
//  title?: string;
//  picture?: string;
//  lastLeadNotes?: LeadNotesType;
//}

//export interface LeadNotesType {
//  _id?: string;
//  leadId?: string;
//  content?: string;
//  createdAt?: Date;
//  type?: MessageType;
//  ownership?: string;
//}


export interface LeadsType {
  leadId?: string;
  name?: string;
  picture?: string;
  lastLeadNotes?: LeadNotesType;
  phone?: string;
}

export interface LeadNotesType {
  leadId?: string;
  leadNotesId?: string;
  content?: string;
  createdAt?: Date;
  type?: MessageType;
  ownership?: string;
}
