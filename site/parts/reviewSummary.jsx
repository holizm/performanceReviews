export default ({ performanceReview }) => <dl class='reviewSummary'>
    <dt class='employee'>{performanceReview.employee?.title}</dt>
    <dd class='reviewer'>{performanceReview.reviewer?.title}</dd>
    <dd class='overallScore'>{performanceReview.overallScore}</dd>
</dl>
