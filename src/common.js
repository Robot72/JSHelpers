/**
 * Common funcionality
 * @author Robert Kuznetsov
 */
Common = {}
Common.selectManager = '#select-managers';
Common.selectorBtn = '#get-result';
Common.emptyData = '<p class="alert alert-info">' + Lang.notResult + '</p>';
Common.errorRequest = '<p class="alert alert-danger">' + Lang.errorRequest + '</p>';
/**
 * Returns a list of the selected managers
 * @param {String} selector with multiple selector
 * @returns {String} string with list id-s managers
 */
Common.getMultipleSelected = function (selector) {
    var arrSelectedManagers = $(selector).multipleSelect('getSelects');
    var selectedManagers = '';
    for (var item in arrSelectedManagers) {
        if (item >= arrSelectedManagers.length - 1) {
            selectedManagers += arrSelectedManagers[item];
        } else {
            selectedManagers += arrSelectedManagers[item] + ',';
        }
    }
    return selectedManagers;
}
/**
 * Returns the results table with adding structure data
 * @param {Array} Columns of the table
 * @param {Array} Data for the rows of the table
 * @returns {Html}
 */
Common.getResultTable = function (columns, data) {
    var result = $('<table class="table table-bordered table-hover dataTable" width="100%" cellspacing="0" />').dataTable({
        scrollX: true,
        autoWidth: false,
        columns: columns,
        responsive: true,
        paging: true,
        ordering: true,
        order: [],
        info: true,
        lengthMenu: [[50, 100], [50, 100]],
        language: {
            url: "/js/cp/dataTableRus.json"
        },
        deferRender: true,
        data: data,
        fnDrawCallback: function (oSettings) {}
    });
    return result;
}
Common.getDateForDataTable = function (dateFromSAP) {
    var dateTime = stringToDate(dateFromSAP);
    var month = dateTime.getMonth() + 1;
    return '<span class="glyphicon glyphicon-calendar text-primary" title="' + Lang.date + '"></span> ' +
            dateTime.getDate() + '.' + month + '.' + dateTime.getFullYear();
}
Common.getDateFromStr = function (dateFromStr) {
    var year = dateFromStr.substr(0, 4);
    var month = dateFromStr.substr(5, 2);
    var day = dateFromStr.substr(8, 2);
    if (dateFromStr != '0000-00-00' || dateFromStr != '') {
        return '<span class="glyphicon glyphicon-calendar text-primary" title="' + Lang.date + '"></span> ' +
                day + '.' + month + '.' + year;
    } else {
        return '';
    }
}
Common.getTime = function (time) {
    if (time != '00:00:00') {
        return time;
    } else {
        return '';
    }
}
Common.blockGetBtn = function () {
    $('#get-result').hide();
    $('#reset-form-fields').hide();
    $('#please-wait-label').css('display', 'block');
    spinnerModal.showPleaseWait();
}
Common.unblockGetBtn = function () {
    $('#get-result').show();
    $('#reset-form-fields').show();
    $('#please-wait-label').css('display', 'none');
    spinnerModal.hidePleaseWait();
}
Common.toggleForm = function () {
    var form = $('#collapseForm');
    if (form.hasClass('in')) {
        form.hide(500, function () {
            form.removeClass('in');
        });
    } else {
        form.show(500, function () {
            form.addClass('in');
        });
    }
    return false;
}
Common.validRangeDates = function (fromDate, toDate) {
    if (fromDate == '' || toDate == '') {
        informModal.add('Заполните дату фактуры. Эти поля обязательны для заполнения.', 'S');
        informModal.showMessage();
        return false;
    }
    if (typeof (fromDate) != 'undefined' && typeof (toDate) != 'undefined') {
        dayFrom = fromDate.substr(0, 2);
        dayFrom = Number(dayFrom);
        monthFrom = fromDate.substr(3, 2);
        monthFrom = Number(monthFrom);
        yearFrom = fromDate.substr(6, 4);
        yearFrom = Number(yearFrom);

        dayTo = toDate.substr(0, 2);
        dayTo = Number(dayTo);
        monthTo = toDate.substr(3, 2);
        monthTo = Number(monthTo);
        yearTo = toDate.substr(6, 4);
        yearTo = Number(yearTo);
        
        if (dayFrom > 31 || dayTo > 31) {
            informModal.add('Неверная дата фактуры. Число месяца не может быть больше 31.', 'S');
            informModal.showMessage();
            return false;
        }
        
        if (dayFrom <= dayTo && monthFrom == monthTo && yearFrom == yearTo) {
            return true;
        } else if (monthFrom < monthTo && yearFrom == yearTo) {
            return true;
        } else if (yearFrom < yearTo) {
            return true;
        } else {
            informModal.add('Неверный диапазон дат фактуры, исправьте.', 'S');
            informModal.showMessage();
            return false;
        }
    } else {
        return true;
    }
}
Common.allowRangeDates = function (fromDate, toDate, rangeDays) {
    if (typeof (fromDate) != 'undefined' && typeof (toDate) != 'undefined') {
        dayFrom = fromDate.substr(0, 2);
        dayFrom = Number(dayFrom);
        monthFrom = fromDate.substr(3, 2);
        monthFrom = Number(monthFrom);
        yearFrom = fromDate.substr(6, 4);
        yearFrom = Number(yearFrom);

        dayTo = toDate.substr(0, 2);
        dayTo = Number(dayTo);
        monthTo = toDate.substr(3, 2);
        monthTo = Number(monthTo);
        yearTo = toDate.substr(6, 4);
        yearTo = Number(yearTo);
        
        if (monthFrom == monthTo && yearFrom == yearTo && rangeDays >= dayTo - dayFrom) {
            return true;
        } else if (monthFrom + 1 == monthTo && yearFrom == yearTo && rangeDays >= ((31 - dayFrom) + dayTo)) {
            return true;
        } else if (monthFrom == 12 && monthTo == 1 && yearFrom + 1 == yearTo && rangeDays >= ((31 - dayFrom) + dayTo)) {
            return true;
        } else {
            informModal.add('Задаваемый диапазон дат должен быть не более ' + rangeDays + ' дней.', 'S');
            informModal.showMessage();
            return false;
        }
    } else {
        
        return true;
    }
}
//Handling events
$(document).ready(function () {
    $(document).on('click', '.toggle-form', Common.toggleForm);
});