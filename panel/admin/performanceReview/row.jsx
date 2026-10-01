import { DateTime } from 'list'

export default item => <>
    <td>{item.employee?.title}</td>
    <td>{item.reviewer?.title}</td>
    <td>{item.reviewParticipantRole}</td>
    <DateTime value={item.reviewDate} />
    <td>{item.overallScore}</td>
</>
