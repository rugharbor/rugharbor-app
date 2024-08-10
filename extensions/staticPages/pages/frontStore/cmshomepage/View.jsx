/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import React from 'react';

export default function Page({pages}) {
    console.log(pages);
    return (
        <>
            {
                pages.map((p) => (
                    <div key={p.uuid}>
                        <div className="page-width">
                            <a href={p.url_key}>
                                <h1 className="text-center mb-3">{p.name}</h1>
                            </a>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

Page.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.shape(
            {
                url_key: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                uuid: PropTypes.string.isRequired
            }
        )
    ).isRequired
}

// Page.propTypes = {
//     page: PropTypes.shape({
//         content: PropTypes.string.isRequired,
//         url_key: PropTypes.string.isRequired
//     }).isRequired
// };

export const layout = {
    areaId: 'content',
    sortOrder: 1
};

export const query = `
query Query { pages: cmsHomePage {
name
url_key
uuid
}
}
`;


// export const query = `
//   query Query {
//     page: cmsPage(id: getContextValue("pageId")) {
//       name
//       url_key
//     }
//   }
// `;
