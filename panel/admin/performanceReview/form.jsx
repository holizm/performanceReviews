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
        placeholder='performanceReviewsCycle'
        property='reviewCycle'
        required
    />
    <Text
        placeholder='performanceReviewsEmployee'
        property='employee'
        required
    />
    <Text
        placeholder='performanceReviewsReviewer'
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
        placeholder='performanceReviewsReviewerRole'
        property='reviewParticipantRole'
        required
    />
    <DateTime
        placeholder='performanceReviewsReviewDate'
        property='reviewDate'
    />
    <Numeric
        placeholder='performanceReviewsOverallScore'
        property='overallScore'
    />
    <LongText
        placeholder='performanceReviewsSummary'
        property='summary'
    />
</>

export default <DialogForm inputs={inputs} />
