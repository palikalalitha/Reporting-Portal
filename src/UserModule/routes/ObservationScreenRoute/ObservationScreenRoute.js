import React from "react"
import ObservationScreen from "../../components/ObservationScreen/"
import { observer } from "mobx-react"
import { observable } from "mobx"
import observationFixture from "../../fixtures/userData.json"


@observer
class ObservationScreenRoute extends React.Component
{
    @observable date
    @observable roleType
    @observable startDate
    @observable value
    constructor()
    {
        super()
        this.categoryValue=""
        this.startDate=new Date()
    }
    isRoleType=()=>
    {
        this.roleType="user"
        return this.roleType==="user"?true:false;
    }
    
    handleChange=(date)=>
    {
        this.startDate=date
    }
    onChangeSelectValue=(option)=>
    {
        this.value=option;
      
    }
    render()
    {
        const {title,description,priority,due_date,status,category,sub_category,due_date_privacy}=observationFixture[0]
      
        return(          
                <ObservationScreen value={this.value} category={category} sub_category={sub_category} title={title} description={description} priority={priority}
                due_date={due_date} status={status} due_date_privacy={due_date_privacy} isRoleType={this.isRoleType()}
                onChangeSelectValue={this.onChangeSelectValue} handleChange={this.handleChange} startDate={this.startDate} {...this.props}/>
           )
        }
}
export {ObservationScreenRoute}
