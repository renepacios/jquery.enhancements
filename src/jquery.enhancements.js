
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
        }
    });
})(jQuery);