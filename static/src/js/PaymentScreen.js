odoo.define('pw_pos_payment_category.PaymentScreen', function (require) {
    'use strict';

    const PaymentScreen = require('point_of_sale.PaymentScreen');
    const Registries = require("point_of_sale.Registries");
    const { useListener } = require('web.custom_hooks');

    const PosExtPaymentScreen = (PaymentScreen) =>
        class extends PaymentScreen {
            constructor() {
                super(...arguments);
                useListener('click-unfold', this.foldLine);
            }
            get payment_method_by_group() {
                var payment_methods = this.payment_methods_from_config;

                var groups = {
                    'group': [],
                    'group_by_id': [],
                    'payment_methods': payment_methods
                }
                for (var i = 0; i <= payment_methods.length - 1; i++){
                    if (payment_methods[i].pw_category_id){
                        if(!groups.group.includes(payment_methods[i].pw_category_id[1])){
                            groups.group.push(payment_methods[i].pw_category_id[1]);
                            groups.group_by_id.push({'id': payment_methods[i].pw_category_id[0], 'name': payment_methods[i].pw_category_id[1]});
                        }
                    }
                }
                return groups;
            }
            foldLine({ detail: group }) {
                $('.paymentmethod').each(function (index, pay_method) {
                    if ($(pay_method).data('group') === group.id) {
                        $(pay_method).toggle();
                    }
                });
                $('.fa-chevron-circle-right').each(function (index, group_line) {
                    if ($(group_line).data('group') === group.id) {
                        $(group_line).toggleClass("down");
                    }
                });
            }
        }
    Registries.Component.extend(PaymentScreen, PosExtPaymentScreen);
});
