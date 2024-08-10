const {buildUrl} = require('@evershop/evershop/src/lib/router/buildUrl');
const {camelCase} = require('@evershop/evershop/src/lib/util/camelCase');
const {select} = require('@evershop/postgres-query-builder');


// const {
//   getCmsPagesBaseQuery
// } = require('../../../services/getCmsPagesBaseQuery');
// const { CMSPageCollection } = require('../../../services/CMSPageCollection');


module.exports = {
    Query: {
        cmsHomePage: async (root, _, {pool}) => {
            const query = select();
            query
                .from('cms_page')
                .leftJoin('cms_page_description')
                .on(
                    'cms_page.cms_page_id',
                    '=',
                    'cms_page_description.cms_page_description_cms_page_id'
                );
            query.where('cms_page.status', '=', true);

            // query.where('cms_page_id', '=', id);
            // const page = await query.execute(pool);
            // console.log(page);
            const page = (await query.execute(pool)).map((i) => ({
                name: i.name,
                uuid: i.uuid,
                url_key: buildUrl('cmsPageView', { url_key: i.url_key })
            }));
            return page
        }
    }
};
