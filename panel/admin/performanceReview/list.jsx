import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>performanceReviewsEmployee</th>
    <th>performanceReviewsReviewer</th>
    <th>performanceReviewsReviewerRole</th>
    <th>performanceReviewsReviewDate</th>
    <th>performanceReviewsOverallScore</th>
</>

const row = item => <>
    <td>{item.employee?.title}</td>
    <td>{item.reviewer?.title}</td>
    <td>{item.reviewParticipantRole}</td>
    <DateTime value={item.reviewDate} />
    <td>{item.overallScore}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
