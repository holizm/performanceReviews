import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        required
        reviewCycle
    />
    <Text
        employee
        required
    />
    <Text
        required
        reviewer
    />
    <Select
        options={[
            'self',
            'manager',
            'peer',
            'report',
            'customer',
        ]}
        placeholder='reviewerRole'
        required
        reviewParticipantRole
    />
    <DateTime reviewDate />
    <Numeric overallScore />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
