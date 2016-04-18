;(function () {
    var M = {};
    M.modal = $('<div class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title"></h4></div><div class="modal-body"><p></p></div><div class="modal-footer"></div></div><!-- /.modal-content --></div><!-- /.modal-dialog --></div><!-- /.modal -->');
    M.saveBtnsFooter = '<button type="button" class="btn btn-default" data-dismiss="modal">Отменить</button><button type="button" class="btn btn-primary">Сохранить</button>';
    M.construct = function (header, body, footer) {
        M.modal.find('.modal-title').html(header);
        M.modal.find('.modal-body').html(body);
        M.modal.find('.modal-footer').html(footer);
        M.modal.modal();
        return false;
    };
    window.Modal = M;
}());
