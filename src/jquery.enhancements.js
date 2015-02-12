
(function ($) {
    var pluginName = 'enhancements';
    $[pluginName] = {
        author: 'René Pacios',
        version: '1.0b'
    };

    $.fn.extend({
        'nextWhile': function (condicion) {
            ///<summary>Selecciona los siguientes elementos contiguos que cumplan con el selector indicado hasta encontrar el primer elemento que no lo cumple</summary>
            ///<param name="condicion">Si se indica un selector de DOM (css,id,tag) selecciona todos los elementos contiguos hasta que no coincida. Si se indica un número selecciona los n siguientes</param>

            var $current = $(this).next(),
                $set = $();
            if (!isNaN(parseInt(condicion))) {
                for (var i = 0; i < parseInt(condicion) ; i++) {
                    $set = $set.add($current);
                    $current = $current.next();
                }
            } else {
                while ($current.is(condicion)) {
                    $set = $set.add($current);
                    $current = $current.next();
                }
            }
            return $set;
        },
        'values': function (data) {
            var els = $(this).find(':input').get();
            if (typeof data != 'object') {
                data = {};
                $.each(els, function () {
                    if (this.name && !this.disabled && (this.checked
                        || /select|textarea/i.test(this.nodeName)
                        || /text|hidden|password|checkbox|radio|date|email/i.test(this.type))) {
                        data[this.name] = $(this).val();
                    }
                });
                return data;
            } else {
                $.each(els, function () {
                    if (this.name && data[this.name]) {
                        if (this.type == 'checkbox' || this.type == 'radio') {
                            $(this).attr("checked", (data[this.name] == $(this).val()));
                        } else {
                            $(this).val(data[this.name]);
                        }
                    }
                });
                return $(this);
            }
        },
        'reset': function () {
            var els = $(this).find(':input').get();
            $.each(els, function () {

                if (this.type == 'checkbox' || this.type == 'radio') {
                    $(this).attr("checked", false);
                } else {
                    $(this).val('');
                }
            });
            return $(this);
        }


    });
})(jQuery);
