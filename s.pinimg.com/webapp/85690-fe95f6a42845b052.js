"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[85690],{985690:function(e,n,t){t.d(n,{Q5:function(){return Y},YG:function(){return Z},JY:function(){return Q},E7:function(){return G},zi:function(){return W},zN:function(){return K},DW:function(){return V},mX:function(){return eb},Zk:function(){return ep},Ud:function(){return et},fV:function(){return es},zy:function(){return eA},sb:function(){return ew},In:function(){return ef},Jp:function(){return e_},RV:function(){return em},ju:function(){return ex},O1:function(){return ey},KG:function(){return en},UN:function(){return eN},Yl:function(){return eS},Nl:function(){return eP},hE:function(){return eR},Wl:function(){return eI},PY:function(){return eT},xi:function(){return eE},ic:function(){return eD},s9:function(){return ez},Yh:function(){return eO},dc:function(){return ea},L6:function(){return eU},lB:function(){return eM},pe:function(){return J},HW:function(){return ej},vQ:function(){return eF},B$:function(){return eL},Pd:function(){return ek},Fb:function(){return eH},N9:function(){return eC},RF:function(){return eh},bZ:function(){return eB},Di:function(){return $},Jn:function(){return q},jd:function(){return ed},Dz:function(){return el},BQ:function(){return ev},Hu:function(){return eo}});var a,r,i,c,s,o,u,l,d,h,_,p,m,f,A,b=t(908390);t(505025);var g=t(326884),v=t(925672),w=t(349700),y=t(584595),x=t(458451),S=t(985913),N=t(66699),R=t(433835),I=t(76041),P=t(186656);function T(e,n,t,a,r,i,c){try{var s=e[i](c),o=s.value}catch(e){t(e);return}s.done?n(o):Promise.resolve(o).then(a,r)}function z(e){return function(){var n=this,t=arguments;return new Promise(function(a,r){var i=e.apply(n,t);function c(e){T(i,a,r,c,s,"next",e)}function s(e){T(i,a,r,c,s,"throw",e)}c(void 0)})}}var O=(a=z(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.Z)({url:"/ads/v4/business_access/businesses/validate_accounts",method:"POST",data:n});case 2:return t=e.sent,e.abrupt("return",t.resource_response.data);case 4:case"end":return e.stop()}},e)})),function(e){return a.apply(this,arguments)}),D=(r=z(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.Z)({url:"/ads/v4/business_access/business_hierarchy/".concat(n.business_hierarchy_lookup_id),method:"GET",data:n});case 2:return t=e.sent,e.abrupt("return",t.resource_response.data);case 4:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)}),E=(i=z(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.Z)({url:"/ads/v4/business_access/business_hierarchy/".concat(n.business_hierarchy_node_id,"/assets"),method:"GET",data:n});case 2:return t=e.sent,e.abrupt("return",t.resource_response.data);case 4:case"end":return e.stop()}},e)})),function(e){return i.apply(this,arguments)}),C=t(67347),k=t(515198);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach(function(n){j(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function j(e,n,t){var a;return(a=function(e,n){if("object"!==B(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,n||"default");if("object"!==B(a))return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"===B(a)?a:String(a))in e)?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function F(e,n,t,a,r,i,c){try{var s=e[i](c),o=s.value}catch(e){t(e);return}s.done?n(o):Promise.resolve(o).then(a,r)}function L(e){return function(){var n=this,t=arguments;return new Promise(function(a,r){var i=e.apply(n,t);function c(e){F(i,a,r,c,s,"next",e)}function s(e){F(i,a,r,c,s,"throw",e)}c(void 0)})}}var G=Object.freeze({SHARED:"SHARED",RECEIVED:"RECEIVED"}),Y={AD_ACCOUNT:"AD_ACCOUNT",BUSINESS_ACCOUNT:"BUSINESS_ACCOUNT"},V=Object.freeze({SHARE:"SHARE",REVOKE:"REVOKE"}),Z=Object.freeze({OWNED:"OWNED",RECEIVED:"RECEIVED"}),W=Object.freeze({ADS_MANAGER:"ADS_MANAGER",BUSINESS_MANAGER:"BUSINESS_MANAGER"}),K=Object.freeze({NAME_AND_ID:"NAME_AND_ID",CATEGORY:"CATEGORY",OWNER:"OWNER",SHARE_DATE:"SHARE_DATE",ACTIONS:"ACTIONS"}),Q="AUDIENCE_EDIT_FORM_HASH_KEY",q=function(e,n,t){n&&(0,C.nP)("audience_sharing.ui.audience_edit.".concat(n),{sampleRate:1}),t.push("/advertiser/".concat(e,"/audiences"))},$=function(e){return!!e.client_business_id},J=function(e){var n=e.clientBusinessId,t=e.ownerUserId;return n||t},X=function(e){var n=e.clientBusinessName,t=e.ownerUserName;return n||t},ee=function(e){return e!==y.$9&&e!==y.au},en=(c=L(regeneratorRuntime.mark(function e(n,t){var a,r,i,c,s,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={advertiser_id:n,search_query:t},e.prev=1,e.next=4,(0,v.uL)(i);case 4:s=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c=e.t0;case 10:return e.prev=10,(0,C.nP)("audience_sharing.ui.get_audience",{sampleRate:1,tags:{error:!!c,emptyResult:!(null!==(o=s)&&void 0!==o&&null!==(u=o.audiences)&&void 0!==u&&u.length)}}),e.finish(10);case 13:return e.abrupt("return",(null===(a=s)||void 0===a?void 0:null===(r=a.audiences)||void 0===r?void 0:r[0])||null);case 14:case"end":return e.stop()}},e,null,[[1,7,10,13]])})),function(e,n){return c.apply(this,arguments)}),et=(s=L(regeneratorRuntime.mark(function e(n,t){var a,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={advertiser_id:n,audience_id:t},r={operation_type:"REMOVE"},e.prev=2,e.next=5,(0,v.wI)(a,r);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),i=e.t0;case 10:return e.prev=10,(0,C.nP)("audience_sharing.ui.delete_audience",{sampleRate:1,tags:{error:!!i}}),e.finish(10);case 13:return e.abrupt("return",{error:!!i});case 14:case"end":return e.stop()}},e,null,[[2,7,10,13]])})),function(e,n){return s.apply(this,arguments)}),ea=(o=L(regeneratorRuntime.mark(function e(n){var t,a,r,i,c,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,i=null,e.prev=2,e.next=5,D({business_hierarchy_lookup_id:n});case 5:c=e.sent,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),r=ee(e.t0.api_error_code),i=e.t0.api_error_code;case 12:return e.prev=12,(0,C.nP)("audience_sharing.ui.get_business_hierarchy",{sampleRate:1,tags:{error:r,error_code:i}}),e.finish(12);case 15:return s=((null===(t=c)||void 0===t?void 0:t.children)||[]).map(function(e){var n;return null!==(n=e.user)&&void 0!==n&&n.id&&e.user.full_name?{id:e.user.id,name:e.user.full_name,image_medium_url:e.user.image_medium_url}:null}).filter(Boolean),e.abrupt("return",{error:r,bizHierarchyId:(null===(a=c)||void 0===a?void 0:a.id)||null,bizHierarchyBusinessAccounts:s});case 17:case"end":return e.stop()}},e,null,[[2,8,12,15]])})),function(e){return o.apply(this,arguments)}),er=(u=L(regeneratorRuntime.mark(function e(n,t){var a,r,i,c,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E({business_hierarchy_node_id:n,resource_type:Y.AD_ACCOUNT});case 3:i=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),r=e.t0;case 9:return e.prev=9,(0,C.nP)("audience_sharing.ui.get_business_hierarchy_ad_accounts",{sampleRate:1,tags:{error:!!r}}),e.finish(9);case 12:return c=new Set(t.map(function(e){return e.id})),s=((null===(a=i)||void 0===a?void 0:a.data)||[]).map(function(e){var n=X({clientBusinessName:e.client_business_name,ownerUserName:e.owner_user_name}),t=J({clientBusinessId:e.client_business_id,ownerUserId:e.owner_user_id});return e.asset_id&&e.name?{id:e.asset_id,name:e.name,owningBusinessId:t,owningBusinessName:n}:null}).filter(Boolean).filter(function(e){return e.owningBusinessId&&c.has(e.owningBusinessId)}),e.abrupt("return",{error:!!r,bizHierarchyAdAccounts:s});case 15:case"end":return e.stop()}},e,null,[[0,6,9,12]])})),function(e,n){return u.apply(this,arguments)}),ei=(l=L(regeneratorRuntime.mark(function e(n,t){var a,r,i,c,s,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ea(n);case 2:if(r=(a=e.sent).error,i=a.bizHierarchyId,c=a.bizHierarchyBusinessAccounts,!r){e.next=8;break}return e.abrupt("return",{error:!0,isInBusinessHierarchy:null,bizHierarchyAdAccounts:[]});case 8:if(!i){e.next=17;break}return e.next=11,er(i,c);case 11:return o=(s=e.sent).error,u=s.bizHierarchyAdAccounts,e.abrupt("return",{error:o,isInBusinessHierarchy:!0,bizHierarchyAdAccounts:u.filter(function(e){return e.id!==t})});case 17:return e.abrupt("return",{error:!1,isInBusinessHierarchy:!1,bizHierarchyAdAccounts:[]});case 18:case"end":return e.stop()}},e)})),function(e,n){return l.apply(this,arguments)}),ec=(d=L(regeneratorRuntime.mark(function e(n){var t,a,r,i,c,s,o,u,l,d,h,_,p,m,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.businessId,i=n.viewerId,c=n.audienceAdvertiserId,s=n.inAssetsApiMigration,u=!1,l=null,e.prev=3,d={id:r,searchBy:"name",sortBy:"name",sortDirection:g.IR.ASCENDING,limit:g.cU},!(i!==r)){e.next=46;break}if(!s){e.next=26;break}return e.t1=s,e.next=10,(0,I.QC)(H(H({},d),{},{businessId:r,personId:i,includeAssetSummary:!0}));case 10:if(e.t4=h=e.sent,e.t3=null===e.t4,e.t3){e.next=14;break}e.t3=void 0===h;case 14:if(!e.t3){e.next=18;break}e.t5=void 0,e.next=19;break;case 18:e.t5=h.data.data;case 19:if(e.t2=e.t5,e.t2){e.next=22;break}e.t2={};case 22:e.t6=e.t2,e.t0={isMapResponse:e.t1,map:e.t6},e.next=43;break;case 26:return e.t7=s,e.next=29,(0,I.QC)(H(H({},d),{},{businessId:r,personId:i,includeAssetSummary:!1}));case 29:if(e.t10=_=e.sent,e.t9=null===e.t10,e.t9){e.next=33;break}e.t9=void 0===_;case 33:if(!e.t9){e.next=37;break}e.t11=void 0,e.next=38;break;case 37:e.t11=_.data.data;case 38:if(e.t8=e.t11,e.t8){e.next=41;break}e.t8=[];case 41:e.t12=e.t8,e.t0={isMapResponse:e.t7,array:e.t12};case 43:o=e.t0,e.next=62;break;case 46:return e.next=48,(0,R.cE)(d);case 48:if(e.t15=p=e.sent,e.t14=null===e.t15,e.t14){e.next=52;break}e.t14=void 0===p;case 52:if(!e.t14){e.next=56;break}e.t16=void 0,e.next=57;break;case 56:e.t16=p.data.data;case 57:if(e.t13=e.t16,e.t13){e.next=60;break}e.t13=[];case 60:e.t17=e.t13,o={isMapResponse:!1,array:e.t17};case 62:e.next=68;break;case 64:e.prev=64,e.t18=e.catch(3),u=ee(l=e.t18.api_error_code);case 68:return e.prev=68,(0,C.nP)("audience_sharing.ui.searchbox.get_ad_accounts",{sampleRate:1,tags:{error:u,error_code:l}}),e.finish(68);case 71:return m=new Set([g.V3.OWNER,g.gO.ADMIN]),f=(null!==(t=o)&&void 0!==t&&t.isMapResponse?Object.values(o.map||{}):(null===(a=o)||void 0===a?void 0:a.array)||[]).filter(function(e){var n;return(s?e.permissions||[]:e.roles||[]).some(function(e){return m.has(e)})&&J({clientBusinessId:null===(n=e.client_business)||void 0===n?void 0:n.id,ownerUserId:e.owner.id})===r&&e.asset.id!==c}).map(function(e){var n,t,a,r=X({clientBusinessName:null===(n=e.client_business)||void 0===n?void 0:n.full_name,ownerUserName:null===(t=e.owner)||void 0===t?void 0:t.full_name}),i=J({clientBusinessId:null===(a=e.client_business)||void 0===a?void 0:a.id,ownerUserId:e.owner.id});return{id:e.asset.id,name:e.asset.name,owningBusinessId:i,owningBusinessName:r}}),e.abrupt("return",{adAccountsBusiness:f,error:u});case 74:case"end":return e.stop()}},e,null,[[3,64,68,71]])})),function(e){return d.apply(this,arguments)}),es=(h=L(regeneratorRuntime.mark(function e(n){var t,a,r,i,c,s,o,u,l,d,h,_,p,m,f,A,b;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.audienceAdvertiserId,a=n.audienceOwningBusinessId,r=n.isAudienceSharingGA,i=n.isAudienceOwner,c=n.recipientBusinessId,s=n.viewerId,o=n.inAssetsApiMigration,!(r&&i)){e.next=7;break}return e.next=4,ei(a,t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={error:!1,isInBusinessHierarchy:!1,bizHierarchyAdAccounts:[]};case 8:if(d=void 0!==(l=(u=e.t0).error)&&l,h=u.isInBusinessHierarchy,_=u.bizHierarchyAdAccounts,p=i&&h,!d){e.next=18;break}return e.abrupt("return",{eligibleRecipientAccounts:[],errorLoadingAdAccounts:d});case 18:if(!p){e.next=22;break}return e.abrupt("return",{eligibleRecipientAccounts:_,errorLoadingAdAccounts:d});case 22:return m=!i&&c?c:a,e.next=25,ec({businessId:m,viewerId:s,audienceAdvertiserId:t,inAssetsApiMigration:o});case 25:return A=(f=e.sent).adAccountsBusiness,b=f.error,e.abrupt("return",{eligibleRecipientAccounts:A,errorLoadingAdAccounts:b});case 29:case"end":return e.stop()}},e)})),function(e){return h.apply(this,arguments)}),eo=(_=L(regeneratorRuntime.mark(function e(n){var t,a,r,i,c,s,o,u,l,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.businessId,r=n.filteredAccountIdsToValidate,i=n.accountType,c=n.validate_owned_only,s=n.advertiserId,o={owner_business_id:a,account_ids:r,account_type:i,validate_owned_only:c},s&&(o=H(H({},o),{},{advertiser_id:s})),e.prev=3,e.next=6,O(o);case 6:l=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),u=e.t0;case 12:return e.prev=12,(0,C.nP)("audience_sharing.ui.validate_accounts",{sampleRate:1,tags:{error:!!u}}),e.finish(12);case 15:return d=Object.fromEntries(((null===(t=l)||void 0===t?void 0:t.accounts)||[]).map(function(e){return[e.account_id||"",e]})),e.abrupt("return",{validatedAccounts:d});case 17:case"end":return e.stop()}},e,null,[[3,9,12,15]])})),function(e){return _.apply(this,arguments)}),eu=(p=L(regeneratorRuntime.mark(function e(n,t){var a,r,i,c,s,o,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.audienceId,r=t.recipientAccountIds,i=t.recipientAccountType,c={advertiser_id:t.advertiserId},s={audience_id:a,operation_type:n},e.prev=3,i!==Y.AD_ACCOUNT){e.next=10;break}return u=H(H({},s),{},{recipient_account_ids:r}),e.next=8,(0,v.s8)(c,u);case 8:e.next=13;break;case 10:return l=H(H({},s),{},{recipient_business_ids:r}),e.next=13,(0,v.UQ)(c,l);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),o=e.t0;case 18:return e.prev=18,(0,C.nP)("audience_sharing.ui.".concat(n===V.SHARE?"share_audience":"revoke_audience_access"),{sampleRate:1,tags:{error:!!o}}),(0,C.nP)("audience_sharing.ads_manager.update_shared_audience",{sampleRate:1,tags:{error:!!o,share_operation_type:n,recipient_account_type:i}}),e.finish(18);case 22:return e.abrupt("return",{error:!!o});case 23:case"end":return e.stop()}},e,null,[[3,15,18,22]])})),function(e,n){return p.apply(this,arguments)}),el=(m=L(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",eu(V.SHARE,n));case 1:case"end":return e.stop()}},e)})),function(e){return m.apply(this,arguments)}),ed=(f=L(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",eu(V.REVOKE,n));case 1:case"end":return e.stop()}},e)})),function(e){return f.apply(this,arguments)}),eh=(A=L(regeneratorRuntime.mark(function e(n,t,a){var r,i,c,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={audience_id:n,requestor_account_id:t,requestor_account_type:a},e.prev=1,e.next=4,(0,v.$Q)(i);case 4:c=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s=e.t0;case 10:return e.prev=10,(0,C.nP)("audience_sharing.ui.get_shared_accounts",{sampleRate:1,tags:{error:!!s,surface:W.ADS_MANAGER}}),e.finish(10);case 13:return e.abrupt("return",{error:!!s,sharedAccounts:null===(r=c)||void 0===r?void 0:r.accounts});case 14:case"end":return e.stop()}},e,null,[[1,7,10,13]])})),function(e,n,t){return A.apply(this,arguments)}),e_=function(e){var n=e.adAccountsAccessibleByUser,t=e.audienceAdvertiserId,a=e.audienceOwningBusinessId;return n.filter(function(e){return J({clientBusinessId:e.client_business_id,ownerUserId:e.owner_user_id})===a&&e.id!==t}).map(function(e){var n,t=X({clientBusinessName:e.client_business_id,ownerUserName:null===(n=e.owner_user)||void 0===n?void 0:n.full_name}),a=J({clientBusinessId:e.client_business_id,ownerUserId:e.owner_user_id});return{id:e.id,name:e.name,owningBusinessName:t,owningBusinessId:a}})},ep=function(e){var n=e.eligibleRecipientAccounts,t=e.recipientAccountType,a=e.agencyOwnedAdAccountsInAudienceOwningBusinessToExclude,r=e.isAudienceSharingGA;return Object.fromEntries(n.map(function(e){var n={account_name:e.name,account_type:t,account_id:e.id,image_medium_url:e.image_medium_url,owningBusinessId:e.owningBusinessId,is_valid:!0};return[e.id,n]}).concat((a||[]).map(function(e){var n={account_name:null,account_type:Y.AD_ACCOUNT,account_id:e.id,is_valid:r,owningBusinessId:e.owningBusinessId};return[e.id,n]})))},em=function(e){var n=e.eligibleRecipientAccounts,t=e.recipientAccountType,a=e.accountsToExclude,r=e.i18n;return n.filter(function(e){return!a||!a.has(e.id)}).sort(function(e,n){return e.name<n.name?-1:1}).map(function(e){var n=e.id;return{label:e.name,subtext:(0,N.Z)(r._('ID: {{ advertiserId }}', '[m10n] audienceSharing.audienceShareForm.searchBox.dropdownOption.subtext', 'Accessibility label for icon button that removes the selected account when clicked. advertiserId: name of the selected account'),{advertiserId:n})+(t===Y.BUSINESS_ACCOUNT?"":"\xa0".repeat(5)+(0,S.Z)(r._('Account Owner: {{ businessName }}', '[m10n] audienceSharing.audienceShareForm.searchBox.dropdownOption.subtext.suffix', 'Text that appears in a dropdown menu of ad accounts to select from. businessName: name of the owner business'),{businessName:e.owningBusinessName||""})),value:n}})},ef=function(e,n,t){return e.filter(function(e){return!n.includes(e.value)&&(!t||e.label.toLowerCase().includes(t.toLowerCase())||e.value.includes(t))})},eA=function(e,n,t){return e.filter(function(e){return(!n||e.account_name.toLowerCase().includes(n.toLowerCase())||e.account_id.includes(n))&&(!t||e.account_type===t)})},eb=Object.freeze({ASCENDING:"asc",DESCENDING:"desc"}),eg=function(e,n,t,a){var r=a===eb.ASCENDING?1:-1,i=a===eb.ASCENDING?-1:1;switch(t){case K.NAME_AND_ID:return a===eb.ASCENDING?e.account_name.localeCompare(n.account_name):n.account_name.localeCompare(e.account_name);case K.CATEGORY:return e.account_type>n.account_type?r:i;case K.OWNER:return a===eb.ASCENDING?e.owner_name.localeCompare(n.owner_name):n.owner_name.localeCompare(e.owner_name);case K.SHARE_DATE:return new Date(e.shared_on).getTime()>new Date(n.shared_on).getTime()?r:i;default:return 0}},ev=function(e,n){return((function(e){if(Array.isArray(e))return U(e)})(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return U(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,n)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort(function(e,t){return eg(e,t,n.sortBy,n.order)})},ew=function(e,n,t){return e.filter(function(e){return(!t||e.name.toLowerCase().includes(t.toLowerCase())||e.id.includes(t))&&(!n||n.includes(e.audience_type))})},ey=function(e,n){return e===Y.AD_ACCOUNT?n._('ad accounts', '[m10n]audienceSharing.ModalShareAudienceList.accountTypeText.adAccounts', 'Describe the type of the account selected by the user'):n._('businesses', '[m10n]audienceSharing.ModalShareAudienceList.accountTypeText.businesses', 'Describe the type of the account selected by the user')},ex=function(e,n){return e===Y.AD_ACCOUNT?n._('Ad account', '[m10n] audienceSharing.sharedAccountsTable.accountType.adAccount', 'Text that appears in a table of accounts denoting that the row corresponds to an ad account'):n._('Business', '[m10n] audienceSharing.audienceEdit.sharedAccountsTable.accountType.businessAccount', 'Text that appears in a table of accounts denoting that the row corresponds to a business')},eS=function(e,n){return e===Y.AD_ACCOUNT?n._('Share audience list with an ad account', '[m10n] audienceSharing.audienceShareForm.adAccountRecipient.heading', 'Heading text that appears on a form for sharing an audience list with an ad account'):n._('Share audience list with a business', '[m10n] audienceSharing.audienceShareForm.businessAccountRecipient.heading', 'Heading text that appears on a form for sharing an audience list with a business account.')},eN=function(e,n){return e===Y.AD_ACCOUNT?n._('Choose ad accounts to share this audience list with', '[m10n] audienceSharing.audienceShareForm.adAccountRecipient.accessibilityLabel', 'Accessibility label for an Overlay Panel for sharing an audience list with an ad account'):n._('Choose businesses to share this audience list with', '[m10n] audienceSharing.audienceShareForm.businessAccountRecipient.accessibilityLabel', 'Accessibility label for an Overlay Panel for sharing an audience list with a business account.')},eR=function(e,n){return e===Y.AD_ACCOUNT?n._('To share an audience list, you will need to provide an ad account name or ID. You can only share this audience list with ad accounts within your business.', '[m10n] audienceSharing.audienceShareForm.adAccountRecipient.info.line1', 'Text that appears on a form for sharing an audience list, providing instructions on how to share an audience with an ad acount.'):n._('To share an audience list, you will need to provide a business name or ID. You can only share this audience list with another business account under your parent business. ', '[m10n] audienceSharing.audienceShareForm.businessAccountRecipient.info.line1', 'Text that appears on a form for sharing an audience list, providing instructions on how to share an audience with a business acount.')},eI=function(e,n){return e===Y.AD_ACCOUNT?n._('Recipients will not be able to edit or share the audience with any other ad account.', '[m10n] audienceSharing.audienceShareForm.adAccountRecipient.info.line2', 'Text that appears on a form for sharing an audience list, providing information on sharing an audience.'):n._('Recipients will retain access to shared audience lists until the owner revokes access or deletes the audience list or the recipient removes the shared audience list from their account.', '[m10n] audienceSharing.audienceShareForm.businessAccountRecipient.info.line2', 'Text that appears on a form for sharing an audience list, providing information on sharing an audience.')},eP=function(e,n){return e===Y.AD_ACCOUNT?n._('Ad accounts retain access to shared audience lists until the owner revokes access or deletes the audience list or the recipient removes the shared audience list from their account', '[m10n] audienceSharing.audienceShareForm.adAccountRecipient.iconText', 'Text that appears on a form for sharing an audience list, describing the effects of sharing an audience.'):n._('Businesses who receive the shared audience list will be able to connect their ad accounts', '[m10n] audienceSharing.audienceShareForm.businessAccountRecipient.iconText', 'Text that appears on a form for sharing an audience list, describing the effects of sharing an audience.')},eT=function(e,n){return e===Y.AD_ACCOUNT?n._('Clear the selected ad accounts', '[m10n] audienceSharing.audienceShareForm.adAccountRecipient.searchBox.clear', 'Accessibility label for clear selection icon button'):n._('Clear the selected businesses', '[m10n] audienceSharing.audienceShareForm.businessAccountRecipient.searchBox.clear', 'Accessibility label for clear selection icon button')},ez=function(e,n){return e===Y.AD_ACCOUNT?n._('Ad accounts you would like to share with', '[m10n] audienceSharing.audienceShareForm.adAccountRecipient.searchBox.label', 'Label for an input text field for searching for ad accounts to share the current audience list with.'):n._('Businesses you would like to share with', '[m10n] audienceSharing.audienceShareForm.businessAccountRecipient.searchBox.label', 'Label for an input text field for searching for businesses to share the current audience list with.')},eO=function(e,n){return e===Y.AD_ACCOUNT?n._('Search ad account name or ID ', '[m10n] audienceSharing.audienceShareForm.adAccountRecipient.searchBox.placeholder', 'Placeholder in input text field for searching for an ad account to share the current audience with.'):n._('Search business name or ID', '[m10n] audienceSharing.audienceShareForm.businessAccountRecipient.searchBox.placeholder', 'Placeholder in input text field for searching for a business to share the current audience with.')},eD=function(e,n,t,a){return e!==Y.AD_ACCOUNT?a._('Select one or more businesses. Only businesses within the same business hierarchy will appear.', '[m10n]audienceSharing.audienceShareForm.businessAccountRecipient.searchBox.helperText', 'Helper text for input text field for searching for a business to share the current audience with.'):t&&n?a._('Select one or more ad accounts. Only ad accounts within the same business hierarchy will appear.', '[m10n]audienceSharing.audienceShareForm.adAccountRecipient.searchBox.helperText.ga.bizHierarchy', 'Helper text for input text field explaining which ad accounts the user can share an audience with.'):a._('Select one or more ad accounts. Only ad accounts you own will appear.', '[m10n]audienceSharing.audienceShareForm.adAccountRecipient.searchBox.helperText.beta.withinBusiness', 'Helper text for input text field explaining which ad accounts the user can share an audience with.')},eE=function(e,n){return e===Y.AD_ACCOUNT?n._('This is not a valid ad account name or ID', '[m10n] audienceSharing.audienceShareForm.adAccountRecipient.searchBox.validationError', 'An error message shown under an ad account searchbox when the input is not valid'):n._('This is not a valid business name or ID', '[m10n] audienceSharing.audienceShareForm.businessAccountRecipient.searchBox.validationError', 'An error message shown under a business account searchbox when the input is not valid')},eC=function(e,n,t,a){var r={numberOfNewRecipientAccounts:t.toString(),audienceName:e.name,audienceId:e.id};return n===Y.AD_ACCOUNT?(0,S.Z)(a.ngettext('You have shared audience list {{ audienceName }} ({{ audienceId }}) with {{ numberOfNewRecipientAccounts }} ad account.', 'You have shared audience list {{ audienceName }} ({{ audienceId }}) with {{ numberOfNewRecipientAccounts }} ad accounts.', t, '[m10n] audienceSharing.manageAccess.adAccountRecipient.share.successMessage', 'Message displayed in a Toast when an advertiser successfully shares an audience with one or more ad accounts, audienceName: name of the audience, audienceId: ID of the audience, numberOfNewRecipientAccounts: the number of ad accounts the audience was shared with'),r):(0,S.Z)(a.ngettext('You have shared audience list {{ audienceName }} ({{ audienceId }}) with {{ numberOfNewRecipientAccounts }} business account.', 'You have shared audience list {{ audienceName }} ({{ audienceId }}) with {{ numberOfNewRecipientAccounts }} business accounts.', t, '[m10n] audienceSharing.manageAccess.businessAccountRecipient.share.successMessage', 'Message displayed in a Toast when an advertiser successfully shares an audience with one or more business accounts, audienceName: name of the audience, audienceId: ID of the audience, numberOfNewRecipientAccounts: the number of business accounts the audience was shared with'),r)},ek=function(e){return e._('Your changes were successfully saved', '[m10n] audienceSharing.audienceEdit.save.successMessage', 'Message displayed in a Toast when an advertiser successfully saves an audience.')},eB=function(e,n){var t;return(j(t={},K.NAME_AND_ID,n._('Name and ID', '[m10n] audienceSharing.sharedAccountsTable.nameAndId.columnName', 'Column header name in a table that lists the accounts an audience has been shared with')),j(t,K.CATEGORY,n._('Category', '[m10n] audienceSharing.sharedAccountsTable.category.columnName', 'Column header name in a table that lists the accounts an audience has been shared with')),j(t,K.OWNER,n._('Owner', '[m10n] audienceSharing.sharedAccountsTable.owner.columnName', 'Column header name in a table that lists the accounts an audience has been shared with')),j(t,K.SHARE_DATE,n._('Shared on', '[m10n] audienceSharing.sharedAccountsTable.sharedOn.columnName', 'Header name for a column showing the date on which an audience was shared with an account, in a table that lists the accounts an audience has been shared with')),j(t,K.ACTIONS,n._('Actions', '[m10n] audienceSharing.sharedAccountsTable.actions.columnName', 'Header name for a column showing the possible actions that can be taken on an account, in a table that lists the accounts an audience has been shared with')),t)[e]},eU=function(e,n){return e===Y.AD_ACCOUNT?n._('By sharing this audience list, you agree to allow Pinterest to share your audience list with the ad account selected above, and this agreement shall supersede any conflicting terms in Pinterest\u2019s Ad Data Terms. You represent that you comply with all applicable laws when sharing this audience list and that you have the rights and the legally required consents from the individuals in this list to share the audience with the selected ad account.  You further agree that you shall indemnify, defend, and hold harmless Pinterest in the event of any claims brought against Pinterest related to the sharing of this audience list.', '[m10n]audienceSharing.shareForm.legalDisclaimer.line1', 'Text that appears in a modal describing the legal terms and conditions an advertiser must agree to before sharing an audience'):""},eM=function(e,n){return e===Y.AD_ACCOUNT?n._('By sharing the audience, you give the selected ad account the right to use the audience but not see who is in the audience list.', '[m10n]audienceSharing.shareForm.legalDisclaimer.line2', 'Text that appears in a modal describing the legal terms and conditions an advertiser must agree to before sharing an audience'):""},eH=function(e){return e._('We are having trouble sharing this audience. Please try again in a few minutes.', '[m10n] audienceSharing.shareForm.shareAudienceList.genericAPIErrorMessage', 'Generic error message when the share audience API fails')},ej=function(e){var n=e.audienceName,t=e.audienceId,a=e.recipientAccountName,r=e.recipientAccountId,i=e.revokerIsAudienceRecipient,c=e.revokerAccountType,s=e.recipientAccountType,o=e.i18n;return i?c===Y.BUSINESS_ACCOUNT?(0,w.nk)(o._('Remove audience {{audienceName}} (Audience ID: {{audienceId}}) from your {{ recipientAccountType }} {{recipientAccountName}} ({{ idAccountType }} ID: {{recipientAccountId}})', '[m10n]audienceSharing.removeReceivedAudienceFromBusinessModal.primaryText', 'Text that appears in a modal for confirmation of audience access removal from the business account of recipient. audienceName: name of the received audience list we are about to remove from our account, audienceId: ID of the audience to be removed, recipientAccountName: ID of the audience to be removed, recipientAccountId: ID of the audience to be removed, recipientAccountType: the type of account for which access will be revoked - either "ad account" or "business", idAccountType: the type of account, but the string is formatted to capitalize the first letter'),{audienceName:(0,k.jsx)(b.xv,{inline:!0,weight:"bold",children:n},"getRevokeAccessModalPrimaryText-recipient-businessAccount-audienceName-".concat(n)),audienceId:t,recipientAccountName:(0,k.jsx)(b.xv,{inline:!0,weight:"bold",children:a},"getRevokeAccessModalPrimaryText-recipient-businessAccount-recipientAccountName-".concat(a)),recipientAccountId:r,recipientAccountType:ex(s,o).toLocaleLowerCase(),idAccountType:(0,x.Z)(ex(s,o))}):(0,w.nk)(o._('Remove {{ audienceName }} (Audience ID: {{ audienceId }}) from your account', '[m10n]audienceSharing.removeReceivedAudienceModal.primaryText', 'Text that appears in a modal for confirmation of audience access removal from the recipient\'s account. audienceName: name of the received audience list we are about to remove from our account, audienceId: ID of the audience to be removed'),{audienceName:(0,k.jsx)(b.xv,{inline:!0,weight:"bold",children:n},"getRevokeAccessModalPrimaryText-recipient-adAccount-audienceName-".concat(n)),audienceId:t}):(0,w.nk)(o._('Revoke access to {{ audienceName }} (Audience ID: {{ audienceId }}) from {{ recipientAccountName }} ({{ recipientAccountId }})', '[m10n]audienceSharing.revokeAccessModal.primaryText.alpha', 'Text that appears in a modal for confirmation of audience access revocation. audienceName: name of the audience list from which we are about to revoke access, recipientAccountName: name of the account that the audience is currently shared with and whose access will be revoked, recipientAccountId: ID of the account that the audience is currently shared with and whose access will be revoked, when audience sharing experiment is in alpha, audienceId: ID of the audience to be removed'),{recipientAccountName:(0,k.jsx)(b.xv,{inline:!0,weight:"bold",children:a},"getRevokeAccessModalPrimaryText-nonRecipient-recipientAccountName-".concat(a)),recipientAccountId:r,audienceName:(0,k.jsx)(b.xv,{inline:!0,weight:"bold",children:n},"getRevokeAccessModalPrimaryText-nonRecipient-audienceName-".concat(n)),audienceId:t})},eF=function(e,n,t){return n?(0,N.Z)(t._('Once this audience is removed from your {{ recipientAccountType }}, you will lose access to this audience and will no longer be able to use it for targeting when creating campaigns. Any campaigns that are only using this audience will also be paused immediately unless they are targeting interests or keywords.', '[m10n]audienceSharing.removeReceivedAudienceModal.secondaryText.alpha', 'Text that appears in a modal for confirmation of audience removal from the account of recipient. recipientAccountType: the type of account for which access will be revoked - either "ad account" or "business"'),{recipientAccountType:ex(e,t).toLocaleLowerCase()}):(0,N.Z)(t._('Once access is revoked, this {{ recipientAccountType }} will lose access to this audience list and will no longer be able to use it for targeting when creating campaigns. Any campaigns that are only using this audience list will also be paused immediately unless they are targeting interests or keywords.', '[m10n]audienceSharing.revokeAccessModal.secondaryText', 'Text that appears in a modal for confirmation of audience access revocation. recipientAccountType: the type of account for which access will be revoked - either "ad account" or "business"'),{recipientAccountType:ex(e,t).toLocaleLowerCase()})},eL=function(e){var n=e.audienceName,t=e.recipientAccountName,a=e.recipientAccountType,r=e.revokerIsAudienceRecipient,i=e.i18n;return r?(0,k.jsx)(b.xv,{children:(0,w.nk)(i._('Audience list {{ audienceName }} has been removed from your account.', '[m10n]audienceSharing.removeReceivedAudience.toast.message', 'Text that appears in a Toast message confirming that audience access removal was successful, audienceName: name of the audience list that was successfully removed from the recipient\'s account'),{audienceName:(0,k.jsx)(b.xv,{inline:!0,weight:"bold",children:n},"getRevokeAccessSuccessToastMessage-recipient-audienceName-".concat(n))})}):(0,k.jsx)(b.xv,{children:(0,w.nk)(i._('Access to {{ audienceName }} has been revoked. {{ recipientAccountTypeText }} {{ recipientAccountName }} will no longer have access.', '[m10n]audienceSharing.revokeAccess.toast.message', 'Text that appears in a Toast message confirming that audience access revocation was successful. audienceName: name of the audience list to which access was successfully revoked, recipientAccountTypeText: the type of account for which access was revoked - either "ad account" or "business", recipientAccountName: the name of the recipient account for which access was revoked'),{audienceName:(0,k.jsx)(b.xv,{inline:!0,weight:"bold",children:n},"getRevokeAccessSuccessToastMessage-nonRecipient-audienceName-".concat(n)),recipientAccountTypeText:ex(a,i),recipientAccountName:(0,k.jsx)(b.xv,{inline:!0,weight:"bold",children:t},"getRevokeAccessSuccessToastMessage-nonRecipient-recipientAccountName-".concat(t))})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/85690-fe95f6a42845b052.js.map