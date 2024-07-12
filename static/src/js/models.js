odoo.define('pw_pos_payment_group.models', function (require) {
    "use strict";

    var models = require('point_of_sale.models');

    models.load_fields("pos.payment.method", ['pw_category_id']);

});
