import {
    DateTime,
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>performanceReviewsCycle</th>
    <th>performanceReviewsStartDate</th>
    <th>performanceReviewsEndDate</th>
    <th>performanceReviewsState</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <DateTime value={item.startDate} />
    <DateTime value={item.endDate} />
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
