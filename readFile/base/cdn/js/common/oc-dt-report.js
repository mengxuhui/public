// dt-report
var biz = 'sg_zz'
function dtReport() {
    $(document).on('click', '.dt-report', function () {
        var dtName = $(this).attr('data-dt')
        if (window.OSSDT) {
            window.OSSDT.reportBIZST(biz, dtName)
        }
    })
}

function dtReportTrigger(dtName) {
    if (window.OSSDT) {
        window.OSSDT.reportBIZST(biz, dtName)
    }
}

dtReport()
window.dtReportTrigger = dtReportTrigger