export type requestObject = {
         date_type:string,
         sort_by: string,
         filter_by: Array<string>
}
export interface ObservationObject
{
    id:string
    title:string
    description?:string
    priority:string
    assigned_to?:
    {
       name:string
       contact_number:number
       //role:string
    }|any
    due_date:string
    status:string
    reported_on?:string
    is_due_date_private?:string
    message_count:number
  
}
export interface getObservationsResponse
{
    result:Array<ObservationObject>
    totalCount:number
}
export interface getObservationDetailsRequest
{
    id:number
}
export interface getObservationDetailsResponse
{
    id:string
    title:string
    description:string
    priority:string
    category_name: string
    sub_category_name: string
    status:string
    reported_on:string
    due_date:string
    due_date_privacy:string
    assigned_to_name:string
    
}
export interface createObservationRequest
{
         title: string
         priority: string
         description:string
         category_id:string
         sub_category_id:string
         attachments:Array<string>
}

export interface createObservationResponse
{
    observation_id:number
}

