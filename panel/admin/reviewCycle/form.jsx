import {
    DateTime,
    DialogForm,
    LongText,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <DateTime
        required
        startDate
    />
    <DateTime
        endDate
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
