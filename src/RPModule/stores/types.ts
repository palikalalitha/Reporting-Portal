
export interface RPObservationObject
{
    id:string
    title:string
    description?:string
    priority:string
    reported_by?:
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
export interface getRPObservationsResponse
{
    result:Array<RPObservationObject>
    totalCount:number
}
export interface getRPObservationDetailsResponse
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
    reported_by:string
}
