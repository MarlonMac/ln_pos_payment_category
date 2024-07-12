from odoo import fields, models, api


class PosPaymentGroup(models.Model):
    _name = 'pos.payment.category'
    _description = 'POS Payment Category'

    name = fields.Char(string="Name", required=True)


class PosPaymentMethod(models.Model):
    _inherit = 'pos.payment.method'

    pw_category_id = fields.Many2one('pos.payment.category', string="Category")
