
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateAdmin';
      
Area.defaultProps.components = {
  header: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvYXV0aC9wYWdlcy9hZG1pbi9hbGwvQWRtaW5Vc2VyLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvYXV0aC9wYWdlcy9hZG1pbi9hbGwvQWRtaW5Vc2VyLmpzeA==',
      sortOrder: 50,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/auth/pages/admin/all/AdminUser.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9Mb2dvLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9Mb2dvLmpzeA==',
      sortOrder: 10,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/Logo.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9TZWFyY2hCb3guanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9TZWFyY2hCb3guanN4',
      sortOrder: 20,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/SearchBox.jsx')
    }
  },
  adminMenu: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hbGwvQ2F0YWxvZ01lbnVHcm91cC5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hbGwvQ2F0YWxvZ01lbnVHcm91cC5qc3g=',
      sortOrder: 20,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/all/CatalogMenuGroup.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9DbXNNZW51R3JvdXAuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9DbXNNZW51R3JvdXAuanN4',
      sortOrder: 60,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/CmsMenuGroup.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9RdWlja0xpbmtzLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9RdWlja0xpbmtzLmpzeA==',
      sortOrder: 10,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/QuickLinks.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY3VzdG9tZXIvcGFnZXMvYWRtaW4vYWxsL0N1c3RvbWVyTWVudUdyb3VwLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY3VzdG9tZXIvcGFnZXMvYWRtaW4vYWxsL0N1c3RvbWVyTWVudUdyb3VwLmpzeA==',
      sortOrder: 40,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/customer/pages/admin/all/CustomerMenuGroup.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvb21zL3BhZ2VzL2FkbWluL2FsbC9PbXNNZW51R3JvdXAuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvb21zL3BhZ2VzL2FkbWluL2FsbC9PbXNNZW51R3JvdXAuanN4',
      sortOrder: 30,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/oms/pages/admin/all/OmsMenuGroup.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcHJvbW90aW9uL3BhZ2VzL2FkbWluL2FsbC9Db3Vwb25NZW51R3JvdXAuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcHJvbW90aW9uL3BhZ2VzL2FkbWluL2FsbC9Db3Vwb25NZW51R3JvdXAuanN4',
      sortOrder: 50,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/promotion/pages/admin/all/CouponMenuGroup.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvU2V0dGluZ01lbnVHcm91cC5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvU2V0dGluZ01lbnVHcm91cC5qc3g=',
      sortOrder: 500,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/setting/pages/admin/all/SettingMenuGroup.jsx')
    }
  },
  quickLinks: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hbGwvTmV3UHJvZHVjdFF1aWNrTGluay5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hbGwvTmV3UHJvZHVjdFF1aWNrTGluay5qc3g=',
      sortOrder: 20,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/all/NewProductQuickLink.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcHJvbW90aW9uL3BhZ2VzL2FkbWluL2FsbC9OZXdDb3Vwb25RdWlja0xpbmsuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvcHJvbW90aW9uL3BhZ2VzL2FkbWluL2FsbC9OZXdDb3Vwb25RdWlja0xpbmsuanN4',
      sortOrder: 30,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/promotion/pages/admin/all/NewCouponQuickLink.jsx')
    }
  },
  rightSide: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hdHRyaWJ1dGVFZGl0K2F0dHJpYnV0ZU5ldy9BdmFpYmlsaXR5LmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hdHRyaWJ1dGVFZGl0K2F0dHJpYnV0ZU5ldy9BdmFpYmlsaXR5LmpzeA==',
      sortOrder: 10,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/attributeEdit+attributeNew/Avaibility.jsx')
    }
  },
  attributeForm: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hdHRyaWJ1dGVFZGl0K2F0dHJpYnV0ZU5ldy9Gb3JtQ29udGVudC5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hdHRyaWJ1dGVFZGl0K2F0dHJpYnV0ZU5ldy9Gb3JtQ29udGVudC5qc3g=',
      sortOrder: 10,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/attributeEdit+attributeNew/FormContent.jsx')
    }
  },
  leftSide: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hdHRyaWJ1dGVFZGl0K2F0dHJpYnV0ZU5ldy9HZW5lcmFsLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hdHRyaWJ1dGVFZGl0K2F0dHJpYnV0ZU5ldy9HZW5lcmFsLmpzeA==',
      sortOrder: 10,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/attributeEdit+attributeNew/General.jsx')
    }
  },
  content: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hdHRyaWJ1dGVFZGl0K2F0dHJpYnV0ZU5ldy9QYWdlSGVhZGluZy5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hdHRyaWJ1dGVFZGl0K2F0dHJpYnV0ZU5ldy9QYWdlSGVhZGluZy5qc3g=',
      sortOrder: 5,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/attributeEdit+attributeNew/PageHeading.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hdHRyaWJ1dGVOZXcvQXR0cmlidXRlTmV3Rm9ybS5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2F0YWxvZy9wYWdlcy9hZG1pbi9hdHRyaWJ1dGVOZXcvQXR0cmlidXRlTmV3Rm9ybS5qc3g=',
      sortOrder: 10,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/admin/attributeNew/AttributeNewForm.jsx')
    }
  },
  settingPageMenu: {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvYWRtaW4vYWxsL1NoaXBwaW5nU2V0dGluZ01lbnUuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY2hlY2tvdXQvcGFnZXMvYWRtaW4vYWxsL1NoaXBwaW5nU2V0dGluZ01lbnUuanN4',
      sortOrder: 15,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/checkout/pages/admin/all/ShippingSettingMenu.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvUGF5bWVudFNldHRpbmdNZW51LmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvUGF5bWVudFNldHRpbmdNZW51LmpzeA==',
      sortOrder: 10,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/setting/pages/admin/all/PaymentSettingMenu.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvU3RvcmVTZXR0aW5nTWVudS5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvc2V0dGluZy9wYWdlcy9hZG1pbi9hbGwvU3RvcmVTZXR0aW5nTWVudS5qc3g=',
      sortOrder: 5,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/setting/pages/admin/all/StoreSettingMenu.jsx')
    },
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvdGF4L3BhZ2VzL2FkbWluL2FsbC9UYXhTZXR0aW5nTWVudS5qc3g=': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvdGF4L3BhZ2VzL2FkbWluL2FsbC9UYXhTZXR0aW5nTWVudS5qc3g=',
      sortOrder: 20,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/tax/pages/admin/all/TaxSettingMenu.jsx')
    }
  },
  body: {
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9MYXlvdXQuanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9MYXlvdXQuanN4',
      sortOrder: 10,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/Layout.jsx')
    },
    L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9Ob3RpZmljYXRpb24uanN4: {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9Ob3RpZmljYXRpb24uanN4',
      sortOrder: 10,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/Notification.jsx')
    }
  },
  head: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9NZXRhLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9NZXRhLmpzeA==',
      sortOrder: 5,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/Meta.jsx')
    }
  },
  adminNavigation: {
    'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9OYXZpZ2F0aW9uLmpzeA==': {
      id: 'L25vZGVfbW9kdWxlcy9AZXZlcnNob3AvZXZlcnNob3Avc3JjL21vZHVsZXMvY21zL3BhZ2VzL2FkbWluL2FsbC9OYXZpZ2F0aW9uLmpzeA==',
      sortOrder: 10,
      component: require('/home/ubuntu/evershop/node_modules/@evershop/evershop/src/modules/cms/pages/admin/all/Navigation.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );