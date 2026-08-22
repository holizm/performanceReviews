import {
    DateTime,
    DialogForm,
    LongText,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <DateTime
        placeholder='performanceReviewsStartDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='performanceReviewsEndDate'
        property='endDate'
        required
    />
    <LongText
        placeholder='performanceReviewsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
