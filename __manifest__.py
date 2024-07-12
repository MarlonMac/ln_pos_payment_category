{
    'name': 'POS Payment by Category | POS Payment Group',
    'category': 'Point of Sale',
    'summary': 'This module is allow you to add category on pos payment method and show group by payment method on pos screen | POS Payment Category | POS Payment Group',
    'description': """
This module is allow you to add group on pos payment method and show group by payment method on pos screen.
""",
    'author': 'Preway IT Solutions',
    'version': '1.0',
    'depends': ['point_of_sale'],
    "data": [
        'security/ir.model.access.csv',
        'views/pos_assets.xml',
        'views/pos_payment_group_view.xml',
    ],
    'qweb': [
        'static/src/xml/pos.xml',
    ],
    'price': 30.0,
    'currency': 'EUR',
    'installable': True,
    'auto_install': False,
    "license": "LGPL-3",
    "images":["static/description/Banner.png"],
}
