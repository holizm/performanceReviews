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
        placeholder='reviewCycle'
        property='reviewCycle'
        required
    />
    <Text
        placeholder='employee'
        property='employee'
        required
    />
    <Text
        placeholder='reviewer'
        property='reviewer'
        required
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
        property='reviewParticipantRole'
        required
    />
    <DateTime
        placeholder='reviewDate'
        property='reviewDate'
    />
    <Numeric
        placeholder='overallScore'
        property='overallScore'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
