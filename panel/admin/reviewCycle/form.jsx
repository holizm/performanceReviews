import {
    DateTime,
    DialogForm,
    LongText,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <DateTime
        placeholder='startDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='endDate'
        property='endDate'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
