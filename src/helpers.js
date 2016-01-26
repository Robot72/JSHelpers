var Helpers = {}
Helpers.modal = $('<div class="modal fade"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><a class="close" data-dismiss="modal">&times;</a><h4 class="modal-title"></h4></div><div class="modal-body"></div><div class="modal-footer"></div></div></div></div>');
Helpers.fillContentModal = function (header, body, btn, selectorFocus) {
    Helpers.modal.find('.modal-title').html(header);
    Helpers.modal.find('.modal-body').html(body);
    Helpers.modal.find('.modal-footer').html(btn);
    $('body').append(Helpers.modal);
    Helpers.modal.modal('show');
    $(selectorFocus).focus();
}
/**
 * Разбор http get параметров
 * @returns {Object} свойства которого параметы из get-запроса, значения этих свойств - значения из адресной строки
 */
Helpers.parseHttpGetParams = function parseGetParams() {
    var $_GET = {};
    var __GET = window.location.search.substring(1).split("&");
    for (var i = 0; i < __GET.length; i++) {
        var getVar = __GET[i].split("=");
        $_GET[getVar[0]] = typeof (getVar[1]) == "undefined" ? "" : getVar[1];
    }
    return $_GET;
} 