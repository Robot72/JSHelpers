;(function () {
    var M = {};
    M.modal = $([
        '<div class="modal fade" tabindex="-1" role="dialog">',
            '<div class="modal-dialog">',
                '<div class="modal-content">',
                    '<div class="modal-header">',
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">',
                            '<span aria-hidden="true">&times;</span>',
                        '</button>',
                        '<h4 class="modal-title"></h4>',
                    '</div>',
                    '<div class="modal-body"><p></p></div>',
                    '<div class="modal-footer"></div>',
                '</div><!-- /.modal-content -->',
            '</div><!-- /.modal-dialog -->',
        '</div><!-- /.modal -->'].join('')
    );
    
    M.saveBtnsFooter = [
        '<button type="button" class="btn btn-default btn-cancel" data-dismiss="modal">Отменить</button>',
        '<button type="button" class="btn btn-primary">Сохранить</button>'
    ].join('');
    
    M.okCancelBtnsFooter = [
        '<button type="button" class="btn btn-default btn-cancel" data-dismiss="modal">Отменить</button>',
        '<button type="button" class="btn btn-primary btn-ok">Ок</button>'
    ].join('');
    
    M.construct = function (header, body, footer) {
        M.modal.find('.modal-title').html(header);
        M.modal.find('.modal-body').html(body);
        M.modal.find('.modal-footer').html(footer);
        M.modal.modal();
        return false;
    };
    
    M.removeModal = function () {
        $('.modal').remove();
        return false;
    };
    
    M.eventReadyHandler = function () {
        $(document).on('click', '.btn-ok', M.removeModal);
        $(document).on('click', '.btn-cansel', M.removeModal);        
    };
    
    $(document).ready(M.eventReadyHandler);
    
    window.Modal = M;
}());
