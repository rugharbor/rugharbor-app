/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import React from 'react';
import { CKEditor } from '@components/common/CKEditor';
import Structured_data from "@components/frontStore/structuredData/StructuredDataJournal";


export default function Page({ page }) {
  return (
    <div className="page-width">
      <Structured_data p={page}/>

      <h1 className="text-center mb-3">{page.name}</h1>
      <CKEditor content={page.content} />
    </div>
  );
}

Page.propTypes = {
  page: PropTypes.shape({
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    updated_at: PropTypes.string,
    created_at: PropTypes.string
  }).isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 1
};

export const query = `
  query Query {
    page: cmsPage(id: getContextValue("pageId")) {
      name
      content
      created_at
      updated_at
    }
  }
`;
